import React, { useState, useEffect, useCallback, useRef } from 'react';
import { story, enemies } from './story/story';
import type { Scene, Choice, Observable, Enemy } from './types/story';

const SAVE_GAME_KEY = 'theYearTheRiverHidSave';

interface PlayerStats {
  health: number;
  maxHealth: number;
  attack: number;
  isDefending: boolean;
}

interface EnemyStats extends Enemy {
  maxHealth: number;
}

interface SaveData {
  currentSceneId: string;
  inventory: string[];
  playerStats: PlayerStats;
}

// ==============
// BATTLE UI COMPONENT
// ==============
interface BattleProps {
  playerStats: PlayerStats;
  enemyStats: EnemyStats | null;
  battleLog: string[];
  onAction: (choice: Choice) => void;
  inventory: string[];
}

const BattleUI: React.FC<BattleProps> = ({ playerStats, enemyStats, battleLog, onAction, inventory }) => {
    const logRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [battleLog]);
    
    if (!enemyStats) return null;

    const weapon = inventory.find(item => item === 'Rusted Pipe' || item === 'Fishing Knife');
    const attackText = weapon ? `Attack with ${weapon}` : 'Attack';
    
    return (
        <div className="battle-overlay">
            <div className="battle-container">
                <div className="battle-enemy-status">
                    <h2 className="text-3xl font-bold mb-2">{enemyStats.name}</h2>
                    <p className="text-lg italic text-stone-600 mb-4">{enemyStats.description}</p>
                    <div className="health-bar-bg">
                        <div 
                          className="health-bar" 
                          style={{ width: `${(enemyStats.health / enemyStats.maxHealth) * 100}%`}}
                        ></div>
                    </div>
                </div>
                <div className="battle-log" ref={logRef}>
                    {battleLog.map((entry, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: entry }}></p>
                    ))}
                </div>
                <div className="battle-actions">
                    <button onClick={() => onAction({ text: attackText, nextScene: '', action: 'attack' })}>{attackText}</button>
                    <button onClick={() => onAction({ text: 'Defend', nextScene: '', action: 'defend' })}>Defend</button>
                    <button onClick={() => onAction({ text: 'Observe', nextScene: '', action: 'observe' })}>Observe</button>
                    <button onClick={() => onAction({ text: 'Use Silt Sedative', nextScene: '', action: 'use_item' })} disabled={!inventory.includes('Silt Sedative')}>Use Sedative</button>
                </div>
            </div>
        </div>
    );
};


// ==============
// OBSERVABLE MODAL COMPONENT
// ==============
const ObservableModal: React.FC<{ observable: Observable | null; onClose: () => void }> = ({ observable, onClose }) => {
  if (!observable) return null;

  return (
    <div className="observable-overlay" onClick={onClose}>
      <div className="observable-modal" onClick={e => e.stopPropagation()}>
        <p className="text-lg leading-relaxed">{observable.description}</p>
        <button onClick={onClose} className="observable-close-button">
          Close
        </button>
      </div>
    </div>
  );
};


// ==============
// MAIN APP COMPONENT
// ==============
const App: React.FC = () => {
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');
  const [inventory, setInventory] = useState<string[]>([]);
  const [showInventoryPanel, setShowInventoryPanel] = useState<boolean>(true);
  const [playerStats, setPlayerStats] = useState<PlayerStats>({ health: 100, maxHealth: 100, attack: 10, isDefending: false });
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [saveExists, setSaveExists] = useState<boolean>(false);
  const [activeObservable, setActiveObservable] = useState<Observable | null>(null);

  // Battle State
  const [inBattle, setInBattle] = useState<boolean>(false);
  const [enemyStats, setEnemyStats] = useState<EnemyStats | null>(null);
  const [battleLog, setBattleLog] = useState<string[]>([]);

  // Check for saved game on initial load
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(SAVE_GAME_KEY);
      if (savedData) {
        setSaveExists(true);
      }
    } catch (error) {
      console.error("Could not access local storage:", error);
    }
  }, []);

  const saveGame = useCallback(() => {
    if (inBattle) return; // Don't save during battles
    try {
      const saveData: SaveData = { currentSceneId, inventory, playerStats };
      localStorage.setItem(SAVE_GAME_KEY, JSON.stringify(saveData));
      setSaveExists(true);
    } catch (error) {
      console.error("Failed to save game:", error);
    }
  }, [currentSceneId, inventory, playerStats, inBattle]);

  const loadGame = () => {
    try {
      const savedDataString = localStorage.getItem(SAVE_GAME_KEY);
      if (savedDataString) {
        const savedData: SaveData = JSON.parse(savedDataString);
        setCurrentSceneId(savedData.currentSceneId);
        setInventory(savedData.inventory);
        setPlayerStats(savedData.playerStats || { health: 100, maxHealth: 100, attack: 10, isDefending: false });
        setShowSplash(false);
      }
    } catch (error) {
      console.error("Failed to load game:", error);
    }
  };
  
  const startNewGame = () => {
    try {
      localStorage.removeItem(SAVE_GAME_KEY);
    } catch (error) {
      console.error("Failed to clear save data:", error);
    }
    setCurrentSceneId('start');
    setInventory([]);
    setPlayerStats({ health: 100, maxHealth: 100, attack: 10, isDefending: false });
    setShowSplash(false);
  };

  const currentScene: Scene = story[currentSceneId];

  // Autosave when not in battle
  useEffect(() => {
    if (!showSplash && !inBattle) {
      saveGame();
    }
  }, [currentSceneId, inventory, showSplash, saveGame, inBattle]);

  // Handle scene transitions and battle triggers
  useEffect(() => {
    if (showSplash) return;
    window.scrollTo(0, 0);

    const scene = story[currentSceneId];
    if (scene?.encounter) {
      const enemy = enemies[scene.encounter.enemyId];
      if (enemy) {
        setEnemyStats({ ...enemy, maxHealth: enemy.health });
        setBattleLog([`A monstrous ${enemy.name} appears!`]);
        setInBattle(true);
      }
    } else {
        setIsTransitioning(true);
        const fadeInTimer = setTimeout(() => {
            setIsTransitioning(false);
        }, 100);
        return () => clearTimeout(fadeInTimer);
    }
  }, [currentSceneId, showSplash]);

  const changeScene = (sceneId: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setInBattle(false);
      setEnemyStats(null);
      
      const nextScene = story[sceneId];
      if (nextScene) {
          let newInventory = [...inventory];
          if (nextScene.addItem) {
            const itemsToAdd = Array.isArray(nextScene.addItem) ? nextScene.addItem : [nextScene.addItem];
            for (const item of itemsToAdd) {
              if (!newInventory.includes(item)) { newInventory.push(item); }
            }
          }
          if (nextScene.removeItem) {
            newInventory = newInventory.filter(item => item !== nextScene.removeItem);
          }
          setInventory(newInventory);
          setCurrentSceneId(sceneId);
      }
    }, 500);
  };

  const handleBattleAction = (choice: Choice) => {
    if (!enemyStats || !currentScene.encounter) return;
    
    let newLog = [...battleLog];
    let newPlayerStats = { ...playerStats, isDefending: false };
    let newEnemyStats = { ...enemyStats };
    let playerTurnOver = true;

    // Player action
    switch (choice.action) {
        case 'attack':
            const weapon = inventory.find(item => item === 'Rusted Pipe' || item === 'Fishing Knife');
            let baseDamage = weapon ? (weapon === 'Rusted Pipe' ? 15 : 12) : 5;
            const damage = baseDamage + Math.floor(Math.random() * 5);
            newEnemyStats.health = Math.max(0, newEnemyStats.health - damage);
            newLog.push(`You strike the ${newEnemyStats.name} for <span style="color: #8c4a1b;">${damage}</span> damage.`);
            break;
        case 'defend':
            newPlayerStats.isDefending = true;
            newLog.push("You brace yourself for an attack.");
            break;
        case 'observe':
            const healthPercentage = (newEnemyStats.health / newEnemyStats.maxHealth) * 100;
            let observation;
            if (healthPercentage >= 75) observation = newEnemyStats.observations[0];
            else if (healthPercentage >= 40) observation = newEnemyStats.observations[1];
            else observation = newEnemyStats.observations[2];
            newLog.push(`<i>${observation}</i>`);
            playerTurnOver = false;
            break;
        case 'use_item':
            if (inventory.includes('Silt Sedative')) {
                 newEnemyStats.health = 0;
                 newLog.push(`You use the Silt Sedative. The ${newEnemyStats.name} shudders and collapses, pacified.`);
                 setInventory(inv => inv.filter(i => i !== 'Silt Sedative'));
            }
            break;
    }

    setEnemyStats(newEnemyStats);
    setPlayerStats(newPlayerStats);
    setBattleLog(newLog);

    if (newEnemyStats.health <= 0) {
        setTimeout(() => changeScene(currentScene.encounter!.winScene), 1500);
        return;
    }

    if (!playerTurnOver) return;

    // Enemy turn (with delay)
    setTimeout(() => {
        let enemyDamage = enemyStats.attack + Math.floor(Math.random() * 4);
        let logUpdate = [...newLog];
        let finalPlayerStats = { ...newPlayerStats };

        if (finalPlayerStats.isDefending) {
            enemyDamage = Math.floor(enemyDamage / 2);
            logUpdate.push(`The ${enemyStats.name} attacks! You defend, taking only <span style="color: #b91c1c;">${enemyDamage}</span> damage.`);
        } else {
            logUpdate.push(`The ${enemyStats.name} attacks, dealing <span style="color: #b91c1c;">${enemyDamage}</span> damage.`);
        }
        
        finalPlayerStats.health = Math.max(0, finalPlayerStats.health - enemyDamage);
        
        setPlayerStats(finalPlayerStats);
        setBattleLog(logUpdate);

        if (finalPlayerStats.health <= 0) {
            setTimeout(() => changeScene(currentScene.encounter!.loseScene), 1500);
        }
    }, 1000);
  };

  const handleChoice = (choice: Choice) => {
    if (inBattle) {
      handleBattleAction(choice);
    } else {
      changeScene(choice.nextScene);
    }
  };

  const hasRequiredItems = (reqs: string | string[] | undefined): boolean => {
    if (!reqs) return true;
    const required = Array.isArray(reqs) ? reqs : [reqs];
    return required.every(item => inventory.includes(item));
  };
  
  const renderWithObservables = (paragraph: string, observables: Observable[] | undefined) => {
    if (!observables || observables.length === 0) return paragraph;
  
    const escapedKeywords = observables.map(o => o.keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'g');
    const parts = paragraph.split(regex);
  
    return parts.map((part, index) => {
      const observable = observables.find(o => o.keyword === part);
      if (observable) {
        return <button key={index} className="observable-keyword" onClick={(e) => { e.stopPropagation(); setActiveObservable(observable); }}>{part}</button>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  if (showSplash) {
    return (
      <div className="min-h-screen splash-bg flex items-center justify-center p-6 fade-in">
        <div className="max-w-prose w-full text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide fade-in-up-slow" style={{ fontFamily: 'Crimson Text, serif' }}>
            The Year The River Hid
          </h1>
          <div className="my-12 md:my-16 border-t border-b border-stone-300 py-6 fade-in-up-slow" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-stone-700 italic leading-relaxed">
              The world begins as grit on the tongue, a fine silt that speaks of ground bone and total dryness.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            {saveExists && (
              <button
                onClick={loadGame}
                className="w-full md:w-56 px-8 py-3 bg-[#3a3a38] text-[#f4f1e9] hover:bg-[#2a2a29] transition-all duration-300 rounded-sm tracking-widest text-lg fade-in-up-slow"
                style={{ animationDelay: '0.4s' }}
              >
                Continue the dream
              </button>
            )}

            <button
              onClick={startNewGame}
              className="w-full md:w-56 px-8 py-3 bg-transparent text-[#3a3a38] hover:bg-stone-300/40 transition-all duration-300 rounded-sm tracking-widest text-lg border border-stone-400 fade-in-up-slow"
              style={{ animationDelay: '0.6s' }}
            >
              Begin anew
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (inBattle) {
      return <BattleUI playerStats={playerStats} enemyStats={enemyStats} battleLog={battleLog} onAction={handleChoice} inventory={inventory} />;
  }

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-prose text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p>Story scene not found. Please check the story data.</p>
        </div>
      </div>
    );
  }

  const isEndScene = currentScene.isEnd || currentScene.choices.length === 0;
  const availableChoices = currentScene.choices.filter(choice => hasRequiredItems(choice.requiresItem));

  return (
    <>
      <ObservableModal observable={activeObservable} onClose={() => setActiveObservable(null)} />
      <div className="min-h-screen flex items-center justify-center p-6 sm:p-8 pb-32">
        <main className={`max-w-prose w-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-lg md:text-xl leading-relaxed space-y-6">
            {currentScene.text.map((paragraph, index) => (
              <p key={index}>{renderWithObservables(paragraph, currentScene.observables)}</p>
            ))}
          </div>

          {!isEndScene && availableChoices.length > 0 && (
            <nav className="mt-12 pt-8 border-t border-stone-300">
              <ul className="space-y-4">
                {availableChoices.map((choice, index) => (
                  <li key={index} onClick={() => handleChoice(choice)} className="text-lg md:text-xl text-[#8c4a1b] hover:text-[#592d0d] transition-colors duration-300 cursor-pointer italic">
                    &rarr; {choice.text}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {isEndScene && (
             <div className="mt-12 pt-8 border-t border-stone-300 text-center text-stone-500 italic">
               <p>The end.</p>
             </div>
          )}
        </main>
      </div>
      {inventory.length > 0 && !inBattle && showInventoryPanel && (
        <footer className="fixed bottom-0 left-0 right-0 bg-[#f4f1e9]/80 backdrop-blur-sm border-t border-stone-300 p-2 text-center text-stone-700">
          <div className="max-w-prose mx-auto flex flex-wrap justify-center items-center gap-2">
             <span className="font-semibold self-center pr-2">Inventory:</span>
            {inventory.map(item => (
              <span key={item} className="inventory-item text-sm px-3 py-1 bg-stone-200/60 border border-stone-300 rounded-full cursor-default">
                {item}
              </span>
            ))}
          </div>
          <button
            aria-label="Close inventory"
            onClick={() => setShowInventoryPanel(false)}
            className="absolute top-1 right-3 text-xs px-2 py-1 bg-stone-300/60 hover:bg-stone-300 rounded"
          >
            Close
          </button>
        </footer>
      )}

      {/* Floating reopen button when inventory is hidden */}
      {inventory.length > 0 && !inBattle && !showInventoryPanel && (
        <button
          aria-label="Open inventory"
          onClick={() => setShowInventoryPanel(true)}
          className="fixed bottom-4 right-4 bg-[#3a3a38] text-[#f4f1e9] px-3 py-2 rounded-full shadow-md"
        >
          Inventory ({inventory.length})
        </button>
      )}
       <div className="fixed top-2 right-2 space-x-2">
         <button onClick={saveGame} className="px-3 py-1 text-xs bg-stone-300/50 hover:bg-stone-300/80 rounded transition-colors">Save</button>
         <button onClick={loadGame} className="px-3 py-1 text-xs bg-stone-300/50 hover:bg-stone-300/80 rounded transition-colors">Load</button>
      </div>
    </>
  );
};

export default App;