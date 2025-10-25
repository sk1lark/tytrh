import type { StoryData, EnemyData } from '../types/story';

export const enemies: EnemyData = {
    listener_1: {
        id: 'listener_1',
        name: 'The Listener',
        description: "It is a thing made of wet river mud, tangled black roots, and the delicate, sharp bones of fish, all constantly shifting and reforming as if in a slow-motion boil. It has no face, only a dark, weeping hole in its head that emanates a ceaseless, sibilant whispering.",
        health: 40,
        attack: 8,
        observations: [
            "It moves with an unnatural fluidity, a sculpture of river-rot and bone held together by a malevolent quiet. Its whispers probe the air, tasting for sound.", // Full health
            "Cracks have appeared in its muddy hide, revealing a core of tightly packed, pale roots. The whispering from its void-like head grows higher in pitch, more agitated.", // < 75% health
            "It stumbles, leaking black, viscous fluid. Its form seems to be struggling to hold itself together, the whispers turning from a hiss to a pained gurgle.", // < 40% health
        ]
    }
};

export const story: StoryData = {
  start: {
    id: 'start',
    text: [
      "The world begins as grit on the tongue, a fine silt that speaks of ground bone and total dryness. Your eyelids are fused by a thick, amber resin. Tearing them open is a slow, deliberate act that resounds inside your skull with the sound of wet canvas ripping. Light does not enter the room so much as it congeals there, a jaundiced, greasy smear against the windowpane that stains the air a pale, bruised yellow. Above, the pressed tin ceiling has buckled, rust bleeding across it in slow blossoms, the metal peeling back in thin, sharp-edged flakes around the dark blooms of decay.",
      "The air is a solid thing, a column of pressure that holds the silence in place. It has a texture against the skin, a weight that settles in the lungs and refuses to be displaced by the ragged, inadequate mechanism of your own breathing. This is the silence of a struck bell, the ache of its vibration still humming in the world’s bones, a foundational thrum of something that has stopped, and the stopping is now the only sound.",
      "A name, Lysander, is dredged from some silted-over trench in your mind. The word is an ill-fitting garment on you, the seams tight across the shoulders, the fabric permeated with the scent of another man’s sweat and old fear. You are wearing someone else's life. The room's deep neglect is a collection of objects surrendered to time: a warped wooden chair bent as if in permanent submission; a nightstand bearing a glass of water, its surface a gray, opaque film, a skin of dust and time that has sealed the liquid beneath; the bed's iron frame leaching a deep, ancient cold directly into your marrow, a cold that has nothing to do with temperature.",
      "There is a sound missing, a negative frequency that your inner ear strains to locate, and the failure to do so is a form of vertigo. The low, constant, foundational hum of the river, the town's pulse, has been surgically excised from the world. Its absence is a roar, and your own breathing sounds like a trespass against it, a ragged and obscenely loud violation of the new and terrible quiet.",
      "A thought, alien and intrusive, floats up from a forgotten corner of your brain, a bleak piece of gallows humor: 'Well, at least the neighbors won't complain.' The sentiment is so out of place in this suffocating room that it almost provokes a laugh, a dry, rasping sound that dies in your throat before it can be born."
    ],
    observables: [
        {
            keyword: "tin ceiling",
            description: "The ceiling is a vast, buckled expanse of pressed tin, once stamped with an optimistic pattern of laurels and fleur-de-lis. Now, it is a map of a slow, fungal conquest. Rust blooms in orange and brown archipelagoes, the metal peeling back in thin, sharp layers like sunburnt skin. In places, the decay has eaten through completely, revealing the dark, skeletal lathwork of the house's bones, a glimpse into the anatomical void above."
        },
        {
            keyword: "warped wooden chair",
            description: "The chair's back is bent into a permanent curve, as if from the weight of a thousand weary ghosts. The wood grain is a roadmap of dry rivers, its varnish long since flaked away to reveal a pale, bone-colored skeleton. One leg is shorter than the others, a small, deliberate imperfection that would make sitting in it an act of constant, conscious balancing."
        },
         {
            keyword: "glass of water",
            description: "It is not water so much as a suspension of time. The glass itself is thick and utilitarian, smudged with the ghost of a fingerprint. The liquid within has achieved a quiet, patient equilibrium with the dust of the room. A fine grey sediment coats the bottom, and the surface is a taut, greasy membrane, a skin of absolute stillness. It promises not refreshment, but a deeper, more profound thirst, the kind that comes from drinking a memory of water rather than water itself."
        }
    ],
    choices: [
      { text: "Look at the glass of water.", nextScene: 'water_glass' },
      { text: "Get up and go to the window.", nextScene: 'window' },
    ],
  },
  water_glass: {
    id: 'water_glass',
    text: [
        "Your hand moves slowly through the heavy air, the muscles protesting with an ache of long disuse, as if being remembered into existence one fiber at a time. Your fingers, which seem to belong to someone else, close with a tremor around the glass. Inside, dust motes drift in the stale water, a tiny world sinking in slow motion. A moth is suspended just below the surface, its wings a sodden, intricate ruin, its final journey toward a nonexistent light ending here.",
        "A profound, cavernous thirst hollows out your throat, an ancient craving for something clean and moving, but you understand on a cellular level that this water is an insult to that thirst. You set the glass down. The tiny clink of glass on wood is absorbed by the silence instantly, a sound swallowed whole, leaving no echo. Nothing has changed. The moth continues its drowned vigil, its stillness a silent accusation.",
        "It had a purpose, a frantic, dusty life driven by an instinct for light. You have a name that doesn't fit and a thirst you can't quench. In this moment, the moth seems the more fully realized being, its story finished, its purpose met with a final, still perfection."
    ],
     observables: [
        {
            keyword: "drowned vigil",
            description: "The moth's body is a perfect, sodden sculpture. Its antennae are delicate, curved questions. Its wings, once instruments of frantic, dusty flight, are now intricate tapestries of ruin, their patterns blurred and softened by their final, still baptism. It is a monument to a small, failed pilgrimage."
        }
    ],
    choices: [
      { text: "Stand and walk to the window.", nextScene: 'window' },
      { text: "Look at your hands.", nextScene: 'hands' },
    ],
  },
  hands: {
    id: 'hands',
    text: [
      "You hold your hands up in the single, thick shaft of jaundiced light filtering through the grime on the window. They are alien territories, marked with a life you don't remember living, the palms cross-hatched with calluses, the knuckles scarred into pale, dead ridges of tissue. A pale, crescent-shaped scar on your left thumb aches with a phantom sting, a memory stored in the flesh itself, bypassing your empty mind.",
      "The memory is a sensory assault, not a narrative: the high, metallic shriek of a can's edge tearing flesh, the sudden, shocking welling of dark, coppery-smelling blood, the sight of it running in channels between your knuckles. A name follows the pain, Kaspara, a sound that feels like the only solid thing in a dissolving world. Her voice, not the words but its urgent, low timber, her hands tearing a strip from her own blue shirt, the quick, sure, almost painful pressure of the knot she tied around your thumb, a knot that still feels present in the memory of your skin.",
      "The need for her is not a thought or a feeling, but a physical force, a gravitational pull from outside the room that hauls you to your feet, your body moving with a purpose your mind has not yet consented to."
    ],
     observables: [
        {
            keyword: "crescent-shaped scar",
            description: "The scar is a pale, silvery curve, a tiny, dead moon on the landscape of your skin. The tissue is smooth and numb, a place where feeling has been permanently erased. Touching it sends a faint, ghost-pain up your arm, a memory not of the wound, but of the moment the wound was made."
        }
    ],
    choices: [
      { text: "Go to the window to look for her.", nextScene: 'window_kaspara' },
      { text: "Search the room for something she left behind.", nextScene: 'search_room' },
    ],
  },
  window: {
    id: 'window',
    text: [
      "The floorboards protest under your weight, each step accompanied by the fine, gritty grinding of silt under your bare feet. The yellowed curtain, a relic of some forgotten cheerfulness, disintegrates into a small, sad exhalation of dust at your touch. The window frames Main Street, a scene bleached of color and life by a uniform coat of fine, brown dust, as if the whole world has been steeped in weak tea and left to dry.",
      "Across the street, the general store's sign, 'S. ANCHOR & SONS', hangs from a single, strained hinge, swaying with a motion that implies a wind you cannot feel. A desiccated tumbleweed is caught on the steps, a brittle, intricate cage of thorns, a piece of wilderness arrested in its journey through a dead town.",
      "And then you see the violation, the primary wound. The riverbed is a raw, deep, surgical cut in the earth. Not a drought-shrunk channel, but a chasm of cracked mud polygons and the white, calcified skeletons of stones that have never known the sun. The sheer, geometric wrongness of it makes the world tilt on its axis. The air thins in your lungs, as if it is being drawn down into the vacuum where a living river used to be, a place that now exists only as a phantom limb in the town's geography.",
    ],
     observables: [
        {
            keyword: "S. ANCHOR & SONS",
            description: "The sign is made of heavy, dark wood, the letters carved deep and once gilded. 'S. ANCHOR' is still legible, a name that speaks of stability, of holding fast against a current. But the '& SONS' is almost entirely obscured by a thick, bird-like splatter of rust that has bled down from the hinge. The promise of lineage, of a future, has been corroded into a meaningless stain. It is a sign for a man, not a dynasty."
        },
        {
            keyword: "desiccated tumbleweed",
            description: "It is a perfect sphere of brittle, interlocking branches, a piece of botanical architecture. Its journey, driven by the indifferent logic of the wind, has ended here, snagged on the man-made geometry of the steps. It is a piece of the wild world trapped and slowly disintegrating in the heart of a dead town, a metaphor too perfect and too sad to linger on."
        }
    ],
    choices: [
      { text: "Stare into the empty riverbed.", nextScene: 'riverbed' },
      { text: "Scan the street for any sign of life.", nextScene: 'street_people' },
    ],
  },
   window_kaspara: {
    id: 'window_kaspara',
    text: [
      "You press your forehead to the cool, filthy glass, your breath fogging a small, clean circle in the grime. Your search of the street is a desperate, animal hunt for a single shade of blue, a glint of copper hair in the relentless, colorless dust. Nothing moves. The town is a photograph left too long in the sun, its colors faded to a uniform, exhausted brown.",
      "The riverbed is a persistent, neurological shock to the system. The town's docks hang uselessly in the dead air, their pilings exposed down to the bedrock, a kind of obscene anatomy lesson. The sight is so fundamentally incorrect it makes the floor beneath you feel unstable, as if the room itself might slide down into the chasm.",
      "A memory unspools, not gentle but sharp and cold as the water it depicts. Kaspara on the old stone bridge, the one that now spans a void. She trailed a hand in the current, which ran unnaturally fast that day, a deep, muscular green. She spoke of undertows and unseen dynamics, her voice tight with a scientist's frustration at a problem that refused to obey its own physics, a quiet fury at a world that would not be legible.",
    ],
     observables: [
        {
            keyword: "town's docks",
            description: "The docks are skeletal structures of silvered, weathered wood. They hang in the empty air, their purpose completely negated. Ropes that once moored boats now dangle like forgotten nooses, swaying in a wind that isn't there. They are monuments to a connection that has been severed, platforms leading to nowhere."
        }
    ],
    choices: [
      { text: "I have to find her. I'll start by searching this room.", nextScene: 'search_room' },
      { text: "I need to get outside. I need to get down to that riverbed, to the place she was.", nextScene: 'leave_room_hub' },
    ],
  },
  search_room: {
    id: 'search_room',
    text: [
      "You turn from the window's bleak, final pronouncement. The room is skeletal, offering few secrets. Dust and the faint, metallic scrape of old springs are all that live under the thin mattress. The nightstand drawer shrieks open on dry runners, revealing only a bent spoon with a tarnished bowl and a dried inkwell, its contents a solid, black stone of fossilized words.",
      "You almost overlook it. A small, tightly folded piece of paper is jammed into the inkwell's neck. Your fingers feel thick and clumsy as you work the brittle note free, its creases threatening to turn to dust.",
      "The script is a familiar, frantic scrawl. Kaspara's. 'They don't sleep,' it reads, the words slanted and sharp. 'Sound is a summons. Meet me at the sundial when the second sun sets.'",
      "The phrase 'second sun' is a splinter in the mind, a piece of alien grammar. Vestige has one sun, a white, merciless, and singular eye in the sky. The note is a piece of a language you no longer speak, a password to a conspiracy you've forgotten you were a part of."
    ],
     observables: [
        {
            keyword: "bent spoon",
            description: "The spoon's bowl is tarnished with a dark, swirling patina, like a galaxy of corrosion. It is bent at a sharp, unnatural angle, as if from a moment of sudden, intense frustration or a failed attempt to pry something open. It is a tool that has been broken by its purpose."
        },
        {
            keyword: "dried inkwell",
            description: "The glass inkwell is thick and heavy. The ink within is no longer liquid, but a solid, black, crystalline mass, a fossil of a forgotten sentence. It is a well of solidified silence, its potential for communication permanently sealed."
        }
    ],
    addItem: "Kaspara's Note",
    choices: [
      { text: "This is a warning. I'll go outside, but I'll be quiet.", nextScene: 'leave_room_hub_quiet' },
      { text: "This is a puzzle. What is the 'second sun'?", nextScene: 'puzzle_sun' },
    ],
  },
  riverbed: {
    id: 'riverbed',
    text: [
      "You stare down into the chasm until your eyes water, blurring the sharp edges of the cracked mud into a soft, abstract horror. The river, the Lethe, gave this town its name and its purpose. Its absence feels like a fundamental part of your soul has been scoured out. The scale of the emptiness creates a form of vertigo that has nothing to do with height. You grip the windowsill, your knuckles white, to keep from falling into the idea of it.",
      "The river floor is a repeating mosaic of hexagonal mud-cracks, a geometric pattern left by a total and rapid evaporation. The white skeletons of fish lie half-interred in the dust, their delicate bones like hieroglyphs spelling out a story of sudden suffocation. Near the base of the stone bridge, something glints with a cold, internal light, a tiny spark in the vast, dead expanse.",
      "It seems to pulse with a slow, faint, and utterly impossible rhythm, a heartbeat in the silt, a ghost in the world's machinery."
    ],
    observables: [
      {
        keyword: "skeletons of fish",
        description: "They lie in the dust like delicate, discarded thoughts. Perch, trout, sunfish—their forms are perfectly preserved, their fine, needle-like bones assembled in attitudes of sudden, breathless shock. The dust has filled their eye sockets, giving them a blind, knowing stare. They are not merely dead; they are artifacts from the water's abrupt and total betrayal, tiny monuments to the crime of suffocation."
      },
      {
        keyword: "stone bridge",
        description: "The bridge is made of massive, dark stones, each one fitted perfectly against its neighbor. It was built to withstand a hundred-year flood, a testament to a belief in a powerful, predictable nature. Now, it spans a void, an act of architectural faith in a god that has left the church. It connects nothing to nothing, a monument to a severed connection."
      }
    ],
    choices: [
      { text: "I have to get a closer look at that object. It's the only thing that's alive.", nextScene: 'leave_room_hub' },
      { text: "This is too much. The world is broken. I need to find another person.", nextScene: 'street_people' },
    ],
  },
   street_people: {
    id: 'street_people',
    text: [
      "You force your gaze away from the chasm, scanning the empty storefronts, the black, light-swallowing voids of the alleys between buildings. Nothing. The town is a held breath. And then, a flicker of movement, so slight it might have been a twitch in your own optic nerve. A curtain in a second-story window of the boarding house across the street twitches, a tiny spasm in the town's dead face.",
      "You fix your eyes on the spot, muscles coiled, every instinct screaming. A face materializes in the darkness of the window—impossibly pale and thin, the features indistinct except for two wide, dark eyes that seem to swallow the jaundiced light. The eyes are fixed on you, not with curiosity, but with a kind of ancient, animal terror. Then, it is gone, retreating back into the darkness.",
      "The presence lasted less than a second, but it has irrevocably changed the silence. It is no longer empty. It is watching. The silence of Vestige is now an act of intense, terrified observation."
    ],
     observables: [
        {
            keyword: "boarding house",
            description: "It's a tall, narrow building, its clapboard siding peeling away in long, curling strips like old parchment. The windows are dark, vacant eyes, all except for the one where you saw the face. It feels like a place where people come to be forgotten, a final stop before disappearing completely."
        }
    ],
    choices: [
      { text: "That person looked scared. A warning. I should be careful.", nextScene: 'leave_room_hub_quiet' },
      { text: "I don't care about faces in windows. The riverbed is the real mystery, the source of the wrongness.", nextScene: 'leave_room_hub' },
    ],
  },
  leave_room_hub: {
      id: 'leave_room_hub',
      text: [
          "You move through the derelict boarding house, your hand trailing over dusty, peeling wallpaper that reveals layers of forgotten patterns, a history showing how tastes faded. The front door groans open, a sound that feels obscenely loud in the stillness, an agony of rusted hinges that echoes down the empty street and is immediately swallowed by the silence.",
          "Outside, the air is a physical weight, hot and tasting of baked dust and something else, something metallic and old. You are a single, vertical, and noisy shape in a horizontal, sleeping world. The chasm of the riverbed pulls at your gaze, a wound that promises answers if you're willing to touch it. The silent buildings, with their dark, watching windows, offer only secrets."
      ],
      choices: [
          { text: "Go down into the riverbed. That glinting object is my only lead.", nextScene: 'outside_to_riverbed' },
          { text: "Go to the boarding house. The face in the window is the only sign of life.", nextScene: 'boarding_house_approach' },
          { text: "Explore the town. There might be clues in the other buildings.", nextScene: 'town_crossroads' },
      ],
  },
  leave_room_hub_quiet: {
      id: 'leave_room_hub_quiet',
      text: [
          "A back staircase, its steps padded with a thick, sound-absorbing, dusty felt, offers a silent escape. It descends into a narrow, shadowed alley clotted with refuse from a hasty, panicked evacuation: an overturned wheelbarrow, a child's single shoe, a crate of spoiled, sweet-smelling apples. The air smells of wet brick and rot.",
          "You move in the strips of shadow, one hand on the rough, crumbling brick of the alley wall. The town feels like an elaborate, empty stage set, waiting for a play to begin. From the alley's mouth, you can see the sun-blasted edge of the river chasm, a sheer drop into the impossible, or the back of the boarding house, its windows like vacant eyes."
      ],
       observables: [
        {
            keyword: "child's single shoe",
            description: "It is a small, red leather shoe, the kind a child would wear on a special occasion. Its laces are still tied in a neat, careful bow. It is a piece of a story that has been violently interrupted, a single, perfect artifact of a life that was here one moment and gone the next."
        }
    ],
      choices: [
          { text: "Approach the boarding house from the back.", nextScene: 'find_back_entrance' },
          { text: "Make for the edge of the riverbed.", nextScene: 'riverbed_edge' },
          { text: "Stay in the shadows and move toward the town center.", nextScene: 'town_crossroads' },
      ],
  },
  town_crossroads: {
    id: 'town_crossroads',
    text: [
        "You stand in the dead heart of Vestige, a crossroads where four silences meet. 'S. ANCHOR & SONS,' the general store, is to your left, its sign a crooked tooth, the smell of spilled flour and rust a faint ghost on the air. It feels like the oldest silence, the one with the deepest roots.",
        "To your right, the Municipal Library is a block of stern, silent granite. It feels cleaner than the other buildings, the silence within it more profound, more curated, as if it is a silence that has been collected and catalogued.",
        "The road ahead follows the river's ghost upstream, a path of dust and heat that winds toward the concrete monolith of the hydroelectric dam, a monument to a force that no longer exists, a tombstone for a god.",
        "Behind you, the road leads back toward the low hill where a church pierces the empty sky with its steeple, a silence that aspires to be holy."
    ],
    observables: [
        {
            keyword: "Municipal Library",
            description: "The library is made of heavy, grey granite blocks that seem to absorb the light. It has no large windows, only thin slits near the roofline, as if it were designed to be a fortress. It feels less like a place for books and more like a tomb for ideas."
        },
        {
            keyword: "hydroelectric dam",
            description: "Even from here, the dam is a brutalist scar on the landscape. It is a monument to human arrogance, a concrete fist clenched against a force it could not control. Its silence is the silence of a failed god, of a titan that has bled out."
        },
        {
            keyword: "church",
            description: "The church's steeple is a sharp, black needle against the pale, hazy sky. It seems to be trying to puncture something, to let the pressure out of the world. It is a desperate, vertical gesture in a world that has been flattened by silence."
        }
    ],
    choices: [
        { text: "Investigate the general store.", nextScene: 'investigate_store' },
        { text: "Investigate the library.", nextScene: 'investigate_library' },
        { text: "Walk the path toward the dam.", nextScene: 'journey_to_dam_start' },
        { text: "Head toward the church.", nextScene: 'journey_to_church_start'},
        { text: "The Post Office stands silent, a place of last words.", nextScene: 'post_office_approach' },
        { text: "A doctor's shingle hangs crookedly. A place of last diagnoses.", nextScene: 'doctors_office_approach' },
        { text: "The old schoolhouse sits abandoned, a place of forgotten lessons.", nextScene: 'schoolhouse_approach' },
    ]
  },
  outside_to_riverbed: {
      id: 'outside_to_riverbed',
      text: [
          "The crumbling bank gives way under your feet with a soft, final sigh, and you slide down into the riverbed in a shower of dirt and small, sharp stones. The heat rising from the cracked mud is a physical blow, a solid wall of stored sunlight. Down here, the scale of the world is wrong; the banks tower over you, and the stone bridge seems impossibly high, a relic of a forgotten age of giants.",
          "The glinting object is half-buried, an intricate astrolabe made of a strange, non-reflective metal that is cool to the touch, a deep, cellular cold that feels wrong in the baking heat. Its concentric rings are etched with constellations that have never graced Earth's sky, their geometry elegant and predatory. The moment your fingers close around it, the world lurches. A wave of sound breaks inside your skull, not heard with your ears but felt in the fillings of your teeth, a thousand whispers speaking a language of static and tides, a language you almost understand."
      ],
      addItem: 'Alien Astrolabe',
      choices: [
          { text: "Hold the astrolabe. Focus on the whispers. Try to understand.", nextScene: 'astrolabe_whispers' },
          { text: "Drop the astrolabe. It feels like holding a disease.", nextScene: 'drop_astrolabe' },
      ],
  },
  puzzle_sun: {
      id: 'puzzle_sun',
      text: [
          "'Second sun.' The phrase lodges in your mind. You stare out the window at the single, bleached-out sun in the pale, hazy sky. It offers no answers, only a flat, indifferent heat.",
          "Your gaze drifts back to the pressed-tin ceiling of the room. The rust stains are not random. There is a large, central bloom of decay, and a smaller, more concentrated one in a corner, half-lost in shadow. A memory that isn't yours, a piece of someone else's knowledge, suggests a sundial needs one light source to cast one shadow. A second light source would cast a second, distinct shadow. Kaspara mentioned a sundial.",
          "The second sun isn't a star. It is something else entirely. Something that carries its own light in the dark, something that casts its own kind of shadow.",
      ],
      choices: [
          { text: "This is a puzzle for later. I need to get outside and orient myself.", nextScene: 'leave_room_hub_quiet' },
          { text: "Maybe that glinting object in the riverbed... it seemed to have its own light.", nextScene: 'outside_to_riverbed' },
      ],
  },
  astrolabe_whispers: {
    id: 'astrolabe_whispers',
    text: [
        "You tighten your grip. The device hums, a low-frequency vibration that travels up the bones of your arm and settles in your chest, a new and alien heartbeat. The whispers coalesce, words forming from the static, not in English, but as pure concepts impressed directly onto your consciousness. They speak of warped physics, of a gate opened at the wrong angle, of a 'sleeper' that drank the river not from its source in the mountains, but from its source in a dimension folded over this one, a dimension as thin as a sheet of paper.",
        "A vision, sharp as a shard of glass, stabs into your mind. Kaspara in a stone cellar, surrounded by star charts that crawl with impossible constellations. She holds a device identical to yours, her expression one of fierce, dangerous concentration. She draws a symbol on the floor with chalk, its geometry alien and alive, a thing that seems to writhe at the edge of your vision.",
        "The vision shatters, leaving you on your knees in the dry heat, the astrolabe cold and heavy in your hand. The river wasn't lost to a drought. It was siphoned away into a place that should not exist."
    ],
    choices: [
        { text: "I have to find that cellar. The vision felt real, a memory.", nextScene: 'find_cellar_choice' },
        { text: "This is too much to process. The person in the window might know something more grounded.", nextScene: 'boarding_house_approach' },
    ],
  },
  drop_astrolabe: {
      id: 'drop_astrolabe',
      text: [
          "A violent, primal revulsion, a cellular rejection of the object's wrongness, makes you hurl the astrolabe away. It lands with a soft, unsatisfying puff in the silt, its internal light extinguished instantly. The crushing, monolithic silence of Vestige rushes back into your skull, a weight that feels like it could fracture bone.",
          "The sense of loss is immediate and profound. You have just thrown away the key to a language you were beginning to understand, a language that described the prison you were in. The world flattens, becomes mundane again, its terrifying new dimension sealed off. All that's left is the heat, the dust, and the observant quiet.",
          "What now? The silence offers no suggestions."
      ],
      removeItem: 'Alien Astrolabe',
      choices: [
          { text: "Go back. Pick up the astrolabe. I am a fool.", nextScene: 'astrolabe_pickup_again' },
          { text: "Leave it. Find other people. Find a human answer.", nextScene: 'boarding_house_approach' },
          { text: "This town is a tomb. Get out while the silence is just silence.", nextScene: 'end_leave' },
      ],
  },
  astrolabe_pickup_again: {
    id: 'astrolabe_pickup_again',
    text: [
        "The fear subsides, replaced by a cold, hard certainty: the unknown is more dangerous than the monstrous. You walk back to where the astrolabe lies inert in the dust. As your fingers touch its cool, alien metal, its cold light returns, and the whispers seep back into your mind, more cautious this time, as if testing your resolve.",
        "You hold the device, its low hum a familiar presence now, a conversation partner. The river was stolen. An act of cosmic theft. The question of what to do about it is a terrifying, exhilarating weight."
    ],
    addItem: 'Alien Astrolabe',
    choices: [
        { text: "The vision of the cellar is my only lead.", nextScene: 'find_cellar_choice' },
        { text: "Maybe I can find help at the boarding house. A human perspective.", nextScene: 'boarding_house_approach' },
    ],
  },
  find_cellar_choice: {
    id: 'find_cellar_choice',
    text: [
        "The vision of the cellar was precise—ancient, close-fitting stone, the smell of old paper and the sharp, clean scent of ozone after a lightning strike. Two places in Vestige fit the memory's particular shape and smell.",
        "The general store, 'S. ANCHOR & SONS,' is the oldest building in town, its foundations deep and rumored to be part of an older, forgotten structure.",
        "And the town library, a place Kaspara haunted, a temple of knowledge. If she needed a sanctuary for her dangerous work, she would have made one there, hidden among the silent books."
    ],
    choices: [
        { text: "Investigate the general store.", nextScene: 'investigate_store' },
        { text: "Investigate the library.", nextScene: 'investigate_library' },
    ],
  },
  boarding_house_approach: {
      id: 'boarding_house_approach',
      text: [
          "You cross the street, your footsteps loud explosions of sound in the silence, each one a betrayal. The boarding house stands three stories tall, its structure succumbing to a slow, graceful decay, its paint peeling like sunburnt skin. The feeling of being watched intensifies, a physical pressure on the back of your neck.",
          "The front porch groans a long, weary complaint under your weight. The door is shut. A tarnished brass knocker in the shape of a fish hangs there, its eye a blind, green pearl of corrosion.",
          "How do you announce yourself in a world where sound is a predator? A quiet knock could be missed. A loud one could be a death sentence."
      ],
      observables: [
        {
            keyword: "brass knocker",
            description: "The fish is rendered in heavy, solid brass, its scales detailed and its form muscular. It is a symbol of the river, of life and plenty. But now it is tarnished with a deep, sickly green patina of disuse. To use it would be to strike a dead god against a hollow door."
        }
    ],
      choices: [
          { text: "Knock on the front door. Loudly. Announce my presence to whatever is listening.", nextScene: 'knock_front_door_loud' },
          { text: "Knock softly, calling out for help. A plea, not a challenge.", nextScene: 'knock_front_door' },
          { text: "Forget the door. Circle around to find a back entrance.", nextScene: 'find_back_entrance' },
      ],
  },
  knock_front_door_loud: {
    id: 'knock_front_door_loud',
    text: [
      "You slam the heavy brass knocker three times. The sound shatters the silence, echoes rolling down the empty street. For a long, heart-stopping moment, nothing. Then, a frantic, rat-like scuttling from inside. The door opens a crack, held by a thick brass chain.",
      "A man's face, ravaged by a profound and absolute terror, peers out. 'Fool!' he hisses, spittle flying from his lips. 'What have you done? Sound is a summons!' From down the street, near the raw wound of the riverbed, a new sound begins. A wet, dragging sound, and a low, chittering whisper that seem to come from everywhere at once. Something heavy, something patient, is stirring from the mud.",
      "'You've called them!' the man shrieks, his voice cracking as he fumbles with the chain. 'They heard you!'"
    ],
    choices: [
      { text: "What is that sound? Let me in!", nextScene: 'ask_caius_listeners' },
      { text: "I have to hide. Now.", nextScene: 'listener_hunt_street' },
    ],
  },
  listener_hunt_street: {
    id: 'listener_hunt_street',
    text: [
      "The door slams. The bolt shoots home with a sound of utter finality. The sound is an ending. You are alone on the porch. The dragging, whispering sound is closer now, accompanied by a smell of wet river rot and ozone, the smell of a storm with no rain. Panic is a hot, chemical flood in your blood. The street is a killing floor, empty of cover.",
      "You hear it scuttling up the porch steps behind you. There is nowhere to run. You turn, and it is upon you."
    ],
    choices: [],
    encounter: {
        enemyId: 'listener_1',
        winScene: 'listener_hunt_victory',
        loseScene: 'listener_hunt_defeat'
    }
  },
  listener_hunt_victory: {
    id: 'listener_hunt_victory',
    text: [
        "The thing made of mud and whispers lies dissolved on the porch, a puddle of black sludge and shattered fish bones. You stand over it, your heart hammering against your ribs, the weapon in your hand feeling heavy and strange. The silence rushes back in, but it's different now. You have given it something to be silent about.",
        "The man inside, Caius, is whimpering in terror. The front door is no longer an option. The street is still a threat. The general store across the way seems like the only sanctuary."
    ],
    choices: [
      { text: "Cross the street to the general store.", nextScene: 'investigate_store' },
    ]
  },
    listener_hunt_defeat: {
    id: 'listener_hunt_defeat',
    text: [
        "It is impossibly fast. Before you can raise a defense, it is on you, a wave of cold mud and sharp bone. The whispers fill your head, a sound that unmakes thought. Your last sensation is of being pulled apart, your own scream swallowed by the Quiet.",
        "Your story ends here, another sound harvested by the things that hunt in the silence."
    ],
    choices: [],
    isEnd: true
  },
  riverbed_edge: {
      id: 'riverbed_edge',
      text: [
          "You stand at the crumbling edge of the chasm. The drop to the cracked mud below is steep, a straight line down into the guts of the world. From here, the scale of the river's absence is a physical blow to the senses. Upstream, the hydroelectric dam is a concrete titan guarding a tomb, a monument to a forgotten power.",
          "The river floor is an alien landscape, a desert of bleached stones and the half-buried detritus of a dead world: a rusted bicycle frame, a child's doll, the hull of a rowboat. The sun beats down, the heat rising in visible waves that distort the air, making the world shimmer and threaten to dissolve into pure heat and light.",
          "You can walk the bank toward the dam, a path of relative safety, or you can descend into the wound itself, into the heart of the mystery."
      ],
      choices: [
          { text: "Walk along the bank toward the dam.", nextScene: 'journey_to_dam_start' },
          { text: "Scramble down into the riverbed.", nextScene: 'descend_into_riverbed' },
      ],
  },
  knock_front_door: {
    id: 'knock_front_door',
    text: [
      "You knock gently, three soft taps that are barely audible even to yourself. After a moment, you hear the dry, hesitant scrape of bolts being drawn. The door opens a few inches on a heavy chain. An old man's eye, watery and magnified by a thick lens of fear, peers out. 'What?' he rasps, his voice like dry leaves on pavement.",
      "'I saw someone,' you say, your own voice startling you. 'I'm looking for... answers.'",
      "The man, Caius, gives a harsh bark of a laugh that dissolves into a hacking, painful cough. 'Answers? No answers here, boy. Only the Quiet. You shouldn't be out. The Listeners will mark you for the sound of your own blood in your veins.' He begins to close the door."
    ],
    choices: [
        { text: "Wait. I'm looking for a woman named Kaspara.", nextScene: 'ask_caius_kaspara' },
        { text: "What do you mean, 'Listeners'?", nextScene: 'ask_caius_listeners' },
    ],
  },
  ask_caius_kaspara: {
    id: 'ask_caius_kaspara',
    text: [
      "At her name, Caius's eye narrows to a suspicious slit. 'The stargazer,' he whispers, his voice a venomous mix of pity and scorn. 'She brought this on us. Meddling with things that should be left to sleep. She thought she could put the water back with her machines and her numbers. A fool.'",
      "He glances nervously up and down the empty street, as if the very air has ears. 'She's gone. Made too much noise, and the Quiet took her. Now get away from my door before you draw them here with your questions.' The door slams. The bolts slide home with a sound of utter, terrified finality."
    ],
    choices: [
      { text: "He's hiding something. His fear is a performance. I need to get inside.", nextScene: 'find_back_entrance' },
      { text: "He mentioned stargazing. The library, her sanctum, is my next stop.", nextScene: 'investigate_library' },
    ]
  },
  ask_caius_listeners: {
    id: 'ask_caius_listeners',
    text: [
      "He flinches violently, as if you had struck him. 'Don't say that name aloud,' he hisses, his voice dropping to a terrified whisper that is more intense than a shout. 'They hear. They move in the silence the river left behind. They have no faces, but they know yours. They are the Quiet made flesh, the sleeping god's antibodies.'",
      "He shrinks, his fear a palpable, sour force. 'The Quiet came when the river left. The Listeners came with it. They... harvest noise. They collect sounds the way a farmer collects grain. You need to leave Vestige before it harvests you.' The door slams shut, the bolts ending the conversation and sealing him in his tomb of fear."
    ],
    choices: [
      { text: "This is madness. I need something real. The riverbed is the only real thing here.", nextScene: 'riverbed_edge' },
      { text: "He might be mad, but his fear is real. I need to be more careful, find another way in.", nextScene: 'find_back_entrance' },
    ]
  },
  find_back_entrance: {
    id: 'find_back_entrance',
    text: [
      "You circle the boarding house, keeping to the overgrown, thorny bushes that crowd its foundation. The back door is bolted from within, solid and impassable. Next to it, a small, grimy cellar window is set at ground level, its glass thick with the filth of decades.",
      "The window has a simple iron latch on the inside. You could pry it open with something, but the sound of splintering wood would be a summons in this silent world. Finding another way in seems impossible. The house is a sealed box."
    ],
    choices: [
        { text: "Risk the noise. Pry open the cellar window.", nextScene: 'pry_cellar_window' },
        { text: "Give up on the boarding house for now. He's a dead end.", nextScene: 'boarding_house_abandon' },
    ]
  },
  boarding_house_abandon: {
      id: 'boarding_house_abandon',
      text: [
        "The house is a sealed box, a tomb for one terrified man. Whatever secrets Caius keeps are locked in there with him, fermenting in the dark. Pushing further feels like a fatal mistake, like rattling the cage of a sleeping animal. You retreat from the back of the house, the feeling of being watched prickling your neck.",
        "You are back in the alley. The silence of Vestige waits, patient and vast. Your other leads remain, thin threads in a great, dusty tapestry."
      ],
      choices: [
        { text: "Investigate the library.", nextScene: 'investigate_library' },
        { text: "Investigate the general store.", nextScene: 'investigate_store' },
        { text: "Go to the riverbed.", nextScene: 'riverbed_edge' },
      ]
  },
  pry_cellar_window: {
    id: 'pry_cellar_window',
    text: [
        "You find a length of rusted pipe in the weeds, heavy and solid in your hand. You work its flattened end into the window frame, applying slow, torturous pressure. The old wood groans, then splinters with a series of cracks that make your heart stop. You freeze, listening, every muscle screaming, expecting the wet, dragging sound to begin.",
        "The silence holds. Empty. Unresponsive. You let out a breath you didn't know you were holding and swing the window open on shrieking, protesting hinges.",
        "The opening is a tight squeeze. You slide through, scraping your back on the rough stone, and drop onto a packed-earth floor. The air is cool and smells of damp soil, root vegetables, and a sharp, clean scent like ozone after a lightning strike. You're in the boarding house cellar."
    ],
    addItem: 'Rusted Pipe',
    choices: [
        { text: "Explore the cellar.", nextScene: 'explore_boarding_cellar' },
    ]
  },
  explore_boarding_cellar: {
    id: 'explore_boarding_cellar',
    text: [
      "As your eyes adjust to the gloom, you realize this is no ordinary cellar. Totems of river-stone, driftwood, and rusted wire are arranged in complex, geometric patterns on the floor. They seem to hum, a low, subsonic vibration that makes the air thick and hard to breathe. This is not a storage space; it is a shrine, or a prison.",
      "'You should not have come.' Caius's voice comes from the deepest shadows. He is not the frail, terrified man from the door. He stands straight, his eyes burning with a cold, clear, and absolute intensity. He holds a smooth, dark stone in his hand, and it seems to drink the light.",
      "'These are wards,' he says, his voice a low hum that vibrates in your bones, a sound that seems to come from the earth itself. 'They keep the Quiet focused. They soothe the Sleeper's dreams. You, out there, making noise... you are a disruption. A rock thrown into a still, deep, and sacred pond.'"
    ],
    observables: [
        {
            keyword: "Totems of river-stone",
            description: "The totems are strange, delicate constructions. Smooth, grey river stones are balanced impossibly on top of each other, held together by twists of rusted wire and the dried sinew of some unknown animal. They are not art; they are diagrams, three-dimensional equations meant to placate a force of nature."
        },
        {
            keyword: "smooth, dark stone",
            description: "The stone Caius holds is obsidian, but not. It is perfectly smooth and seems to drink the light, creating a small, personal void in the cellar's gloom. It feels ancient and impossibly dense, a piece of a collapsed star given terrestrial form."
        }
    ],
    choices: [
        { text: "What is the Sleeper?", nextScene: 'ask_caius_sleeper' },
        { text: "Kaspara sent me. She thought you could help.", nextScene: 'mention_kaspara_to_caius_again', requiresItem: "Kaspara's Note" },
        { text: "Challenge his beliefs. This feels like superstition, the madness of a lonely man.", nextScene: 'challenge_caius' },
    ],
  },
  challenge_caius: {
    id: 'challenge_caius',
    text: [
        "'Wards? Dreams?' you ask, the words feeling blunt and foolish in this humming space. 'The river is gone. Your totems haven't stopped any of it. This town is a corpse, and you're arranging flowers on it.'",
        "A flicker of anger crosses his face, quickly replaced by a profound, ancient weariness. 'You mistake patience for surrender. My family has kept this balance for generations. We don't command the storm; we learn the shape of the wind so the house doesn't fall. We listen. Something you have not yet learned to do. You only know how to shout.'"
    ],
    choices: [
        { text: "Tell me what you've heard. Teach me to listen.", nextScene: 'ask_caius_sleeper' },
        { text: "I still think this is a dead end. I'm leaving.", nextScene: 'reject_caius_quest' },
    ]
  },
  ask_caius_sleeper: {
    id: 'ask_caius_sleeper',
    text: [
        "'You stand on its back,' Caius says, his voice low and hypnotic, a storyteller's voice at the end of the world. 'The founder of this town, my ancestor, built Vestige as a cage, not a town. The river was its lullaby, a constant, soothing vibration to keep it dreaming deep beneath the bedrock. Now the song has stopped. It is stirring. The Quiet is the sound of it waking. The Listeners... they are its dreams, its nightmares, leaking into our world like ink bleeding through paper.'",
        "He holds up the smooth black stone. 'My family are Keepers. We maintain the wards. We listen to the dreams. We try to keep the balance. But what that girl did... she did not just stop the music. She shattered the instrument.'",
    ],
    choices: [
        { text: "How can we fix it?", nextScene: 'ask_caius_fix' },
        { text: "What did Kaspara do?", nextScene: 'ask_caius_about_kaspara_ritual' },
    ]
  },
  ask_caius_fix: {
    id: 'ask_caius_fix',
    text: [
      "'Fix it?' He laughs, a dry, rattling sound like stones in a gourd. 'You cannot 'fix' geology. You cannot mend a fault line in reality. The girl used her star-machines to open a door, and the river flowed through it into another place, another now. We cannot close that door. All we can do is try to sing the Sleeper a new, quieter song.'",
      "He points to an empty space among the wards, a conspicuous absence in the pattern. 'A new heart-stone is needed, one that resonates with the Sleeper's core frequency. There are three possibilities, three notes in the chord. The oldest stone is the foundation stone of the dam. The quietest stone is at the bottom of the Anchor well. The most sorrowful stone is in the heart of the old wreck, the 'St. Elmo's Fire'. One of them might work. Or it might just make things worse.'",
      "This is a philosophical choice. The path of Preservation, of soothing a wounded, sleeping god."
    ],
    choices: [
        { text: "I accept this path. I will find a heart-stone for you.", nextScene: 'accept_caius_quest_start' },
        { text: "This sounds like superstition. I need to find Kaspara's answers, her science.", nextScene: 'reject_caius_quest' },
    ]
  },
  accept_caius_quest_start: {
    id: 'accept_caius_quest_start',
    text: [
        "'To handle such a stone,' Caius says, his voice taking on a new gravity, a ritual weight, 'requires a special tool. My ancestors forged a set of tongs from a meteorite, cooled in the first waters of the Lethe when the world was new. They can handle the stones without corrupting their resonance with the touch of a human soul.'",
        "'My brother was the last Keeper before me. He lost faith. He said our watch was a fool's errand. He took the Tongs and other items to the old Church on the hill, intending to lock them away and end our family's long duty. I haven't been back since. The place holds too much sorrow, too much failure. You must go. Find the Tongs. Only then can you retrieve a heart-stone.'"
    ],
    choices: [
        { text: "I will go to the church and find the Tongs.", nextScene: 'journey_to_church_start' },
    ]
  },
  reject_caius_quest: {
      id: 'reject_caius_quest',
      text: [
        "'Then you are a fool, like she was,' Caius says, his voice flat and final, all the energy gone from it. He turns his back on you, returning to his silent watch over the humming wards. 'Leave this place. Do not interfere with what you cannot understand. Go break something else.'",
        "The conversation is over. You leave the cellar, the humming fading behind you. Caius's path is one of faith and tradition, a path you are not willing to walk. Kaspara's science, however dangerous, seems to offer the only real hope for an answer, for a solution rather than a surrender."
      ],
      choices: [
          { text: "I'll find her workshop. The library is the only place it could be.", nextScene: 'investigate_library' },
      ]
  },
  investigate_library: {
    id: 'investigate_library',
    text: [
      "The heavy oak doors of the library are unlocked. Inside, the air is cool and still, smelling of aging paper, leather, and beeswax. Unlike the rest of the town, there is no dust here; the place is eerily, unnaturally clean, as if maintained by an invisible, obsessive hand. Sunlight streams through tall, arched windows, illuminating the silent, orderly rows of books.",
      "This was Kaspara's domain. Her work, her secrets, must be here somewhere, hidden among the stories of other worlds.",
      "The main reading room is dominated by a large, empty oak desk. To the left, a small section is marked with a brass plaque: 'Local Astronomy & Folklore'. A place where science and superstition meet."
    ],
    choices: [
      { text: "Search the 'Astronomy & Folklore' section.", nextScene: 'search_astronomy_section' },
      { text: "Search the librarian's desk.", nextScene: 'search_desk' },
      { text: "Explore the general collection.", nextScene: 'search_library_general' },
    ]
  },
  search_library_general: {
    id: 'search_library_general',
    text: [
        "You wander through the main stacks, the silence pressing in, the spines of thousands of books like silent witnesses. In the poetry section, one book is out of place, its spine slightly protruding. A page is marked with a pressed, faded wildflower, its color almost entirely gone.",
        "The poem is about Orpheus and Eurydice, a story of a journey to the underworld to retrieve a lost love, and the fatal mistake of looking back.",
        "A note is scribbled in the margin in Kaspara's hand, sharp and angry: 'He should have known some things can't be brought back. Some songs, once ended, should not be sung again. It's arrogance to think you can.' It seems she was struggling with the moral weight of her quest long before it went wrong."
    ],
    choices: [
        { text: "This is a clue to her state of mind, but not her work. I'll check the specialized section.", nextScene: 'search_astronomy_section' },
        { text: "The desk might have more concrete information.", nextScene: 'search_desk' },
    ]
  },
  search_astronomy_section: {
    id: 'search_astronomy_section',
    text: [
        "You enter the specialized section. A single, ornate bookshelf stands against the far wall, more prominent than the others. It has spaces for three large, leather-bound volumes. The books themselves sit on a nearby table, their spines embossed with golden constellations: 'The Silent King,' 'The Great Serpent,' and 'The Weeping Maiden.'",
        "The shelf has shallow indentations. It's clear the books must be placed on the shelf in a specific order to trigger some mechanism. The air hums faintly here, a sign of hidden machinery."
    ],
    choices: [
        { text: "Arrange the books: King, Serpent, Maiden.", nextScene: 'descend_to_library_cellar' },
        { text: "Arrange the books: Serpent, Maiden, King.", nextScene: 'library_puzzle_fail' },
        { text: "Arrange the books: Maiden, King, Serpent.", nextScene: 'library_puzzle_fail' },
        { text: "I need a clue. I should check the librarian's desk.", nextScene: 'search_desk' },
    ]
  },
  library_puzzle_fail: {
    id: 'library_puzzle_fail',
    text: [
      "You arrange the books in that order. There is a faint click from within the wall, but nothing happens. The order must be wrong. You take the books off the shelf again."
    ],
    choices: [
      { text: "Try a different order.", nextScene: 'search_astronomy_section' },
      { text: "I need to find the logic behind the puzzle.", nextScene: 'search_desk' },
    ]
  },
   search_desk: {
    id: 'search_desk',
    text: [
      "The desk is clear except for a single, heavy, leather-bound ledger. The last several pages are not in the neat, looping script of a librarian, but in Kaspara's hurried, angular hand. She had turned it into a journal.",
      "One entry is circled. 'The old myths are useful fictions. The town elders tell a story of the Weeping Maiden constellation fleeing the Great Serpent. My readings of the stellar parallax show the Serpent's trajectory is actually gravitationally bound to the Silent King. The Maiden is an irrelevant variable, an echo. The truth is in the sequence: the ruler, the predator, the prey. A hierarchy of gravity, not fear.' This must be the key to the bookshelf lock.",
      "Another entry catches your eye: 'Caius from the boarding house claims to have seen the river move at night, coiling like a serpent of black glass. He's terrified. He might be the only one who truly understands the nature of the danger, even if he cloaks it in superstition. I have to find the second anchor point. The Anchor foundations are the oldest in town. It must be there. I'm running out of time. The background radiation is affecting my memory.'",
    ],
    addItem: "Librarian's Log",
    choices: [
      { text: "Her last thoughts point to the general store. I'll go there.", nextScene: 'investigate_store' },
      { text: "Now I know the code. I will solve the bookshelf puzzle.", nextScene: 'search_astronomy_section' },
      { text: "Caius knows more than he let on. I need to talk to him again.", nextScene: 'boarding_house_approach' },
    ]
  },
  descend_to_library_cellar: {
      id: 'descend_to_library_cellar',
      text: [
        "Following the logic from her journal—ruler, predator, prey—you place the books on the shelf: The Silent King, The Great Serpent, The Weeping Maiden. With a low, satisfying click, the entire bookshelf swings inward, revealing a dark stone staircase leading down into a colder, older silence.",
        "The air from the staircase is cold and smells of damp earth and ozone. The bookshelf swings shut above you with a heavy, final thud, plunging you into darkness. A faint, pale, blue-white light glows from below. You emerge into a small, circular stone chamber.",
        "It's exactly as you saw in the vision. Star charts with frantic notes are pinned to the walls. In the center of the floor, the complex symbol is drawn in luminous chalk, pulsing with a faint, otherworldly light.",
        "On a small table, an open journal lies next to a second, smaller astrolabe. The journal details her discovery: the river was an anchor, a physical conduit, tethering Vestige to this specific iteration of reality. And something, some external force, cut the rope.",
        "'Caius's family are jailors,' the last entry reads, the ink bled slightly as if from a tear. 'They worship the cage. They believe appeasement is safety. I believe in excision. The 'Sleeper' is not a god, it's a parasite, a cancer on the physics of this place. And I found a way to poison it. The amplifier at the dam was the first step. The second requires a resonance cascade to sever it completely. I hid the frequency key. One part in the heart of the machine, one part in the heart of the well.'"
      ],
      addItem: "Kaspara's Journal",
      choices: [
        { text: "Her work offers a different path: to fight back.", nextScene: 'kaspara_path_choice_start' },
        { text: "This is too dangerous. Caius's way might be the only way to survive.", nextScene: 'caius_path_choice' }
      ]
  },
  kaspara_path_choice_start: {
    id: 'kaspara_path_choice_start',
    text: [
        "You close her journal. Her plan was cold, logical, and terrifyingly ambitious. Her notes are meticulous, but one component is mentioned only in passing: a 'resonance calibrator', needed to attune the two parts of the frequency key before they could be joined.",
        "'I have taken the calibrator to the observatory,' a marginal note reads, scribbled in haste. 'The ambient resonance from the bedrock below the library interferes with its sensitivity. I need a clean reading of the new stellar dynamics before I proceed. The sky is lying to us now.'",
        "The path of Excision, of radical surgery, has a prerequisite. You must first go to her private observatory on the cliffs overlooking the town, a place to see the new, wrong stars."
    ],
    choices: [
        { text: "I will find the observatory.", nextScene: 'journey_to_observatory_start' },
    ]
  },
  caius_path_choice: {
    id: 'caius_path_choice',
    text: [
      "Kaspara's words are filled with a cold, intellectual certainty, the kind of brilliant arrogance that ignores consequences. Poisoning a god, even a parasitic one, felt like an act of suicidal hubris. Caius's methods, born from generations of survival, are steeped in fear and respect. His path is one of caution, of mending, not breaking.",
      "You leave Kaspara's workshop. The glowing symbol on the floor now seems like a warning, a diagram of a bomb. You must find Caius and accept his quest. Preserving Vestige, however haunted and broken it is, feels like the only sane option in a world that has lost its mind."
    ],
    choices: [
      { text: "Return to the boarding house and tell Caius I will help.", nextScene: 'return_to_caius_to_accept' }
    ]
  },
  return_to_caius_to_accept: {
    id: 'return_to_caius_to_accept',
    text: [
      "You find your way back to the boarding house cellar. Caius looks up from his wards, his face unreadable in the gloom. 'I have seen what Kaspara planned,' you say, the words feeling heavy and true. 'And I believe your way is the only way.'",
      "He studies your face for a long, silent moment, then nods slowly, a gesture of profound relief. 'The stargazer was brilliant, but she saw the world as a machine to be fixed. She did not understand that some things are not broken, merely sleeping. To choose preservation is the harder path. It requires patience, not force. It requires faith.'",
    ],
    choices: [
      { text: "Tell me what I must do.", nextScene: 'accept_caius_quest_start' }
    ]
  },
  investigate_store: {
    id: 'investigate_store',
    text: [
      "The front door of 'S. ANCHOR & SONS' opens into a large space filled with aisles of dusty goods. The air is thick with the smells of old wood, rusting metal, dried herbs, and the faint, sweet scent of decay.",
      "Unlike the library's curated silence, this place is frozen in a moment of interruption. A sack of flour is spilled on the floor, a white wound in the gloom. A checkerboard on a barrel has a game half-played, a silent, eternal stalemate. Everything is exactly as it was left when the river vanished and the world stopped turning.",
      "Kaspara's log mentioned the foundations. The cellar is the place to search. A heavy wooden door behind the main counter, reinforced with iron straps, probably leads to it."
    ],
     observables: [
        {
            keyword: "spilled on the floor",
            description: "The flour is a stark white slash across the dark, dusty floorboards. It is a soft, silent explosion, its edges feathered and delicate. A single, perfect handprint is preserved in the center of the spill, a gesture of shock or a desperate attempt to brace against a fall. It is the ghost of a final, ordinary moment."
        },
        {
            keyword: "checkerboard",
            description: "The red and black checkers are frozen mid-game, a silent, intellectual battle that will never be resolved. It is a perfect stalemate, neither side able to make a move. The pieces are thick with dust, as if the game has been waiting for centuries for a player to return."
        }
    ],
    choices: [
        { text: "Try the cellar door.", nextScene: 'store_cellar_door' },
        { text: "Search the main counter for a key or clue.", nextScene: 'search_store_counter' },
        { text: "Explore the owner's living quarters upstairs.", nextScene: 'explore_store_upstairs_first' },
    ]
  },
  explore_store_upstairs_first: {
    id: 'explore_store_upstairs_first',
    text: [
        "A narrow, steep staircase at the back of the store leads to the owner's apartment. The rooms are as frozen in time as the shop below: a half-eaten meal on a table, the food now a landscape of grey mold; a child's drawing of a sun over a blue, furiously scribbled river, taped to a wall.",
        "In a small, cluttered office, you find the owner's personal journal among a litter of invoices and shipping manifests.",
    ],
    choices: [
        { text: "Read the owner's journal.", nextScene: 'read_store_owner_journal' },
    ]
  },
  read_store_owner_journal: {
    id: 'read_store_owner_journal',
    text: [
      "'Caius came by again today,' the last entry reads, the handwriting growing shaky. 'Ranting about the wards, about the 'song' from the well. Said I needed to secure it better, that the old lock wasn't enough. He gave me a new padlock for the cellar door. I think the silence is getting to him. It's just an old well. Still, it gives me the creeps. I can hear it hum at night sometimes, a sound that gets inside your head. I left the key for the padlock in the flour bin. Safest place I could think of. No one would steal flour.'",
      "The journal confirms your suspicions and gives you a vital, dusty clue."
    ],
    addItem: "Shopkeeper's Journal",
    choices: [
        { text: "The flour bin. Then the cellar.", nextScene: 'search_grain_sacks_key' },
    ]
  },
  search_store_counter: {
    id: 'search_store_counter',
    text: [
      "The counter is made of dark, heavy oak, its surface worn into smooth valleys by generations of commerce. The cash register is open and empty. You find a sales ledger. The last page has a note written in a shaky, terrified hand.",
      "'Heard the singing again last night. From the cellar. The same song the river used to sing, but without the water. A capella. The first Anchor knew. He knew what he was building this town on top of. He wasn't a founder, he was a jailer.'",
      "Tucked beneath the ledger is a heavy, ornate iron key. It looks ancient, and feels strangely, unnaturally cold to the touch, a cold that seeps into your skin."
    ],
    addItem: 'Ornate Iron Key',
    choices: [
        { text: "Try the cellar door.", nextScene: 'store_cellar_door' },
    ]
  },
  store_cellar_door: {
    id: 'store_cellar_door',
    text: [
      "You approach the cellar door. It's secured by two locks, a testament to two different kinds of fear. A heavy, modern padlock has been added recently, a brute-force attempt at security. Beneath it is an ancient, inset keyhole, part of the door's original, ornate design.",
      "It seems you need two keys to open this door. A new fear laid on top of an old one."
    ],
    choices: [
        { text: "Unlock the door.", nextScene: 'store_cellar_door_open', requiresItem: ['Padlock Key', 'Ornate Iron Key'] },
        { text: "Search the main counter area again.", nextScene: 'search_store_counter' },
        { text: "Search the owner's living quarters upstairs.", nextScene: 'explore_store_upstairs_first' },
        { text: "Search the sacks of grain and flour.", nextScene: 'search_grain_sacks_key' },
    ]
  },
  search_grain_sacks_key: {
    id: 'search_grain_sacks_key',
    text: [
        "You move to the aisle with dry goods. You plunge your hand into the cool, fine powder of a flour sack, the sensation surprisingly pleasant. Your fingers close around a small, cold piece of metal. The key to the padlock.",
        "You now have what you need to open the cellar door and descend into the town's oldest secret."
    ],
    addItem: 'Padlock Key',
    choices: [
        { text: "Go to the cellar door.", nextScene: 'store_cellar_door' },
    ]
  },
  store_cellar_door_open: {
    id: 'store_cellar_door_open',
    text: [
        "You return to the cellar door with both keys. The modern key opens the padlock with a sharp, ugly click. The ornate iron key turns in the older lock with a deep, grinding sound of heavy, well-oiled tumblers moving for the first time in years.",
        "The door swings inward on protesting hinges, revealing steep stone steps leading down into a profound, breathing darkness. The air that comes up smells of wet stone, deep earth, and something metallic, like blood or rust."
    ],
    removeItem: 'Padlock Key',
    choices: [
        { text: "Descend into the store's cellar.", nextScene: 'descend_to_store_cellar' },
    ]
  },
  descend_to_store_cellar: {
    id: 'descend_to_store_cellar',
    text: [
      "The stone steps are slick with a strange, dark moisture that is not water. You descend into a large, vaulted cellar with walls made of massive, ancient, mortarless stones. This is not just a cellar; it's something foundational, something that predates the town itself.",
      "In the center of the room, a deep, circular well is cut into the stone floor. It's filled to the brim with a dark, motionless liquid that doesn't reflect any light—a perfect circle of absolute black. Around the well, the same symbol from the library is carved into the floor, but here it's part of the original construction, its lines worn smooth by the passage of centuries.",
      "On the far wall, shelves hold dozens of clay tablets covered in a wedge-shaped, cuneiform script. This cellar is a shrine. The foundation of the store is a prison for whatever lies in that well."
    ],
    choices: [
      { text: "Examine the well.", nextScene: 'examine_well' },
      { text: "Examine the clay tablets.", nextScene: 'examine_tablets' },
    ]
  },
  examine_well: {
    id: 'examine_well',
    text: [
      "You kneel at the edge of the well. The black liquid is completely opaque and still. A deep, primal, animal instinct screams at you not to touch it. It feels like an eye, a vast, unblinking, reptilian eye staring up at you from the center of the earth.",
      "And it is aware of you. The air grows thick, and you feel a pressure in your mind, a silent, expectant questioning."
    ],
    choices: [
        { text: "Focus your mind with the astrolabe. Use one mystery to probe another.", nextScene: 'examine_well_with_astrolabe', requiresItem: 'Alien Astrolabe' },
        { text: "Reach out and touch the liquid.", nextScene: 'touch_well_liquid' },
        { text: "Back away from the well.", nextScene: 'back_away_from_well' },
    ]
  },
  back_away_from_well: {
      id: 'back_away_from_well',
      text: [
        "You retreat from the well's edge, a cold sweat on your skin. Its silent, unblinking stare follows you. Whatever answers it holds are not worth the price of admission, the cost of whatever communion it is offering. The clay tablets on the far wall might offer a safer, more human path to understanding."
      ],
      choices: [
        { text: "Examine the clay tablets.", nextScene: 'examine_tablets' },
        { text: "Leave the cellar. This place is wrong. This is not for me.", nextScene: 'investigate_store' },
      ]
  },
  examine_well_with_astrolabe: {
    id: 'examine_well_with_astrolabe',
    text: [
      "You hold the astrolabe over the well, and its humming intensifies, the metal vibrating in your hand. The surface of the black liquid ripples, not with waves, but with shifting patterns of pure darkness. Images, concepts, flood your mind: the crushing pressure of the deep ocean, the cold, patient vacuum of space, the feeling of immense, slow, geological thought, a consciousness that thinks in millennia.",
      "The whispers from the astrolabe translate the well's presence into a concept you can grasp, a single, plaintive thought. 'The anchor is broken. The song is gone. I am thirsty.' The well is not the prison. It is the prisoner. And it is dying of thirst."
    ],
    choices: [
      { text: "It is a liar. The tablets warned of this. It is a predator.", nextScene: 'examine_tablets', requiresItem: 'Tablet Lore' },
      { text: "This being needs help, not a cage. I must understand what Kaspara did to it.", nextScene: 'investigate_library' },
    ]
  },
  examine_tablets: {
    id: 'examine_tablets',
    text: [
      "You move to the shelves. The clay tablets are heavy and cool, the dust on them so ancient it feels like part of the clay itself. The wedge-shaped script is alien, but as you focus on it, the symbols seem to form concepts in your mind directly, without the need for words, a language made of pure meaning.",
      "It's a warning, a story passed down through a civilization that no longer exists. The tablets tell of a 'traveler' from the stars that became entangled with the world's water, a parasite that feeds on reality itself. One tablet shows a multi-limbed, shadowy creature wrapped around a sphere, with a river flowing from the sphere directly into its mouth. The ancient people who wrote this could not destroy it, so they built a 'harmonic cage,' and used the constant, resonant flow of a river to sing it to sleep. They warn that to wake it is to unravel the world. To stop the song is to invite the silence that eats stars.",
      "This account paints Kaspara not as a savior, but as a fool who stumbled into a cosmic prison and decided to pick the lock."
    ],
    addItem: 'Tablet Lore',
    choices: [
        { text: "This entity must be contained. I must see if the well is the key.", nextScene: 'examine_well' },
        { text: "This changes everything. I need to find out what Kaspara was really trying to do.", nextScene: 'investigate_library' },
    ]
  },
  touch_well_liquid: {
    id: 'touch_well_liquid',
    text: [
        "You reach out, your hand trembling, and dip your fingers into the black liquid. It is not wet or cold. It is an absence of all sensation, a perfect void. Where your fingers enter the well, they simply cease to exist to you. Panic, pure and absolute, seizes you.",
        "You snatch your hand back. Your fingers are there, unharmed, but they tingle with a phantom numbness, as if they have been dipped in static. A single, clear, and deeply sad thought, not your own, settles in your mind: 'The anchor is broken. The song is gone. I am thirsty.'",
        "The well is not the prison. It is the prisoner."
    ],
    choices: [
        { text: "This being needs help, not a cage. I must understand what Kaspara did.", nextScene: 'investigate_library' },
        { text: "It is a liar. The tablets warned of this. I must find a way to reinforce its prison.", nextScene: 'boarding_house_approach', requiresItem: 'Tablet Lore' },
    ]
  },
  journey_to_dam_start: {
    id: 'journey_to_dam_start',
    text: [
      "You walk upstream along the cracked and dusty riverbank. The silence here is different, punctuated by the faint, dry crunch of your own footsteps on the baked earth. The sun is a relentless, white eye in a bleached sky.",
      "The walk is longer than it looks. The old road to the dam has collapsed in places, forcing you to navigate crumbling sections of the bank where the earth is still giving up its memory of water. After an hour, you come across a small, derelict fisherman's hut, listing to one side as if exhausted.",
    ],
    choices: [
      { text: "Investigate the fisherman's hut.", nextScene: 'fishermans_hut' },
      { text: "Continue on to the dam. It's a distraction from my purpose.", nextScene: 'continue_to_dam' },
    ]
  },
  fishermans_hut: {
    id: 'fishermans_hut',
    text: [
        "The hut is a simple, one-room shack, filled with the ghostly remnants of a simple life. Inside, a fishing knife with a bone handle is stuck into a small wooden table, pinning a photograph to the wood. It's a picture of a smiling man holding a massive, silver fish, the river a vibrant, impossible blue behind him.",
        "Scratched into the wall next to a cot, over and over again, is a single, repeating phrase: 'I CAN STILL HEAR IT SINGING I CAN STILL HEAR IT SINGING'. A testament to a man driven mad by the river's sudden silence, or by the new, terrible sound that replaced it."
    ],
    choices: [
        { text: "Take the fishing knife.", nextScene: 'take_fishing_knife' },
        { text: "Leave the hut. There is nothing more here but sorrow.", nextScene: 'continue_to_dam' },
    ]
  },
  take_fishing_knife: {
    id: 'take_fishing_knife',
    text: [
        "You pull the knife from the table. It's old but well-made, the steel still sharp, the bone handle worn smooth by a hand that knew its work. It feels like a practical, honest tool from the old world, a world that made sense."
    ],
    addItem: 'Fishing Knife',
    choices: [
        { text: "Continue on your journey to the dam.", nextScene: 'continue_to_dam' },
    ]
  },
  continue_to_dam: {
    id: 'continue_to_dam',
    text: [
        "You continue your trek. The huge, seamless, concrete form of the Vestige hydroelectric dam rises to dominate the horizon. It was built to tame a powerful, living force. Now, it is a tombstone on an empty grave, a monument to a failed promise of control.",
        "A chain-link fence, topped with barbed wire, surrounds the facility. A section of it has been torn down, the thick metal posts bent and twisted as if by a tremendous, inhuman, and deeply angry force."
    ],
    choices: [
      { text: "Enter through the breach in the fence.", nextScene: 'enter_dam_facility' },
    ]
  },
  enter_dam_facility: {
    id: 'enter_dam_facility',
    text: [
      "You step through the mangled fence into a zone of profound silence. A small, brick control building stands near the main dam, its windows shattered inward. The heavy metal door is ajar, its frame warped as if from a powerful explosion from within.",
      "Inside, the control room is devastated. Control panels are smashed, their glass faces like frozen waterfalls. Papers are scattered across the floor, mixed with concrete dust and the faint smell of burnt electronics. It looks like the result of a single, violent, and very precise energy blast."
    ],
    choices: [
      { text: "Examine the papers for a logbook.", nextScene: 'read_dam_log' },
      { text: "Inspect the main dam wall for a way down to its base.", nextScene: 'inspect_dam_wall' },
    ]
  },
  read_dam_log: {
    id: 'read_dam_log',
    text: [
      "You find a large engineering logbook lying open on a central console, its pages rifled by the blast. Most entries are about routine maintenance. The last few pages, however, tell a different story. The chief engineer, a man named Theron, grew more erratic.",
      "He writes of 'anomalous harmonic resonance' from the bedrock. He mentions Kaspara visiting, asking frantic, brilliant, and terrifying questions. 'She sees the world as a faulty equation and is willing to erase the board to solve it.'",
      "The final entry is a hasty sentence. 'It's not that the water is gone. It's that it's all going to the same place. She opened a drain at the bottom of the world.' A technical note is scrawled in the margin: 'Emergency power restart requires sequential bypass. Follow primary flow: Intake (A), Sluice (C), Dynamo (B), Grid (D). Any other order will trip the system.'"
    ],
    addItem: "Theron's Logbook",
    choices: [
      { text: "The log mentions a drain. I need to get to the base of the dam.", nextScene: 'inspect_dam_wall' },
      { text: "This confirms Kaspara's involvement. The library is more important than ever.", nextScene: 'investigate_library' },
    ]
  },
  inspect_dam_wall: {
    id: 'inspect_dam_wall',
    text: [
        "You exit the wrecked control room and walk to the edge of the colossal dam wall. A steel maintenance ladder is bolted to the sheer concrete face, descending into the dizzying emptiness of the dry reservoir. The rungs are cold and hum with a faint, deep vibration that you feel in your bones.",
        "The descent is long and nerve-wracking, the world shrinking below you. At the bottom, you stand on the cracked earth that was once hundreds of feet underwater, surrounded by the ghosts of immense pressure.",
        "An outflow gate, a massive circular portal of rusted iron, is set into the base of the dam. It is slightly ajar, and a strange, faint, violet light pulses from the darkness within, a slow, sick heartbeat."
    ],
    choices: [
        { text: "Enter the outflow gate.", nextScene: 'enter_outflow_gate' },
    ]
  },
  enter_outflow_gate: {
    id: 'enter_outflow_gate',
    text: [
        "You squeeze through the gap into a small, sealed chamber. This wasn't part of the dam's original design. The walls are covered in strange, jury-rigged electronics, all smashed and blackened. In the center of the room is a single metal chair with a figure in it.",
        "It is, or was, Theron, the engineer. His body is a desiccated husk, a piece of human jerky, as if every drop of moisture was violently wrenched from him in a single, silent instant.",
        "His personal journal lies on the floor at his feet, miraculously untouched by the blast."
    ],
    choices: [
        { text: "Read Theron's journal.", nextScene: 'read_theron_journal' },
    ]
  },
  read_theron_journal: {
    id: 'read_theron_journal',
    text: [
        "You carefully open the brittle journal. Theron's final entries document his work with Kaspara, how he helped her build a 'resonant amplifier' using the dam's turbines. She believed she could use it to open a controlled gateway to what she called the 'in-between,' a way to replenish the river's flow.",
        "He came to believe she was horribly, catastrophically mistaken. The 'source' was a living thing, and her amplifier was not a key, but a drill boring into its flesh. He tried to reverse it. His last words are chilling.",
        "'She thought she was opening a faucet. She's pulled the plug on the whole bathtub. The resonance... it's not draining the water. It's draining the world. It's draining time itself. I have to shut it down...'"
    ],
    choices: [
        { text: "This technology is a dead end. A monument to failure. I must pursue another path.", nextScene: 'end_dam_path' }
    ]
  },
  end_dam_path: {
      id: 'end_dam_path',
      text: [
        "You leave the engineer's tomb, climbing back up the long ladder into the unforgiving sun. The dam is a monument to a catastrophic failure. Theron's path led only to dust. Kaspara's calculations were wrong. There must be another way, a different kind of knowledge.",
        "You stand once more on the edge of the chasm, the dead town behind you. The other leads you have, the whispers of Caius's faith and the secrets of the ancient well, are all that remain."
      ],
      choices: [
        { text: "Confront Caius at the boarding house.", nextScene: 'boarding_house_approach' },
        { text: "Explore the ancient well at the general store.", nextScene: 'investigate_store' },
      ]
  },
  journey_to_wreck_start: {
    id: 'journey_to_wreck_start',
    text: [
      "You have chosen to seek the 'sorrowful stone'. You make your way down into the riverbed. The air is hotter here, trapped between the high walls of the chasm. The scale of everything is distorted and alien. Boulders are the size of small houses. The stone bridge soars high overhead, a man-made constellation.",
      "Walking on the floor of the Lethe is like walking on the surface of another planet. The silence is deeper here, as if the chasm itself absorbs all sound, crushing it into nothing.",
      "Further down, half-buried in the silt, is the skeletal frame of a great structure. It's the remains of an old paddle steamer, its wooden ribs exposed like the carcass of a giant, prehistoric creature that has washed ashore and died."
    ],
    choices: [
        { text: "Investigate the paddle steamer wreck.", nextScene: 'investigate_wreck' },
        { text: "Look for the glinting object you saw from the window.", nextScene: 'outside_to_riverbed' },
    ]
  },
  investigate_wreck: {
    id: 'investigate_wreck',
    text: [
      "You approach the wreck of the 'St. Elmo's Fire'. Time and the forgotten river have stripped it down to its bones. The great paddle wheel is half-buried, its blades like broken teeth. The main deck has collapsed into the hull, creating a dark, cavernous space within.",
      "A strange sense of sadness hangs over the wreck, a specific and potent sorrow that is more than just age and decay. This place feels haunted, not by ghosts, but by a single, terrible event.",
      "A faint, rhythmic tapping sound comes from deep within the hull. It is slow and deliberate, like a patient prisoner signaling for help."
    ],
    choices: [
        { text: "Enter the hull of the wreck.", nextScene: 'enter_wreck_hull' },
    ]
  },
  enter_wreck_hull: {
    id: 'enter_wreck_hull',
    text: [
      "You climb into the shadowy interior of the hull. The air is thick with the smell of rot and ancient, wet silt. The tapping is louder here, echoing off the curved walls. It seems to be coming from the captain's cabin at the stern.",
      "The door to the cabin is gone, rotted away to nothing. Inside, a small, spectral blue light pulses in time with the tapping. It comes from a single, perfectly preserved sextant lying on the floor, an object of impossible cleanliness in this world of decay.",
      "As you step into the cabin, the tapping stops. The light from the sextant steadies. On the far wall, a frantic message is scratched into the wood: 'THE STARS ARE WRONG. IT SINGS FROM THE WATER. WE ARE ALL ADRIFT.'"
    ],
    choices: [
        { text: "Take the sextant.", nextScene: 'take_sextant' },
    ]
  },
  take_sextant: {
    id: 'take_sextant',
    text: [
      "You pick up the sextant. It's impossibly heavy, made of a material that feels like cold stone, not metal. Looking through the eyepiece, you don't see the cabin wall. You see a roiling, chaotic starscape of impossible colors, a vision of a universe having a seizure.",
      "A woman's voice whispers in your mind, weary and sad and ancient. 'Another pilot. Do you seek a course through this storm, or are you just another piece of wreckage?'",
      "The sextant is not for navigating the sea. It's for navigating between realities. And someone is on the other end of the line."
    ],
    addItem: 'Navigator Sextant',
    choices: [
        { text: "Who are you?", nextScene: 'ask_navigator_voice' },
        { text: "Where are you?", nextScene: 'ask_navigator_location' },
    ]
  },
  ask_navigator_voice: {
    id: 'ask_navigator_voice',
    text: [
        "The voice comes back as a fully formed thought, a download of information into your head. 'I am the Navigator. I charted the course this world followed through the currents of reality. My vessel... is what your people called a river. I am its consciousness, its guide, its pilot.'",
        "The starscape through the eyepiece shifts into a shimmering, abstract shape that looks like a shattered map. 'Your friend, the stargazer, she did not cut the anchor. She tried to board a ship that was already sinking. She is with me now. Another piece of wreckage, another ghost in my machine.'"
    ],
    choices: [
        { text: "What do you mean, sinking?", nextScene: 'ask_navigator_sinking' },
        { text: "Kaspara is alive?", nextScene: 'ask_navigator_kaspara' },
    ]
  },
  ask_navigator_sinking: {
    id: 'ask_navigator_sinking',
    text: [
        "'This reality,' the Navigator communicates, the concept blooming in your mind, 'is an eddy in a larger current. Stable, but isolated. It's connected to the greater ocean of possibilities by conduits, like your river. But a wave of un-creation, a void, is passing through this sector. My conduit was collapsing. I was trying to disconnect, to save my ship, when your stargazer drilled into my hull.'",
        "'She thought she was opening a new channel to another ocean. Instead, she tore the wound wider. The river did not drain away. It was erased by the storm. This town is now an island at the edge of a void, its shoreline eroding with every passing moment.'"
    ],
    choices: [
        { text: "Can it be fixed? Caius and Kaspara have plans.", nextScene: 'ask_navigator_other_plans' },
        { text: "What is your plan?", nextScene: 'ask_navigator_plan' },
    ]
  },
  ask_navigator_kaspara: {
    id: 'ask_navigator_kaspara',
    text: [
      "'Alive is a limited, primitive word,' the Navigator returns, with a sense of deep, cosmic pity. 'Her consciousness was caught in the un-making when the conduit collapsed. She is... data. A memory. An echo trapped in my shattered navigation room. I can feel her regret, her flawed calculations running in an endless, agonizing loop.'",
      "A new image floods your mind: Kaspara, made of pure light, floating in a sea of pure information, surrounded by glowing lines of code and star charts. She is frantically trying to rebuild something that has been atomized. She doesn't seem to see you.",
      "'She seeks a new anchor,' the Navigator explains. 'Something with enough metaphysical weight to moor this reality before the storm tears it apart completely. She believes it can be found. I believe she is only creating a larger target for the storm to hit.'"
    ],
    choices: [
        { text: "Where can I find this anchor?", nextScene: 'ask_navigator_anchor' },
        { text: "What do you believe should be done?", nextScene: 'ask_navigator_plan' },
    ]
  },
  ask_navigator_other_plans: {
    id: 'ask_navigator_other_plans',
    text: [
      "'The Keeper's lullaby?' The Navigator's thought is tinged with a weary pity. 'He is trying to keep a single candle lit in a hurricane. A noble, beautiful, and utterly futile gesture.'",
      "'The Stargazer's fortress?' A sense of deep frustration. 'She is building a sandcastle against a tsunami. Her 'anchor' will only make the collapse more spectacular when the wave finally comes.'",
      "'Neither of them understands the scale of the storm. They are trying to patch a hull that has already been breached and is taking on water from a hole the size of a sun. The only question now is what to do about the passengers.'"
    ],
    choices: [
      { text: "What is your plan, then?", nextScene: 'ask_navigator_plan' },
    ]
  },
  ask_navigator_plan: {
    id: 'ask_navigator_plan',
    text: [
        "'The eddy cannot be saved. The only logical course is evacuation. Let this wounded reality sink, and save the consciousnesses that can be ferried away. The town's Sleeper... your Caius's caged god... it is a battery. An engine of immense, untapped power. With its energy, I could plot a course for a new shore, a stable reality.'",
        "'But to do so would be to unplug the life support of this entire place. It would be consumed. Utterly. A sacrifice of place to save the people. A terrible, but necessary, calculation.' This is the third philosophy: Evacuation. A brutal, pragmatic, and perhaps merciful choice."
    ],
    choices: [
        { text: "I will not sacrifice this town. I will find Kaspara's anchor.", nextScene: 'ask_navigator_anchor' },
        { text: "This is the only logical choice. How do we use the Sleeper?", nextScene: 'navigator_plan_accept_start' },
    ]
  },
  navigator_plan_accept_start: {
    id: 'navigator_plan_accept_start',
    text: [
        "The Navigator's consciousness focuses, becoming sharp and precise. 'The cage must be shattered. Kaspara's amplifier at the dam is the key, but its failsafes are robust. Theron, the engineer, in his final, panicked moments, implemented a final, physical lockout that requires a master keycard to bypass.'",
        "'In his terror, Theron fled. He took the only working vehicle in town and the keycard. He did not make it far. The road beyond Vestige collapsed into the void. You will find his final resting place, and the keycard, in the collapsed highway tunnel. Be careful, Pilot. The storm erodes the edges of the world first. That tunnel is not a stable place.'"
    ],
    choices: [
        { text: "I will find the tunnel and retrieve the keycard.", nextScene: 'journey_to_tunnel_start' },
    ]
  },
  ask_navigator_anchor: {
      id: 'ask_navigator_anchor',
      text: [
          "'The stargazer's calculations point to a convergence of deep earth energies. She called it the 'heart-stone'. A stone that beats with the world's own pulse. It is not a specific object, but a potential that could be awakened in a stone of sufficient age, memory, or sorrow.'",
          "The Navigator's words echo Caius's, but from a perspective of quantum physics, not folklore. 'He seeks to use it as a sedative. She sought to use it as a shield. The question is, can you find one, and what will you do with it? What purpose will you give it when you hold it in your hands?'"
      ],
      choices: [
          { text: "You have given me a new perspective. I will continue my search.", nextScene: 'end_navigator_conversation' },
      ]
  },
  end_navigator_conversation: {
    id: 'end_navigator_conversation',
    text: [
        "You lower the sextant. The Navigator's voice recedes, leaving you in the silent, sorrowful hull of the shipwreck. You are no longer just a person with amnesia. You are a player in a cosmic drama, armed with three conflicting, mutually exclusive truths.",
        "Caius, the Keeper, who wants to save the world through Preservation.",
        "Kaspara, the Scientist, whose ghost is trying to save it through Excision.",
        "The Navigator, the Guide, who wants to save the people through Evacuation.",
        "All their plans seem to require the same locations and artifacts, but for vastly different, and apocalyptic, ends. The choice is yours. The burden is yours."
    ],
    choices: [
        { text: "My path is clearer now. I must choose a philosophy and act.", nextScene: 'choose_philosophy' }
    ]
  },
  choose_philosophy: {
    id: 'choose_philosophy',
    text: [
      "You stand in the silence of the riverbed, the weight of three impossible choices settling on you like a shroud. The fate of Vestige, and perhaps the world itself, rests on the path you walk from here. Who do you believe? The priest, the scientist, or the pilot?"
    ],
    choices: [
      { text: "I believe Caius. Preservation is the only way.", nextScene: 'return_to_caius_to_accept' },
      { text: "I believe Kaspara. The parasite must be excised.", nextScene: 'kaspara_path_choice_start' },
      { text: "I believe the Navigator. Evacuation is the only logical option.", nextScene: 'navigator_plan_accept_start' },
    ]
  },
  end_leave: {
      id: 'end_leave',
      text: [
          "You turn from the chasm and the silent town. The name Lysander, the ghost-woman Kaspara, the sleeping god—they are weights you refuse to carry. This place is a crypt, its questions carved on tombstones, and you will not stay for the burial. You choose ignorance. You choose freedom.",
          "The dusty road leading out of the valley is a straight, unpitying line under a white sun. Each footstep is a choice, a deliberate act of forgetting. You do not look back.",
          "Some stories are not meant to be read to the end, only survived."
      ],
      choices: [],
      isEnd: true,
  },
  // ===============================================
  // LOCATION: THE POST OFFICE (Flavor)
  // ===============================================
  post_office_approach: {
    id: 'post_office_approach',
    text: [
      "The Vestige Post Office is a small, humble brick building, its civil authority undermined by a shuttered window and a flag rope that taps a frantic, soundless rhythm against its metal pole in a wind you cannot feel.",
      "The brass letter-slot is green with tarnish, a sealed mouth. This was a place of connections, of messages sent and received across distances. Now, it is a museum of interrupted conversations, of words that never reached their destination."
    ],
    choices: [
      { text: "Try the door.", nextScene: 'post_office_interior' },
      { text: "Return to the crossroads.", nextScene: 'town_crossroads' },
    ]
  },
  post_office_interior: {
    id: 'post_office_interior',
    text: [
      "The door is unlocked. It swings open into a single room thick with the smell of old paper, ink, and the sharp ozone scent of a final, panicked day. Canvas mailbags have vomited their contents across the floor in a final act of surrender. A calendar on the wall is frozen on a Tuesday, two weeks ago, a day like any other that became the last day.",
      "Hundreds of letters lie scattered, a pale carpet of last words, final bills, and forgotten pleasantries. The postmaster's desk sits behind a wooden counter, a small, ordered island in the chaos, a testament to a duty upheld until the very end."
    ],
    choices: [
      { text: "Look through the scattered letters on the floor.", nextScene: 'read_letters' },
      { text: "Check the postmaster's desk.", nextScene: 'post_office_desk' },
    ]
  },
  read_letters: {
    id: 'read_letters',
    text: [
      "You kneel and sift through the silent, stillborn conversations. Most are mundane, but you pull three from the chaos that seem to speak of the town's final days.",
      "The first is a child's drawing of a stick-figure family under a bright yellow sun. A note is scrawled in purple crayon: 'Dear Grandma, the river is singing the wrong song. Mommy says its just the dam but it sounds like crying. We are going for a long drive. Love, Zosime.'",
      "The second is an unsent draft, crumpled into a tight ball. 'Marlena,' it begins, the writing sharp and angry, 'It's not just the silence. It's the weight of it. People are... thinning out. Their eyes are getting darker. I saw Caius's brother, Joseph Mephisto, drawing those spirals in the dirt again. This town is forgetting how to be a town. I'm packing a bag tonight. Don't try to stop me.'",
      "The third is sealed, but addressed to Dr. Orinthia. You open it. 'Orinthia,' it reads, 'You asked about shared symptoms. My whole congregation has the same nightmare. They dream of a great, dark thirst beneath the town. They wake up with dirt in their mouths. God has turned His face from Vestige. We are in a land of unseen, silent prophets.' It is signed by the pastor of the church on the hill.",
    ],
    addItem: "Postmaster's Draft",
    choices: [
      { text: "These stories are ghosts. I'm done here.", nextScene: 'town_crossroads' },
      { text: "I should still check the desk.", nextScene: 'post_office_desk' },
    ]
  },
  post_office_desk: {
    id: 'post_office_desk',
    text: [
      "The desk is neat, a testament to a man who kept order while the world dissolved around him. A blotter, an inkwell, a brass postal scale. Tucked under the blotter is a single, unstamped letter addressed to the postmaster himself. It's from Kaspara.",
      "'Mr. Orban,' it reads, in her precise, scientific script, 'Please hold my mail. I will be conducting sensitive research at the observatory for the foreseeable future. The town's ambient resonance is becoming... disruptive to my instruments, and my thoughts.'",
      "It confirms she knew something was fundamentally wrong with the town itself, long before the river vanished. She was not just studying the river; she was studying the silence."
    ],
    choices: [
      { text: "Leave the post office.", nextScene: 'town_crossroads' },
    ]
  },
  // ===============================================
  // LOCATION: THE DOCTOR'S OFFICE (New Puzzle)
  // ===============================================
  doctors_office_approach: {
    id: 'doctors_office_approach',
    text: [
      "The brass shingle reads 'Dr. Orinthia'. The paint on the door is peeling, but the windows are clean, showing only a distorted reflection of the dead street. The place exudes failed authority, of a science that had no answers for the town's final, metaphysical sickness."
    ],
    choices: [
      { text: "Try the door.", nextScene: 'doctors_office_interior' },
      { text: "Return to the crossroads.", nextScene: 'town_crossroads' },
    ]
  },
  doctors_office_interior: {
    id: 'doctors_office_interior',
    text: [
      "The door opens to the faint, clinical smell of antiseptic buried under a thick blanket of dust. The waiting room chairs are in neat, expectant rows. A generic painting of a serene coastline hangs crookedly on the wall, a cruel joke in a town that has forgotten water.",
      "The door to the inner office is ajar. Through it, you can see patient files pulled from their shelves and scattered. A heavy steel medical cabinet, for personal research, stands locked against the far wall."
    ],
    choices: [
      { text: "Examine the patient files.", nextScene: 'examine_patient_files' },
      { text: "Look in the examination room.", nextScene: 'examination_room' },
      { text: "Examine the locked medical cabinet.", nextScene: 'locked_medical_cabinet' },
    ]
  },
  examine_patient_files: {
    id: 'examine_patient_files',
    text: [
      "You kneel among the scattered records. Most are mundane, but you find a few from the last recorded weeks of Vestige.",
      "File 1: A fisherman. 'Patient reports auditory hallucinations. Describes it as 'whispering from the mud.' Complains of severe insomnia, states 'the Quiet is too loud.' Prescribed a sedative.'",
      "File 2: A teacher. 'Presents with extreme anxiety. Describes a 'shared nightmare' among several of her students, involving a 'man made of wet roots and fish bones.' Believes it to be contagious hysteria.'",
      "File 3: Joseph Mephisto. 'Caius brought him in. Joseph is non-verbal but obsessive, drawing a complex spiral symbol. Caius insists it's a 'ward.' Patient exhibits extreme phonophobia, a terror of all sound.'",
      "File 4: Self-Analysis. 'The dream persists. The thirst. The drowning in dust. The pastor says look to Job 28:11 for answers about the binding of the floods. I say look to the silt sample. The answer is in the medium, not the heavens.'",
    ],
    addItem: "Dr. Orinthia's Notes",
    choices: [
      { text: "The whole town was sick. I'll check the examination room.", nextScene: 'examination_room' },
      { text: "This is enough. I'm leaving.", nextScene: 'town_crossroads' },
    ]
  },
  examination_room: {
    id: 'examination_room',
    text: [
      "The small room is sterile and cold. An examination table with its white paper sheet is slightly torn. A glass cabinet of medical instruments is shattered. On a small steel tray, a syringe lies next to a vial of dark, viscous liquid. A handwritten label on the vial reads: 'Sedative Sample - Lethe River Silt Extract - FOR ANALYSIS ONLY.' A note next to it says, 'It's not a contamination. It's a medium. It's transmitting something. A signal.'",
      "On a small desk in the corner, a heavy, leather-bound Bible sits, clearly well-used."
    ],
    addItem: 'Silt Sample Vial',
    choices: [
      { text: "Examine the doctor's Bible.", nextScene: 'examine_bible' },
      { text: "Synthesize the sedative.", nextScene: 'synthesize_sedative', requiresItem: ['Silt Sample Vial', "Dr. Orinthia's Research"] },
      { text: "Leave the doctor's office.", nextScene: 'town_crossroads' },
    ]
  },
  locked_medical_cabinet: {
    id: 'locked_medical_cabinet',
    text: [
      "You examine the heavy steel cabinet. A three-digit combination lock secures it. A small, tarnished plaque reads 'Personal Research - Orinthia.' This is where she kept her real work, her secrets.",
      "You need a three-digit code. The scattered files and notes in this office must hold the key."
    ],
    choices: [
        { text: "Try combination 2-8-11.", nextScene: 'cabinet_unlocked' },
        { text: "I need to find the combination.", nextScene: 'doctors_office_interior' },
    ]
  },
  examine_bible: {
    id: 'examine_bible',
    text: [
      "You open the doctor's Bible. It's filled with annotations from a desperate man attempting to reconcile faith with a terrifying scientific reality. A single passage is bracketed in red ink, the one mentioned in his notes: Job 28:11.",
      "The verse reads: 'He bindeth the floods from overflowing; and the thing that is hid bringeth he forth to light.' Voss has circled the chapter and verse numbers: 28 and 11. He's drawn a line between them, then written '2... 8... 11...' But the lock is three digits.",
      "You look closer. In his self-analysis file, he mentioned 'the medium, not the heavens.' Perhaps the code isn't the verse itself, but the *location* of the verse. You realize the combination must be the numbers themselves: 2-8-1-1. But there are only three tumblers. A desperate man's shorthand? 2... 8... 11. Maybe it's not literal. Maybe it's simpler. Job 28, verse 11. A three-digit number, 2-8-11, is not possible. You re-read his note. 'Job 28:11'. What if it's the numbers themselves, concatenated or combined? A three digit code... maybe the first number, then the second two? 2-8-11... 281? 811? You try to think like a man losing his mind, grasping for patterns. The note in his file is the key: 'The pastor says look to Job 28:11'. The numbers must be it. You have an idea."
    ],
    choices: [
      { text: "I think the code is 281. The chapter and the first digit of the verse.", nextScene: 'cabinet_unlocked_281' },
      { text: "Maybe it's simpler. The first digit of each number? 2-8-1.", nextScene: 'cabinet_unlocked_281' },
      { text: "Now I can open the cabinet.", nextScene: 'locked_medical_cabinet' },
    ]
  },
    cabinet_unlocked_281: {
    id: 'cabinet_unlocked_281',
    text: [
      "You dial the combination 2-8-1. The lock clicks open. Inside is a single, thick manila folder.",
      "It contains Dr. Orinthia's unsent paper, her grand, terrifying theory. She describes the 'Sleeper' not as a god, but as a 'macro-organism hibernating in a pocket dimension, with the river as its primary nutrient exchange membrane.' She theorized the silence was a symptom of its starvation. She also included a meticulously detailed chemical formula for a powerful neuro-sedative, designed to mimic the river's 'lullaby' on a chemical level and induce a deeper, less troubled state of hibernation. 'A chemical cage,' she called it."
    ],
    addItem: "Dr. Orinthia's Research",
    choices: [
      { text: "This is a scientific path to Caius's solution. I can make this sedative.", nextScene: 'examination_room' },
      { text: "Leave the office with this new knowledge.", nextScene: 'town_crossroads' },
    ]
  },
  synthesize_sedative: {
    id: 'synthesize_sedative',
    text: [
      "You take Dr. Orinthia's research and the silt sample to the examination room. The formula calls for several common chemicals you find in a supply closet. Following her precise instructions, you use the medical equipment to carefully synthesize a dose of the neuro-sedative. You load it into a single, sealed syringe.",
      "This is a weapon of peace, a way to soothe a nightmare. It feels incredibly dangerous and profoundly hopeful."
    ],
    removeItem: 'Silt Sample Vial',
    addItem: 'Silt Sedative',
    choices: [
        { text: "Leave the doctor's office.", nextScene: 'town_crossroads' },
    ]
  },
   // ===============================================
  // LOCATION: THE SCHOOLHOUSE (New)
  // ===============================================
  schoolhouse_approach: {
    id: 'schoolhouse_approach',
    text: [
      "You take the side street leading to the town's abandoned schoolhouse. It's a single-story wooden building, its white paint peeling to reveal the grey, silvered wood beneath, a slow surrender to the elements. A single swing on the rusted play-set outside moves with a slow, rhythmic creak, pushed by a wind that doesn't touch your skin.",
      "The silence here feels different. Not watchful, not sorrowful, but expectant. The silence of a classroom waiting for a bell that will never ring. The front doors, sized for children, are slightly ajar."
    ],
    choices: [
      { text: "Enter the schoolhouse.", nextScene: 'schoolhouse_interior' },
      { text: "The sound of that swing is unsettling. I'll return to the crossroads.", nextScene: 'town_crossroads' },
    ]
  },
  schoolhouse_interior: {
    id: 'schoolhouse_interior',
    text: [
      "You push the small door open and step inside. The air is thick with the smell of chalk dust, old paper, and something faintly sweet, like spilled juice that has long since fermented. The main room is a single, large classroom, filled with small wooden desks and chairs, all coated in a uniform layer of dust.",
      "On the walls, children's drawings are taped up in neat rows. A large blackboard at the front of the room is covered in a teacher's looping cursive. In the center of the room, a set of wooden alphabet blocks has been scattered as if from a suddenly abandoned game."
    ],
    choices: [
      { text: "Examine the children's drawings.", nextScene: 'schoolhouse_drawings' },
      { text: "Read the chalkboard.", nextScene: 'schoolhouse_chalkboard' },
      { text: "Look at the alphabet blocks.", nextScene: 'schoolhouse_alphabet_blocks' },
    ]
  },
  schoolhouse_drawings: {
    id: 'schoolhouse_drawings',
    text: [
      "You look at the drawings. The ones on the left are cheerful, typical children's art: smiling suns, boxy houses, stick-figure families. But as you move to the right, the art changes. The suns are black. The river is drawn as a thick, dark serpent with red eyes.",
      "The last few drawings are almost identical. They depict tall, thin, featureless black figures standing among the houses of Vestige. The stick-figure children are not playing; they are running, their mouths drawn as perfect, screaming circles. The children saw the Listeners long before the adults did."
    ],
    choices: [
      { text: "The chalkboard might explain this.", nextScene: 'schoolhouse_chalkboard' },
      { text: "This is a gallery of fear. I'm done looking.", nextScene: 'schoolhouse_interior' },
    ]
  },
  schoolhouse_chalkboard: {
    id: 'schoolhouse_chalkboard',
    text: [
      "You approach the blackboard. The date in the top corner is from the day before the river vanished. Underneath, a local children's rhyme is written out, a lesson in phonics that has become a prophecy.",
      "'When the river runs dry / And the Quiet is king / A, B, C, D / What will the silence bring? / E, F, G... / Listen close and you'll see / The heart of the town / Is spelled with a K-E-Y.'",
      "Below the rhyme, the teacher has written, 'PRACTICE YOUR LETTERS.' It's a clue. A simple, childish clue in the heart of a cosmic mystery."
    ],
    choices: [
      { text: "A key... I should look at the blocks.", nextScene: 'schoolhouse_alphabet_blocks' },
      { text: "The teacher's desk. The answer must lead there.", nextScene: 'schoolhouse_teacher_desk_locked' },
    ]
  },
  schoolhouse_alphabet_blocks: {
    id: 'schoolhouse_alphabet_blocks',
    text: [
      "You kneel among the scattered wooden blocks. Each has a letter carved and painted on its faces. They feel cool and solid in your hand, simple toys from a vanished world. According to the rhyme, you need to find three specific letters.",
      "You see the 'K' block peeking out from under a small desk. You find the 'E' block near the chalkboard. But the 'Y' is nowhere to be seen in the main pile. It must have been put somewhere else."
    ],
    choices: [
      { text: "Search the children's cubbies for the last block.", nextScene: 'schoolhouse_find_y_block' },
      { text: "Give up on the puzzle for now.", nextScene: 'schoolhouse_interior' },
    ]
  },
  schoolhouse_find_y_block: {
    id: 'schoolhouse_find_y_block',
    text: [
      "You search the small wooden cubbies against the back wall. In a cubby marked with the name 'Zosime', you find the 'Y' block, tucked carefully inside a small, knitted mitten.",
      "You now have the three letters: K, E, Y. You have the answer to the rhyme."
    ],
    addItem: "Alphabet Blocks",
    choices: [
      { text: "Go to the teacher's desk.", nextScene: 'schoolhouse_teacher_desk_locked' },
    ]
  },
  schoolhouse_teacher_desk_locked: {
    id: 'schoolhouse_teacher_desk_locked',
    text: [
      "You approach the large, oak teacher's desk at the front of the room. It's the only object in the room not covered in dust; it seems to have been wiped clean recently. The central drawer has a small, unusual lock with three rotating tumblers, each showing letters of the alphabet instead of numbers.",
      "The rhyme, the blocks... it all leads here."
    ],
    choices: [
      { text: "Spell out the word K-E-Y on the tumblers.", nextScene: 'schoolhouse_desk_unlocked', requiresItem: "Alphabet Blocks" },
      { text: "I don't have all the letters yet.", nextScene: 'schoolhouse_alphabet_blocks' },
    ]
  },
  schoolhouse_desk_unlocked: {
    id: 'schoolhouse_desk_unlocked',
    text: [
      "You turn the lettered dials, spelling out the word 'KEY'. With a soft click, the lock disengages. The drawer slides open silently.",
      "Inside, there is only a single, folded sheet of paper. It's a letter from the teacher, its handwriting a frantic, terrified scrawl."
    ],
    removeItem: "Alphabet Blocks",
    choices: [
      { text: "Read the teacher's note.", nextScene: 'schoolhouse_read_note' },
    ]
  },
  schoolhouse_read_note: {
    id: 'schoolhouse_read_note',
    text: [
      "'Whoever finds this,' the note begins, 'please know that I did my best. The dreams started a week ago. Every child, the same dream: a man made of mud and whispers who wanted to 'collect' their voices. Zosime said the river was crying. They started drawing pictures of him. They weren't sleeping. They were terrified.'",
      "'The authorities did nothing. Dr. Orinthia gave me sedatives. The Pastor told me to pray. But the drawings got worse. Today, the river stopped. The Quiet came. I saw one of them outside the window, one of the thin, black men from the drawings. I'm taking the children. There's an old storm cellar under the church. It's the only safe place I can think of. God help us.'",
      "Tucked into the note is a small, simple brass key. It feels heavy with the weight of the teacher's desperate, final act of protection."
    ],
    addItem: ["Teacher's Note", "Small Brass Key"],
    choices: [
      { text: "A storm cellar under the church... this changes things.", nextScene: 'town_crossroads' },
      { text: "Leave the schoolhouse. There is nothing more here but ghosts.", nextScene: 'town_crossroads' },
    ]
  },
  // ===============================================
  // LOCATION: THE CHURCH (Caius Path)
  // ===============================================
  journey_to_church_start: {
    id: 'journey_to_church_start',
    text: [
        "You head toward the edge of town, where the old road climbs a low, windswept hill. The church is silhouetted against the pale sky, its steeple sharp and skeletal against the empty heavens. It feels more remote than the other buildings, set apart by its purpose.",
        "The path is overgrown with thorny weeds. The air grows cooler as you climb, and the silence here feels more sorrowful than watchful. This is a place of endings, of last rites.",
        "The church is a simple stone structure with a heavy, iron-bound wooden door. A large, circular stained-glass window depicting a river and a setting sun dominates the front. The door is locked, barred against the world."
    ],
    choices: [
        { text: "Examine the stained-glass window.", nextScene: 'church_window' },
        { text: "Look for another way in.", nextScene: 'church_find_entrance' },
        { text: "Look for the storm cellar the teacher mentioned.", nextScene: 'church_storm_cellar_search', requiresItem: "Teacher's Note" },
    ]
  },
  church_storm_cellar_search: {
    id: 'church_storm_cellar_search',
    text: [
      "Remembering the teacher's desperate note, you ignore the main church and search the grounds. Behind the building, half-hidden by overgrown lilac bushes, you find it: a pair of heavy, slanted wooden doors set into the ground. A storm cellar.",
      "A heavy iron hasp holds the doors shut, but there is no padlock. It is barred from the inside. You call out, but there is only silence. You press your ear to the wood and hear nothing. Not a breath. Not a whisper."
    ],
    choices: [
      { text: "Try to force the doors open.", nextScene: 'church_cellar_force' },
      { text: "This is a tomb. I should leave it be.", nextScene: 'journey_to_church_start' },
    ]
  },
  church_cellar_force: {
    id: 'church_cellar_force',
    text: [
      "You find a heavy stone and use it to smash the hasp. The old iron shatters. You pull the heavy doors open. The air that rises is cold and smells of damp earth and a profound, heartbreaking sorrow.",
      "The small space below is empty. A few children's blankets are folded neatly in a corner. On the far wall, a message is written in chalk, in a child's careful printing: 'THE MUD MAN SANG US A NEW SONG. WE ARE GOING TO THE RIVER NOW TO SLEEP.'",
      "She tried to save them. But the Listeners found them anyway. This was not a sanctuary. It was a trap."
    ],
    choices: [
      { text: "There is nothing more to do here. Continue with your quest.", nextScene: 'journey_to_church_start' },
    ]
  },
  church_window: {
    id: 'church_window',
    text: [
      "You study the window. The river, in deep blues and greens, flows not to a sea, but down into the mouth of a sleeping, mountain-sized figure at the bottom of the glass. The setting sun is directly above, its rays touching a series of smaller symbols set into the window's border: a fish, a star, a tree, a key.",
      "This isn't a normal depiction of Christian faith. It's a portrait of the Sleeper and its lullaby, a piece of pagan scripture hidden in plain sight. It feels like a key, a set of instructions."
    ],
    choices: [
        { text: "This is a puzzle. I should look for a place to use these symbols.", nextScene: 'church_find_entrance' },
    ]
  },
  church_find_entrance: {
    id: 'church_find_entrance',
    text: [
      "You circle the building. At the back, a smaller door leads into what must be a side chapel or rectory. This door is also locked, but it has a different kind of lock: a simple iron dial with four tumblers, each bearing the same symbols as the stained-glass window.",
      "The window is the key. You must enter the symbols in the correct order. The sun's rays in the window seem to provide a sequence, from top to bottom, from the sky to the earth."
    ],
    choices: [
        { text: "Enter the sequence: Star, Tree, Fish, Key.", nextScene: 'church_door_unlocked' },
        { text: "I need to look at the window again.", nextScene: 'church_window' },
    ]
  },
  church_door_unlocked: {
    id: 'church_door_unlocked',
    text: [
        "You turn the dials, aligning the symbols in the sequence from the window: Star, Tree, Fish, Key. With a deep, satisfying click, the lock disengages. The door swings inward into a dark, musty space.",
        "You are inside the church's rectory. It is a small, spartan room with a desk, a bookshelf of religious texts, and a simple cot. Dust lies thick on everything, a soft, grey blanket.",
        "On the desk, a heavy, leather-bound family Bible lies open. A passage is underlined in faded red ink."
    ],
    choices: [
        { text: "Read the underlined passage.", nextScene: 'read_church_bible' },
    ]
  },
  read_church_bible: {
    id: 'read_church_bible',
    text: [
      "The passage is not from scripture. It is handwritten, a secret message hidden in a holy book. 'And the Keeper said, Let the Quiet be my guide. For my brother has turned his face from the Quiet, and in his despair, has hidden the sacred tools where faith gives way to reason: behind the falsehood of my own face.'",
      "A riddle from a man in crisis. You look around the room. On the wall hangs a severe, oil-painted portrait of a past Keeper, a man who looks like an older, sterner Caius. He is pointing a single, accusatory finger, not at you, but at the bookshelf."
    ],
    choices: [
        { text: "Investigate the bookshelf.", nextScene: 'church_bookshelf' },
    ]
  },
  church_bookshelf: {
    id: 'church_bookshelf',
    text: [
      "Following the portrait's pointing finger, you find a single, hollowed-out book titled 'Sermons on Doubt.' Inside is a small, ornate silver key.",
      "The riddle was a misdirection, a test. The passage said the tools were hidden 'behind the falsehood of my own face'. The portrait is the false face. You go to the painting and find it's on a hinge. It swings away from the wall, revealing a small, iron safe set into the stone.",
      "The silver key fits the safe perfectly."
    ],
    addItem: 'Safe Key',
    choices: [
        { text: "Open the safe.", nextScene: 'church_open_safe' },
    ]
  },
  church_open_safe: {
    id: 'church_open_safe',
    text: [
      "The safe opens with a well-oiled click. Inside, resting on faded, crumbling silk, are the Ritual Tongs. They are crafted from a dark, swirling metal that looks like solidified smoke, and they hum with a faint, cold energy that makes the hairs on your arm stand up.",
      "You have what Caius sent you for. You can now safely retrieve one of the heart-stones without your own soul interfering with its resonance."
    ],
    removeItem: 'Safe Key',
    addItem: 'Ritual Tongs',
    choices: [
      { text: "I have the Tongs. Now I must choose which stone to retrieve.", nextScene: 'accept_caius_quest' },
    ]
  },
  accept_caius_quest: {
    id: 'accept_caius_quest',
    text: [
      "Holding the ancient Tongs, you feel the weight of Caius's hope, the burden of his family's long watch. 'The Sleeper will feel your intent,' he had said. 'But be careful. The world is thin now. Its dreams are sharp.'",
      "You have the tool. Now you must choose the task. The oldest stone from the dam, a stone of memory. The quietest from the well, a stone of peace. Or the most sorrowful from the wreck, a stone of loss. Which lullaby will you sing?"
    ],
    choices: [
        { text: "I will find the stone from the dam.", nextScene: 'follow_bank_to_dam_for_stone' },
        { text: "I will get the stone from the general store's well.", nextScene: 'investigate_store_for_stone' },
        { text: "I will search for the sorrowful stone in the wreck.", nextScene: 'descend_into_riverbed_for_stone' },
    ]
  },
  // ===============================================
  // LOCATION: THE OBSERVATORY (Kaspara Path)
  // ===============================================
  journey_to_observatory_start: {
    id: 'journey_to_observatory_start',
    text: [
        "Kaspara's notes pointed you to her private observatory. A narrow, winding path, little more than a goat trail, leads from the back of the library up the steep cliffs overlooking Vestige. It's a treacherous, crumbling climb.",
        "As you ascend, the town spreads out below you, a silent, perfect map of its own decay. The scale of the empty riverbed is even more shocking from this height, a vast, geological scar.",
        "You reach the summit. The observatory is a small, white, domed building clinging to the cliff edge, a place between the earth and the sky. The door is locked with a complex, circular keypad showing constellations, a lock for an astronomer."
    ],
    choices: [
        { text: "Examine the keypad.", nextScene: 'observatory_keypad' },
    ]
  },
  observatory_keypad: {
    id: 'observatory_keypad',
    text: [
        "The keypad is a smaller version of the astrolabe. Four concentric rings, each etched with dozens of constellations—some familiar, some alien and disturbing in their geometry. You need a four-part code.",
        "You recall her frantic notes from the library, mentioning an 'impossible' star, a 'hole in physics'. And her note about the 'second sun'.",
        "The astrolabe in your possession hums softly, as if in recognition. It's the key. The alien constellations on its rings must be the answer."
    ],
    choices: [
        { text: "Use the astrolabe to find the combination.", nextScene: 'observatory_solve_puzzle', requiresItem: 'Alien Astrolabe' },
        { text: "I need to go back to the library to find her notes.", nextScene: 'investigate_library' },
    ]
  },
  observatory_solve_puzzle: {
    id: 'observatory_solve_puzzle',
    text: [
        "You hold up your astrolabe. The rings on the device and the keypad seem to resonate, a faint hum passing between them. Four of the alien constellations on the astrolabe are marked with tiny, almost invisible scratches, as if by a trembling hand.",
        "You carefully rotate the rings on the keypad, aligning the four marked constellations. The lock disengages with a soft, pneumatic hiss. The door slides open into darkness.",
        "You step inside. The room is a perfect circle, dominated by a massive, brass telescope aimed at the pale, daytime sky. It is a chaotic mess of star charts, open books, and overflowing ashtrays. This was her true sanctum, her war room."
    ],
    choices: [
        { text: "Search the room for the calibrator.", nextScene: 'observatory_search' },
    ]
  },
  observatory_search: {
    id: 'observatory_search',
    text: [
        "On a workbench, amidst a tangle of wires and soldering tools, is the Resonance Calibrator. It's a small, handheld device with a crystal emitter and a series of finely-tuned dials.",
        "Next to it is a final, unsent letter, written on official observatory letterhead. It's addressed to you. Lysander."
    ],
    addItem: 'Resonance Calibrator',
    choices: [
        { text: "Read the letter.", nextScene: 'read_kasparas_last_letter' },
    ]
  },
  read_kasparas_last_letter: {
    id: 'read_kasparas_last_letter',
    text: [
      "'My Lysander,' it begins, her script uncharacteristically neat, as if written with great effort. 'If you are reading this, then the worst has happened, and my memory has failed me, as I knew it would. The resonance from the Sleeper affects the mind first. It erases things. I am so sorry.'",
      "'Do not trust Caius's faith. It is a gilded cage for a monster he does not understand. Do not trust the voice in the wreckage; it is a pilot loyal only to its sinking ship. Trust the science. Trust the plan. The parasite must be excised, or it will consume everything.'",
      "'I left this letter as a final anchor for you. Your memory is likely gone, a casualty of the event. But know this: you were with me in this. You were my partner, my love. You helped me build the amplifier. You believed in this, even when I doubted. Finish what we started. For me. For the world that was.'",
      "The letter clarifies everything. You were a part of this from the beginning. Your amnesia is not a mystery; it is a symptom of the town's disease, a wound from a psychic war."
    ],
    addItem: "Kaspara's Letter",
    choices: [
        { text: "Her path is my path. I have the calibrator. Now for the keys.", nextScene: 'kaspara_path_choice' },
    ]
  },
  kaspara_path_choice: {
    id: 'kaspara_path_choice',
    text: [
      "You have the Resonance Calibrator and Kaspara's final, desperate plea. Her plan was radical, terrifying, and brilliant. The only choice is to finish what you both started, to see her terrible, beautiful equation through to its end.",
      "Her notes give two locations for the 'frequency key' needed for her plan: the dam and the general store's well. It seems your path forward leads to the same sacred places Caius mentioned, but for a very different, more violent, and now deeply personal purpose."
    ],
    choices: [
      { text: "I'll go to the dam, to find her key in the 'heart of the machine.'", nextScene: 'follow_bank_to_dam_for_key' },
      { text: "I'll go to the general store, to find the key in the 'heart of the well.'", nextScene: 'head_to_store_for_second_key' },
    ]
  },
  // ===============================================
  // LOCATION: THE HIGHWAY TUNNEL (Navigator Path)
  // ===============================================
  journey_to_tunnel_start: {
    id: 'journey_to_tunnel_start',
    text: [
      "The Navigator's instructions are your only guide. Find Theron's keycard. You leave Vestige and follow the old, cracked highway out of the valley, a road that leads from a quiet death to a noisy one.",
      "The landscape grows more unstable the further you get. The earth is fractured, and strange, crystalline, blue-white growths push up through the asphalt like alien fungi.",
      "Ahead, the highway vanishes into the dark mouth of a collapsed tunnel. This is where Theron's flight ended. The Navigator's voice in the sextant hums a warning. 'The storm's edge is sharpest here, Pilot. Reality is thin. Tread carefully.'"
    ],
    choices: [
        { text: "Enter the collapsed tunnel.", nextScene: 'enter_tunnel' },
    ]
  },
  enter_tunnel: {
    id: 'enter_tunnel',
    text: [
      "You squeeze through a gap in the debris into the tunnel's profound darkness. The air is cold and still, thick with the smell of wet concrete and old diesel fumes. A faint emergency light flickers deep within, a dying pulse.",
      "The tunnel is a graveyard of cars, all coated in the same fine, brown dust. In the center is a large military-style truck, its front end smashed into a wall of rubble. Theron's truck.",
      "As you approach, you notice the silence here is different. It is not empty. A low, rhythmic pulse, like a slow, deep heartbeat, seems to come from the truck itself."
    ],
    choices: [
        { text: "Investigate the truck.", nextScene: 'tunnel_truck' },
    ]
  },
  tunnel_truck: {
    id: 'tunnel_truck',
    text: [
      "The driver's side door is ajar, hanging off a single hinge. The interior is a wreck of shattered glass and torn upholstery. Theron is not there.",
      "The pulsing sound is coming from a large, metal crate bolted to the truck bed. It is covered in scientific warning labels. On the passenger seat, you find a small handheld audio recorder and a cassette tape."
    ],
    choices: [
        { text: "Listen to the audio log.", nextScene: 'listen_theron_log' },
        { text: "Inspect the crate.", nextScene: 'tunnel_crate' },
    ]
  },
  listen_theron_log: {
    id: 'listen_theron_log',
    text: [
      "You press play. Theron's voice, ragged and breathless, fills the silence. 'It's in the crate... I stole it from her. The core. The first anchor she found. I thought if I got it out of the valley, the resonance would... stop. Disperse. I was wrong. It's a lens. It's focusing it. The Quiet... it's not quiet. It's listening.'",
      "He coughs, a wet, rattling sound. 'The tunnel collapsed. I'm trapped. But it's worse. It's... dreaming me. Reshaping me. The keycard is on my... on...' The recording ends with a wet, tearing sound and a choked, inhuman scream.",
      "The pulsing from the crate intensifies, as if in response."
    ],
    choices: [
      { text: "He was reshaped. He's still here, in the dark.", nextScene: 'tunnel_theron_encounter' },
    ]
  },
  tunnel_crate: {
    id: 'tunnel_crate',
    text: [
      "You approach the large metal crate. The pulsing is a physical force now, a wave of pressure that makes your teeth ache. The crate is locked, but the metal is warped and glows with a faint heat around the hinges, as if containing a small star.",
      "Whatever Kaspara found, whatever Theron stole, it is alive. And it is aware of you."
    ],
    choices: [
      { text: "I need to open it.", nextScene: 'open_tunnel_crate_choice' },
    ]
  },
  open_tunnel_crate_choice: {
    id: 'open_tunnel_crate_choice',
    text: [
      "The padlock is a heavy-duty model, too strong to break by hand. Theron's truck should have a standard toolkit somewhere inside.",
    ],
    choices: [
      { text: "Search the truck for a toolkit.", nextScene: 'search_truck_toolkit' },
    ]
  },
  search_truck_toolkit: {
    id: 'search_truck_toolkit',
    text: [
      "You find a heavy-duty toolkit in a compartment under the passenger seat. It contains a set of long-handled bolt cutters. They should be strong enough to get through the padlock.",
    ],
    addItem: 'Bolt Cutters',
    choices: [
      { text: "Use the bolt cutters on the crate.", nextScene: 'open_tunnel_crate' },
    ]
  },
  open_tunnel_crate: {
    id: 'open_tunnel_crate',
    text: [
      "You position the bolt cutters around the padlock's thick shackle. With a grunt of effort, you squeeze. The metal groans, resists, then snaps with a loud crack. The pulsing from the crate stops instantly. The silence that follows is terrifyingly absolute.",
      "You lift the heavy lid. Inside, resting on a bed of damp, living moss, is a stone that looks like a human heart, carved from a single, massive ruby. It glows with a soft, steady, calming red light. As you look at it, you feel a wave of profound peace and stillness.",
      "This was Kaspara's 'anchor'. Theron stole it, and its chaotic, reality-warping energy is what brought the tunnel down and... changed him."
    ],
    choices: [
      { text: "Take the stone. It seems important.", nextScene: 'take_anchor_stone' },
    ]
  },
  take_anchor_stone: {
    id: 'take_anchor_stone',
    text: [
      "You reach in and take the stone. It's warm and pulses in time with your own heartbeat. The moment you lift it from its mossy bed, a wet, dragging sound comes from the darkness at the far end of the tunnel. A gurgling, distorted voice, recognizably Theron's, echoes through the space. 'My... precious... give it... back...'",
      "From the deepest shadows, a thing emerges. It has Theron's basic shape, but its body is made of the same crystalline growths from outside, fused with engine parts and wet concrete. In one of its shimmering, crystalline hands, it clutches the master keycard.",
    ],
    addItem: 'Anchor Stone',
    choices: [
      { text: "I don't want to fight him. I have to reason with what's left of him.", nextScene: 'reason_with_theron' },
      { text: "This thing is a monster. I have to get the keycard by force.", nextScene: 'fight_theron' },
      { text: "Use the Silt Sedative on the creature.", nextScene: 'use_sedative_on_theron', requiresItem: 'Silt Sedative' },
    ]
  },
  reason_with_theron: {
    id: 'reason_with_theron',
    text: [
      "'Theron! Kaspara was wrong! The Navigator can save us!' you shout into the oppressive dark. 'We need your keycard!'",
      "The creature pauses, its crystalline head tilting. A low, grinding sound comes from its chest. 'Save... us?' it rasps, the voice a chorus of broken rocks and memories. 'No. Only... the Quiet. The stone... brings the Quiet...' It seems to be calmed by the anchor stone you hold. It takes a hesitant, shuffling step forward, not with aggression, but with a deep, pathetic longing.",
      "Perhaps you can get the keycard without a fight. An act of mercy."
    ],
    choices: [
      { text: "Offer it the stone in exchange for the keycard.", nextScene: 'trade_with_theron' },
    ]
  },
  trade_with_theron: {
    id: 'trade_with_theron',
    text: [
      "You hold out the Anchor Stone, its calm, red light pushing back the shadows. The creature stops. It looks from the stone to the keycard in its own hand, a flicker of its old human logic still firing somewhere inside its crystalline brain. With a low groan, it extends its arm and drops the keycard on the ground. It then lumbers forward and gently, almost reverently, takes the stone from your hand.",
      "The moment it touches the stone, its chaotic form stabilizes. It cradles the stone to its chest and retreats back into the deepest shadows of the tunnel, whispering, 'Quiet now... quiet...'",
      "You have the keycard. You leave the tormented soul of Theron to his final, quiet rest."
    ],
    removeItem: 'Anchor Stone',
    addItem: 'Master Keycard',
    choices: [
      { text: "I have the keycard. Time to go to the dam and finish this.", nextScene: 'navigator_plan_accept' },
    ]
  },
  use_sedative_on_theron: {
    id: 'use_sedative_on_theron',
    text: [
        "You pull out the syringe of Dr. Voss's sedative. 'Theron! I'm sorry!' you shout, and hurl it. The syringe shatters against the creature's crystalline chest, releasing the sedative as a fine, vaporous mist. The creature inhales, and its aggressive posture immediately slackens.",
        "It lets out a low, soft groan, a sound of release, not pain. Its form stops shifting. It looks at the keycard in its hand, then at you, and a flicker of the old Theron seems to peer through its monstrous face. It drops the keycard, then slumps against the wall of the tunnel, becoming still, quiet, and peaceful.",
        "You have given him the peace he couldn't find himself."
    ],
    removeItem: 'Silt Sedative',
    addItem: 'Master Keycard',
    choices: [
        { text: "I have the keycard. Time to go to the dam and finish this.", nextScene: 'navigator_plan_accept' },
    ]
  },
  fight_theron: {
    id: 'fight_theron',
    text: [
      "You can't risk it. You charge the creature. It's slow, but immensely powerful. It swings a crystalline arm, smashing a car window into a cloud of glittering dust. You need to find a weak point.",
      "Its chest is a lattice of glowing, fragile-looking crystals, where a human heart would be. You still have the bolt cutters.",
      "As it swings again, you dive low and thrust the bolt cutters into its chest. The crystals shatter with a sound like a thousand breaking wine glasses. The creature lets out a final, shockingly human scream of pain and release, then collapses into a pile of shimmering dust and inert concrete. The keycard clatters to the floor.",
      "You pick it up, your heart heavy. You have just killed what was left of a good man. A necessary evil."
    ],
    addItem: 'Master Keycard',
    choices: [
      { text: "There was no other way. I must finish this at the dam.", nextScene: 'navigator_plan_accept' },
    ]
  },
  navigator_plan_accept: {
    id: 'navigator_plan_accept',
    text: [
      "The Navigator's consciousness focuses, a sharp, cold point in your mind. 'The vessel is ready. The engine is primed. You have the key. Go to the dam, Pilot. The turbine hall is where the final sequence must begin. Shatter the cage. And take us to a new shore.'"
    ],
    choices: [
      { text: "I understand. I will go to the dam.", nextScene: 'find_turbine_hall', requiresItem: 'Master Keycard' },
    ]
  },
  // ===============================================
  // PATH: CAIUS'S PRESERVATION
  // ===============================================
  investigate_store_for_stone: {
    id: 'investigate_store_for_stone',
    text: [
        "Caius called it the 'quietest stone', hidden at the bottom of the Anchor well. You return to S. ANCHOR & SONS, this time on a mission of faith, not just curiosity. The dusty air seems to hum with anticipation.",
        "Down in the ancient cellar, the air is still and cold. The well sits in the center of the room, a circle of silent, black water, a hole in the world. The clay tablets on the shelves watch you like silent, ancient witnesses.",
        "A heavy granite lid, carved with three concentric rings of alien symbols, seals the well shut. It's a ritual lock, a puzzle of faith."
    ],
    choices: [
        { text: "Examine the lid and its symbols.", nextScene: 'examine_well_lid' },
        { text: "Look to the clay tablets for a clue.", nextScene: 'examine_tablets_for_puzzle' },
    ]
  },
  examine_well_lid: {
    id: 'examine_well_lid',
    text: [
        "You kneel by the granite lid. It's too heavy to lift by brute force. Three rings are carved into its surface, each able to rotate independently. The symbols are a mix of astrological signs and abstract, geometric shapes.",
        "There's no obvious combination. This lock requires specific, sacred knowledge, not just logic."
    ],
    choices: [
        { text: "The clay tablets must hold the key to this ancient lock.", nextScene: 'examine_tablets_for_puzzle' },
    ]
  },
  examine_tablets_for_puzzle: {
    id: 'examine_tablets_for_puzzle',
    text: [
        "You turn to the shelves of cuneiform tablets. Most are covered in dense script, a history you cannot read. But three tablets, set apart from the others, are different. They are dominated by large, single pictures, a kind of primal tarot.",
        "The first shows a figure lying down, eyes closed, with stars and nebulae swirling from its head. Your mind forms a single concept: 'The Dreamer'. Below it is one of the symbols from the well lid's outer ring.",
        "The second tablet shows a river flowing directly into the mouth of a coiled serpent. The concept: 'The Thirster'. Below it, a symbol from the middle ring.",
        "The third tablet shows a figure bound in chains made of musical notes. The concept: 'The Prisoner'. And with it, a symbol from the inner ring. You have the combination, a story in three parts."
    ],
    choices: [
        { text: "Return to the well lid and enter the combination.", nextScene: 'solve_well_puzzle' },
    ]
  },
  solve_well_puzzle: {
    id: 'solve_well_puzzle',
    text: [
        "You return to the well. You rotate the outer ring until the symbol for 'The Dreamer' aligns with a notch at the top. You do the same for the middle ring, 'The Thirster', and the inner ring, 'The Prisoner'.",
        "The moment the last symbol clicks into place, a deep, resonant hum fills the cellar. The seams of the lid glow with a soft, white light, and then, with a sound like a great, slow sigh, the heavy granite lid dissolves into glittering, inert sand, revealing the black water.",
        "Resting on a pedestal just below the surface is a perfectly smooth, egg-shaped stone of polished obsidian. It absorbs all light and radiates a profound sense of peace, a silence you can feel. The quietest stone. Using the Ritual Tongs, you reach in and retrieve it."
    ],
    addItem: 'Heart-Stone (Well)',
    choices: [
        { text: "I have the stone. I must return to Caius.", nextScene: 'return_to_caius_with_stone' },
    ]
  },
  follow_bank_to_dam_for_stone: {
    id: 'follow_bank_to_dam_for_stone',
    text: [
        "You leave Caius's cellar with your purpose clear. The oldest stone, he said, was the foundation of the dam. You make your way back through the silent town, the Ritual Tongs heavy in your hand.",
        "The journey to the dam is familiar, but your perspective has changed. You are not just an investigator; you are an acolyte on a pilgrimage. The dam is no longer a monument to industry, but a tomb built on a sacred object, a gravestone."
    ],
    choices: [
        { text: "Descend the maintenance ladder.", nextScene: 'descend_dam_for_stone' },
    ]
  },
  descend_dam_for_stone: {
    id: 'descend_dam_for_stone',
    text: [
        "The long climb down the steel ladder feels like a descent into the underworld. At the bottom, you ignore the outflow gate and Theron's technological tomb. The foundation stone would be part of the dam itself, a piece of the original, raw earth.",
        "You search the base of the massive concrete wall. You notice a series of faint, ancient markings etched into the concrete, forming a spiral that converges on one section. As you get closer, you feel a low, deep hum from the wall itself. This is it."
    ],
    choices: [
        { text: "Touch the foundation stone.", nextScene: 'touch_foundation_stone' },
        { text: "How do I remove a stone from a dam?", nextScene: 'ponder_removing_stone' },
    ]
  },
  touch_foundation_stone: {
    id: 'touch_foundation_stone',
    text: [
        "You press your palm against the concrete. The vibration is immense, a slow, powerful heartbeat that resonates with your own skeleton. A vision floods your mind: the bedrock forming, cooling. Mountains rising and eroding. The river being born. You feel the Sleeper arriving, a dissonant note in the earth's long, slow song. The stone remembers it all.",
        "The vision fades, leaving you breathless. You know this is the stone. But it's part of the dam. There must be a mechanism to release it, a secret known only to the Keepers."
    ],
    choices: [
        { text: "There must be a way. Caius wouldn't have sent me for nothing.", nextScene: 'ponder_removing_stone' },
    ]
  },
  ponder_removing_stone: {
    id: 'ponder_removing_stone',
    text: [
        "You examine the area more closely. The foundation stone is an older, darker megalith that the dam's concrete was poured around. Below it, half-buried in the mud, is a small iron plate with a slot. A hydraulic lock release, currently unpowered.",
        "Caius's ancestors must have built this fail-safe into the dam's construction, a hidden key. To release the stone, you'll need to power the lock. There must be an auxiliary power source in the facility."
    ],
    choices: [
        { text: "Return to the control room to search for auxiliary power controls.", nextScene: 'search_control_room_for_aux_power' },
    ]
  },
  search_control_room_for_aux_power: {
    id: 'search_control_room_for_aux_power',
    text: [
      "You climb the long ladder again. In the wrecked control room, behind a bank of smashed monitors, you find a heavy, metal panel marked 'Auxiliary Power & Emergency Systems.' It's covered in dust.",
      "Most switches are dead, but one breaker is functional. A faded schematic shows it controls the emergency lighting and the foundation maintenance lock. But the backup generator is out of fuel.",
      "You remember seeing gasoline cans in a small, rusted maintenance shed just outside the fence."
    ],
    choices: [
      { text: "Go to the maintenance shed and get the gasoline.", nextScene: 'get_gasoline' },
    ]
  },
  get_gasoline: {
    id: 'get_gasoline',
    text: [
      "You go to the small, rusted maintenance shed. Inside, you find three heavy cans of gasoline. You take one.",
      "Back in the control room, you find the intake for the backup generator and refuel it. Now you can attempt to restore power."
    ],
    addItem: 'Gasoline Can',
    choices: [
      { text: "Attempt to activate the auxiliary power.", nextScene: 'dam_breaker_puzzle' },
    ]
  },
  dam_breaker_puzzle: {
    id: 'dam_breaker_puzzle',
    text: [
        "You approach the auxiliary power panel. Theron's log warned of a precise sequence. Four main breakers stand before you, labeled A (Intake), B (Dynamo), C (Sluice), and D (Grid). All are in the 'off' position. A single mistake will trip the system. Which do you flip first?"
    ],
    choices: [
        { text: "Flip Breaker A.", nextScene: 'dam_breaker_A_flipped' },
        { text: "Flip Breaker B.", nextScene: 'dam_breaker_fail' },
        { text: "Flip Breaker C.", nextScene: 'dam_breaker_fail' },
        { text: "Flip Breaker D.", nextScene: 'dam_breaker_fail' },
    ]
  },
  dam_breaker_A_flipped: {
    id: 'dam_breaker_A_flipped',
    text: [
        "You flip breaker A. A low hum starts up and a green light glows. So far, so good. According to Theron's note on operational flow, what comes after the intake? Which do you flip next?"
    ],
    choices: [
        { text: "Flip Breaker B.", nextScene: 'dam_breaker_fail' },
        { text: "Flip Breaker C.", nextScene: 'dam_breaker_AC_flipped' },
        { text: "Flip Breaker D.", nextScene: 'dam_breaker_fail' },
    ]
  },
  dam_breaker_AC_flipped: {
    id: 'dam_breaker_AC_flipped',
    text: [
        "You flip breaker C. The hum of power grows louder and more stable. The system accepts the input. Two more to go. What's next in the chain?"
    ],
    choices: [
        { text: "Flip Breaker B.", nextScene: 'dam_breaker_ACB_flipped' },
        { text: "Flip Breaker D.", nextScene: 'dam_breaker_fail' },
    ]
  },
  dam_breaker_ACB_flipped: {
    id: 'dam_breaker_ACB_flipped',
    text: [
        "You flip breaker B. The system feels stable, the hum turning into a steady thrum of power. Just one breaker left."
    ],
    choices: [
        { text: "Flip Breaker D.", nextScene: 'activate_aux_power' },
    ]
  },
  dam_breaker_fail: {
    id: 'dam_breaker_fail',
    text: [
        "You flip the breaker. A loud CRACK and a shower of orange sparks erupts from the panel. All the breakers snap back to the 'off' position with a series of sharp clicks. A wisp of acrid smoke curls into the air. The sequence was wrong. You'll have to try again."
    ],
    choices: [
        { text: "Start the sequence over.", nextScene: 'dam_breaker_puzzle' },
    ]
  },
  activate_aux_power: {
    id: 'activate_aux_power',
    text: [
      "You flip the final breaker, D. With a satisfying thrum, the auxiliary power grid comes online. Emergency lights flicker to life in the control room, casting long, dancing shadows. The generator outside settles into a loud, steady roar.",
      "The sound is a beacon, a dinner bell. You know the Listeners will be drawn to it. You have a limited amount of time to get the stone and get back to Caius before they converge on you."
    ],
    removeItem: 'Gasoline Can',
    choices: [
      { text: "Hurry. Get back down to the lock release.", nextScene: 'release_stone_under_pressure' },
    ]
  },
  release_stone_under_pressure: {
    id: 'release_stone_under_pressure',
    text: [
      "You scramble down the ladder, the generator's roar echoing across the chasm. At the base of the dam, a green light now glows from the iron plate. The lock is powered. You find a heavy pry bar and fit it into the slot.",
      "The mechanism opens with a loud hiss of ancient hydraulics. The concrete around the megalith cracks, and the heart-stone, a block of dark, veined rock, detaches from the wall and falls with a heavy, final thud.",
      "The hum stops instantly. You use the Ritual Tongs to lift the heavy stone. From the direction of Vestige, you can hear them. The whispers. Plural. They are coming. Fast."
    ],
    addItem: 'Heart-Stone (Dam)',
    choices: [
      { text: "Run. Get the stone back to the boarding house.", nextScene: 'return_to_caius_with_stone' },
    ]
  },
  descend_into_riverbed_for_stone: {
    id: 'descend_into_riverbed_for_stone',
    text: [
      "You have chosen to find the 'most sorrowful stone' in the heart of the old shipwreck. You make your way to the riverbed. The chasm is alien and silent, a vast wound under the sun.",
      "You walk for what feels like miles over the cracked, hexagonal mud. The wreck of the paddle steamer slowly grows on the horizon, a skeleton of a forgotten tragedy. The closer you get, the more you feel it: a profound, specific sadness, an emotional radiation from the wreck.",
      "This is not just a wreck. It is a place of mourning."
    ],
    choices: [
      { text: "Approach the wreck of the 'St. Elmo's Fire'.", nextScene: 'investigate_wreck_for_stone' },
    ]
  },
  investigate_wreck_for_stone: {
    id: 'investigate_wreck_for_stone',
    text: [
      "You stand before the ruined vessel. The name 'St. Elmo's Fire' is barely visible on the prow. You climb over the rotted gunwale into the hull's deep, cool shadow. The air inside smells of decay and salt and old sorrow.",
      "The main deck has collapsed. Caius said the stone was in the 'heart' of the wreck. That could mean the Captain's Cabin, the Engine Room, or the cargo hold.",
    ],
    choices: [
      { text: "Investigate the Captain's Cabin.", nextScene: 'wreck_captains_cabin' },
      { text: "Try to find a way to the Engine Room.", nextScene: 'wreck_engine_room_search' },
      { text: "Search the cargo hold.", nextScene: 'wreck_cargo_hold' },
    ]
  },
  wreck_cargo_hold: {
    id: 'wreck_cargo_hold',
    text: [
      "You find a hole in the deck leading down into the cargo hold. You drop down into a thick layer of fine, soft silt. The hold is mostly empty. There is no stone here.",
      "In the silt, you find a small, waterlogged leather pouch. Inside is a single, tarnished silver coin. A memory, not your own, brushes against your mind: a young woman dropping the coin into a wishing well, a prayer for a safe return that was never answered.",
      "The sorrow here is old, but thin. The heart is elsewhere."
    ],
    addItem: 'Silver Coin',
    choices: [
      { text: "The Engine Room seems more likely.", nextScene: 'wreck_engine_room_search' },
      { text: "The Captain must have known something.", nextScene: 'wreck_captains_cabin' },
    ]
  },
  wreck_captains_cabin: {
    id: 'wreck_captains_cabin',
    text: [
      "You make your way to the stern and the captain's cabin. Inside, a skeleton in a tattered captain's uniform is slumped in the corner, one bony hand clutching a small, leather-bound book to its chest.",
      "You gently pry the book from its grasp. The bones crumble to dust at your touch. It's the captain's log. The final entries are a descent into a specific, water-logged madness."
    ],
    choices: [
      { text: "Read the Captain's Log.", nextScene: 'read_captains_log' },
    ]
  },
  read_captains_log: {
    id: 'read_captains_log',
    text: [
      "The ink is faded and blurred by moisture. The captain writes of a 'song from the deep,' a sound that started when they took on a strange cargo in a distant port: a 'geomancer's stone' for the town's founder. He writes that the song made the crew paranoid, giving them shared nightmares of a 'thirsting dark' that lived beneath the river.",
      "The final entry is frantic, nearly illegible. 'The song has stopped. The river feels wrong. Hollow. The stone is... crying. A sound of pure, cosmic loss. It's in the engine room, a ballast against the current. But there is no current. There is nothing. The stars are wrong...'",
      "The heart-stone is in the engine room. The sorrow is not from the wreck, but from the stone itself."
    ],
    addItem: "Captain's Log",
    choices: [
      { text: "I know where to find the stone. To the engine room.", nextScene: 'wreck_engine_room_search' },
    ]
  },
  wreck_engine_room_search: {
    id: 'wreck_engine_room_search',
    text: [
      "The path to the engine room is blocked by a massive, splintered beam from the collapsed deck. It's too heavy to move by hand. You need leverage.",
      "You scan the debris. A long, solid iron spar, once part of the ship's rigging, lies half-buried in the silt. It might work as a pry bar."
    ],
    choices: [
      { text: "Use the iron spar to clear the doorway.", nextScene: 'clear_engine_room_door' },
    ]
  },
  clear_engine_room_door: {
    id: 'clear_engine_room_door',
    text: [
      "You work the end of the iron spar under the heavy beam. With all your weight, the beam shifts with a groan of tortured wood, sliding just enough to create a narrow, dangerous-looking opening.",
      "You squeeze through into the engine room. The heart of the ship is a tomb of rusted iron. In the center, where the primary piston once moved, is a large, uncut geode, split open. Inside, it is filled with pulsing, sorrowful, blue-light crystals.",
      "This is it. The sorrowful stone."
    ],
    choices: [
      { text: "Take the stone.", nextScene: 'take_sorrowful_stone' },
    ]
  },
  take_sorrowful_stone: {
    id: 'take_sorrowful_stone',
    text: [
      "You use the Ritual Tongs to lift the stone. As they close around it, a wave of profound, unbearable sadness washes over you. It is not your sadness, but it fills you. You see a flash of a green, vibrant, alien world, and then feel the agony of it being ripped away, of being left alone in a cold, silent universe. The stone is a refugee, a survivor of a dead world.",
      "The vision fades. You hear a sharp creak from the doorway. You turn. The iron spar has slipped, and the heavy beam has shifted back, blocking the exit. You are trapped in the belly of the beast."
    ],
    addItem: 'Heart-Stone (Wreck)',
    choices: [
      { text: "There must be another way out.", nextScene: 'find_second_exit_engine_room' },
    ]
  },
  find_second_exit_engine_room: {
    id: 'find_second_exit_engine_room',
    text: [
      "Panic is a cold knot in your stomach. There is no other door. But you notice the massive, rusted boiler. The furnace door is open. It's a tight squeeze, but it might lead up to the smokestack on the upper deck.",
      "It is your only chance."
    ],
    choices: [
      { text: "Crawl up through the smokestack.", nextScene: 'crawl_smokestack' },
    ]
  },
  crawl_smokestack: {
    id: 'crawl_smokestack',
    text: [
      "The climb is terrifying and claustrophobic. The smokestack is a vertical tunnel of rusted, sharp-edged iron. The sorrowful stone, tucked into your shirt, pulses with a cold blue light, giving you just enough to see. After a long, desperate climb, you see a circle of pale sky above. You pull yourself out onto the top deck, gasping for air, covered in soot and rust.",
      "You have the stone. Now you must bring its ancient sorrow back to Caius."
    ],
    choices: [
      { text: "Return to the boarding house.", nextScene: 'return_to_caius_with_stone' },
    ]
  },
  return_to_caius_with_stone: {
    id: 'return_to_caius_with_stone',
    text: [
        "The journey back to Vestige is a desperate race against the whispers of the Listeners, which seem to be growing in intensity. You burst into the boarding house and find Caius in his cellar, his face pale with strain.",
        "'They are awake!' he says. 'The noise you made... I can hear them. Do you have it?' You present the stone. A look of awe and terror crosses his face.",
        "'Quickly, place it in the circle. Before they get here!'"
    ],
    choices: [
      { text: "Place the heart-stone in the center of the wards.", nextScene: 'place_the_stone' }
    ]
  },
  place_the_stone: {
    id: 'place_the_stone',
    text: [
        "You place the stone in the center of his wards. A low, resonant hum fills the cellar, a single, pure note that vibrates in your bones. The whispers outside falter, turning from rage to confusion. The air stabilizes. The hunt is over.",
        "'It is not a fix,' Caius says, trembling with relief and exhaustion. 'It is a bandage. A lullaby. It will buy us time. But the wound is still there. The song is not strong enough to heal it, only to soothe it.'",
    ],
    choices: [
        { text: "What happens now?", nextScene: 'caius_path_aftermath' },
    ]
  },
  caius_path_aftermath: {
    id: 'caius_path_aftermath',
    text: [
      "'Now, we listen,' Caius says, his gaze distant, as if looking into a future you cannot see. 'The old song is gone. This new one... it will change the dream. The Sleeper is not a simple beast. Its nightmares created the Listeners. What will its new dreams create?'",
      "'You have not killed the god, Lysander. You have simply changed its mood. Your role is not over. My family were Keepers. You... you must be the Watcher. You must walk the streets and learn the shape of its new silence. Tell me what you see in the shadows. Help me interpret the new scripture being written on the world.'"
    ],
    choices: [
        { text: "I accept. I will be the Watcher.", nextScene: 'caius_path_final_choice' },
        { text: "I've done enough. I will not be a part of this.", nextScene: 'caius_path_reject_role' },
    ]
  },
  caius_path_reject_role: {
    id: 'caius_path_reject_role',
    text: [
      "'I see,' Caius says, with a deep and profound sadness. 'You have mended the cage, but you will not stay to watch the prisoner. I cannot blame you. Go, then. Find your own peace, if such a thing still exists in this wounded world.'",
      "You leave the cellar, the low hum of the heart-stone a constant, new presence in the town. You walk out of Vestige, leaving the town to its strange, new dream. The world is stable, but haunted. You have chosen survival over purpose, a quiet life at the edge of a mystery you will never understand."
    ],
    choices: [],
    isEnd: true,
  },
  caius_path_final_choice: {
    id: 'caius_path_final_choice',
    text: [
      "You leave the cellar and step out onto Main Street. The oppressive quiet is gone, but the new silence is strange and alive. The world feels thin, malleable. The shadows seem to stretch and twist, not with menace, but with possibility.",
      "The Listeners are gone, but Vestige is not saved. It is transformed. It is a town balanced on the edge of a new dream, a new reality being born from the thoughts of a sleeping cosmic entity. It is a fragile, beautiful, and terrifying peace. Your life is no longer your own; it is a vigil. What is your first act as the Watcher?"
    ],
    choices: [
        { text: "To walk the new shore of the riverbed, and see what dreams may come.", nextScene: 'caius_path_final_image_watcher' },
        { text: "To return to the library, to seek understanding of the world you now serve.", nextScene: 'caius_path_final_image_scholar' },
    ]
  },
  caius_path_final_image_watcher: {
    id: 'caius_path_final_image_watcher',
    text: [ "You walk to the edge of the chasm. A faint, silver mist now pools at the bottom, glowing with a soft, internal light. It is not water, but condensed dream. As you watch, shapes form in the mist—beautiful and monstrous, architectural and biological—before dissolving back into light. The world breathes, and its breath is a strange new poetry. You sit on the edge of the world, a solitary guardian at the dawn of a new and incomprehensible age. Your watch has begun." ],
    choices: [],
    isEnd: true
  },
  caius_path_final_image_scholar: {
    id: 'caius_path_final_image_scholar',
    text: [ "You return to the pristine silence of the library. But the books have changed. The words on the pages seem to shift and reform as you look, mundane histories rewriting themselves into epic poems of impossible worlds. You have not just saved the town; you have inherited its living scripture. The quiet hum of the heart-stone is a new kind of silence, one filled with stories waiting to be read. Your life will be spent trying to read them." ],
    choices: [],
    isEnd: true
  },
  // ===============================================
  // PATH: KASPARA'S EXCISION
  // ===============================================
  follow_bank_to_dam_for_key: {
    id: 'follow_bank_to_dam_for_key',
    text: [
        "You leave Kaspara's hidden workshop on a mission that feels both blasphemous and necessary. To poison a god. To excise the parasite. Her notes are clear: the first part of the 'frequency key' is in the 'heart of the machine' at the dam.",
        "The walk to the dam is tense. You are not trying to save this world; you are trying to perform surgery on it. Every silent building seems to watch you with accusation. The very dust seems to judge you.",
    ],
    choices: [
        { text: "I need to understand the machine. I'll search for schematics.", nextScene: 'search_dam_control_for_schematics' },
        { text: "The key is in the 'heart of the machine.' That must be the amplifier itself.", nextScene: 'descend_dam_for_key' },
    ]
  },
  search_dam_control_for_schematics: {
    id: 'search_dam_control_for_schematics',
    text: [
        "You search the control room. Under a pile of debris, you find a rolled-up set of engineering schematics detailing the custom modifications Theron made for Kaspara's amplifier.",
        "Theron made panicked notes in the margins, terrified of the power he was unleashing. He writes of building a 'failsafe,' a 'manual override' hidden within the amplifier's housing, accessible via a maintenance panel at the base of the turbine. A dead man's switch.",
        "Kaspara's notes mentioned hiding the key. She must have used his own failsafe as her hiding place, a final, bitter irony. The path is clear."
    ],
    addItem: "Theron's Schematics",
    choices: [
        { text: "Descend the ladder to find the maintenance panel.", nextScene: 'descend_dam_for_key' },
    ]
  },
  descend_dam_for_key: {
    id: 'descend_dam_for_key',
    text: [
        "You climb down the long ladder into the dry reservoir. You enter the outflow gate, into the chamber where Theron's desiccated body sits, a silent monument to failure.",
        "The amplifier is a mess of smashed consoles. Following the schematic, you locate the primary turbine housing. On its underside is a small, bolted panel. Theron's failsafe.",
        "The bolts are rusted tight. It will take force to open."
    ],
    choices: [
        { text: "Search the room for a tool to open the panel.", nextScene: 'search_amplifier_room_for_tool' },
    ]
  },
  search_amplifier_room_for_tool: {
    id: 'search_amplifier_room_for_tool',
    text: [
        "You search the wrecked chamber. Behind a fallen bank of capacitors, you find a robust-looking tire iron from Theron's toolkit. It should provide the leverage you need.",
        "You wedge the end of the tire iron under the edge of the panel and pry with all your strength. Metal groans in protest, a long, tearing sound."
    ],
    choices: [
        { text: "Force the panel open.", nextScene: 'open_failsafe_panel' },
    ]
  },
  open_failsafe_panel: {
    id: 'open_failsafe_panel',
    text: [
        "With a final, sharp crack, the bolts shear and the panel flies off, clattering across the concrete floor. The noise is shocking in the enclosed space. You freeze, listening, but there is only silence.",
        "Inside the cavity is not a switch, but a small niche. Resting there is an object that looks like a complex tuning fork, crafted from the same dark, non-reflective metal as your astrolabe. It hums with a barely perceptible energy. This is the first part of Kaspara's key.",
        "As you take it, you hear a soft, wet, dragging sound from the base of the dam. The noise you made was not unheard. Something has noticed, and it is coming to investigate."
    ],
    addItem: 'Resonance Fork',
    choices: [
        { text: "I have the key. I need to get out of here. Now.", nextScene: 'flee_dam_with_key' },
        { text: "What is that sound? I should investigate cautiously.", nextScene: 'investigate_listener_at_dam' },
    ]
  },
  investigate_listener_at_dam: {
    id: 'investigate_listener_at_dam',
    text: [
      "You peer cautiously out of the outflow gate. Thick, black sludge is oozing from a sluice gate further down the dam wall. As you watch, the sludge pulls itself together into the familiar, horrible shape of a Listener.",
      "It seems incomplete, unformed. It shivers and collapses, its whispers turning into a sound of pained confusion before it dissolves back into sludge. Taking the key has disrupted something, but also drawn attention. You must be quick."
    ],
    choices: [
      { text: "I've seen enough. I need to get the second key from the well.", nextScene: 'head_to_store_for_second_key' },
    ]
  },
  flee_dam_with_key: {
    id: 'flee_dam_with_key',
    text: [
        "You don't hesitate. Clutching the tuning fork, you squeeze back out of the outflow gate. The dragging sound is closer. You look down the dam's base and see one of Caius's 'Listeners.' It's a shifting, humanoid shape of wet mud and tangled roots. It turns its featureless head towards you.",
        "A wave of pure terror washes over you. You scramble up the ladder, not daring to look back. The whispers fade, but the image of the thing is burned into your mind. Kaspara's work has a cost, and the Sleeper's dreams are taking physical form."
    ],
    choices: [
        { text: "I have one part of the key. Now for the well.", nextScene: 'head_to_store_for_second_key' },
    ]
  },
  head_to_store_for_second_key: {
    id: 'head_to_store_for_second_key',
    text: [
        "The run back to Vestige is a blur of fear. The silence of the town no longer feels empty; it feels like it's waiting to strike. You have proof now that the threat is real, and you are about to provoke it.",
        "You reach 'S. ANCHOR & SONS'. Kaspara's journal was explicit: the second part of the key is in the 'heart of the well.' Caius believes a sacred stone lies there. Kaspara believed it was the perfect place to hide a piece of cosmic poison.",
        "You know how to get into the cellar. The path is clear, but you may not be alone down there."
    ],
    choices: [
        { text: "Enter the general store and descend to the cellar.", nextScene: 'investigate_store_for_key' },
    ]
  },
  investigate_store_for_key: {
      id: 'investigate_store_for_key',
      text: [
        "You descend the familiar steps into the ancient cellar. The air is still and heavy. The well sits in the center of the room, its black surface a lightless mirror.",
        "According to Kaspara, the second piece of the key is in the 'heart of the well'. That implies reaching into its depths. The tuning fork from the dam hums softly in your pocket, vibrating more as you approach the well."
      ],
      choices: [
        { text: "How do I retrieve something from... that?", nextScene: 'ponder_well_retrieval' },
        { text: "Examine the area around the well for clues.", nextScene: 'examine_well_surroundings_key' },
      ]
  },
  examine_well_surroundings_key: {
    id: 'examine_well_surroundings_key',
    text: [
      "You circle the well, scanning the floor. Near the edge are small, almost invisible chalk marks. Kaspara's work. They are not symbols, but calculations of depth, density, and resonance.",
      "Tucked into a crevice in the wall, you find a small leather pouch. Inside is a spool of fine, impossibly strong metallic thread, and a small lead weight. A plumb line. A note is wrapped around the spool: 'The resonance is null at 33 feet. The field inverts. The key must be suspended there to attune. Do not let it touch the core.'"
    ],
    addItem: 'Plumb Line',
    choices: [
      { text: "I have the tool. I must lower something into the well.", nextScene: 'ponder_well_retrieval' },
    ]
  },
  ponder_well_retrieval: {
    id: 'ponder_well_retrieval',
    text: [
      "Reaching in is suicide. You look at the tuning fork. Kaspara's note implies the two pieces must be joined. You examine the fork and find a small, threaded hole at its base.",
      "You have the plumb line. The second piece of the key must be down there, and you must lower the first piece to connect with it. A kind of cosmic fishing expedition in a well of pure darkness."
    ],
    choices: [
      { text: "Attach the tuning fork to the line and lower it into the well.", nextScene: 'lower_key_into_well', requiresItem: ['Resonance Fork', 'Plumb Line', 'Resonance Calibrator'] },
    ]
  },
  lower_key_into_well: {
    id: 'lower_key_into_well',
    text: [
      "You use the Resonance Calibrator to attune the tuning fork, its hum sharpening to a pure, piercing note. You then tie the metallic thread to it and lower it into the black void of the well. The fork vanishes without a ripple. You count the feet of thread as it spools out into the darkness.",
      "At thirty-three feet, the line goes taut. The thread begins to vibrate as the hum of the tuning fork travels down it. The pitch changes, rising, then harmonizing with a second, deeper tone from the well. The keys are connecting.",
      "Suddenly, the cellar shudders violently. The black liquid of the well begins to boil with dark energy. A psychic scream of pure agony and rage echoes in your skull, a sound that has no sound. The Sleeper has felt the poison.",
      "The thread goes slack. You quickly reel it in. The tuning fork emerges, but it has changed. A crystalline prism is now fused to its base, glowing with a fierce, angry light. You have the complete key. But the noise has alerted Caius."
    ],
    removeItem: 'Resonance Fork',
    addItem: 'Attuned Key',
    choices: [
      { text: "I have to get out of here. Now.", nextScene: 'caius_confrontation' },
    ]
  },
  caius_confrontation: {
    id: 'caius_confrontation',
    text: [
      "As you turn to leave, Caius is at the top of the stairs, his face a mask of cold, righteous fury. He holds a heavy, iron fire poker. 'Blasphemer,' he whispers, his voice shaking with rage. 'You have struck the god in its heart. You have wounded the world. I will not let you leave this room.'",
      "He begins to descend, slow and deliberate. He is an old man, but his eyes burn with the fire of a true believer. He will kill you to stop you from completing your sacrilege."
    ],
    choices: [
      { text: "Reason with him. Explain what's at stake.", nextScene: 'reason_with_caius' },
      { text: "I will not fight an old man. I have to get past him.", nextScene: 'evade_caius' },
      { text: "He has left me no choice. I will defend myself.", nextScene: 'fight_caius' },
    ]
  },
  reason_with_caius: {
    id: 'reason_with_caius',
    text: [
      "'Caius, wait! It's not a god, it's a parasite!' you plead, your voice loud in the vibrating room. 'Kaspara found a way to save us, to cut it out!'",
      "'Save us?' he spits, his face contorted. 'She has doomed us! You have turned its sleep to pain, its dreams to nightmares! The Quiet was a blessing. You have replaced it with a scream!' He raises the poker. 'There is no more talk. Only judgment.'"
    ],
    choices: [
      { text: "Dodge past him.", nextScene: 'evade_caius' },
      { text: "Prepare to fight.", nextScene: 'fight_caius' },
    ]
  },
  evade_caius: {
    id: 'evade_caius',
    text: [
      "He is old, and you are faster. As he swings the heavy poker, a clumsy, rage-filled arc, you duck and sprint up the steps. He shouts in fury behind you. You burst out into the general store. The psychic scream of the Sleeper is growing, and the whole town is vibrating. You have escaped, but you have left a broken man to face the consequences of your actions."
    ],
    choices: [
      { text: "I must finish this. Back to the dam.", nextScene: 'flee_store_with_key' },
    ]
  },
  fight_caius: {
    id: 'fight_caius',
    text: [
      "You find a rusted pipe on the floor. He swings, and you parry, the clash of iron a shocking, ugly sound. He is surprisingly strong, fueled by generations of righteous fury. But he is old, and his rage makes him predictable.",
      "You see an opening and strike, not to kill, but to disarm. The pipe hits his wrist with a sickening crack. He cries out and drops the poker, stumbling back, clutching his arm, his face a mask of shock and pain.",
      "'I'm sorry,' you whisper over the growing psychic scream from the well. You run up the stairs, leaving him to his pain and his broken faith."
    ],
    choices: [
      { text: "What I have done is terrible. But it is necessary. I must go to the dam.", nextScene: 'flee_store_with_key' },
    ]
  },
  flee_store_with_key: {
    id: 'flee_store_with_key',
    text: [
      "You emerge into the dusty general store as the whole town vibrates with a deep, groaning sound, the sound of a world in pain. The Quiet has been broken.",
      "Outside, the sky has darkened to a bruised, ugly purple. The Listeners are emerging from the dry riverbed, dozens of them, their forms more solid, their whispers a chorus of hate and agony.",
      "The poison is working. The final step is to use the key to turn the dam's amplifier into a weapon, focusing the energy to permanently sever the Sleeper from this reality."
    ],
    choices: [
      { text: "I have to get back to the dam. It's the only way to finish this.", nextScene: 'return_to_dam_to_end_it' },
    ]
  },
  return_to_dam_to_end_it: {
    id: 'return_to_dam_to_end_it',
    text: [
      "You run through the convulsing streets. The world is coming undone. You reach the dam, the structure groaning under the strain of the vibrating earth. You descend the ladder for the last time, the attuned key pulsing with a fierce, cleansing power.",
      "Inside the amplifier chamber, you know what to do. The schematic showed a central focusing lens. You clear the debris from the main console, revealing a crystalline socket.",
      "You slot the key into place. It fits perfectly. A deafening shriek of pure power erupts. Pure, white light lances from the dam up into the purple sky. A shockwave of reality-bending energy expands from the dam, a cleansing fire.",
      "You feel a moment of immense, crushing pressure, and then... silence. A true, clean, and perfect absence of sound. The groaning of the earth has stopped. The psychic scream is gone. The sky is returning to blue."
    ],
    choices: [
      { text: "Look outside. See what I have done.", nextScene: 'kaspara_path_aftermath' },
    ]
  },
  kaspara_path_aftermath: {
    id: 'kaspara_path_aftermath',
    text: [
        "You climb out of the dam's base. Vestige is still standing. The dust has settled. But something is profoundly different. The feeling of being watched, the ancient, oppressive weight, is gone. The town feels truly empty for the first time. A clean slate. A scar.",
        "You look at the riverbed. A trickle of clear, bright water is seeping from the base of the dam. The real river, the mundane, physical river, is returning, no longer diverted into another dimension.",
        "You have done what Kaspara could not. You have performed the excision. You have saved the world, but you have killed its oldest ghost to do it. The cost is unknown, but for the first time since you awoke, there is hope."
    ],
    choices: [
      { text: "Walk along the bank of the new river.", nextScene: 'kaspara_path_riverwalk' },
      { text: "Return to Kaspara's workshop one last time.", nextScene: 'kaspara_path_workshop_return' },
    ]
  },
  kaspara_path_riverwalk: {
    id: 'kaspara_path_riverwalk',
    text: [
      "You walk for hours along the growing stream. The water is impossibly clear and cold. Where the Listeners had been, small, vibrant, and entirely normal wildflowers are now blooming.",
      "Half-buried in the new, damp sand is a small, dark object. It's the silver and obsidian astrolabe from Kaspara's workshop, washed clean by the returning water. You pick it up. It is cold and inert, its purpose served.",
      "But as you hold it, one last echo brushes against your mind. Her voice, faint and distant, a whisper on the new wind. 'Thank you. It's... quiet now. The stars are right again.' And then she is gone. Truly gone, her ghost finally at peace."
    ],
    choices: [
        { text: "Look out at the restored world.", nextScene: 'kaspara_path_final_choice' }
    ]
  },
  kaspara_path_workshop_return: {
    id: 'kaspara_path_workshop_return',
    text: [
      "You return to the library, to the hidden cellar. The luminous chalk symbol on the floor is gone. The room is just a room. Her journal lies open on the table. You turn to the last page, the one with her final, desperate plan.",
      "It is blank. The ink has faded to nothing. Her work is done, her presence erased from the world she fought so hard to save. All that is left is her legacy: a silent town, a cleansed world, and the memory of her sacrifice."
    ],
    choices: [
      { text: "Step outside and see the world she saved.", nextScene: 'kaspara_path_final_choice' }
    ]
  },
  kaspara_path_final_choice: {
    id: 'kaspara_path_final_choice',
    text: [
      "You stand on the stone bridge that once spanned nothing. Below, the Lethe River is flowing, gathering strength. The sound of it, the rush of moving water, is the most beautiful sound you have ever heard. It is the sound of a world breathing again.",
      "Vestige is a ghost town, its people gone, its terrible secret carved out of its heart. But it is not dead. It is waiting. What will you do in this new, quiet world?"
    ],
    choices: [
      { text: "Stay. Become the first citizen of the new Vestige.", nextScene: 'kaspara_path_final_image_stay' },
      { text: "Leave. Follow the river out of this valley of ghosts.", nextScene: 'kaspara_path_final_image_leave' },
    ]
  },
  kaspara_path_final_image_stay: {
    id: 'kaspara_path_final_image_stay',
    text: [ "You take a seat on the edge of the bridge, watching the water flow. The sun feels warm. The silence is no longer a presence, but a simple, peaceful absence of noise. You don't know who Lysander was, but you know who you are now: the sole inhabitant of a town reborn. You are the keeper of its memory and the seed of its future. The world is quiet. It is clean. The work of rebuilding begins with a single, quiet breath." ],
    choices: [],
    isEnd: true
  },
  kaspara_path_final_image_leave: {
    id: 'kaspara_path_final_image_leave',
    text: [ "You turn your back on the bridge and the silent town. Your work here is done. Kaspara's memory is honored, the world is saved. You follow the path of the newly flowing river out of the valley. You don't know what lies beyond, but for the first time, the future is a question, not a threat. The sound of the water is a promise. A new beginning, earned in silence and sacrifice." ],
    choices: [],
    isEnd: true
  },
  // ===============================================
  // PATH: NAVIGATOR'S EVACUATION
  // ===============================================
  follow_bank_to_dam_for_overload: {
    id: 'follow_bank_to_dam_for_overload',
    text: [
        "You leave the wreck of the St. Elmo's Fire, the Navigator's cold, alien logic echoing in your mind. Evacuation. The tide pool cannot be saved. The Sleeper is not a god, but a battery to be spent. A terrible, necessary, and deeply pragmatic calculus.",
        "The Navigator's instructions were precise. Overload Kaspara's amplifier at the dam. Shatter the harmonic cage. It feels like setting off a bomb in a cathedral to save a single, precious relic."
    ],
    choices: [
        { text: "Search the control room for the schematics and logbook.", nextScene: 'search_dam_for_overload_info' },
    ]
  },
  search_dam_for_overload_info: {
    id: 'search_dam_for_overload_info',
    text: [
        "You search the ruined control room. You find the schematics for the amplifier and Theron's logbook. This time, you read them looking for instructions on how to break the machine, not warnings.",
        "Theron's notes on reversing the polarity are incomplete. But he details the power couplings. You realize that to create the feedback loop the Navigator wants, you need to overload it. You'll have to bypass the safety protocols and divert all the dam's residual power into the amplifier at once.",
        "The schematics show three main power conduits that need to be re-routed from a junction box in the turbine hall. The final activation must be initiated from the amplifier chamber itself."
    ],
    choices: [
        { text: "First, I'll find the turbine hall.", nextScene: 'find_turbine_hall' },
    ]
  },
  find_turbine_hall: {
    id: 'find_turbine_hall',
    text: [
        "A heavy steel door in the back of the control room is marked 'Turbine Hall - Authorized Personnel Only.' It's sealed with an electronic lock. A slot for a keycard glows a menacing red. You need Theron's master keycard."
    ],
    choices: [
        { text: "Use the Master Keycard.", nextScene: 'open_turbine_hall_door', requiresItem: 'Master Keycard'},
        { text: "I don't have the keycard. I must have missed something.", nextScene: 'navigator_plan_accept_start' },
    ]
  },
  open_turbine_hall_door: {
    id: 'open_turbine_hall_door',
    text: [
        "You slide the keycard into the slot. The light turns green, and the heavy door slides open with a pneumatic hiss.",
        "The space beyond is immense, a cavernous hall containing three colossal, silent turbines, gods of a forgotten religion of power. A catwalk rings the upper level. Below, a maze of pipes covers the floor.",
        "According to the schematics, the junction box is on the lower level, near Turbine Two. The levers are unmarked and must be thrown in the correct sequence to prevent a catastrophic, premature explosion."
    ],
    choices: [
        { text: "Take the catwalk to the far side stairs.", nextScene: 'turbine_hall_catwalk' },
        { text: "Find a ladder down from here.", nextScene: 'turbine_hall_ladder' },
    ]
  },
  turbine_hall_ladder: {
    id: 'turbine_hall_ladder',
    text: [
      "You spot a maintenance ladder bolted to the wall near the entrance. It's a more direct route down. As you descend, the sheer scale of the silent turbines is awe-inspiring and deeply intimidating.",
      "On the floor, you see a trail of black sludge leading from a dark corner toward the center of the room. A Listener has been here. Or still is."
    ],
    choices: [
      { text: "Proceed with caution towards the turbines.", nextScene: 'catwalk_stealth_start' },
    ]
  },
  turbine_hall_catwalk: {
    id: 'turbine_hall_catwalk',
    text: [
        "You step onto the metal catwalk. Your footsteps echo like gunshots in the vast space. Below, you see two Listeners crawling along the large pipes like monstrous slugs. They don't seem to have noticed you. Yet.",
        "This complicates things. The junction box is on their level. You'll need to be quiet. The stairs are on the other side of the hall, a long, exposed walk."
    ],
    choices: [
        { text: "Continue across the catwalk, moving slowly and quietly.", nextScene: 'catwalk_stealth_start' },
        { text: "Go back. Find another way down.", nextScene: 'turbine_hall_ladder' },
    ]
  },
  catwalk_stealth_start: {
    id: 'catwalk_stealth_start',
    text: [
        "You are on the main floor of the turbine hall. Two Listeners patrol the area between you and the junction box. They move in slow, predictable patterns. You need to get to the junction box, re-route the power, and then get to a maintenance hatch to escape.",
        "Direct confrontation is suicide. You'll need to use the environment. There are large machines for cover, and loose chains hanging from a crane that could create a diversion."
    ],
    choices: [
        { text: "Look for something to throw.", nextScene: 'find_distraction_object' },
        { text: "Try to sneak past without a distraction.", nextScene: 'sneak_past_listeners_direct' },
    ]
  },
  find_distraction_object: {
    id: 'find_distraction_object',
    text: [
      "You spot a pile of discarded bolts and metal scraps near a workbench. You pocket a heavy, fist-sized bolt. It's perfect for making a loud noise. The crane and its chains are on the far side of the room, away from your objective.",
      "This is a risk. The noise will draw them, but it might also put them on high alert."
    ],
    addItem: 'Heavy Bolt',
    choices: [
      { text: "Wait for the right moment, then throw the bolt.", nextScene: 'throw_bolt_distraction' },
      { text: "It's too risky. I'll try to sneak.", nextScene: 'sneak_past_listeners_direct' },
    ]
  },
  sneak_past_listeners_direct: {
    id: 'sneak_past_listeners_direct',
    text: [
      "You decide against a distraction. You wait until both Listeners have their 'backs' to you, then begin to move, slipping from the shadow of one turbine to the next.",
      "You are halfway there when a loose piece of gravel shifts under your foot. The sound is tiny, but in the silence, it's a gunshot. Both Listeners stop. Their featureless heads snap in your direction. Their whispers rise to a furious shriek as they scuttle towards you."
    ],
    choices: [
      { text: "Run for the junction box!", nextScene: 'run_for_junction_box' },
    ]
  },
  throw_bolt_distraction: {
    id: 'throw_bolt_distraction',
    text: [
      "You wait until the Listeners are near the center of the room, then hurl the bolt. It smashes into the hanging chains with a loud clang that echoes through the hall. Both Listeners immediately stop and scuttle rapidly toward the sound.",
      "The path to the junction box and the escape hatch is clear. You have a limited window before they realize they've been tricked."
    ],
    removeItem: 'Heavy Bolt',
    choices: [
      { text: "Move to the junction box now, while they're distracted.", nextScene: 'reach_junction_box_stealth' },
    ]
  },
  reach_junction_box_stealth: {
    id: 'reach_junction_box_stealth',
    text: [
      "While the Listeners are distracted, you sprint to the junction box. You know the sequence from the schematics: Intake, Regulation, Output. Left, Center, Right.",
      "You throw the levers. The deep hum of power fills the hall, and emergency lights flicker on. The Listeners, realizing their mistake, shriek and turn back towards you, but you're already running for the escape hatch."
    ],
    choices: [
      { text: "Get to the maintenance hatch!", nextScene: 'flee_to_tunnels' },
    ]
  },
  run_for_junction_box: {
    id: 'run_for_junction_box',
    text: [
      "There's no time for stealth. You run. The Listeners are impossibly fast. You reach the junction box and slap the levers in the correct sequence. The hum of power and flicker of lights signal your success, but one of the Listeners is right behind you.",
      "It lurches. You feel a searing, cold pain as its tendrils scrape across your back. You stumble but manage to wrench open the maintenance hatch and fall through, slamming it shut just as the creature crashes against it."
    ],
    choices: [
      { text: "I'm wounded, but I have to keep going.", nextScene: 'flee_to_tunnels_wounded' },
    ]
  },
  flee_to_tunnels: {
    id: 'flee_to_tunnels',
    text: [
        "You drop into the narrow, dark tunnel below, slamming the hatch shut as the Listeners crash into it from above. You are in a cramped maintenance corridor.",
        "You can hear the creatures shrieking and pounding on the hatch. You have to move. The schematics showed these tunnels lead directly to the amplifier chamber. The final step is at hand."
    ],
    choices: [
        { text: "Navigate the tunnels to the amplifier chamber.", nextScene: 'navigate_tunnels' },
    ]
  },
  flee_to_tunnels_wounded: {
    id: 'flee_to_tunnels_wounded',
    text: [
      "You drop into the tunnel, pain radiating from your back. You slam the hatch shut. You lie in the darkness for a moment, gasping. The wound is deep, but not deep enough to stop you. The pounding on the hatch reminds you that you have no time to rest.",
      "You push yourself to your feet. The tunnels are dark and claustrophobic, but they lead to the end. The final step is at hand."
    ],
    choices: [
      { text: "Push through the pain. Find the amplifier chamber.", nextScene: 'navigate_tunnels' },
    ]
  },
  navigate_tunnels: {
    id: 'navigate_tunnels',
    text: [
        "You move through the dark tunnels. The sound of the Listeners fades, replaced by the deep, growing hum of the overloaded turbines. You reach a ladder and climb up, emerging into the chamber where Theron's body sits.",
        "The smashed amplifier is glowing, arcs of raw energy dancing between its broken components. The air crackles. The power you diverted is building towards a critical overload. A single, heavily insulated switch on the main console is sparking. This is the final trigger.",
        "The sextant in your pocket hums, its crystals glowing. The Navigator's voice fills your mind, calm amidst the chaos. 'The engine is primed, Pilot. The door is opening. All that is left is to turn the key. The choice is still yours.'"
    ],
    choices: [
        { text: "Throw the switch. Evacuate Vestige.", nextScene: 'trigger_overload' },
    ]
  },
  trigger_overload: {
    id: 'trigger_overload',
    text: [
        "Your hand closes around the switch. It's hot and vibrates with unstable power. You take a breath. You throw it.",
        "The sound is not a sound. It is a physical wave of force that shreds the air. Pure, white light erupts from the amplifier, consuming Theron's body, the chamber, the dam. A psychic scream from the Sleeper echoes across reality, not a sound of pain, but a final, colossal release of energy.",
        "You see the town of Vestige for a final, impossible instant from above. You see it dissolve into a billion points of light, a map of stars, souls untethered from place and time."
    ],
    choices: [
        { text: "Let go.", nextScene: 'evacuation_sequence' },
    ]
  },
  evacuation_sequence: {
    id: 'evacuation_sequence',
    text: [
      "There is no body, no up or down. Only consciousness. You are a point of light adrift in a flowing, brilliant river of pure energy—the Sleeper's life force, repurposed into an escape route. Other lights drift with you, the collected souls of Vestige.",
      "You feel Kaspara's presence nearby, a fading spark of light and regret. The Navigator's consciousness, vast and calming, enfolds yours, guiding the terrified lights of Vestige. 'The crossing is brief,' it communicates. 'Hold fast. A new shore awaits.'",
      "You are a passenger on a vessel made from a dead god's soul, sailing an ocean between worlds."
    ],
    choices: [
        { text: "Trust the Navigator. Endure the crossing.", nextScene: 'new_shore' },
    ]
  },
  new_shore: {
    id: 'new_shore',
    text: [
      "The torrent of light slows. Sensation returns. The smell of wet ozone and strange, alien flowers. The sound of gentle waves on a shore. The feeling of cool, purple sand beneath your feet.",
      "You open your eyes. You are standing on a beach, looking out at a turquoise sea. A pair of suns, one gold, one silver, hang in a lavender sky. Around you, other figures are coalescing from the light, stumbling onto the sand, looking at their new bodies with dazed disbelief. Caius is there, staring at the twin suns with terrified awe.",
      "The Navigator has brought you here, to a new, empty world. The cost was everything you knew. The prize is a future."
    ],
    choices: [
      { text: "Look at the faces of the survivors.", nextScene: 'navigator_path_final_image_survivors' },
      { text: "Look out at the new ocean.", nextScene: 'navigator_path_final_image_ocean' },
    ]
  },
  navigator_path_final_image_survivors: {
    id: 'navigator_path_final_image_survivors',
    text: [ "The people of Vestige are here. Fewer than there were, but they are here. They are confused, but the crushing weight of the Quiet is gone from their eyes, replaced with a dawning, terrifying wonder. You have not saved their home, but you have saved them. You are refugees at the dawn of a new world, and you have each other. The ultimate act of community was to abandon the house to save the family. Your journey is over, but theirs has just begun." ],
    choices: [],
    isEnd: true
  },
  navigator_path_final_image_ocean: {
    id: 'navigator_path_final_image_ocean',
    text: [ "You look out at the vast, alien ocean. It is a symbol of infinite, terrifying possibility. Vestige is a memory, a ghost story you will tell your children in this new world. You have sacrificed a piece of history for a chance at a future. The price was a world. The prize is a new one. The Navigator is gone, the Sleeper is gone, Kaspara is at peace. You are alone, a stranger on a strange shore, with nothing but the future ahead of you. It is a terrifying and perfect freedom." ],
    choices: [],
    isEnd: true
  },
};
