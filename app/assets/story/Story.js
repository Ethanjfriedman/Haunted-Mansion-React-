export default {
  opening: {
    narrative: [
      "It was a dark and stormy night. OK, that\u2019s a terrible clich\u00e9: Actually, it was a sunny, lovely day. Even so, you still had a feeling of foreboding as you approached your late, not so dearly departed Great-Aunt Prudence\u2019s sprawling mansion. Built in the height of the Victorian era, it is a veritable warren of gables, stained glass, porticos, and annexes, all in an intimidating state of tumbling disrepair. Still, it\u2019s yours now, according to the strange lawyer with the pasty complexion and odd accent who sought you out. On one condition, that is: that you stay within the mansion for a single night. \u201cShould you leave it, even but for a moment, and the bequest will be invalid,\u201d he had said in that vaguely Eastern European accent. \u201cYou must enter ere the sun sets below the horizon, and remain until the first light of dawn.\u201d You had laughed at the time\u2014such a silly piece of nonsense\u2014but now you wonder....",
      "Still, the thought of inheriting not the house so much as the 200 acres of prime real estate on which it sits is a powerful one: three different real estate developers have already sought you out, and the sums they hinted at were not small. So, you square your shoulders, take a deep breath and climb the creaking porch steps to face the front door with its hideous gargoyle-head door knocker. If you weren\u2019t a practical, non-superstitious person, you\u2019d swear that that was a faded handprint on the frosted-glass window inset into the door. (A handprint in blood?! \u201cNah, stop acting like a silly child scared of the dark!\u201d, you tell yourself.) What are you going to do?"],
    fullChoices: ["OPEN the front door","WALK around to the back"],
    results: ["frontDoor", "backDoor"]
  },
  frontDoor: {
    narrative: [
      "The front door is locked. You jiggle the handle fruitlessly. Odd, now that you think of it, that Great-Aunt Prudence didn\u2019t give you a key. Maybe there\u2019s a caretaker home? Although, you think to yourself, the house doesn\u2019t look like it\u2019s been inhabited for decades. Shrugging, you grab the ornate brass door knocker\u2014carved in the shape of a leering gargoyle\u2014and give it a hearty rap. To your surprise, the firmly locked door creaks open although no one is visible in the dim hallway that appears, covered in dust. It looks like no one has been inside since your great-aunt met her maker. Do you:"
    ],
    fullChoices: ["SHRUG and enter the front hall","TRY the rear instead\u2014maybe it will look less creepy"],
    results: ["frontHall","backDoor"]
  },
  frontHall: {
    narrative: [
      "The front hall is dusty and dim. A large portrait of Great-Aunt Prudence hangs on one wall, wearing a dress that looked like it went out of fashion in 1820, with a high collar that comes up to under her chin. She\u2019s staring out at the viewer grimly, her mouth closed in a prim line. Odd, now that you come to think of it \u2014 you don\u2019t think you ever saw the old bat smile. Maybe there was something funny about her teeth and she was shy of showing them, perhaps? No, she was never shy of anything in her life, you reflect. If anything, she had a tendency to give her opinions on anything and everything \u2014 and forcefully, too.",
      "Your reflections over (although that dress in the picture looks ancient \u2014 how old WAS she?), you resume your study of the hallway. Curious, you jiggle the front door lock from the inside. Firmly locked, now.... A door to the kitchen lies ajar at one end of the hall, an ornately carved staircase leads up to the second story, and an open archway leads to the formal dining room."
    ],
    fullChoices: ["GO through the kitchen door", "WALK into the dining room", "ONWARD and upward! Let\u2019s go upstairs"],
    results: ["kitchen","diningRoom","upstairsHall"]
  },
  diningRoom: {
    narrative: [
      "Loot! Or so your acquisitive mind, trained via decades of video games, immediately thinks when you spot the antique silverware sitting in the sideboard. You knew old Prudence was wealthy \u2014 after all, that is what drew you here \u2014 but you had no idea she was this well-off! An old ex of yours (and the less said about that the better) had been an appraiser for Sotheby\u2019s and you picked up a little along the way. Some of this stuff must be 17th-century. We\u2019re talking the kind of silver an English duke wouldn\u2019t turn up his nose at presenting to his guests. [You now have ANTIQUE SILVER in your inventory.]",
      "Looking around the rest of the dining room, you see little else of interest, and nothing else of such monetary interest (there is more to life than money, right? Right? RIGHT!?!?). A door at the rear of the room leads to the kitchen, visible beyond. There\u2019s also a small door, clearly for servants, beyond which you can see a plain staircase leading up to the second floor. And there\u2019s an archway that leads to the front hall. Where to next?"
    ],
    fullChoices: ["HUNGER calls: go check out the kitchen","FRONT hall-wards","UP the servants\u2019 staircase to the second floor"],
    results: ["kitchen","frontHall","upstairsHall"]
  },
  upstairsHall: {
    narrative: [
      "There\u2019s not much of interest here. Some paintings on the walls. Oddly, none of the people depicted in them are shown with faces visible. Always, there\u2019s a hood over their head or the shadow of some object in the painting blocking their face. You shiver a little. This place gets stranger and stranger.... Looking around, you see several doorways leading to bedrooms, but all but one are boarded up. A narrow staircase also continues upward to the attic, and a grander staircase leads down to the front hall."
    ],
    fullChoices: ["CHECK out the bedroom","EXPLORING the attic seems like a good idea","DOWN to the front hall"],
    results: ["bedroom","attic", "frontHall"]
  },
  bedroom: {
    narrative: [
      "The bedroom has a strange, unpleasant odor, rather like rotting flesh, which is odd since it appears that no one has inhabited this room for some time. \u201cWhere on earth did Prudence sleep?\u201d you wonder. Other than the smell, there is nothing unusual about the bedroom: it has a nice 18th-century oak bed, an ornately carved wardrobe (you avoid looking too closely at the carvings \u2014 for no reason you can sensibly discern, there seems to be something repellent about them), and a door leading to a bathroom beyond (probably another bedroom when the house was originally built, and later converted to a bath when indoor plumbing became a thing). Suddenly you hear a rustling from the bathroom."
    ],
    fullChoices: ["STRANGE sounds from the bathroom? Let\u2019s check it out", "NO way, man. Back out to the hall for me"],
    results: ["bathroom","upstairsHall"]
  },
  attic: {
    narrative: [
      "Nervously, you climb the steep staircase to the attic. The lock to the attic door looks broken. \u201cShould I do this?\u201d you think to yourself, calling up childhood memories of scary monsters lurking in the dark, waiting to devour you. But you are no fearful child; you\u2019re a grown adult, with the fortune of a lifetime at stake here. Childish beliefs belong in childhood, after all. Right? Not in the cold light of adulthood.",
      "You stride forward and throw open the attic door. Almost simultaneously with the crash of the door swinging open, a dark shape detaches itself from the shadows and leaps on you. As you sink to the floor, you feel a sharp pain at your neck. Everything is almost dreamlike now, blurry and indistinct, as if it\u2019s happening to someone else. You hear a slurping sound, and feel something warm and wet on your neck \u2014 your own blood, you realize faintly, as the darkness closes in. Forever."
    ],
    fullChoices: ["CLOSE your eyes and embrace the eternal cold of death"],
    results: ["gameover"]
  },
  bathroom: {
    narrative: [
      "It\u2019s a bathroom. Toilet. Sink. Shower. What did you expect, the Taj Mahal? Figuring that you should always answer the call of nature when there\u2019s an opportunity, you use the toilet. And of course, wash your hands after. The water from the tap is odd, though. It carries an almost metallic smell to it. As if it had somehow been contaminated with iron. \u201cI\u2019ll have to get a plumber out here once the place is mine,\u201d you think. Ah well, the life of a wealthy homeowner is a difficult one."
    ],
    fullChoices: ["BACK out to the bedroom"],
    results: ["bedroom"]
  },
  backDoor: {
    narrative: [
      "You pick your way through the weeds and brambles that grow untended around the side of the old house. The rear looks even more neglected than the front had been, something you wouldn\u2019t have guessed was possible before you\u2019d seen it. As you approach the kitchen door (which is slightly ajar), you notice the gleam of something shiny and sharp-looking in the grass. It exudes an odd aura of danger, as if warning you to leave it well alone. Do you:"
    ],
    fullChoices: ["IGNORE it and open the kitchen door","BEND down to pick up the sharp object", "GO back to the front door"],
    results: ["kitchen","backYard", "frontDoor"]
  },
  kitchen: {
    narrative: [
      "The kitchen is impressive. Clearly designed for an age when a house such as this would come with a substantial staff to serve the needs of the family. You daydream a little about what you might do with Great-Aunt Prudence\u2019s fortune, once it\u2019s pried away from the hands of her lawyers and into your own. You shake your head: time to come back to the present. Enough dreaming; there will be time   enough for dreaming later tonight.",
      "Looking around the kitchen, you see little of interest to you now. You peek in the fridge (which looks as though it were an early prototype from the 1920s) but it\u2019s empty. A big, scarred wooden table dominates the center of the room and an antique stove and oven sit against one wall. Although the whole house looks like it hasn\u2019t been lived in for years, the kitchen exudes an air of disuse that exceeds even that: it looks like someone left the room alone because they simply had no use for it. The dust of decades lies over everything. Maybe Prudence ordered all her food in for delivery? In rural Louisiana!?!?",
      "Anyway, what would you like to do? Do you want to head on into the front hall, go through a narrow servants\u2019 door to the formal dining room, or down a steep, dark staircase you find behind a plain white door and which (presumably) leads to the basement?"
    ],
    fullChoices: ["HEAD onward to the front hall", "DINING Room: maybe there\u2019s food there?", "DOWN to the basement"],
    results: ["frontHall","diningRoom","basement"]
  },
  basement: {
    narrative: [
      "The door to the basement is shut tight. You have to grab it with both hands and pull hard to open it. Finally, you manage to wrest it open (\u201cwhat was Prudence storing down here?\u201d Fantasies of crates of gold bullion dance in your head.) and slowly head down. You didn\u2019t remember to bring a flashlight, something for which you are kicking yourself now, and only a thin stream of light from the kitchen above illuminates the basement as you reach the bottom. Odd that there are no windows \u2014 no, that\u2019s wrong: there WERE windows, but they\u2019ve been thoroughly boarded up, so thoroughly that not a chink of light creeps through them. Weirder and wei \u2014 ",
      "Something \u2014 someone \u2014 cannons into you from behind so hard you are driven forward toward a large box you had noticed sitting in the corner. It is not until you fall forward onto it, breaking the lid in the process that you realize it\u2019s not a box. It is a coffin. \u201cWait what?!\u201d The person who tackled you cackles loudly as you writhe beneath them, trying to free yourself, to no avail. You realize that the soft surface beneath you is dirt. Suddenly you feel a sharp pain in your neck."
    ],
    fullChoices: ["EMBRACE the pain"],
    results: ["coffin"]
  },
  coffin: {
    narrative: [
      "Everything goes blurry and indistinct. You feel something warm on your cheek, and realize it\u2019s blood. YOUR blood. You feel faint. Everything seems very distant and unreal. You close your eyes. You\u2019re so tired. So very tired. Why struggle anymore? What\u2019s the point? The weight on your back is making greedy slurping noises. Struggle seems so pointless. Everything fades to black....",
      "You open your eyes. You are thirsty. Thirsty like you\u2019ve never been in your life. Your mouth is so dry you can barely swallow, but the mere thought of drinking water makes your stomach turn. You sit up and look blearily around. The smell of the spilled blood in the dirt of the coffin is the most intoxicating aroma you have ever experienced. Ever. From behind, you hear a raspy voice that you recognize as that of Great-Aunt Prudence. Your *dead* Great-Aunt Prudence. \u201cWelcome, child. Your new life has just begun. You had to spend one night in this house to earn your reward. Just one night. And now,\u201d, she cackles softly, \u201cit will be night everlasting.\u201d"
    ],
    fullChoices: ["GAME over"],
    results: ["endgame"]
  },
  backYard: {
    narrative: [
      "You refused to ignore my warnings about the object, huh? Well, let\u2019s see what happens. The sense of foreboding increases as your fingers curl around the carven hilt of a blood-stained knife. Examining it, you see odd carvings around the hilt, runes in a language you\u2019re unfamiliar with.",
      "A ring of teeth is inset into the hilt where it meets the blade. They seem oddly sharp and despite the age of the knife and its abandonment in the grass, you would almost swear the red-stained tip of each fang is glistening in the moonlight. Suddenly, you hear a rustling behind you. Turning, you peer uncertainly in the rapidly fading light to spot SOMETHING rushing towards you. What it is exactly, your mind revolts at the thought. Children\u2019s stories, fairy tales, come to life, it appears. What do you do?"
    ],
    fullChoices: ["STAND your ground and attempt to stab it with the knife", "MAKE a run for the forest"],
    results: ["backYardTwo","forest"]
  },
  backYardTwo: {
    narrative: [
      "What were you thinking? Whatever is charging at you moves way too fast for you to stab it. You lunge out uselessly, but it\u2019s already inside your guard and bearing you to the ground. You feel a sharp pain in your throat, as the creature \u2014 a thing out of nigthmares \u2014 feasts on you. Was this how Prudence died? You\u2019ll never know."
    ],
    fullChoices: ["YOU sink slowly to the ground as your lifeblood stains the grass red."],
    results: ["gameover"]
  },
  forest: {
    narrative: [
      "You run for the forest, your lungs heaving as they struggle to deliver oxygen to your muscles. You can hear it behind you, whatever it is. It is coming. It is coming, and it is gaining. You decide to make your stand in the clearing ahead. Reaching it, you turn around and stand your ground as your pursuer reveals itself. A large wolf, standing waist-high to a man, pads into the clearing. You see it open its mouth in an almost human-like grin, showing sharp canines at the ready. But wait! Help is at hand.",
      "Three humans enter the clearing behind the wolf. You feel a sense of relief \u2014 four on one odds mean you might be able to survive after all. Then you notice they are all naked. The woman in the middle tilts her head back and howls loudly. As their human forms stretch and morph, fur sprouting over their bodies, muzzles extending from their formerly-human faces, you lose the last few remaining shreds of your sanity. You barely even notice as the lead wolf leaps on you, fangs at the ready."
    ],
    fullChoices: ["SURRENDER to the inevitable"],
    results: ["gameover"]
  },
  gameover: {
    narrative: [
      "You have embraced the eternal cold of death. You will never again know the sensation of warm blood coursing through your veins, of cool water slipping down your throat. You will never again know love or companionship. In the eternal blackness of death, there is none."
    ],
    fullChoices: ["THANKS for playing! We hope you had fun. Say \u201cthanks\u201d if you wish to play again. Maybe there's a different ending?"],
    results: ["opening"]
  }
}
