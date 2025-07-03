const books = [
  {
    title: "Haunting & Hunting Adeline",
    author: "H.D. Carlton",
    spice: "Utterly Destroyed",
    tropes: ["Dark Romance", "Stalker", "Dubcon"],
    genre: "Dark Romance",
    tease: "A relentless, dark hunt with obsession and desire that will shred your soul.",
    link: "#"
  },
  {
    title: "Den of Vipers",
    author: "K.A. Knight",
    spice: "Ravished",
    tropes: ["Kidnapping", "Why Choose", "Dark Romance", "Strong FMC", "Humorous"],
    genre: "Dark Romance",
    tease: "In a den of vipers, survival means choosing who to trust—and who to desire.",
    link: "#"
  },
  {
    title: "Untamed Vixen",
    author: "Luna Pierce & Tessa James",
    spice: "Dripping",
    tropes: ["Why Choose", "Kidnapping", "Dark Romance"],
    genre: "Dark Romance",
    tease: "A wild heart caught between captivity and forbidden passion.",
    link: "https://www.goodreads.com/book/show/61166822-untamed-vixen"
  },
  {
    title: "Four Horsemen Series",
    author: "L.J. Swallow",
    spice: "Mildly Thirsty",
    tropes: ["Fantasy", "Mild Smut"],
    genre: "Fantasy",
    tease: "Epic battles, dark prophecy, and just a hint of seductive magic.",
    link: "#"
  },
  {
    title: "Plant Daddy (1 & 2)",
    author: "K.D. Robichaux",
    spice: "Mildly Thirsty",
    tropes: ["BDSM Romance"],
    genre: "Contemporary",
    tease: "A delicate balance of power, plants, and irresistible dominance.",
    link: "#"
  },
  {
    title: "WITSEC Series",
    author: "Ashley N. Rostek",
    spice: "Ravished",
    tropes: ["Why Choose", "Mature Themes"],
    genre: "Thriller Romance",
    tease: "Protection, secrets, and a dangerous love under witness protection.",
    link: "#"
  },
  {
    title: "Priest",
    author: "Sierra Simone",
    spice: "Utterly Destroyed",
    tropes: ["Religious Kink", "Degradation"],
    genre: "Dark Romance",
    tease: "Faith tested by forbidden lust and dark desires.",
    link: "#"
  },
  {
    title: "Praise",
    author: "Sara Cate",
    spice: "Ravished",
    tropes: ["Ex's Father", "Praise Kink"],
    genre: "Contemporary",
    tease: "Praise isn’t just words—it’s a way to break and rebuild.",
    link: "#"
  },
  {
    title: "Credence",
    author: "Penelope Douglas",
    spice: "Dripping",
    tropes: ["Why Choose"],
    genre: "Dark Romance",
    tease: "A twisted love triangle that will leave you breathless and torn.",
    link: "#"
  },
  {
    title: "Nocticadia",
    author: "Keri Lake",
    spice: "Dripping",
    tropes: ["Dark Romance", "Dark Academia"],
    genre: "Dark Academia",
    tease: "Secrets, shadows, and forbidden love lurking in the halls of power.",
    link: "#"
  },
  {
    title: "Give Me More",
    author: "Sara Cate",
    spice: "Ravished",
    tropes: ["Why Choose", "Exhibitionism", "BDSM"],
    genre: "Contemporary",
    tease: "Three men. One submissive fantasy. Open relationships never felt so damn raw.",
    link: "#"
  },
  {
    title: "Twisted Love",
    author: "Ana Huang",
    spice: "Dripping",
    tropes: ["Brother’s Best Friend", "Grumpy x Sunshine", "Possessive Male"],
    genre: "Contemporary",
    tease: "He’s cold, dangerous, and completely off-limits. So why can’t she stop wanting him?",
    link: "#"
  },
  {
    title: "The Ritual",
    author: "Shantel Tessier",
    spice: "Utterly Destroyed",
    tropes: ["Secret Society", "Dark College", "Degradation Kink"],
    genre: "Dark Romance",
    tease: "Welcome to Barrington University, where blood, power, and sex mix in every initiation.",
    link: "#"
  },
  {
    title: "The Never King",
    author: "Nikki St. Crowe",
    spice: "Ravished",
    tropes: ["Why Choose", "Fantasy", "Peter Pan Retelling"],
    genre: "Fantasy",
    tease: "Lost Boys are grown—and they don’t want to steal her heart. Just break her in.",
    link: "#"
  },
  {
    title: "Tear Asunder",
    author: "Nashoda Rose",
    spice: "Heated",
    tropes: ["Rockstar Romance", "Second Chance", "Angst"],
    genre: "Dark Romance",
    tease: "A damaged rockstar. A girl with secrets. Love doesn’t come gently here.",
    link: "#"
  },
  {
    title: "Pestilence",
    author: "Laura Thalassa",
    spice: "Dripping",
    tropes: ["Post-Apocalyptic", "Enemies to Lovers", "Forced Proximity"],
    genre: "Fantasy",
    tease: "He’s Death incarnate—and she just kidnapped him. But he's the one taking control.",
    link: "#"
  },
  {
    title: "Tryst Six Venom",
    author: "Penelope Douglas",
    spice: "Ravished",
    tropes: ["Enemies to Lovers", "F/F", "High School Bully Romance"],
    genre: "Contemporary",
    tease: "Two venomous girls. One kiss. No rules. This isn't love. It's war.",
    link: "#"
  },
  {
    title: "Hush, Hush",
    author: "Lucia Franco",
    spice: "Utterly Destroyed",
    tropes: ["Escort", "Age Gap", "Slow Burn"],
    genre: "Dark Romance",
    tease: "She’s paid to play his game. But when hearts get involved, the cost becomes lethal.",
    link: "#"
  },
  {
    title: "Lilac",
    author: "BB Reid",
    spice: "Dripping",
    tropes: ["Why Choose", "Rockstar", "Slow Burn"],
    genre: "Dark Romance",
    tease: "One girl. Three broken men. A band that may never recover once she joins.",
    link: "#"
  },
  {
    title: "Sweet Dandelion",
    author: "Micalea Smeltzer",
    spice: "Heated",
    tropes: ["Student x Counselor", "Grief", "Forbidden Romance"],
    genre: "Contemporary",
    tease: "He was her lifeline. She was his line to cross. And they both knew it.",
    link: "#"
  },
  {
    title: "Bound by Darkness",
    author: "Darynda Jones",
    spice: "Ravished",
    tropes: ["Billionaire", "Dark Secret", "Forbidden Love"],
    genre: "Dark Romance",
    tease: "A billionaire’s dark past threatens to consume them both in desire and danger.",
    link: "#"
  },
  {
    title: "Raw Temptation",
    author: "Jade West",
    spice: "Utterly Destroyed",
    tropes: ["Enemies to Lovers", "Alpha Male", "Betrayal"],
    genre: "Contemporary",
    tease: "Their hate burns hotter than their lust—and only one can survive the fire.",
    link: "#"
  },
  {
    title: "Silent Sins",
    author: "K.A. Tucker",
    spice: "Heated",
    tropes: ["Second Chance", "Dark Past", "Slow Burn"],
    genre: "Romantic Suspense",
    tease: "Secrets buried in silence ignite a passion neither saw coming.",
    link: "#"
  },
  {
    title: "Dangerous Whispers",
    author: "L.J. Shen",
    spice: "Ravished",
    tropes: ["Dark Hero", "Forced Proximity", "Possessive Male"],
    genre: "Dark Romance",
    tease: "Whispers that promise danger—and a love that refuses to let go.",
    link: "#"
  },
  {
    title: "Sinful Hearts",
    author: "Elle Kennedy",
    spice: "Dripping",
    tropes: ["Sports Romance", "Enemies to Lovers", "Slow Burn"],
    genre: "Contemporary",
    tease: "On and off the field, their passion is the real game changer.",
    link: "#"
  },
  {
    title: "Blinded Desire",
    author: "Penelope Ward",
    spice: "Heated",
    tropes: ["Injured Hero", "Slow Burn", "Second Chance"],
    genre: "Contemporary",
    tease: "Sometimes losing sight is the only way to find true love.",
    link: "#"
  },
  {
    title: "Crimson Vows",
    author: "Tessa Bailey",
    spice: "Ravished",
    tropes: ["Marriage of Convenience", "Forced Proximity", "Alpha Male"],
    genre: "Contemporary",
    tease: "Vows made in fire, tested by desire and deadly secrets.",
    link: "#"
  },
  {
    title: "Feral Craving",
    author: "Penny Reid",
    spice: "Dripping",
    tropes: ["Shifter Romance", "Enemies to Lovers", "Humor"],
    genre: "Paranormal",
    tease: "Wild instincts clash with sharp wit in this feral love story.",
    link: "#"
  },
  {
    title: "Seductive Lies",
    author: "Maya Banks",
    spice: "Heated",
    tropes: ["Spy Romance", "Deception", "Billionaire"],
    genre: "Romantic Suspense",
    tease: "When lies seduce, trust becomes the ultimate weapon.",
    link: "#"
  },
  {
    title: "Rogue’s Redemption",
    author: "J.R. Ward",
    spice: "Ravished",
    tropes: ["Vampire Romance", "Dark Hero", "Second Chance"],
    genre: "Paranormal",
    tease: "A rogue vampire’s path to redemption is paved with desire and danger.",
    link: "#"
  },
  {
    title: "Toxic Temptation",
    author: "K. Bromberg",
    spice: "Utterly Destroyed",
    tropes: ["Bad Boy", "Dark Past", "Enemies to Lovers"],
    genre: "Contemporary",
    tease: "Toxic love is addictive—and sometimes deadly.",
    link: "#"
  },
  {
    title: "Beneath the Surface",
    author: "Tillie Cole",
    spice: "Ravished",
    tropes: ["Dark Romance", "Trauma", "Forbidden Love"],
    genre: "Dark Romance",
    tease: "Beneath the pain lies a love that defies all odds.",
    link: "#"
  },
  {
    title: "Broken Chains",
    author: "S.L. Jennings",
    spice: "Dripping",
    tropes: ["BDSM", "Redemption", "Slow Burn"],
    genre: "Contemporary",
    tease: "Breaking free from chains—and into the arms of a dangerous desire.",
    link: "#"
  },
  {
    title: "Wicked Obsession",
    author: "Alexandra Ivy",
    spice: "Heated",
    tropes: ["Paranormal", "Obsession", "Alpha Male"],
    genre: "Paranormal",
    tease: "Obsession turns wicked in a world of shadows and secrets.",
    link: "#"
  },
  {
    title: "Falling Into You",
    author: "J. Lynn",
    spice: "Mildly Thirsty",
    tropes: ["New Adult", "College Romance", "Slow Burn"],
    genre: "Contemporary",
    tease: "First love, second chances, and all the messy in between.",
    link: "#"
  },
  {
    title: "Sin City Nights",
    author: "C.J. Roberts",
    spice: "Ravished",
    tropes: ["Dark Romance", "Kidnapping", "Redemption"],
    genre: "Dark Romance",
    tease: "In a city of sin, love is the only escape.",
    link: "#"
  },
  {
    title: "Chasing Shadows",
    author: "Maya Banks",
    spice: "Dripping",
    tropes: ["Suspense", "Forbidden Love", "Slow Burn"],
    genre: "Romantic Suspense",
    tease: "Chasing what you can’t have comes with a price.",
    link: "#"
  },
  {
    title: "Dangerous Game",
    author: "Jill Shalvis",
    spice: "Heated",
    tropes: ["Small Town", "Second Chance", "Humor"],
    genre: "Contemporary",
    tease: "Small town games get dangerously real when sparks fly.",
    link: "#"
  },
  {
    title: "Crave the Night",
    author: "Larissa Ione",
    spice: "Ravished",
    tropes: ["Paranormal", "Vampire Romance", "Forbidden Love"],
    genre: "Paranormal",
    tease: "Night cravings and forbidden bites in a world of eternal darkness.",
    link: "#"
  },
  {
    title: "Sins of the Past",
    author: "Christina Lauren",
    spice: "Dripping",
    tropes: ["Enemies to Lovers", "Second Chance", "Slow Burn"],
    genre: "Contemporary",
    tease: "Sins long buried come alive in the heat of rekindled passion.",
    link: "#"
  },
  {
    title: "Tangled Vows",
    author: "Nalini Singh",
    spice: "Heated",
    tropes: ["Marriage of Convenience", "Fantasy", "Power Struggle"],
    genre: "Fantasy",
    tease: "Power, magic, and vows tangled in desire and danger.",
    link: "#"
  },
  {
    title: "Whispered Secrets",
    author: "L.A. Fiore",
    spice: "Ravished",
    tropes: ["Dark Romance", "Trauma", "Slow Burn"],
    genre: "Dark Romance",
    tease: "Secrets whispered in shadows ignite forbidden flames.",
    link: "#"
  },
  {
    title: "Bound by Fire",
    author: "Jennifer L. Armentrout",
    spice: "Utterly Destroyed",
    tropes: ["Paranormal", "Enemies to Lovers", "Betrayal"],
    genre: "Paranormal",
    tease: "Fire burns hotter when trust is broken and hearts collide.",
    link: "#"
  },
  {
    title: "Heartbreaker",
    author: "Nalini Singh",
    spice: "Dripping",
    tropes: ["Shifter Romance", "Forbidden Love", "Slow Burn"],
    genre: "Paranormal",
    tease: "Dangerous hearts beat in sync, but love is never easy.",
    link: "#"
  },
  {
    title: "Dark Desires",
    author: "C.L. Parker",
    spice: "Heated",
    tropes: ["BDSM", "Dark Romance", "Redemption"],
    genre: "Contemporary",
    tease: "Desires that push limits and break boundaries in the darkest ways.",
    link: "#"
  },
  {
    title: "Wicked Games",
    author: "Christina Lauren",
    spice: "Ravished",
    tropes: ["Enemies to Lovers", "Fake Relationship", "Slow Burn"],
    genre: "Contemporary",
    tease: "Playing wicked games with hearts and lies that refuse to stay hidden.",
    link: "#"
  },
  {
    title: "Chained Hearts",
    author: "Laura Thalassa",
    spice: "Dripping",
    tropes: ["Paranormal", "Dark Romance", "Forced Proximity"],
    genre: "Paranormal",
    tease: "Chains may bind bodies, but passion always finds a way.",
    link: "#"
  },
  {
    title: "Silent Obsession",
    author: "Penny Reid",
    spice: "Heated",
    tropes: ["Romantic Suspense", "Dark Past", "Slow Burn"],
    genre: "Contemporary",
    tease: "An obsession that haunts her dreams and awakens forbidden desires.",
    link: "#"
  },
  {
    title: "Burned",
    author: "L.J. Shen",
    spice: "Utterly Destroyed",
    tropes: ["Enemies to Lovers", "Dark Past", "Revenge"],
    genre: "Dark Romance",
    tease: "Burning down the past to claim a ruthless future in love and war.",
    link: "#"
  },
  {  
    title: "Bloodshed",  
    author: "Molly Doyle",  
    spice: "Ravished",  
    tropes: ["Dark Past", "Why choose"],  
    genre: "Dark Romance",  
    tease: "We like book boyfriends who wear masks.",  
    link: "#"  
    }
];

