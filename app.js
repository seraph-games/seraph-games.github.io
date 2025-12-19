      // Game Data
const gamesData = [
  { name: "Slope", url: "https://olivia-games.github.io/seraph/games/slope/index.html", category: "action", description: "Fast-paced action challenge featuring Slope." },
  { name: "Subwaysurfers", url: "https://olivia-games.github.io/seraph/games/subwaysurfers/index.html", category: "action", description: "React quickly and survive intense action in Subwaysurfers." },
  { name: "Flappy", url: "https://olivia-games.github.io/seraph/games/flappy/index.html", category: "action", description: "Flappy delivers nonstop arcade-style action." },
  { name: "Papaspizzaria", url: "https://olivia-games.github.io/seraph/games/papaspizzaria/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Papaspizzaria." },
  { name: "Papasburgeria", url: "https://olivia-games.github.io/seraph/games/papasburgeria/index.html", category: "restaurant", description: "Papasburgeria lets you run your own virtual restaurant." },
  { name: "Sm64", url: "https://olivia-games.github.io/seraph/games/sm64/index.html", category: "action", description: "Sm64 delivers nonstop arcade-style action." },
  { name: "Run3", url: "https://olivia-games.github.io/seraph/games/run3/index.html", category: "action", description: "Fast-paced action challenge featuring Run3." },
  { name: "Bitlife", url: "https://olivia-games.github.io/seraph/games/bitlife/index.html", category: "action", description: "React quickly and survive intense action in Bitlife." },
  { name: "Crossy", url: "https://olivia-games.github.io/seraph/games/crossy/index.html", category: "action", description: "Crossy delivers nonstop arcade-style action." },
  { name: "Mc", url: "https://olivia-games.github.io/seraph/games/mc/index.html", category: "action", description: "Fast-paced action challenge featuring Mc." },
  { name: "Cookieclicker", url: "https://olivia-games.github.io/seraph/games/cookieclicker/index.html", category: "strategy", description: "Cookieclicker rewards smart decisions and strategy." },
  { name: "Templerun2", url: "https://olivia-games.github.io/seraph/games/templerun2/index.html", category: "action", description: "Templerun2 delivers nonstop arcade-style action." },
  { name: "Ducklife4", url: "https://olivia-games.github.io/seraph/games/ducklife4/index.html", category: "action", description: "Fast-paced action challenge featuring Ducklife4." },
  { name: "Dinogame", url: "https://olivia-games.github.io/seraph/games/dinogame/index.html", category: "action", description: "React quickly and survive intense action in Dinogame." },
  { name: "Jetpackjoyride", url: "https://olivia-games.github.io/seraph/games/jetpackjoyride/index.html", category: "action", description: "Jetpackjoyride delivers nonstop arcade-style action." },
  { name: "Retrobowl", url: "https://olivia-games.github.io/seraph/games/retrobowl/index.html", category: "action", description: "Fast-paced action challenge featuring Retrobowl." },
  { name: "Fruitninja", url: "https://olivia-games.github.io/seraph/games/fruitninja/index.html", category: "action", description: "React quickly and survive intense action in Fruitninja." },
  { name: "Doodlejump", url: "https://olivia-games.github.io/seraph/games/doodlejump/index.html", category: "action", description: "Doodlejump delivers nonstop arcade-style action." },
  { name: "2048", url: "https://olivia-games.github.io/seraph/games/2048/index.html", category: "puzzle", description: "Solve clever puzzles and brain teasers in 2048." },
  { name: "Tetris", url: "https://olivia-games.github.io/seraph/games/tetris/index.html", category: "action", description: "React quickly and survive intense action in Tetris." },
  { name: "Fancypantsadventure", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure/index.html", category: "action", description: "Fancypantsadventure delivers nonstop arcade-style action." },
  { name: "Happywheels", url: "https://olivia-games.github.io/seraph/games/happywheels/index.html", category: "action", description: "Fast-paced action challenge featuring Happywheels." },
  { name: "Papashotdoggeria", url: "https://olivia-games.github.io/seraph/games/papashotdoggeria/index.html", category: "restaurant", description: "Papashotdoggeria lets you run your own virtual restaurant." },
  { name: "Paperio2", url: "https://olivia-games.github.io/seraph/games/paperio2/index.html", category: "action", description: "Paperio2 delivers nonstop arcade-style action." },
  { name: "Superhot", url: "https://olivia-games.github.io/seraph/games/superhot/index.html", category: "action", description: "Fast-paced action challenge featuring Superhot." },
  { name: "Thebindingofisaac", url: "https://olivia-games.github.io/seraph/games/thebindingofisaac/index.html", category: "action", description: "React quickly and survive intense action in Thebindingofisaac." },
  { name: "Townscaper", url: "https://olivia-games.github.io/seraph/games/townscaper/index.html", category: "action", description: "Townscaper delivers nonstop arcade-style action." },
  { name: "Tunnelrush", url: "https://olivia-games.github.io/seraph/games/tunnelrush/index.html", category: "action", description: "Fast-paced action challenge featuring Tunnelrush." },
  { name: "Themehotel", url: "https://olivia-games.github.io/seraph/games/themehotel/index.html", category: "action", description: "React quickly and survive intense action in Themehotel." },
  { name: "Escapingtheprison", url: "https://olivia-games.github.io/seraph/games/escapingtheprison/index.html", category: "action", description: "Escapingtheprison delivers nonstop arcade-style action." },
  { name: "Stealingthediamond", url: "https://olivia-games.github.io/seraph/games/stealingthediamond/index.html", category: "action", description: "Fast-paced action challenge featuring Stealingthediamond." },
  { name: "Infiltratingtheairship", url: "https://olivia-games.github.io/seraph/games/infiltratingtheairship/index.html", category: "action", description: "React quickly and survive intense action in Infiltratingtheairship." },
  { name: "Fleeingthecomplex", url: "https://olivia-games.github.io/seraph/games/fleeingthecomplex/index.html", category: "action", description: "Fleeingthecomplex delivers nonstop arcade-style action." },
  { name: "Theimpossiblequiz", url: "https://olivia-games.github.io/seraph/games/theimpossiblequiz/index.html", category: "action", description: "Fast-paced action challenge featuring Theimpossiblequiz." },
  { name: "Solitaire", url: "https://olivia-games.github.io/seraph/games/solitaire/index.html", category: "action", description: "React quickly and survive intense action in Solitaire." },
  { name: "Drifthunters", url: "https://olivia-games.github.io/seraph/games/drifthunters/index.html", category: "racing", description: "Fast and competitive racing action in Drifthunters." },
  { name: "Vex6", url: "https://olivia-games.github.io/seraph/games/vex6/index.html", category: "action", description: "Fast-paced action challenge featuring Vex6." },
  { name: "Amongus", url: "https://olivia-games.github.io/seraph/games/amongus/index.html", category: "action", description: "React quickly and survive intense action in Amongus." },
  { name: "Surf", url: "https://olivia-games.github.io/seraph/games/surf/index.html", category: "action", description: "Surf delivers nonstop arcade-style action." },
  { name: "Motox3m", url: "https://olivia-games.github.io/seraph/games/motox3m/index.html", category: "racing", description: "Race at high speed and master the tracks in Motox3m." },
  { name: "Fnaf", url: "https://olivia-games.github.io/seraph/games/fnaf/index.html", category: "horror", description: "Fnaf delivers suspense and horror elements." },
  { name: "Fnaf 2", url: "https://olivia-games.github.io/seraph/games/fnaf-2/index.html", category: "horror", description: "Survive the fear and atmosphere of Fnaf 2." },
  { name: "Fnaf 3", url: "https://olivia-games.github.io/seraph/games/fnaf-3/index.html", category: "horror", description: "A tense and scary experience awaits in Fnaf 3." },
  { name: "Fnaf 4", url: "https://olivia-games.github.io/seraph/games/fnaf-4/index.html", category: "horror", description: "Fnaf 4 delivers suspense and horror elements." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool1/index.html", category: "action", description: "Riddleschool delivers nonstop arcade-style action." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool2/index.html", category: "action", description: "Fast-paced action challenge featuring Riddleschool." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool3/index.html", category: "action", description: "React quickly and survive intense action in Riddleschool." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool4/index.html", category: "action", description: "Riddleschool delivers nonstop arcade-style action." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool5/index.html", category: "action", description: "Fast-paced action challenge featuring Riddleschool." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddletransfer/index.html", category: "action", description: "React quickly and survive intense action in Riddleschool." },
  { name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddletransfer2/index.html", category: "action", description: "Riddleschool delivers nonstop arcade-style action." },
  { name: "Driftboss", url: "https://olivia-games.github.io/seraph/games/driftboss/index.html", category: "racing", description: "Race at high speed and master the tracks in Driftboss." },
  { name: "Fnf", url: "https://olivia-games.github.io/seraph/games/fnf/index.html", category: "music", description: "Fnf combines music with fast-paced gameplay." },
  { name: "Pacman", url: "https://olivia-games.github.io/seraph/games/pacman/index.html", category: "action", description: "Pacman delivers nonstop arcade-style action." },
  { name: "Papaspancakeria", url: "https://olivia-games.github.io/seraph/games/papaspancakeria/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Papaspancakeria." },
  { name: "Rooftop", url: "https://olivia-games.github.io/seraph/games/rooftop/index.html", category: "action", description: "React quickly and survive intense action in Rooftop." },
  { name: "Baldisbasics", url: "https://olivia-games.github.io/seraph/games/baldisbasics/index.html", category: "action", description: "Baldisbasics delivers nonstop arcade-style action." },
  { name: "Bobtherobber2", url: "https://olivia-games.github.io/seraph/games/bobtherobber2/index.html", category: "action", description: "Fast-paced action challenge featuring Bobtherobber2." },
  { name: "Minesweeper", url: "https://olivia-games.github.io/seraph/games/minesweeper/index.html", category: "puzzle", description: "Minesweeper challenges logic and problem-solving skills." },
  { name: "Pokemonemerald", url: "https://olivia-games.github.io/seraph/games/pokemonemerald/index.html", category: "rpg", description: "An RPG adventure filled with depth: Pokemonemerald." },
  { name: "Pokemonfirered", url: "https://olivia-games.github.io/seraph/games/pokemonfirered/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonfirered." },
  { name: "Supermariobros", url: "https://olivia-games.github.io/seraph/games/supermariobros/index.html", category: "platformer", description: "Supermariobros challenges your timing and movement skills." },
  { name: "Supermariokart", url: "https://olivia-games.github.io/seraph/games/supermariokart/index.html", category: "platformer", description: "A skill-based platforming adventure called Supermariokart." },
  { name: "Supermarioworld", url: "https://olivia-games.github.io/seraph/games/supermarioworld/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioworld." },
  { name: "Thereisnogame", url: "https://olivia-games.github.io/seraph/games/thereisnogame/index.html", category: "action", description: "React quickly and survive intense action in Thereisnogame." },
  { name: "Worldshardestgame", url: "https://olivia-games.github.io/seraph/games/worldshardestgame/index.html", category: "action", description: "Worldshardestgame delivers nonstop arcade-style action." },
  { name: "Castlevania", url: "https://olivia-games.github.io/seraph/games/castlevania/index.html", category: "action", description: "Fast-paced action challenge featuring Castlevania." },
  { name: "Donkeykong", url: "https://olivia-games.github.io/seraph/games/donkeykong/index.html", category: "action", description: "React quickly and survive intense action in Donkeykong." },
  { name: "Drmario", url: "https://olivia-games.github.io/seraph/games/drmario/index.html", category: "platformer", description: "A skill-based platforming adventure called Drmario." },
  { name: "Metroid", url: "https://olivia-games.github.io/seraph/games/metroid/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Metroid." },
  { name: "Supermariobros2", url: "https://olivia-games.github.io/seraph/games/supermariobros2/index.html", category: "platformer", description: "Supermariobros2 challenges your timing and movement skills." },
  { name: "Supermariobros3", url: "https://olivia-games.github.io/seraph/games/supermariobros3/index.html", category: "platformer", description: "A skill-based platforming adventure called Supermariobros3." },
  { name: "Thelegendofzelda", url: "https://olivia-games.github.io/seraph/games/thelegendofzelda/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Thelegendofzelda." },
  { name: "Warioware", url: "https://olivia-games.github.io/seraph/games/warioware/index.html", category: "action", description: "React quickly and survive intense action in Warioware." },
  { name: "Yoshisisland", url: "https://olivia-games.github.io/seraph/games/yoshisisland/index.html", category: "action", description: "Yoshisisland delivers nonstop arcade-style action." },
  { name: "Donkeykongland", url: "https://olivia-games.github.io/seraph/games/donkeykongland/index.html", category: "action", description: "Fast-paced action challenge featuring Donkeykongland." },
  { name: "Kirbysdreamland", url: "https://olivia-games.github.io/seraph/games/kirbysdreamland/index.html", category: "platformer", description: "Kirbysdreamland challenges your timing and movement skills." },
  { name: "Supermarioland", url: "https://olivia-games.github.io/seraph/games/supermarioland/index.html", category: "platformer", description: "A skill-based platforming adventure called Supermarioland." },
  { name: "Dogeminer", url: "https://olivia-games.github.io/seraph/games/dogeminer/index.html", category: "action", description: "Fast-paced action challenge featuring Dogeminer." },
  { name: "Tanukisunset", url: "https://olivia-games.github.io/seraph/games/tanukisunset/index.html", category: "action", description: "React quickly and survive intense action in Tanukisunset." },
  { name: "Aquaparkslides", url: "https://olivia-games.github.io/seraph/games/aquaparkslides/index.html", category: "action", description: "Aquaparkslides delivers nonstop arcade-style action." },
  { name: "Colorswitch", url: "https://olivia-games.github.io/seraph/games/colorswitch/index.html", category: "action", description: "Fast-paced action challenge featuring Colorswitch." },
  { name: "Papasfreezeria", url: "https://olivia-games.github.io/seraph/games/papasfreezeria/index.html", category: "restaurant", description: "Papasfreezeria lets you run your own virtual restaurant." },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd/index.html", category: "strategy", description: "A strategic gameplay experience built around Btd." },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd2/index.html", category: "strategy", description: "Plan ahead and outthink opponents in Btd." },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd3/index.html", category: "strategy", description: "Btd rewards smart decisions and strategy." },
  { name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd4/index.html", category: "strategy", description: "A strategic gameplay experience built around Btd." },
  { name: "Bomberman", url: "https://olivia-games.github.io/seraph/games/bomberman/index.html", category: "action", description: "Fast-paced action challenge featuring Bomberman." },
  { name: "Fireemblem", url: "https://olivia-games.github.io/seraph/games/fireemblem/index.html", category: "action", description: "React quickly and survive intense action in Fireemblem." },
  { name: "Iceclimber", url: "https://olivia-games.github.io/seraph/games/iceclimber/index.html", category: "action", description: "Iceclimber delivers nonstop arcade-style action." },
  { name: "Mariokartsupercircuit", url: "https://olivia-games.github.io/seraph/games/mariokartsupercircuit/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Mariokartsupercircuit." },
  { name: "Pokemonleafgreen", url: "https://olivia-games.github.io/seraph/games/pokemonleafgreen/index.html", category: "rpg", description: "Pokemonleafgreen features progression, exploration, and story." },
  { name: "Pokemonruby", url: "https://olivia-games.github.io/seraph/games/pokemonruby/index.html", category: "rpg", description: "An RPG adventure filled with depth: Pokemonruby." },
  { name: "Pokemonsapphire", url: "https://olivia-games.github.io/seraph/games/pokemonsapphire/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonsapphire." },
  { name: "Superstarsaga", url: "https://olivia-games.github.io/seraph/games/superstarsaga/index.html", category: "action", description: "React quickly and survive intense action in Superstarsaga." },
  { name: "Adofai", url: "https://olivia-games.github.io/seraph/games/adofai/index.html", category: "action", description: "Adofai delivers nonstop arcade-style action." },
  { name: "Supersmashflash", url: "https://olivia-games.github.io/seraph/games/supersmashflash/index.html", category: "fighting", description: "Battle opponents in skill-based combat in Supersmashflash." },
  { name: "Supermeatboy", url: "https://olivia-games.github.io/seraph/games/supermeatboy/index.html", category: "action", description: "React quickly and survive intense action in Supermeatboy." },
  { name: "Stickmanhook", url: "https://olivia-games.github.io/seraph/games/stickmanhook/index.html", category: "action", description: "Stickmanhook delivers nonstop arcade-style action." },
  { name: "Defendthetank", url: "https://olivia-games.github.io/seraph/games/defendthetank/index.html", category: "action", description: "Fast-paced action challenge featuring Defendthetank." },
  { name: "Sortthecourt", url: "https://olivia-games.github.io/seraph/games/sortthecourt/index.html", category: "action", description: "React quickly and survive intense action in Sortthecourt." },
  { name: "Thisistheonlylevel", url: "https://olivia-games.github.io/seraph/games/thisistheonlylevel/index.html", category: "action", description: "Thisistheonlylevel delivers nonstop arcade-style action." },
  { name: "Run", url: "https://olivia-games.github.io/seraph/games/run/index.html", category: "action", description: "Fast-paced action challenge featuring Run." },
  { name: "Run2", url: "https://olivia-games.github.io/seraph/games/run2/index.html", category: "action", description: "React quickly and survive intense action in Run2." },
  { name: "Battleships", url: "https://olivia-games.github.io/seraph/games/battleships/index.html", category: "action", description: "Battleships delivers nonstop arcade-style action." },
  { name: "Breakingthebank", url: "https://olivia-games.github.io/seraph/games/breakingthebank/index.html", category: "action", description: "Fast-paced action challenge featuring Breakingthebank." },
  { name: "Ducklife", url: "https://olivia-games.github.io/seraph/games/ducklife/index.html", category: "action", description: "React quickly and survive intense action in Ducklife." },
  { name: "Ducklife2", url: "https://olivia-games.github.io/seraph/games/ducklife2/index.html", category: "action", description: "Ducklife2 delivers nonstop arcade-style action." },
  { name: "Ducklife3", url: "https://olivia-games.github.io/seraph/games/ducklife3/index.html", category: "action", description: "Fast-paced action challenge featuring Ducklife3." },
  { name: "Linerider", url: "https://olivia-games.github.io/seraph/games/linerider/index.html", category: "action", description: "React quickly and survive intense action in Linerider." },
  { name: "Mariocombat", url: "https://olivia-games.github.io/seraph/games/mariocombat/index.html", category: "platformer", description: "A skill-based platforming adventure called Mariocombat." },
  { name: "Raftwars2", url: "https://olivia-games.github.io/seraph/games/raftwars2/index.html", category: "action", description: "Fast-paced action challenge featuring Raftwars2." },
  { name: "Spaceinvaders", url: "https://olivia-games.github.io/seraph/games/spaceinvaders/index.html", category: "action", description: "React quickly and survive intense action in Spaceinvaders." },
  { name: "Animalcrossingwildworld", url: "https://olivia-games.github.io/seraph/games/animalcrossingwildworld/index.html", category: "action", description: "Animalcrossingwildworld delivers nonstop arcade-style action." },
  { name: "Mariokartds", url: "https://olivia-games.github.io/seraph/games/mariokartds/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Mariokartds." },
  { name: "Newsupermariobros", url: "https://olivia-games.github.io/seraph/games/newsupermariobros/index.html", category: "platformer", description: "Newsupermariobros challenges your timing and movement skills." },
  { name: "Nintendogs", url: "https://olivia-games.github.io/seraph/games/nintendogs/index.html", category: "action", description: "Nintendogs delivers nonstop arcade-style action." },
  { name: "Sm64ds", url: "https://olivia-games.github.io/seraph/games/sm64ds/index.html", category: "action", description: "Fast-paced action challenge featuring Sm64ds." },
  { name: "Gunmayhem", url: "https://olivia-games.github.io/seraph/games/gunmayhem/index.html", category: "action", description: "React quickly and survive intense action in Gunmayhem." },
  { name: "Learntofly", url: "https://olivia-games.github.io/seraph/games/learntofly/index.html", category: "action", description: "Learntofly delivers nonstop arcade-style action." },
  { name: "Rooftop2", url: "https://olivia-games.github.io/seraph/games/rooftop2/index.html", category: "action", description: "Fast-paced action challenge featuring Rooftop2." },
  { name: "Fireboywatergirl", url: "https://olivia-games.github.io/seraph/games/fireboywatergirl/index.html", category: "action", description: "React quickly and survive intense action in Fireboywatergirl." },
  { name: "Chibiknight", url: "https://olivia-games.github.io/seraph/games/chibiknight/index.html", category: "action", description: "Chibiknight delivers nonstop arcade-style action." },
  { name: "Clusterrush", url: "https://olivia-games.github.io/seraph/games/clusterrush/index.html", category: "action", description: "Fast-paced action challenge featuring Clusterrush." },
  { name: "Doodledefender", url: "https://olivia-games.github.io/seraph/games/doodledefender/index.html", category: "action", description: "React quickly and survive intense action in Doodledefender." },
  { name: "Learntofly2", url: "https://olivia-games.github.io/seraph/games/learntofly2/index.html", category: "action", description: "Learntofly2 delivers nonstop arcade-style action." },
  { name: "Papasscooperia", url: "https://olivia-games.github.io/seraph/games/papasscooperia/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Papasscooperia." },
  { name: "Papassushiria", url: "https://olivia-games.github.io/seraph/games/papassushiria/index.html", category: "restaurant", description: "Papassushiria lets you run your own virtual restaurant." },
  { name: "Papaswingeria", url: "https://olivia-games.github.io/seraph/games/papaswingeria/index.html", category: "restaurant", description: "Prepare meals and satisfy customers in Papaswingeria." },
  { name: "Raftwars", url: "https://olivia-games.github.io/seraph/games/raftwars/index.html", category: "action", description: "Fast-paced action challenge featuring Raftwars." },
  { name: "Unfairmario", url: "https://olivia-games.github.io/seraph/games/unfairmario/index.html", category: "platformer", description: "Unfairmario challenges your timing and movement skills." },
  { name: "Boxingphysics2", url: "https://olivia-games.github.io/seraph/games/boxingphysics2/index.html", category: "fighting", description: "Test your reflexes and combos in Boxingphysics2." },
  { name: "Aceattorney", url: "https://olivia-games.github.io/seraph/games/aceattorney/index.html", category: "action", description: "Fast-paced action challenge featuring Aceattorney." },
  { name: "Metalgearsolid", url: "https://olivia-games.github.io/seraph/games/metalgearsolid/index.html", category: "action", description: "React quickly and survive intense action in Metalgearsolid." },
  { name: "Mother3", url: "https://olivia-games.github.io/seraph/games/mother3/index.html", category: "action", description: "Mother3 delivers nonstop arcade-style action." },
  { name: "Pokemondiamond", url: "https://olivia-games.github.io/seraph/games/pokemondiamond/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Pokemondiamond." },
  { name: "Pokemonplatinum", url: "https://olivia-games.github.io/seraph/games/pokemonplatinum/index.html", category: "rpg", description: "Pokemonplatinum features progression, exploration, and story." },
  { name: "Pokemonsoulsilver", url: "https://olivia-games.github.io/seraph/games/pokemonsoulsilver/index.html", category: "rpg", description: "An RPG adventure filled with depth: Pokemonsoulsilver." },
  { name: "Advancewars", url: "https://olivia-games.github.io/seraph/games/advancewars/index.html", category: "action", description: "Fast-paced action challenge featuring Advancewars." },
  { name: "Banjopilot", url: "https://olivia-games.github.io/seraph/games/banjopilot/index.html", category: "action", description: "React quickly and survive intense action in Banjopilot." },
  { name: "Supermonkeyballjr", url: "https://olivia-games.github.io/seraph/games/supermonkeyballjr/index.html", category: "action", description: "Supermonkeyballjr delivers nonstop arcade-style action." },
  { name: "Theimpossiblequiz2", url: "https://olivia-games.github.io/seraph/games/theimpossiblequiz2/index.html", category: "action", description: "Fast-paced action challenge featuring Theimpossiblequiz2." },
  { name: "Papasdonuteria", url: "https://olivia-games.github.io/seraph/games/papasdonuteria/index.html", category: "restaurant", description: "Papasdonuteria lets you run your own virtual restaurant." },
  { name: "Fancypantsadventure2", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure2/index.html", category: "action", description: "Fancypantsadventure2 delivers nonstop arcade-style action." },
  { name: "Tinyfishing", url: "https://olivia-games.github.io/seraph/games/tinyfishing/index.html", category: "action", description: "Fast-paced action challenge featuring Tinyfishing." },
  { name: "Bigredbutton", url: "https://olivia-games.github.io/seraph/games/bigredbutton/index.html", category: "action", description: "React quickly and survive intense action in Bigredbutton." },
  { name: "Achievementunlocked", url: "https://olivia-games.github.io/seraph/games/achievementunlocked/index.html", category: "action", description: "Achievementunlocked delivers nonstop arcade-style action." },
  { name: "Kirbymassattack", url: "https://olivia-games.github.io/seraph/games/kirbymassattack/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Kirbymassattack." },
  { name: "Sonicadvance", url: "https://olivia-games.github.io/seraph/games/sonicadvance/index.html", category: "platformer", description: "Sonicadvance challenges your timing and movement skills." },
  { name: "Wormsworldparty", url: "https://olivia-games.github.io/seraph/games/wormsworldparty/index.html", category: "action", description: "Wormsworldparty delivers nonstop arcade-style action." },
  { name: "Badicecream", url: "https://olivia-games.github.io/seraph/games/badicecream/index.html", category: "action", description: "Fast-paced action challenge featuring Badicecream." },
  { name: "Badicecream2", url: "https://olivia-games.github.io/seraph/games/badicecream2/index.html", category: "action", description: "React quickly and survive intense action in Badicecream2." },
  { name: "Badicecream3", url: "https://olivia-games.github.io/seraph/games/badicecream3/index.html", category: "action", description: "Badicecream3 delivers nonstop arcade-style action." },
  { name: "Adventurecapitalist", url: "https://olivia-games.github.io/seraph/games/adventurecapitalist/index.html", category: "action", description: "Fast-paced action challenge featuring Adventurecapitalist." },
  { name: "Monkeymart", url: "https://olivia-games.github.io/seraph/games/monkeymart/index.html", category: "action", description: "React quickly and survive intense action in Monkeymart." },
  { name: "Doom64", url: "https://olivia-games.github.io/seraph/games/doom64/index.html", category: "action", description: "Doom64 delivers nonstop arcade-style action." },
  { name: "Banjokazooie", url: "https://olivia-games.github.io/seraph/games/banjokazooie/index.html", category: "action", description: "Fast-paced action challenge featuring Banjokazooie." },
  { name: "Donkeykong64", url: "https://olivia-games.github.io/seraph/games/donkeykong64/index.html", category: "action", description: "React quickly and survive intense action in Donkeykong64." },
  { name: "Fzerox", url: "https://olivia-games.github.io/seraph/games/fzerox/index.html", category: "action", description: "Fzerox delivers nonstop arcade-style action." },
  { name: "Kirby64", url: "https://olivia-games.github.io/seraph/games/kirby64/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Kirby64." },
  { name: "Mariokart64", url: "https://olivia-games.github.io/seraph/games/mariokart64/index.html", category: "platformer", description: "Mariokart64 challenges your timing and movement skills." },
  { name: "Marioparty", url: "https://olivia-games.github.io/seraph/games/marioparty/index.html", category: "platformer", description: "A skill-based platforming adventure called Marioparty." },
  { name: "Marioparty2", url: "https://olivia-games.github.io/seraph/games/marioparty2/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Marioparty2." },
  { name: "Ocarinaoftime", url: "https://olivia-games.github.io/seraph/games/ocarinaoftime/index.html", category: "action", description: "React quickly and survive intense action in Ocarinaoftime." },
  { name: "Starfox64", url: "https://olivia-games.github.io/seraph/games/starfox64/index.html", category: "action", description: "Starfox64 delivers nonstop arcade-style action." },
  { name: "Supersmashbros", url: "https://olivia-games.github.io/seraph/games/supersmashbros/index.html", category: "fighting", description: "Battle opponents in skill-based combat in Supersmashbros." },
  { name: "Streetfighter2", url: "https://olivia-games.github.io/seraph/games/streetfighter2/index.html", category: "fighting", description: "Streetfighter2 focuses on fast and competitive fighting." },
  { name: "Getawayshootout", url: "https://olivia-games.github.io/seraph/games/getawayshootout/index.html", category: "action", description: "Getawayshootout delivers nonstop arcade-style action." },
  { name: "Rabbitsamurai", url: "https://olivia-games.github.io/seraph/games/rabbitsamurai/index.html", category: "action", description: "Fast-paced action challenge featuring Rabbitsamurai." },
  { name: "Mariopartyds", url: "https://olivia-games.github.io/seraph/games/mariopartyds/index.html", category: "platformer", description: "Mariopartyds challenges your timing and movement skills." },
  { name: "Professorlayton", url: "https://olivia-games.github.io/seraph/games/professorlayton/index.html", category: "action", description: "Professorlayton delivers nonstop arcade-style action." },
  { name: "Scribblenauts", url: "https://olivia-games.github.io/seraph/games/scribblenauts/index.html", category: "action", description: "Fast-paced action challenge featuring Scribblenauts." },
  { name: "Advancewars2", url: "https://olivia-games.github.io/seraph/games/advancewars2/index.html", category: "action", description: "React quickly and survive intense action in Advancewars2." },
  { name: "Harvestmoon", url: "https://olivia-games.github.io/seraph/games/harvestmoon/index.html", category: "action", description: "Harvestmoon delivers nonstop arcade-style action." },
  { name: "Mariotennis", url: "https://olivia-games.github.io/seraph/games/mariotennis/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Mariotennis." },
  { name: "Megamanzero", url: "https://olivia-games.github.io/seraph/games/megamanzero/index.html", category: "action", description: "React quickly and survive intense action in Megamanzero." },
  { name: "Pokemonmysterydungeon", url: "https://olivia-games.github.io/seraph/games/pokemonmysterydungeon/index.html", category: "rpg", description: "An RPG adventure filled with depth: Pokemonmysterydungeon." },
  { name: "Pokemonunbound", url: "https://olivia-games.github.io/seraph/games/pokemonunbound/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonunbound." },
  { name: "Papascheeseria", url: "https://olivia-games.github.io/seraph/games/papascheeseria/index.html", category: "restaurant", description: "Papascheeseria lets you run your own virtual restaurant." },
  { name: "Papascupcakeria", url: "https://olivia-games.github.io/seraph/games/papascupcakeria/index.html", category: "restaurant", description: "Prepare meals and satisfy customers in Papascupcakeria." },
  { name: "Papasbakeria", url: "https://olivia-games.github.io/seraph/games/papasbakeria/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Papasbakeria." },
  { name: "Papaspastaria", url: "https://olivia-games.github.io/seraph/games/papaspastaria/index.html", category: "restaurant", description: "Papaspastaria lets you run your own virtual restaurant." },
  { name: "Gunmayhem2", url: "https://olivia-games.github.io/seraph/games/gunmayhem2/index.html", category: "action", description: "Gunmayhem2 delivers nonstop arcade-style action." },
  { name: "Gunmayhemredux", url: "https://olivia-games.github.io/seraph/games/gunmayhemredux/index.html", category: "action", description: "Fast-paced action challenge featuring Gunmayhemredux." },
  { name: "Achievementunlocked2", url: "https://olivia-games.github.io/seraph/games/achievementunlocked2/index.html", category: "action", description: "React quickly and survive intense action in Achievementunlocked2." },
  { name: "Achievementunlocked3", url: "https://olivia-games.github.io/seraph/games/achievementunlocked3/index.html", category: "action", description: "Achievementunlocked3 delivers nonstop arcade-style action." },
  { name: "Factoryballs", url: "https://olivia-games.github.io/seraph/games/factoryballs/index.html", category: "action", description: "Fast-paced action challenge featuring Factoryballs." },
  { name: "Skywire", url: "https://olivia-games.github.io/seraph/games/skywire/index.html", category: "action", description: "React quickly and survive intense action in Skywire." },
  { name: "Supermarioflash", url: "https://olivia-games.github.io/seraph/games/supermarioflash/index.html", category: "platformer", description: "A skill-based platforming adventure called Supermarioflash." },
  { name: "Goldensun", url: "https://olivia-games.github.io/seraph/games/goldensun/index.html", category: "action", description: "Fast-paced action challenge featuring Goldensun." },
  { name: "Metroidfusion", url: "https://olivia-games.github.io/seraph/games/metroidfusion/index.html", category: "platformer", description: "Metroidfusion challenges your timing and movement skills." },
  { name: "Dbzsupersonicwarriors", url: "https://olivia-games.github.io/seraph/games/dbzsupersonicwarriors/index.html", category: "platformer", description: "A skill-based platforming adventure called Dbzsupersonicwarriors." },
  { name: "Warioland4", url: "https://olivia-games.github.io/seraph/games/warioland4/index.html", category: "action", description: "Fast-paced action challenge featuring Warioland4." },
  { name: "Ducklife5", url: "https://olivia-games.github.io/seraph/games/ducklife5/index.html", category: "action", description: "React quickly and survive intense action in Ducklife5." },
  { name: "Learntofly3", url: "https://olivia-games.github.io/seraph/games/learntofly3/index.html", category: "action", description: "Learntofly3 delivers nonstop arcade-style action." },
  { name: "Bloxors", url: "https://olivia-games.github.io/seraph/games/bloxors/index.html", category: "action", description: "Fast-paced action challenge featuring Bloxors." },
  { name: "Electricman2", url: "https://olivia-games.github.io/seraph/games/electricman2/index.html", category: "action", description: "React quickly and survive intense action in Electricman2." },
  { name: "Portal", url: "https://olivia-games.github.io/seraph/games/portal/index.html", category: "action", description: "Portal delivers nonstop arcade-style action." },
  { name: "Portal2", url: "https://olivia-games.github.io/seraph/games/portal2/index.html", category: "action", description: "Fast-paced action challenge featuring Portal2." },
  { name: "Skywire2", url: "https://olivia-games.github.io/seraph/games/skywire2/index.html", category: "action", description: "React quickly and survive intense action in Skywire2." },
  { name: "Ducklife6", url: "https://olivia-games.github.io/seraph/games/ducklife6/index.html", category: "action", description: "Ducklife6 delivers nonstop arcade-style action." },
  { name: "Boxingrandom", url: "https://olivia-games.github.io/seraph/games/boxingrandom/index.html", category: "fighting", description: "Battle opponents in skill-based combat in Boxingrandom." },
  { name: "Cellmachine", url: "https://olivia-games.github.io/seraph/games/cellmachine/index.html", category: "action", description: "React quickly and survive intense action in Cellmachine." },
  { name: "Stickmanboost", url: "https://olivia-games.github.io/seraph/games/stickmanboost/index.html", category: "action", description: "Stickmanboost delivers nonstop arcade-style action." },
  { name: "Vex3", url: "https://olivia-games.github.io/seraph/games/vex3/index.html", category: "action", description: "Fast-paced action challenge featuring Vex3." },
  { name: "Vex4", url: "https://olivia-games.github.io/seraph/games/vex4/index.html", category: "action", description: "React quickly and survive intense action in Vex4." },
  { name: "Skibidi1v100", url: "https://olivia-games.github.io/seraph/games/skibidi1v100/index.html", category: "action", description: "Skibidi1v100 delivers nonstop arcade-style action." },
  { name: "Goldeneye007", url: "https://olivia-games.github.io/seraph/games/goldeneye007/index.html", category: "action", description: "Fast-paced action challenge featuring Goldeneye007." },
  { name: "Majorasmask", url: "https://olivia-games.github.io/seraph/games/majorasmask/index.html", category: "action", description: "React quickly and survive intense action in Majorasmask." },
  { name: "Papermario", url: "https://olivia-games.github.io/seraph/games/papermario/index.html", category: "platformer", description: "A skill-based platforming adventure called Papermario." },
  { name: "Mariogolf", url: "https://olivia-games.github.io/seraph/games/mariogolf/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Mariogolf." },
  { name: "Pokemonstadium", url: "https://olivia-games.github.io/seraph/games/pokemonstadium/index.html", category: "rpg", description: "Pokemonstadium features progression, exploration, and story." },
  { name: "Excitebike64", url: "https://olivia-games.github.io/seraph/games/excitebike64/index.html", category: "action", description: "Excitebike64 delivers nonstop arcade-style action." },
  { name: "Pokemonsnap", url: "https://olivia-games.github.io/seraph/games/pokemonsnap/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonsnap." },
  { name: "Marioparty3", url: "https://olivia-games.github.io/seraph/games/marioparty3/index.html", category: "platformer", description: "Marioparty3 challenges your timing and movement skills." },
  { name: "Sonicadvance2", url: "https://olivia-games.github.io/seraph/games/sonicadvance2/index.html", category: "platformer", description: "A skill-based platforming adventure called Sonicadvance2." },
  { name: "Bowsersinsidestory", url: "https://olivia-games.github.io/seraph/games/bowsersinsidestory/index.html", category: "action", description: "Fast-paced action challenge featuring Bowsersinsidestory." },
  { name: "Spirittracks", url: "https://olivia-games.github.io/seraph/games/spirittracks/index.html", category: "action", description: "React quickly and survive intense action in Spirittracks." },
  { name: "Thesims2", url: "https://olivia-games.github.io/seraph/games/thesims2/index.html", category: "action", description: "Thesims2 delivers nonstop arcade-style action." },
  { name: "Tetrisds", url: "https://olivia-games.github.io/seraph/games/tetrisds/index.html", category: "action", description: "Fast-paced action challenge featuring Tetrisds." },
  { name: "Sonicrush", url: "https://olivia-games.github.io/seraph/games/sonicrush/index.html", category: "platformer", description: "Sonicrush challenges your timing and movement skills." },
  { name: "Thesims3", url: "https://olivia-games.github.io/seraph/games/thesims3/index.html", category: "action", description: "Thesims3 delivers nonstop arcade-style action." },
  { name: "Superprincesspeach", url: "https://olivia-games.github.io/seraph/games/superprincesspeach/index.html", category: "action", description: "Fast-paced action challenge featuring Superprincesspeach." },
  { name: "Legobatman", url: "https://olivia-games.github.io/seraph/games/legobatman/index.html", category: "action", description: "React quickly and survive intense action in Legobatman." },
  { name: "Doom2", url: "https://olivia-games.github.io/seraph/games/doom2/index.html", category: "action", description: "Doom2 delivers nonstop arcade-style action." },
  { name: "Dukenukemadvance", url: "https://olivia-games.github.io/seraph/games/dukenukemadvance/index.html", category: "action", description: "Fast-paced action challenge featuring Dukenukemadvance." },
  { name: "Mariopartyadvance", url: "https://olivia-games.github.io/seraph/games/mariopartyadvance/index.html", category: "platformer", description: "Mariopartyadvance challenges your timing and movement skills." },
  { name: "Mariopinballland", url: "https://olivia-games.github.io/seraph/games/mariopinballland/index.html", category: "platformer", description: "A skill-based platforming adventure called Mariopinballland." },
  { name: "Pacmanworld", url: "https://olivia-games.github.io/seraph/games/pacmanworld/index.html", category: "action", description: "Fast-paced action challenge featuring Pacmanworld." },
  { name: "Rayman3", url: "https://olivia-games.github.io/seraph/games/rayman3/index.html", category: "action", description: "React quickly and survive intense action in Rayman3." },
  { name: "Shrek2", url: "https://olivia-games.github.io/seraph/games/shrek2/index.html", category: "action", description: "Shrek2 delivers nonstop arcade-style action." },
  { name: "Simcity", url: "https://olivia-games.github.io/seraph/games/simcity/index.html", category: "action", description: "Fast-paced action challenge featuring Simcity." },
  { name: "Simpsonsroadrage", url: "https://olivia-games.github.io/seraph/games/simpsonsroadrage/index.html", category: "action", description: "React quickly and survive intense action in Simpsonsroadrage." },
  { name: "Diddykongracing", url: "https://olivia-games.github.io/seraph/games/diddykongracing/index.html", category: "racing", description: "Fast and competitive racing action in Diddykongracing." },
  { name: "Waverace64", url: "https://olivia-games.github.io/seraph/games/waverace64/index.html", category: "action", description: "Fast-paced action challenge featuring Waverace64." },
  { name: "Quest64", url: "https://olivia-games.github.io/seraph/games/quest64/index.html", category: "action", description: "React quickly and survive intense action in Quest64." },
  { name: "Gex64", url: "https://olivia-games.github.io/seraph/games/gex64/index.html", category: "action", description: "Gex64 delivers nonstop arcade-style action." },
  { name: "Dukenukem64", url: "https://olivia-games.github.io/seraph/games/dukenukem64/index.html", category: "action", description: "Fast-paced action challenge featuring Dukenukem64." },
  { name: "Mortalkombat4", url: "https://olivia-games.github.io/seraph/games/mortalkombat4/index.html", category: "action", description: "React quickly and survive intense action in Mortalkombat4." },
  { name: "Badpiggies", url: "https://olivia-games.github.io/seraph/games/badpiggies/index.html", category: "action", description: "Badpiggies delivers nonstop arcade-style action." },
  { name: "Supermarioflash2", url: "https://olivia-games.github.io/seraph/games/supermarioflash2/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioflash2." },
  { name: "Swordsandsandals", url: "https://olivia-games.github.io/seraph/games/swordsandsandals/index.html", category: "action", description: "React quickly and survive intense action in Swordsandsandals." },
  { name: "Swordsandsandals2", url: "https://olivia-games.github.io/seraph/games/swordsandsandals2/index.html", category: "action", description: "Swordsandsandals2 delivers nonstop arcade-style action." },
  { name: "Wordle", url: "https://olivia-games.github.io/seraph/games/wordle/index.html", category: "puzzle", description: "Solve clever puzzles and brain teasers in Wordle." },
  { name: "Vex", url: "https://olivia-games.github.io/seraph/games/vex/index.html", category: "action", description: "React quickly and survive intense action in Vex." },
  { name: "Vex2", url: "https://olivia-games.github.io/seraph/games/vex2/index.html", category: "action", description: "Vex2 delivers nonstop arcade-style action." },
  { name: "Vex5", url: "https://olivia-games.github.io/seraph/games/vex5/index.html", category: "action", description: "Fast-paced action challenge featuring Vex5." },
  { name: "Vex7", url: "https://olivia-games.github.io/seraph/games/vex7/index.html", category: "action", description: "React quickly and survive intense action in Vex7." },
  { name: "Stack", url: "https://olivia-games.github.io/seraph/games/stack/index.html", category: "action", description: "Stack delivers nonstop arcade-style action." },
  { name: "Skibiditoiletattack", url: "https://olivia-games.github.io/seraph/games/skibiditoiletattack/index.html", category: "action", description: "Fast-paced action challenge featuring Skibiditoiletattack." },
  { name: "Motox3mpool", url: "https://olivia-games.github.io/seraph/games/motox3mpool/index.html", category: "racing", description: "Motox3mpool puts your driving skills to the test." },
  { name: "Offlineparadise", url: "https://olivia-games.github.io/seraph/games/offlineparadise/index.html", category: "action", description: "Offlineparadise delivers nonstop arcade-style action." },
  { name: "Linktothepast", url: "https://olivia-games.github.io/seraph/games/linktothepast/index.html", category: "action", description: "Fast-paced action challenge featuring Linktothepast." },
  { name: "Donkeykongcountry", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry/index.html", category: "action", description: "React quickly and survive intense action in Donkeykongcountry." },
  { name: "Donkeykongcountry2", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry2/index.html", category: "action", description: "Donkeykongcountry2 delivers nonstop arcade-style action." },
  { name: "Superbomberman", url: "https://olivia-games.github.io/seraph/games/superbomberman/index.html", category: "action", description: "Fast-paced action challenge featuring Superbomberman." },
  { name: "Mariopaint", url: "https://olivia-games.github.io/seraph/games/mariopaint/index.html", category: "platformer", description: "Mariopaint challenges your timing and movement skills." },
  { name: "Megamanx", url: "https://olivia-games.github.io/seraph/games/megamanx/index.html", category: "action", description: "Megamanx delivers nonstop arcade-style action." },
  { name: "Supermariorpg", url: "https://olivia-games.github.io/seraph/games/supermariorpg/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Supermariorpg." },
  { name: "Supertennis", url: "https://olivia-games.github.io/seraph/games/supertennis/index.html", category: "action", description: "React quickly and survive intense action in Supertennis." },
  { name: "Warioswoods", url: "https://olivia-games.github.io/seraph/games/warioswoods/index.html", category: "action", description: "Warioswoods delivers nonstop arcade-style action." },
  { name: "Worldshardestgame2", url: "https://olivia-games.github.io/seraph/games/worldshardestgame2/index.html", category: "action", description: "Fast-paced action challenge featuring Worldshardestgame2." },
  { name: "Bubbletanks2", url: "https://olivia-games.github.io/seraph/games/bubbletanks2/index.html", category: "action", description: "React quickly and survive intense action in Bubbletanks2." },
  { name: "Chooseyourweapon", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon/index.html", category: "action", description: "Chooseyourweapon delivers nonstop arcade-style action." },
  { name: "Chooseyourweapon2", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon2/index.html", category: "action", description: "Fast-paced action challenge featuring Chooseyourweapon2." },
  { name: "Chooseyourweapon3", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon3/index.html", category: "action", description: "React quickly and survive intense action in Chooseyourweapon3." },
  { name: "Connect4", url: "https://olivia-games.github.io/seraph/games/connect4/index.html", category: "action", description: "Connect4 delivers nonstop arcade-style action." },
  { name: "Electricbox", url: "https://olivia-games.github.io/seraph/games/electricbox/index.html", category: "action", description: "Fast-paced action challenge featuring Electricbox." },
  { name: "Mctowerdefence2", url: "https://olivia-games.github.io/seraph/games/mctowerdefence2/index.html", category: "action", description: "React quickly and survive intense action in Mctowerdefence2." },
  { name: "Cars2", url: "https://olivia-games.github.io/seraph/games/cars2/index.html", category: "action", description: "Cars2 delivers nonstop arcade-style action." },
  { name: "Cookingmama", url: "https://olivia-games.github.io/seraph/games/cookingmama/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Cookingmama." },
  { name: "Adventuretime", url: "https://olivia-games.github.io/seraph/games/adventuretime/index.html", category: "action", description: "React quickly and survive intense action in Adventuretime." },
  { name: "Garfieldgetsreal", url: "https://olivia-games.github.io/seraph/games/garfieldgetsreal/index.html", category: "action", description: "Garfieldgetsreal delivers nonstop arcade-style action." },
  { name: "Wariowaretouched", url: "https://olivia-games.github.io/seraph/games/wariowaretouched/index.html", category: "action", description: "Fast-paced action challenge featuring Wariowaretouched." },
  { name: "Kirbypowerpaintbrush", url: "https://olivia-games.github.io/seraph/games/kirbypowerpaintbrush/index.html", category: "platformer", description: "Kirbypowerpaintbrush challenges your timing and movement skills." },
  { name: "Sonicandknuckles", url: "https://olivia-games.github.io/seraph/games/sonicandknuckles/index.html", category: "platformer", description: "A skill-based platforming adventure called Sonicandknuckles." },
  { name: "Alteredbeast", url: "https://olivia-games.github.io/seraph/games/alteredbeast/index.html", category: "action", description: "Fast-paced action challenge featuring Alteredbeast." },
  { name: "Sonicspinball", url: "https://olivia-games.github.io/seraph/games/sonicspinball/index.html", category: "platformer", description: "Sonicspinball challenges your timing and movement skills." },
  { name: "Sonicthehedgehog3", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog3/index.html", category: "platformer", description: "A skill-based platforming adventure called Sonicthehedgehog3." },
  { name: "Streetsofrage", url: "https://olivia-games.github.io/seraph/games/streetsofrage/index.html", category: "action", description: "Fast-paced action challenge featuring Streetsofrage." },
  { name: "Goldenaxe", url: "https://olivia-games.github.io/seraph/games/goldenaxe/index.html", category: "action", description: "React quickly and survive intense action in Goldenaxe." },
  { name: "Kirbyamazingmirror", url: "https://olivia-games.github.io/seraph/games/kirbyamazingmirror/index.html", category: "platformer", description: "A skill-based platforming adventure called Kirbyamazingmirror." },
  { name: "Championisland", url: "https://olivia-games.github.io/seraph/games/championisland/index.html", category: "action", description: "Fast-paced action challenge featuring Championisland." },
  { name: "Supermarioconstruct", url: "https://olivia-games.github.io/seraph/games/supermarioconstruct/index.html", category: "platformer", description: "Supermarioconstruct challenges your timing and movement skills." },
  { name: "Clickerheroes", url: "https://olivia-games.github.io/seraph/games/clickerheroes/index.html", category: "strategy", description: "A strategic gameplay experience built around Clickerheroes." },
  { name: "Stairrace3d", url: "https://olivia-games.github.io/seraph/games/stairrace3d/index.html", category: "action", description: "Fast-paced action challenge featuring Stairrace3d." },
  { name: "Slope2", url: "https://olivia-games.github.io/seraph/games/slope2/index.html", category: "action", description: "React quickly and survive intense action in Slope2." },
  { name: "Paperio3d", url: "https://olivia-games.github.io/seraph/games/paperio3d/index.html", category: "action", description: "Paperio3d delivers nonstop arcade-style action." },
  { name: "Motox3mspooky", url: "https://olivia-games.github.io/seraph/games/motox3mspooky/index.html", category: "racing", description: "Race at high speed and master the tracks in Motox3mspooky." },
  { name: "Motox3mwinter", url: "https://olivia-games.github.io/seraph/games/motox3mwinter/index.html", category: "racing", description: "Motox3mwinter puts your driving skills to the test." },
  { name: "Snake", url: "https://olivia-games.github.io/seraph/games/snake/index.html", category: "action", description: "Snake delivers nonstop arcade-style action." },
  { name: "Papastacomia", url: "https://olivia-games.github.io/seraph/games/papastacomia/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Papastacomia." },
  { name: "Ovo", url: "https://olivia-games.github.io/seraph/games/ovo/index.html", category: "action", description: "React quickly and survive intense action in Ovo." },
  { name: "Knifehit", url: "https://olivia-games.github.io/seraph/games/knifehit/index.html", category: "action", description: "Knifehit delivers nonstop arcade-style action." },
  { name: "Cubefield", url: "https://olivia-games.github.io/seraph/games/cubefield/index.html", category: "action", description: "Fast-paced action challenge featuring Cubefield." },
  { name: "Burgerandfrights", url: "https://olivia-games.github.io/seraph/games/burgerandfrights/index.html", category: "action", description: "React quickly and survive intense action in Burgerandfrights." },
  { name: "Chess", url: "https://olivia-games.github.io/seraph/games/chess/index.html", category: "puzzle", description: "A thoughtful puzzle experience named Chess." },
  { name: "Fnfmidfight", url: "https://olivia-games.github.io/seraph/games/fnfmidfight/index.html", category: "music", description: "Follow the rhythm and hit the beats in Fnfmidfight." },
  { name: "Thumbfighter", url: "https://olivia-games.github.io/seraph/games/thumbfighter/index.html", category: "fighting", description: "Thumbfighter focuses on fast and competitive fighting." },
  { name: "Snowbattleio", url: "https://olivia-games.github.io/seraph/games/snowbattleio/index.html", category: "action", description: "Snowbattleio delivers nonstop arcade-style action." },
  { name: "Lazyjump3d", url: "https://olivia-games.github.io/seraph/games/lazyjump3d/index.html", category: "action", description: "Fast-paced action challenge featuring Lazyjump3d." },
  { name: "Goball", url: "https://olivia-games.github.io/seraph/games/goball/index.html", category: "action", description: "React quickly and survive intense action in Goball." },
  { name: "Flippyfish", url: "https://olivia-games.github.io/seraph/games/flippyfish/index.html", category: "action", description: "Flippyfish delivers nonstop arcade-style action." },
  { name: "Shopempire", url: "https://olivia-games.github.io/seraph/games/shopempire/index.html", category: "action", description: "Fast-paced action challenge featuring Shopempire." },
  { name: "Monsterbrawl", url: "https://olivia-games.github.io/seraph/games/monsterbrawl/index.html", category: "action", description: "React quickly and survive intense action in Monsterbrawl." },
  { name: "Multitask", url: "https://olivia-games.github.io/seraph/games/multitask/index.html", category: "action", description: "Multitask delivers nonstop arcade-style action." },
  { name: "Shift", url: "https://olivia-games.github.io/seraph/games/shift/index.html", category: "action", description: "Fast-paced action challenge featuring Shift." },
  { name: "Shift2", url: "https://olivia-games.github.io/seraph/games/shift2/index.html", category: "action", description: "React quickly and survive intense action in Shift2." },
  { name: "Shift3", url: "https://olivia-games.github.io/seraph/games/shift3/index.html", category: "action", description: "Shift3 delivers nonstop arcade-style action." },
  { name: "Shift4", url: "https://olivia-games.github.io/seraph/games/shift4/index.html", category: "action", description: "Fast-paced action challenge featuring Shift4." },
  { name: "Monopoly", url: "https://olivia-games.github.io/seraph/games/monopoly/index.html", category: "action", description: "React quickly and survive intense action in Monopoly." },
  { name: "Picrossds", url: "https://olivia-games.github.io/seraph/games/picrossds/index.html", category: "action", description: "Picrossds delivers nonstop arcade-style action." },
  { name: "Wariowarediy", url: "https://olivia-games.github.io/seraph/games/wariowarediy/index.html", category: "action", description: "Fast-paced action challenge featuring Wariowarediy." },
  { name: "Pizzatower", url: "https://olivia-games.github.io/seraph/games/pizzatower/index.html", category: "action", description: "React quickly and survive intense action in Pizzatower." },
  { name: "Territorialio", url: "https://olivia-games.github.io/seraph/games/territorialio/index.html", category: "action", description: "Territorialio delivers nonstop arcade-style action." },
  { name: "1v1lol", url: "https://olivia-games.github.io/seraph/games/1v1lol/index.html", category: "action", description: "Fast-paced action challenge featuring 1v1lol." },
  { name: "Ballisticchickens", url: "https://olivia-games.github.io/seraph/games/ballisticchickens/index.html", category: "action", description: "React quickly and survive intense action in Ballisticchickens." },
  { name: "Basketbrosio", url: "https://olivia-games.github.io/seraph/games/basketbrosio/index.html", category: "action", description: "Basketbrosio delivers nonstop arcade-style action." },
  { name: "Mcclassic", url: "https://olivia-games.github.io/seraph/games/mcclassic/index.html", category: "action", description: "Fast-paced action challenge featuring Mcclassic." },
  { name: "Deathrun3d", url: "https://olivia-games.github.io/seraph/games/deathrun3d/index.html", category: "action", description: "React quickly and survive intense action in Deathrun3d." },
  { name: "Soccerrandom", url: "https://olivia-games.github.io/seraph/games/soccerrandom/index.html", category: "action", description: "Soccerrandom delivers nonstop arcade-style action." },
  { name: "Sprinter", url: "https://olivia-games.github.io/seraph/games/sprinter/index.html", category: "action", description: "Fast-paced action challenge featuring Sprinter." },
  { name: "Tron", url: "https://olivia-games.github.io/seraph/games/tron/index.html", category: "action", description: "React quickly and survive intense action in Tron." },
  { name: "1on1soccer", url: "https://olivia-games.github.io/seraph/games/1on1soccer/index.html", category: "action", description: "1on1soccer delivers nonstop arcade-style action." },
  { name: "Badtimesimulator", url: "https://olivia-games.github.io/seraph/games/badtimesimulator/index.html", category: "action", description: "Fast-paced action challenge featuring Badtimesimulator." },
  { name: "Amazingropepolice", url: "https://olivia-games.github.io/seraph/games/amazingropepolice/index.html", category: "action", description: "React quickly and survive intense action in Amazingropepolice." },
  { name: "Celeste", url: "https://olivia-games.github.io/seraph/games/celeste/index.html", category: "action", description: "Celeste delivers nonstop arcade-style action." },
  { name: "Justfalllol", url: "https://olivia-games.github.io/seraph/games/justfalllol/index.html", category: "action", description: "Fast-paced action challenge featuring Justfalllol." },
  { name: "Ngon", url: "https://olivia-games.github.io/seraph/games/ngon/index.html", category: "action", description: "React quickly and survive intense action in Ngon." },
  { name: "Rocketsoccer", url: "https://olivia-games.github.io/seraph/games/rocketsoccer/index.html", category: "action", description: "Rocketsoccer delivers nonstop arcade-style action." },
  { name: "Stickmanclimb", url: "https://olivia-games.github.io/seraph/games/stickmanclimb/index.html", category: "action", description: "Fast-paced action challenge featuring Stickmanclimb." },
  { name: "Osumania", url: "https://olivia-games.github.io/seraph/games/osumania/index.html", category: "action", description: "React quickly and survive intense action in Osumania." },
  { name: "Helixjump", url: "https://olivia-games.github.io/seraph/games/helixjump/index.html", category: "action", description: "Helixjump delivers nonstop arcade-style action." },
  { name: "Dadish", url: "https://olivia-games.github.io/seraph/games/dadish/index.html", category: "action", description: "Fast-paced action challenge featuring Dadish." },
  { name: "Dadish2", url: "https://olivia-games.github.io/seraph/games/dadish2/index.html", category: "action", description: "React quickly and survive intense action in Dadish2." },
  { name: "Dadish3", url: "https://olivia-games.github.io/seraph/games/dadish3/index.html", category: "action", description: "Dadish3 delivers nonstop arcade-style action." },
  { name: "Snowrider3d", url: "https://olivia-games.github.io/seraph/games/snowrider3d/index.html", category: "action", description: "Fast-paced action challenge featuring Snowrider3d." },
  { name: "Tubejumpers", url: "https://olivia-games.github.io/seraph/games/tubejumpers/index.html", category: "action", description: "React quickly and survive intense action in Tubejumpers." },
  { name: "Yohoho", url: "https://olivia-games.github.io/seraph/games/yohoho/index.html", category: "action", description: "Yohoho delivers nonstop arcade-style action." },
  { name: "10minutestilldawn", url: "https://olivia-games.github.io/seraph/games/10minutestilldawn/index.html", category: "action", description: "Fast-paced action challenge featuring 10minutestilldawn." },
  { name: "Volleyrandom", url: "https://olivia-games.github.io/seraph/games/volleyrandom/index.html", category: "action", description: "React quickly and survive intense action in Volleyrandom." },
  { name: "Waterworks", url: "https://olivia-games.github.io/seraph/games/waterworks/index.html", category: "action", description: "Waterworks delivers nonstop arcade-style action." },
  { name: "Geometryrash", url: "https://olivia-games.github.io/seraph/games/geometryrash/index.html", category: "action", description: "Fast-paced action challenge featuring Geometryrash." },
  { name: "Holeio", url: "https://olivia-games.github.io/seraph/games/holeio/index.html", category: "action", description: "React quickly and survive intense action in Holeio." },
  { name: "Sandtrix", url: "https://olivia-games.github.io/seraph/games/sandtrix/index.html", category: "action", description: "Sandtrix delivers nonstop arcade-style action." },
  { name: "Shapeshipper", url: "https://olivia-games.github.io/seraph/games/shapeshipper/index.html", category: "action", description: "Fast-paced action challenge featuring Shapeshipper." },
  { name: "Slopeball", url: "https://olivia-games.github.io/seraph/games/slopeball/index.html", category: "action", description: "React quickly and survive intense action in Slopeball." },
  { name: "Stickmangolf", url: "https://olivia-games.github.io/seraph/games/stickmangolf/index.html", category: "action", description: "Stickmangolf delivers nonstop arcade-style action." },
  { name: "Tabs", url: "https://olivia-games.github.io/seraph/games/tabs/index.html", category: "action", description: "Fast-paced action challenge featuring Tabs." },
  { name: "Watermelongame", url: "https://olivia-games.github.io/seraph/games/watermelongame/index.html", category: "action", description: "React quickly and survive intense action in Watermelongame." },
  { name: "Wallsmash", url: "https://olivia-games.github.io/seraph/games/wallsmash/index.html", category: "fighting", description: "Test your reflexes and combos in Wallsmash." },
  { name: "Crimsonfantasia", url: "https://olivia-games.github.io/seraph/games/crimsonfantasia/index.html", category: "action", description: "Fast-paced action challenge featuring Crimsonfantasia." },
  { name: "Cuttherope", url: "https://olivia-games.github.io/seraph/games/cuttherope/index.html", category: "action", description: "React quickly and survive intense action in Cuttherope." },
  { name: "Funnymadracing", url: "https://olivia-games.github.io/seraph/games/funnymadracing/index.html", category: "racing", description: "Fast and competitive racing action in Funnymadracing." },
  { name: "Gdlite", url: "https://olivia-games.github.io/seraph/games/gdlite/index.html", category: "action", description: "Fast-paced action challenge featuring Gdlite." },
  { name: "Grandtheftgrotto", url: "https://olivia-games.github.io/seraph/games/grandtheftgrotto/index.html", category: "action", description: "React quickly and survive intense action in Grandtheftgrotto." },
  { name: "Driftmania", url: "https://olivia-games.github.io/seraph/games/driftmania/index.html", category: "racing", description: "Fast and competitive racing action in Driftmania." },
  { name: "Risehigher", url: "https://olivia-games.github.io/seraph/games/risehigher/index.html", category: "action", description: "Fast-paced action challenge featuring Risehigher." },
  { name: "Burritobison", url: "https://olivia-games.github.io/seraph/games/burritobison/index.html", category: "action", description: "React quickly and survive intense action in Burritobison." },
  { name: "Pool", url: "https://olivia-games.github.io/seraph/games/pool/index.html", category: "action", description: "Pool delivers nonstop arcade-style action." },
  { name: "Redball1", url: "https://olivia-games.github.io/seraph/games/redball1/index.html", category: "action", description: "Fast-paced action challenge featuring Redball1." },
  { name: "Redball3", url: "https://olivia-games.github.io/seraph/games/redball3/index.html", category: "action", description: "React quickly and survive intense action in Redball3." },
  { name: "Redball4", url: "https://olivia-games.github.io/seraph/games/redball4/index.html", category: "action", description: "Redball4 delivers nonstop arcade-style action." },
  { name: "Redballv2", url: "https://olivia-games.github.io/seraph/games/redballv2/index.html", category: "action", description: "Fast-paced action challenge featuring Redballv2." },
  { name: "Redballv3", url: "https://olivia-games.github.io/seraph/games/redballv3/index.html", category: "action", description: "React quickly and survive intense action in Redballv3." },
  { name: "Roughdino", url: "https://olivia-games.github.io/seraph/games/roughdino/index.html", category: "action", description: "Roughdino delivers nonstop arcade-style action." },
  { name: "Timeshooter1", url: "https://olivia-games.github.io/seraph/games/timeshooter1/index.html", category: "action", description: "Fast-paced action challenge featuring Timeshooter1." },
  { name: "Timeshooter2", url: "https://olivia-games.github.io/seraph/games/timeshooter2/index.html", category: "action", description: "React quickly and survive intense action in Timeshooter2." },
  { name: "Timeshooter3", url: "https://olivia-games.github.io/seraph/games/timeshooter3/index.html", category: "action", description: "Timeshooter3 delivers nonstop arcade-style action." },
  { name: "Battletoads", url: "https://olivia-games.github.io/seraph/games/battletoads/index.html", category: "action", description: "Fast-paced action challenge featuring Battletoads." },
  { name: "Castlevaniaiii", url: "https://olivia-games.github.io/seraph/games/castlevaniaiii/index.html", category: "action", description: "React quickly and survive intense action in Castlevaniaiii." },
  { name: "Contra", url: "https://olivia-games.github.io/seraph/games/contra/index.html", category: "action", description: "Contra delivers nonstop arcade-style action." },
  { name: "Ducktales", url: "https://olivia-games.github.io/seraph/games/ducktales/index.html", category: "action", description: "Fast-paced action challenge featuring Ducktales." },
  { name: "Kidicarus", url: "https://olivia-games.github.io/seraph/games/kidicarus/index.html", category: "action", description: "React quickly and survive intense action in Kidicarus." },
  { name: "Megaman2", url: "https://olivia-games.github.io/seraph/games/megaman2/index.html", category: "action", description: "Megaman2 delivers nonstop arcade-style action." },
  { name: "Ninjagaiden", url: "https://olivia-games.github.io/seraph/games/ninjagaiden/index.html", category: "action", description: "Fast-paced action challenge featuring Ninjagaiden." },
  { name: "Punchout", url: "https://olivia-games.github.io/seraph/games/punchout/index.html", category: "action", description: "React quickly and survive intense action in Punchout." },
  { name: "Chronotrigger", url: "https://olivia-games.github.io/seraph/games/chronotrigger/index.html", category: "action", description: "Chronotrigger delivers nonstop arcade-style action." },
  { name: "Contraiii", url: "https://olivia-games.github.io/seraph/games/contraiii/index.html", category: "action", description: "Fast-paced action challenge featuring Contraiii." },
  { name: "Donkeykongcountry3", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry3/index.html", category: "action", description: "React quickly and survive intense action in Donkeykongcountry3." },
  { name: "Earthbound", url: "https://olivia-games.github.io/seraph/games/earthbound/index.html", category: "rpg", description: "An RPG adventure filled with depth: Earthbound." },
  { name: "Finalfantasyvi", url: "https://olivia-games.github.io/seraph/games/finalfantasyvi/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Finalfantasyvi." },
  { name: "Fzero", url: "https://olivia-games.github.io/seraph/games/fzero/index.html", category: "action", description: "React quickly and survive intense action in Fzero." },
  { name: "Supermetroid", url: "https://olivia-games.github.io/seraph/games/supermetroid/index.html", category: "platformer", description: "A skill-based platforming adventure called Supermetroid." },
  { name: "Banjotooie", url: "https://olivia-games.github.io/seraph/games/banjotooie/index.html", category: "action", description: "Fast-paced action challenge featuring Banjotooie." },
  { name: "Harvestmoon64", url: "https://olivia-games.github.io/seraph/games/harvestmoon64/index.html", category: "action", description: "React quickly and survive intense action in Harvestmoon64." },
  { name: "Jetforcegemini", url: "https://olivia-games.github.io/seraph/games/jetforcegemini/index.html", category: "action", description: "Jetforcegemini delivers nonstop arcade-style action." },
  { name: "Mysticalninja", url: "https://olivia-games.github.io/seraph/games/mysticalninja/index.html", category: "action", description: "Fast-paced action challenge featuring Mysticalninja." },
  { name: "Turokdinosaurhunter", url: "https://olivia-games.github.io/seraph/games/turokdinosaurhunter/index.html", category: "action", description: "React quickly and survive intense action in Turokdinosaurhunter." },
  { name: "Yoshisstory", url: "https://olivia-games.github.io/seraph/games/yoshisstory/index.html", category: "action", description: "Yoshisstory delivers nonstop arcade-style action." },
  { name: "Kirbysdreamland2", url: "https://olivia-games.github.io/seraph/games/kirbysdreamland2/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Kirbysdreamland2." },
  { name: "Linksawakeningdx", url: "https://olivia-games.github.io/seraph/games/linksawakeningdx/index.html", category: "action", description: "React quickly and survive intense action in Linksawakeningdx." },
  { name: "Metroidii", url: "https://olivia-games.github.io/seraph/games/metroidii/index.html", category: "platformer", description: "A skill-based platforming adventure called Metroidii." },
  { name: "Supermarioland2", url: "https://olivia-games.github.io/seraph/games/supermarioland2/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioland2." },
  { name: "Wariolandii", url: "https://olivia-games.github.io/seraph/games/wariolandii/index.html", category: "action", description: "React quickly and survive intense action in Wariolandii." },
  { name: "Castlevaniaariaofsorrow", url: "https://olivia-games.github.io/seraph/games/castlevaniaariaofsorrow/index.html", category: "action", description: "Castlevaniaariaofsorrow delivers nonstop arcade-style action." },
  { name: "Finalfantasytacticsadvance", url: "https://olivia-games.github.io/seraph/games/finalfantasytacticsadvance/index.html", category: "rpg", description: "Embark on an epic role-playing journey in Finalfantasytacticsadvance." },
  { name: "Drilldozer", url: "https://olivia-games.github.io/seraph/games/drilldozer/index.html", category: "action", description: "React quickly and survive intense action in Drilldozer." },
  { name: "Advancewarsdayofruin", url: "https://olivia-games.github.io/seraph/games/advancewarsdayofruin/index.html", category: "action", description: "Advancewarsdayofruin delivers nonstop arcade-style action." },
  { name: "Castlevaniadawnofsorrow", url: "https://olivia-games.github.io/seraph/games/castlevaniadawnofsorrow/index.html", category: "action", description: "Fast-paced action challenge featuring Castlevaniadawnofsorrow." },
  { name: "Castlevaniaorderofecclesia", url: "https://olivia-games.github.io/seraph/games/castlevaniaorderofecclesia/index.html", category: "action", description: "React quickly and survive intense action in Castlevaniaorderofecclesia." },
  { name: "Marioandluigipartnersintime", url: "https://olivia-games.github.io/seraph/games/marioandluigipartnersintime/index.html", category: "platformer", description: "A skill-based platforming adventure called Marioandluigipartnersintime." },
  { name: "Comixzone", url: "https://olivia-games.github.io/seraph/games/comixzone/index.html", category: "action", description: "Fast-paced action challenge featuring Comixzone." },
  { name: "Eccothedolphin", url: "https://olivia-games.github.io/seraph/games/eccothedolphin/index.html", category: "action", description: "React quickly and survive intense action in Eccothedolphin." },
  { name: "Gunstarheroes", url: "https://olivia-games.github.io/seraph/games/gunstarheroes/index.html", category: "action", description: "Gunstarheroes delivers nonstop arcade-style action." },
  { name: "Phantasystariv", url: "https://olivia-games.github.io/seraph/games/phantasystariv/index.html", category: "action", description: "Fast-paced action challenge featuring Phantasystariv." },
  { name: "Rangerx", url: "https://olivia-games.github.io/seraph/games/rangerx/index.html", category: "action", description: "React quickly and survive intense action in Rangerx." },
  { name: "Ristar", url: "https://olivia-games.github.io/seraph/games/ristar/index.html", category: "action", description: "Ristar delivers nonstop arcade-style action." },
  { name: "Shiningforce", url: "https://olivia-games.github.io/seraph/games/shiningforce/index.html", category: "action", description: "Fast-paced action challenge featuring Shiningforce." },
  { name: "Shinobiiii", url: "https://olivia-games.github.io/seraph/games/shinobiiii/index.html", category: "action", description: "React quickly and survive intense action in Shinobiiii." },
  { name: "Sonicthehedgehog", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog/index.html", category: "platformer", description: "A skill-based platforming adventure called Sonicthehedgehog." },
  { name: "Sonicthehedgehog2", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog2/index.html", category: "platformer", description: "Jump, run, and explore classic platforming in Sonicthehedgehog2." },
  { name: "Streetsofrage2", url: "https://olivia-games.github.io/seraph/games/streetsofrage2/index.html", category: "action", description: "React quickly and survive intense action in Streetsofrage2." },
  { name: "Vectorman", url: "https://olivia-games.github.io/seraph/games/vectorman/index.html", category: "action", description: "Vectorman delivers nonstop arcade-style action." },
  { name: "Vectorman2", url: "https://olivia-games.github.io/seraph/games/vectorman2/index.html", category: "action", description: "Fast-paced action challenge featuring Vectorman2." },
  { name: "Illusionofgaia", url: "https://olivia-games.github.io/seraph/games/illusionofgaia/index.html", category: "action", description: "React quickly and survive intense action in Illusionofgaia." },
  { name: "Pokemonyellow", url: "https://olivia-games.github.io/seraph/games/pokemonyellow/index.html", category: "rpg", description: "An RPG adventure filled with depth: Pokemonyellow." },
  { name: "Abudathealien", url: "https://olivia-games.github.io/seraph/games/abudathealien/index.html", category: "action", description: "Fast-paced action challenge featuring Abudathealien." },
  { name: "Battlebeavers", url: "https://olivia-games.github.io/seraph/games/battlebeavers/index.html", category: "action", description: "React quickly and survive intense action in Battlebeavers." },
  { name: "Controlcraft2", url: "https://olivia-games.github.io/seraph/games/controlcraft2/index.html", category: "action", description: "Controlcraft2 delivers nonstop arcade-style action." },
  { name: "Ageofwar", url: "https://olivia-games.github.io/seraph/games/ageofwar/index.html", category: "action", description: "Fast-paced action challenge featuring Ageofwar." },
  { name: "Ageofwar2", url: "https://olivia-games.github.io/seraph/games/ageofwar2/index.html", category: "action", description: "React quickly and survive intense action in Ageofwar2." },
  { name: "Amorphous", url: "https://olivia-games.github.io/seraph/games/amorphous/index.html", category: "action", description: "Amorphous delivers nonstop arcade-style action." },
  { name: "Bubblespinner", url: "https://olivia-games.github.io/seraph/games/bubblespinner/index.html", category: "action", description: "Fast-paced action challenge featuring Bubblespinner." },
  { name: "Crushthecastle", url: "https://olivia-games.github.io/seraph/games/crushthecastle/index.html", category: "action", description: "React quickly and survive intense action in Crushthecastle." },
  { name: "Crushthecastle2", url: "https://olivia-games.github.io/seraph/games/crushthecastle2/index.html", category: "action", description: "Crushthecastle2 delivers nonstop arcade-style action." },
  { name: "Epicbattlefantasy", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy/index.html", category: "action", description: "Fast-paced action challenge featuring Epicbattlefantasy." },
  { name: "Epicbattlefantasy2", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy2/index.html", category: "action", description: "React quickly and survive intense action in Epicbattlefantasy2." },
  { name: "Epicbattlefantasy3", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy3/index.html", category: "action", description: "Epicbattlefantasy3 delivers nonstop arcade-style action." },
  { name: "Fancypantsadventure3", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure3/index.html", category: "action", description: "Fast-paced action challenge featuring Fancypantsadventure3." },
  { name: "Floodrunner2", url: "https://olivia-games.github.io/seraph/games/floodrunner2/index.html", category: "action", description: "React quickly and survive intense action in Floodrunner2." },
  { name: "Floodrunner3", url: "https://olivia-games.github.io/seraph/games/floodrunner3/index.html", category: "action", description: "Floodrunner3 delivers nonstop arcade-style action." },
  { name: "Dragonboy2", url: "https://olivia-games.github.io/seraph/games/dragonboy2/index.html", category: "action", description: "Fast-paced action challenge featuring Dragonboy2." },
  { name: "Neonrider", url: "https://olivia-games.github.io/seraph/games/neonrider/index.html", category: "action", description: "React quickly and survive intense action in Neonrider." },
  { name: "Pandemic2", url: "https://olivia-games.github.io/seraph/games/pandemic2/index.html", category: "action", description: "Pandemic2 delivers nonstop arcade-style action." },
  { name: "Stickwar", url: "https://olivia-games.github.io/seraph/games/stickwar/index.html", category: "action", description: "Fast-paced action challenge featuring Stickwar." },
  { name: "Stickwar2", url: "https://olivia-games.github.io/seraph/games/stickwar2/index.html", category: "action", description: "React quickly and survive intense action in Stickwar2." },
  { name: "Ultimateflashsonic", url: "https://olivia-games.github.io/seraph/games/ultimateflashsonic/index.html", category: "platformer", description: "A skill-based platforming adventure called Ultimateflashsonic." },
  { name: "Zombocalypse", url: "https://olivia-games.github.io/seraph/games/zombocalypse/index.html", category: "action", description: "Fast-paced action challenge featuring Zombocalypse." },
  { name: "Zombotron", url: "https://olivia-games.github.io/seraph/games/zombotron/index.html", category: "action", description: "React quickly and survive intense action in Zombotron." },
  { name: "Zombotron2", url: "https://olivia-games.github.io/seraph/games/zombotron2/index.html", category: "action", description: "Zombotron2 delivers nonstop arcade-style action." },
  { name: "Backrooms2d", url: "https://olivia-games.github.io/seraph/games/backrooms2d/index.html", category: "horror", description: "A tense and scary experience awaits in Backrooms2d." },
  { name: "Basketrandom", url: "https://olivia-games.github.io/seraph/games/basketrandom/index.html", category: "action", description: "React quickly and survive intense action in Basketrandom." },
  { name: "Csgoclicker", url: "https://olivia-games.github.io/seraph/games/csgoclicker/index.html", category: "strategy", description: "A strategic gameplay experience built around Csgoclicker." },
  { name: "Doom", url: "https://olivia-games.github.io/seraph/games/doom/index.html", category: "action", description: "Fast-paced action challenge featuring Doom." },
  { name: "Funnyshooter2", url: "https://olivia-games.github.io/seraph/games/funnyshooter2/index.html", category: "action", description: "React quickly and survive intense action in Funnyshooter2." },
  { name: "Gunfest", url: "https://olivia-games.github.io/seraph/games/gunfest/index.html", category: "action", description: "Gunfest delivers nonstop arcade-style action." },
  { name: "Infinitecraft", url: "https://olivia-games.github.io/seraph/games/infinitecraft/index.html", category: "action", description: "Fast-paced action challenge featuring Infinitecraft." },
  { name: "Lowsadventures2", url: "https://olivia-games.github.io/seraph/games/lowsadventures2/index.html", category: "action", description: "React quickly and survive intense action in Lowsadventures2." },
  { name: "Pakohighway", url: "https://olivia-games.github.io/seraph/games/pakohighway/index.html", category: "action", description: "Pakohighway delivers nonstop arcade-style action." },
  { name: "Recoil", url: "https://olivia-games.github.io/seraph/games/recoil/index.html", category: "action", description: "Fast-paced action challenge featuring Recoil." },
  { name: "Run3plus", url: "https://olivia-games.github.io/seraph/games/run3plus/index.html", category: "action", description: "React quickly and survive intense action in Run3plus." },
  { name: "Slopecity", url: "https://olivia-games.github.io/seraph/games/slopecity/index.html", category: "action", description: "Slopecity delivers nonstop arcade-style action." },
  { name: "Stateio", url: "https://olivia-games.github.io/seraph/games/stateio/index.html", category: "action", description: "Fast-paced action challenge featuring Stateio." },
  { name: "Sudoku", url: "https://olivia-games.github.io/seraph/games/sudoku/index.html", category: "puzzle", description: "Sudoku challenges logic and problem-solving skills." },
  { name: "Superherodrop", url: "https://olivia-games.github.io/seraph/games/superherodrop/index.html", category: "action", description: "Superherodrop delivers nonstop arcade-style action." },
  { name: "Balloonrun", url: "https://olivia-games.github.io/seraph/games/balloonrun/index.html", category: "action", description: "Fast-paced action challenge featuring Balloonrun." },
  { name: "Crazytunnel3d", url: "https://olivia-games.github.io/seraph/games/crazytunnel3d/index.html", category: "action", description: "React quickly and survive intense action in Crazytunnel3d." },
  { name: "Eagler1.8", url: "https://olivia-games.github.io/seraph/games/eagler1.8/index.html", category: "action", description: "Eagler1.8 delivers nonstop arcade-style action." },
  { name: "Geometrydashsky", url: "https://olivia-games.github.io/seraph/games/geometrydashsky/index.html", category: "action", description: "Fast-paced action challenge featuring Geometrydashsky." },
  { name: "Wubzzysamazingadventure", url: "https://olivia-games.github.io/seraph/games/wubzzysamazingadventure/index.html", category: "action", description: "React quickly and survive intense action in Wubzzysamazingadventure." },
  { name: "Golddiggerfrvr", url: "https://olivia-games.github.io/seraph/games/golddiggerfrvr/index.html", category: "action", description: "Golddiggerfrvr delivers nonstop arcade-style action." },
  { name: "Hexgl", url: "https://olivia-games.github.io/seraph/games/hexgl/index.html", category: "action", description: "Fast-paced action challenge featuring Hexgl." },
  { name: "Houseofhazards", url: "https://olivia-games.github.io/seraph/games/houseofhazards/index.html", category: "action", description: "React quickly and survive intense action in Houseofhazards." },
  { name: "Pickcrafter", url: "https://olivia-games.github.io/seraph/games/pickcrafter/index.html", category: "action", description: "Pickcrafter delivers nonstop arcade-style action." },
  { name: "Precisionclient", url: "https://olivia-games.github.io/seraph/games/precisionclient/index.html", category: "action", description: "Fast-paced action challenge featuring Precisionclient." },
  { name: "Subwayrunner", url: "https://olivia-games.github.io/seraph/games/subwayrunner/index.html", category: "action", description: "React quickly and survive intense action in Subwayrunner." },
  { name: "Xx142 B2.Exe", url: "https://olivia-games.github.io/seraph/games/xx142-b2.exe/index.html", category: "action", description: "Xx142 B2.Exe delivers nonstop arcade-style action." },
  { name: "Canopy", url: "https://olivia-games.github.io/seraph/games/canopy/index.html", category: "action", description: "Fast-paced action challenge featuring Canopy." },
  { name: "Cavechaos", url: "https://olivia-games.github.io/seraph/games/cavechaos/index.html", category: "action", description: "React quickly and survive intense action in Cavechaos." },
  { name: "Changetype", url: "https://olivia-games.github.io/seraph/games/changetype/index.html", category: "action", description: "Changetype delivers nonstop arcade-style action." },
  { name: "Cheesedreams", url: "https://olivia-games.github.io/seraph/games/cheesedreams/index.html", category: "action", description: "Fast-paced action challenge featuring Cheesedreams." },
  { name: "Chisel", url: "https://olivia-games.github.io/seraph/games/chisel/index.html", category: "action", description: "React quickly and survive intense action in Chisel." },
  { name: "Chisel2", url: "https://olivia-games.github.io/seraph/games/chisel2/index.html", category: "action", description: "Chisel2 delivers nonstop arcade-style action." },
  { name: "Ditto", url: "https://olivia-games.github.io/seraph/games/ditto/index.html", category: "action", description: "Fast-paced action challenge featuring Ditto." },
  { name: "Feedme", url: "https://olivia-games.github.io/seraph/games/feedme/index.html", category: "action", description: "React quickly and survive intense action in Feedme." },
  { name: "Finalninja", url: "https://olivia-games.github.io/seraph/games/finalninja/index.html", category: "action", description: "Finalninja delivers nonstop arcade-style action." },
  { name: "Frostbite", url: "https://olivia-games.github.io/seraph/games/frostbite/index.html", category: "action", description: "Fast-paced action challenge featuring Frostbite." },
  { name: "Frostbite2", url: "https://olivia-games.github.io/seraph/games/frostbite2/index.html", category: "action", description: "React quickly and survive intense action in Frostbite2." },
  { name: "Icebreaker", url: "https://olivia-games.github.io/seraph/games/icebreaker/index.html", category: "action", description: "Icebreaker delivers nonstop arcade-style action." },
  { name: "Mutiny", url: "https://olivia-games.github.io/seraph/games/mutiny/index.html", category: "action", description: "Fast-paced action challenge featuring Mutiny." },
  { name: "Nitromemustdie", url: "https://olivia-games.github.io/seraph/games/nitromemustdie/index.html", category: "action", description: "React quickly and survive intense action in Nitromemustdie." },
  { name: "Oodlegobs", url: "https://olivia-games.github.io/seraph/games/oodlegobs/index.html", category: "action", description: "Oodlegobs delivers nonstop arcade-style action." },
  { name: "Supertreadmill", url: "https://olivia-games.github.io/seraph/games/supertreadmill/index.html", category: "action", description: "Fast-paced action challenge featuring Supertreadmill." },
  { name: "Swindler", url: "https://olivia-games.github.io/seraph/games/swindler/index.html", category: "action", description: "React quickly and survive intense action in Swindler." },
  { name: "Testsubjectarena", url: "https://olivia-games.github.io/seraph/games/testsubjectarena/index.html", category: "action", description: "Testsubjectarena delivers nonstop arcade-style action." },
  { name: "Testsubjectcomplete", url: "https://olivia-games.github.io/seraph/games/testsubjectcomplete/index.html", category: "action", description: "Fast-paced action challenge featuring Testsubjectcomplete." },
  { name: "Twinshot", url: "https://olivia-games.github.io/seraph/games/twinshot/index.html", category: "action", description: "React quickly and survive intense action in Twinshot." },
  { name: "Twinshot2", url: "https://olivia-games.github.io/seraph/games/twinshot2/index.html", category: "action", description: "Twinshot2 delivers nonstop arcade-style action." },
  { name: "3line", url: "https://olivia-games.github.io/seraph/games/3line/index.html", category: "action", description: "Fast-paced action challenge featuring 3line." },
  { name: "Bikechamp", url: "https://olivia-games.github.io/seraph/games/bikechamp/index.html", category: "action", description: "React quickly and survive intense action in Bikechamp." },
  { name: "Bikechamp2", url: "https://olivia-games.github.io/seraph/games/bikechamp2/index.html", category: "action", description: "Bikechamp2 delivers nonstop arcade-style action." },
  { name: "Corporationinc", url: "https://olivia-games.github.io/seraph/games/corporationinc/index.html", category: "action", description: "Fast-paced action challenge featuring Corporationinc." },
  { name: "Shopempirefable", url: "https://olivia-games.github.io/seraph/games/shopempirefable/index.html", category: "action", description: "React quickly and survive intense action in Shopempirefable." },
  { name: "Cactusmccoy", url: "https://olivia-games.github.io/seraph/games/cactusmccoy/index.html", category: "action", description: "Cactusmccoy delivers nonstop arcade-style action." },
  { name: "Cactusmccoy2", url: "https://olivia-games.github.io/seraph/games/cactusmccoy2/index.html", category: "action", description: "Fast-paced action challenge featuring Cactusmccoy2." },
  { name: "Papalouie", url: "https://olivia-games.github.io/seraph/games/papalouie/index.html", category: "restaurant", description: "Papalouie lets you run your own virtual restaurant." },
  { name: "Papalouie2", url: "https://olivia-games.github.io/seraph/games/papalouie2/index.html", category: "restaurant", description: "Prepare meals and satisfy customers in Papalouie2." },
  { name: "Papalouie3", url: "https://olivia-games.github.io/seraph/games/papalouie3/index.html", category: "restaurant", description: "Cook, serve, and manage customers in Papalouie3." },
  { name: "Steakandjake", url: "https://olivia-games.github.io/seraph/games/steakandjake/index.html", category: "action", description: "React quickly and survive intense action in Steakandjake." },
  { name: "Steakandjakemidnightmarch", url: "https://olivia-games.github.io/seraph/games/steakandjakemidnightmarch/index.html", category: "action", description: "Steakandjakemidnightmarch delivers nonstop arcade-style action." },
];


        // State Management
        const state = {
            games: [...gamesData],
            currentCategory: 'all',
            currentView: 'grid',
            searchQuery: '',
            favorites: new Set(JSON.parse(localStorage.getItem('og-favorites-v2') || '[]')),
            currentRandomGame: null
        };

        // DOM Elements
        const elements = {
            header: document.getElementById('header'),
            searchInput: document.getElementById('search-input'),
            searchSuggestions: document.getElementById('search-suggestions'),
            filtersContainer: document.getElementById('filters'),
            gamesContainer: document.getElementById('games-container'),
            favoritesContainer: document.getElementById('favorites-container'),
            resultsCount: document.getElementById('results-count'),
            favoritesCount: document.getElementById('favorites-count'),
            panicBtn: document.getElementById('panic-btn'),
            exitPanicBtn: document.getElementById('exit-panic-btn'),
            exploreBtn: document.getElementById('explore-btn'),
            randomBtn: document.getElementById('random-btn'),
            playRandomBtn: document.getElementById('play-random-btn'),
            randomGameName: document.getElementById('random-game-name'),
            mobileMenuBtn: document.getElementById('mobile-menu-btn'),
            mobileNav: document.getElementById('mobile-nav'),
            mobileCloseBtn: document.getElementById('mobile-close-btn'),
            gamesSection: document.getElementById('games'),
            favoritesSection: document.getElementById('favorites'),
            totalGamesCounter: document.getElementById('total-games')
        };

        // Initialize App
 function init() {
    setupEventListeners();
    updateRandomGame();
    filterAndRender(); // ⬅️ рендеримо ігри після старту
}


        // Setup Event Listeners
        function setupEventListeners() {
            // Accessibility defaults for mobile menu
            if (elements.mobileMenuBtn) {
                elements.mobileMenuBtn.setAttribute('aria-controls', 'mobile-nav');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
            if (elements.mobileNav) {
                elements.mobileNav.setAttribute('aria-hidden', 'true');
            }
        
            // Search
            let searchTimeout;
            elements.searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    handleSearch(e);
                }, 300);
            });
        
            elements.searchInput.addEventListener('focus', () => {
                if (elements.searchInput.value.trim()) {
                    showSuggestions();
                }
            });
        
            elements.searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    elements.searchSuggestions.classList.remove('active');
                }, 200);
            });
        
            // Filters
            elements.filtersContainer.addEventListener('click', handleFilter);
        
            // Panic mode - keep backtick for panic, handle Escape so it closes mobile menu first
            elements.panicBtn.addEventListener('click', () => togglePanicMode(false));
            elements.exitPanicBtn.addEventListener('click', () => togglePanicMode(true));
            
            document.addEventListener('keydown', (e) => {
                if (e.key === '`') {
                    e.preventDefault();
                    togglePanicMode();
                } else if (e.key === 'Escape') {
                    // If mobile nav is open, close it; otherwise toggle panic mode
                    if (elements.mobileNav && elements.mobileNav.classList.contains('active')) {
                        e.preventDefault();
                        closeMobileMenu();
                    } else {
                        e.preventDefault();
                        togglePanicMode();
                    }
                }
            });
        
            // CTA buttons
            elements.exploreBtn.addEventListener('click', () => {
                elements.gamesSection.scrollIntoView({ behavior: 'smooth' });
            });
        
            elements.randomBtn.addEventListener('click', playRandomGame);
            elements.playRandomBtn.addEventListener('click', () => {
                if (state.currentRandomGame) {
                    window.open(state.currentRandomGame.url, '_blank');
                }
            });
        
            // View toggle
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', handleViewToggle);
            });
        
            // Mobile menu: toggle, manage ARIA, focus and scroll locking

            function closeMobileMenu() {
                elements.mobileNav.classList.remove('active');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
                elements.mobileNav.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                // move focus back to menu button for accessibility
                elements.mobileMenuBtn.focus();
            }
            
            elements.mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const expanded = elements.mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                if (expanded) {
                    closeMobileMenu();
                    return;
                }
                elements.mobileNav.classList.add('active');
                elements.mobileMenuBtn.setAttribute('aria-expanded', 'true');
                elements.mobileNav.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                // move focus to close button for accessibility
                if (elements.mobileCloseBtn) elements.mobileCloseBtn.focus();
            });
        
            elements.mobileCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileMenu();
            });
        
            // Close mobile menu when clicking outside (overlay)
            elements.mobileNav.addEventListener('click', (e) => {
                if (e.target === elements.mobileNav) {
                    closeMobileMenu();
                }
            });
        
            // Mobile nav links: close menu after user activates link
            elements.mobileNav.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    // close menu but allow navigation handler to run
                    closeMobileMenu();
                });
            });
        
            // Navigation links (desktop & mobile)
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', handleNavigation);
            });
        
            // Footer category links
            document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const category = e.target.closest('a').dataset.category;
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    // Update filter
                    document.querySelectorAll('.filter-chip').forEach(chip => {
                        chip.classList.remove('active');
                        if (chip.dataset.category === category) {
                            chip.classList.add('active');
                        }
                    });

                    // Navigate to games section
                    setTimeout(() => {
                        elements.gamesSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                });
            });

            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    elements.header.classList.add('scrolled');
                } else {
                    elements.header.classList.remove('scrolled');
                }
            });
        
            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    elements.searchInput.focus();
                }
            });
        }
        
        // Header scroll effect
                    window.addEventListener('scroll', () => {
                        if (window.scrollY > 50) {
                            elements.header.classList.add('scrolled');
                        } else {
                            elements.header.classList.remove('scrolled');
                        }
                    });

        // Handle Search
        function handleSearch(e) {
            state.searchQuery = e.target.value.toLowerCase().trim();
            filterAndRender();
            
            if (state.searchQuery) {
                showSuggestions();
            } else {
                elements.searchSuggestions.classList.remove('active');
            }
        }

        // Show Search Suggestions
        function showSuggestions() {
            const query = state.searchQuery;
            if (!query) return;

            const suggestions = gamesData
                .filter(game => 
                    game.name.toLowerCase().includes(query) ||
                    game.category.toLowerCase().includes(query)
                )
                .slice(0, 5);

            if (suggestions.length === 0) {
                elements.searchSuggestions.classList.remove('active');
                return;
            }

            elements.searchSuggestions.innerHTML = suggestions.map(game => `
                <div class="suggestion-item" onclick="selectGame('${game.name}')">
                    <div class="suggestion-name">${highlightMatch(game.name, query)}</div>
                    <div class="suggestion-category">${game.category}</div>
                </div>
            `).join('');

            elements.searchSuggestions.classList.add('active');
        }

        // Highlight Match
        function highlightMatch(text, query) {
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span style="color: var(--primary-light); font-weight: 700;">$1</span>');
        }

        // Select Game from Suggestions
        function selectGame(gameName) {
            const game = gamesData.find(g => g.name === gameName);
            if (game) {
                window.open(game.url, '_blank');
            }
        }

        // Handle Filter
        function handleFilter(e) {
            const chip = e.target.closest('.filter-chip');
            if (!chip) return;

            document.querySelectorAll('.filter-chip').forEach(c => 
                c.classList.remove('active'));
            chip.classList.add('active');

            state.currentCategory = chip.dataset.category;
            filterAndRender();
        }

        // Filter and Render
        function filterAndRender() {
            let filtered = [...gamesData];

            // Apply category filter
            if (state.currentCategory !== 'all') {
                filtered = filtered.filter(game => game.category === state.currentCategory);
            }

            // Apply search filter
            if (state.searchQuery) {
                filtered = filtered.filter(game =>
                    game.name.toLowerCase().includes(state.searchQuery) ||
                    game.category.toLowerCase().includes(state.searchQuery) ||
                    game.description.toLowerCase().includes(state.searchQuery)
                );
            }

            state.games = filtered;
            renderGames();
        }

        // Render Games
        function renderGames() {
            if (state.games.length === 0) {
                elements.gamesContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🎮</div>
                        <h3>No games found</h3>
                        <p>Try adjusting your search or filter</p>
                    </div>
                `;
                elements.resultsCount.textContent = 'No games found';
                return;
            }

            elements.gamesContainer.innerHTML = state.games.map((game, index) => 
                createGameCard(game, index)
            ).join('');

            elements.resultsCount.textContent = `Showing ${state.games.length} of ${gamesData.length} games`;
            renderFavorites();
        }

        // Create Game Card
        function createGameCard(game, index) {
            const isFavorite = state.favorites.has(game.name);
            return `
                <article class="game-card" style="animation-delay: ${index * 0.05}s;">
                    <div class="game-header">
                        <span class="game-category">${game.category}</span>
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${game.name.replace(/'/g, "\\'")}')">
                            ${isFavorite ? '⭐' : '☆'}
                        </button>
                    </div>
                    <div class="game-content">
                        <h3 class="game-title">${game.name}</h3>
                        <p class="game-description">${game.description}</p>
                    </div>
                    <div class="game-footer">
                        <a href="${game.url}" target="_blank" class="play-btn">
                            <span>⚡</span>
                            <span>Play Now</span>
                        </a>
                        <button class="info-btn" onclick="showInfo('${game.name.replace(/'/g, "\\'")}')">
                            ℹ️
                        </button>
                    </div>
                </article>
            `;
        }

        // Render Favorites
        function renderFavorites() {
            const favoriteGames = gamesData.filter(game => state.favorites.has(game.name));
            
            if (favoriteGames.length === 0) {
                elements.favoritesContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">⭐</div>
                        <h3>No favorites yet</h3>
                        <p>Click the star icon on any game to add it to your favorites</p>
                    </div>
                `;
                elements.favoritesCount.textContent = 'Your starred games appear here';
            } else {
                elements.favoritesContainer.innerHTML = favoriteGames.map((game, index) => 
                    createGameCard(game, index)
                ).join('');
                elements.favoritesCount.textContent = `${favoriteGames.length} favorite game${favoriteGames.length !== 1 ? 's' : ''}`;
            }
        }

        // Toggle Favorite
        function toggleFavorite(gameName) {
            if (state.favorites.has(gameName)) {
                state.favorites.delete(gameName);
            } else {
                state.favorites.add(gameName);
            }
            localStorage.setItem('og-favorites-v2', JSON.stringify([...state.favorites]));
            renderGames();
        }

        // Show Game Info
        function showInfo(gameName) {
            const game = gamesData.find(g => g.name === gameName);
            if (!game) return;
            
            const message = `🎮 ${game.name}\n\n📁 Category: ${game.category.toUpperCase()}\n\n📝 ${game.description}\n\nClick OK to play now!`;
            
            if (confirm(message)) {
                window.open(game.url, '_blank');
            }
        }

        // Play Random Game
        function playRandomGame() {
            const randomGame = gamesData[Math.floor(Math.random() * gamesData.length)];
            window.open(randomGame.url, '_blank');
        }

        // Update Random Game
        function updateRandomGame() {
            state.currentRandomGame = gamesData[Math.floor(Math.random() * gamesData.length)];
            elements.randomGameName.textContent = state.currentRandomGame.name;
        }

        // View Toggle
        function handleViewToggle(e) {
            const btn = e.target.closest('.view-btn');
            if (!btn) return;

            document.querySelectorAll('.view-btn').forEach(b => 
                b.classList.remove('active'));
            btn.classList.add('active');

            state.currentView = btn.dataset.view;

            if (state.currentView === 'list') {
                elements.gamesContainer.classList.add('list-view');
                if (elements.favoritesContainer) {
                    elements.favoritesContainer.classList.add('list-view');
                }
            } else {
                elements.gamesContainer.classList.remove('list-view');
                if (elements.favoritesContainer) {
                    elements.favoritesContainer.classList.remove('list-view');
                }
            }
        }

        // Panic Mode
        function togglePanicMode(forceOff = false) {
            if (forceOff || document.body.classList.contains('panic-mode')) {
                document.body.classList.remove('panic-mode');
            } else {
                document.body.classList.add('panic-mode');
            }
        }

        // Handle Navigation
        function handleNavigation(e) {
            e.preventDefault();
            const target = e.target.getAttribute('href');

            document.querySelectorAll('.nav-link').forEach(l => 
                l.classList.remove('active'));
            e.target.classList.add('active');

            // Show/hide sections
            if (target === '#favorites') {
                elements.gamesSection.style.display = 'none';
                elements.favoritesSection.style.display = 'block';
            } else if (target === '#games') {
                elements.gamesSection.style.display = 'block';
                elements.favoritesSection.style.display = 'none';
            } else {
                elements.gamesSection.style.display = 'block';
                elements.favoritesSection.style.display = 'none';
            }

            // Scroll to section
            if (target === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        // Update Total Games Counter
        function updateTotalGames() {
            elements.totalGamesCounter.textContent = gamesData.length;
        }

        // Service Worker Registration
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('✅ Service Worker registered'))
                    .catch(err => console.log('❌ SW registration failed:', err));
            });
        }

        // Initialize on DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        // Update random game every 10 seconds
        setInterval(updateRandomGame, 10000);

        // Initial total games count
        updateTotalGames();
        
