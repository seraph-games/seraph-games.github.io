// Game Data
const gamesData = [
  { id: "slope", name: "Slope", url: "https://olivia-games.github.io/seraph/games/slope/", category: "action", description: "Fast-paced action challenge featuring Slope.", image: "https://olivia-games.github.io/seraph/images/thumbnails/slope.jpg" },
  { id: "subwaysurfers", name: "Subwaysurfers", url: "https://olivia-games.github.io/seraph/games/subwaysurfers/", category: "action", description: "React quickly and survive intense action in Subwaysurfers.", image: "https://olivia-games.github.io/seraph/images/thumbnails/subwaysurfers.jpeg" },
  { id: "flappy", name: "Flappy", url: "https://olivia-games.github.io/seraph/games/flappy/", category: "action", description: "Flappy delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/flappybird.jpg" },
  { id: "papaspizzaria", name: "Papaspizzaria", url: "https://olivia-games.github.io/seraph/games/papaspizzaria/", category: "restaurant", description: "Cook, serve, and manage customers in Papaspizzaria.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papaspizzeria.jpg" },
  { id: "papasburgeria", name: "Papasburgeria", url: "https://olivia-games.github.io/seraph/games/papasburgeria/", category: "restaurant", description: "Papasburgeria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papasburgeria.jpg" },
  { id: "sm64", name: "Sm64", url: "https://olivia-games.github.io/seraph/games/sm64/", category: "action", description: "Sm64 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sm64.jpg" },
  { id: "run3", name: "Run3", url: "https://olivia-games.github.io/seraph/games/run3/", category: "action", description: "Fast-paced action challenge featuring Run3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/run3.jpg" },
  { id: "bitlife", name: "Bitlife", url: "https://olivia-games.github.io/seraph/games/bitlife/", category: "action", description: "React quickly and survive intense action in Bitlife.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bitlife.jpg" },
  { id: "crossy", name: "Crossy", url: "https://olivia-games.github.io/seraph/games/crossy/", category: "action", description: "Crossy delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/crossyroad.jpg" },
  { id: "mc", name: "Mc", url: "https://olivia-games.github.io/seraph/games/mc/", category: "action", description: "Fast-paced action challenge featuring Mc.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mc.jpg" },
  { id: "cookieclicker", name: "Cookieclicker", url: "https://olivia-games.github.io/seraph/games/cookieclicker/", category: "strategy", description: "Cookieclicker rewards smart decisions and strategy.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cookieclick.jpg" },
  { id: "templerun2", name: "Templerun2", url: "https://olivia-games.github.io/seraph/games/templerun2/", category: "action", description: "Templerun2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/templerun2.jpg" },
  { id: "ducklife4", name: "Ducklife4", url: "https://olivia-games.github.io/seraph/games/ducklife4/", category: "action", description: "Fast-paced action challenge featuring Ducklife4.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducklife4.jpg" },
  { id: "dinogame", name: "Dinogame", url: "https://olivia-games.github.io/seraph/games/dinogame/", category: "action", description: "React quickly and survive intense action in Dinogame.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chromedino.jpg" },
  { id: "jetpackjoyride", name: "Jetpackjoyride", url: "https://olivia-games.github.io/seraph/games/jetpackjoyride/", category: "action", description: "Jetpackjoyride delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/jetpackjoyride.jpg" },
  { id: "retrobowl", name: "Retrobowl", url: "https://olivia-games.github.io/seraph/games/retrobowl/", category: "action", description: "Fast-paced action challenge featuring Retrobowl.", image: "https://olivia-games.github.io/seraph/images/thumbnails/retrobowl.jpg" },
  { id: "fruitninja", name: "Fruitninja", url: "https://olivia-games.github.io/seraph/games/fruitninja/", category: "action", description: "React quickly and survive intense action in Fruitninja.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fruitninja.jpg" },
  { id: "doodlejump", name: "Doodlejump", url: "https://olivia-games.github.io/seraph/games/doodlejump/", category: "action", description: "Doodlejump delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/doodlejump.jpg" },
  { id: "2048", name: "2048", url: "https://olivia-games.github.io/seraph/games/2048/", category: "puzzle", description: "Solve clever puzzles and brain teasers in 2048.", image: "https://olivia-games.github.io/seraph/images/thumbnails/2048.jpg" },
  { id: "tetris", name: "Tetris", url: "https://olivia-games.github.io/seraph/games/tetris/", category: "action", description: "React quickly and survive intense action in Tetris.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tetris.jpg" },
  { id: "fancypantsadventure", name: "Fancypantsadventure", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure/", category: "action", description: "Fancypantsadventure delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fancypantsadventure.jpg" },
  { id: "happywheels", name: "Happywheels", url: "https://olivia-games.github.io/seraph/games/happywheels/", category: "action", description: "Fast-paced action challenge featuring Happywheels.", image: "https://olivia-games.github.io/seraph/images/thumbnails/happywheels.jpg" },
  { id: "papashotdoggeria", name: "Papashotdoggeria", url: "https://olivia-games.github.io/seraph/games/papashotdoggeria/", category: "restaurant", description: "Papashotdoggeria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papashotdoggeria.jpg" },
  { id: "paperio2", name: "Paperio2", url: "https://olivia-games.github.io/seraph/games/paperio2/", category: "action", description: "Paperio2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/paperio2.jpg" },
  { id: "superhot", name: "Superhot", url: "https://olivia-games.github.io/seraph/games/superhot/", category: "action", description: "Fast-paced action challenge featuring Superhot.", image: "https://olivia-games.github.io/seraph/images/thumbnails/superhot.jpg" },
  { id: "thebindingofisaac", name: "Thebindingofisaac", url: "https://olivia-games.github.io/seraph/games/thebindingofisaac/", category: "action", description: "React quickly and survive intense action in Thebindingofisaac.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thebindingofisaac.jpg" },
  { id: "townscaper", name: "Townscaper", url: "https://olivia-games.github.io/seraph/games/townscaper/", category: "action", description: "Townscaper delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/townscaper.jpg" },
  { id: "tunnelrush", name: "Tunnelrush", url: "https://olivia-games.github.io/seraph/games/tunnelrush/", category: "action", description: "Fast-paced action challenge featuring Tunnelrush.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tunnelrush.jpg" },
  { id: "themehotel", name: "Themehotel", url: "https://olivia-games.github.io/seraph/games/themehotel/", category: "action", description: "React quickly and survive intense action in Themehotel.", image: "https://olivia-games.github.io/seraph/images/thumbnails/themehotel.jpg" },
  { id: "escapingtheprison", name: "Escapingtheprison", url: "https://olivia-games.github.io/seraph/games/escapingtheprison/", category: "action", description: "Escapingtheprison delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/escapingtheprison.jpg" },
  { id: "stealingthediamond", name: "Stealingthediamond", url: "https://olivia-games.github.io/seraph/games/stealingthediamond/", category: "action", description: "Fast-paced action challenge featuring Stealingthediamond.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stealingthediamond.jpg" },
  { id: "infiltratingtheairship", name: "Infiltratingtheairship", url: "https://olivia-games.github.io/seraph/games/infiltratingtheairship/", category: "action", description: "React quickly and survive intense action in Infiltratingtheairship.", image: "https://olivia-games.github.io/seraph/images/thumbnails/infiltratingtheairship.jpg" },
  { id: "fleeingthecomplex", name: "Fleeingthecomplex", url: "https://olivia-games.github.io/seraph/games/fleeingthecomplex/", category: "action", description: "Fleeingthecomplex delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fleeingthecomplex.jpg" },
  { id: "theimpossiblequiz", name: "Theimpossiblequiz", url: "https://olivia-games.github.io/seraph/games/theimpossiblequiz/", category: "action", description: "Fast-paced action challenge featuring Theimpossiblequiz.", image: "https://olivia-games.github.io/seraph/images/thumbnails/theimpossiblequiz.jpg" },
  { id: "solitaire", name: "Solitaire", url: "https://olivia-games.github.io/seraph/games/solitaire/", category: "action", description: "React quickly and survive intense action in Solitaire.", image: "https://olivia-games.github.io/seraph/images/thumbnails/solitaire.jpg" },
  { id: "drifthunters", name: "Drifthunters", url: "https://olivia-games.github.io/seraph/games/drifthunters/", category: "racing", description: "Fast and competitive racing action in Drifthunters.", image: "https://olivia-games.github.io/seraph/images/thumbnails/drifthunters.jpg" },
  { id: "vex6", name: "Vex6", url: "https://olivia-games.github.io/seraph/games/vex6/", category: "action", description: "Fast-paced action challenge featuring Vex6.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex6.jpg" },
  { id: "amongus", name: "Amongus", url: "https://olivia-games.github.io/seraph/games/amongus/", category: "action", description: "React quickly and survive intense action in Amongus.", image: "https://olivia-games.github.io/seraph/images/thumbnails/amongus.jpg" },
  { id: "surf", name: "Surf", url: "https://olivia-games.github.io/seraph/games/surf/", category: "action", description: "Surf delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/surf.jpg" },
  { id: "motox3m", name: "Motox3m", url: "https://olivia-games.github.io/seraph/games/motox3m/", category: "racing", description: "Race at high speed and master the tracks in Motox3m.", image: "https://olivia-games.github.io/seraph/images/thumbnails/motox3m.jpeg" },
  { id: "fnaf", name: "Fnaf", url: "https://olivia-games.github.io/seraph/games/fnaf/", category: "horror", description: "Fnaf delivers suspense and horror elements.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fnaf.jpg" },
  { id: "fnaf-2", name: "Fnaf 2", url: "https://olivia-games.github.io/seraph/games/fnaf-2/", category: "horror", description: "Survive the fear and atmosphere of Fnaf 2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fnaf2.jpg" },
  { id: "fnaf-3", name: "Fnaf 3", url: "https://olivia-games.github.io/seraph/games/fnaf-3/", category: "horror", description: "A tense and scary experience awaits in Fnaf 3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fnaf3.jpg" },
  { id: "fnaf-4", name: "Fnaf 4", url: "https://olivia-games.github.io/seraph/games/fnaf-4/", category: "horror", description: "Fnaf 4 delivers suspense and horror elements.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fnaf4.jpg" },
  { id: "riddleschool-riddleschool1", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool1/", category: "action", description: "Riddleschool delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddleschool.jpg" },
  { id: "riddleschool-riddleschool2", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool2/", category: "action", description: "Fast-paced action challenge featuring Riddleschool.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddleschool2.jpg" },
  { id: "riddleschool-riddleschool3", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool3/", category: "action", description: "React quickly and survive intense action in Riddleschool.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddleschool3.jpg" },
  { id: "riddleschool-riddleschool4", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool4/", category: "action", description: "Riddleschool delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddleschool4.jpg" },
  { id: "riddleschool-riddleschool5", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddleschool5/", category: "action", description: "Fast-paced action challenge featuring Riddleschool.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddleschool5.jpg" },
  { id: "riddleschool-riddletransfer", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddletransfer/", category: "action", description: "React quickly and survive intense action in Riddleschool.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddletransfer.jpg" },
  { id: "riddleschool-riddletransfer2", name: "Riddleschool", url: "https://olivia-games.github.io/seraph/games/riddleschool/riddletransfer2/", category: "action", description: "Riddleschool delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/riddletransfer2.jpg" },
  { id: "driftboss", name: "Driftboss", url: "https://olivia-games.github.io/seraph/games/driftboss/", category: "racing", description: "Race at high speed and master the tracks in Driftboss.", image: "https://olivia-games.github.io/seraph/images/thumbnails/driftboss.jpg" },
  { id: "fnf", name: "Fnf", url: "https://olivia-games.github.io/seraph/games/fnf/", category: "music", description: "Fnf combines music with fast-paced gameplay.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fnf.jpg" },
  { id: "pacman", name: "Pacman", url: "https://olivia-games.github.io/seraph/games/pacman/", category: "action", description: "Pacman delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pacman.jpg" },
  { id: "papaspancakeria", name: "Papaspancakeria", url: "https://olivia-games.github.io/seraph/games/papaspancakeria/", category: "restaurant", description: "Cook, serve, and manage customers in Papaspancakeria.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papaspancakeria.jpg" },
  { id: "rooftop", name: "Rooftop", url: "https://olivia-games.github.io/seraph/games/rooftop/", category: "action", description: "React quickly and survive intense action in Rooftop.", image: "https://olivia-games.github.io/seraph/images/thumbnails/rooftopsnipers.jpg" },
  { id: "baldisbasics", name: "Baldisbasics", url: "https://olivia-games.github.io/seraph/games/baldisbasics/", category: "action", description: "Baldisbasics delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/baldisbasics.jpg" },
  { id: "bobtherobber2", name: "Bobtherobber2", url: "https://olivia-games.github.io/seraph/games/bobtherobber2/", category: "action", description: "Fast-paced action challenge featuring Bobtherobber2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bobtherobber2.jpg" },
  { id: "minesweeper", name: "Minesweeper", url: "https://olivia-games.github.io/seraph/games/minesweeper/", category: "puzzle", description: "Minesweeper challenges logic and problem-solving skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/minesweeper.jpg" },
  { id: "pokemonemerald", name: "Pokemonemerald", url: "https://olivia-games.github.io/seraph/games/pokemonemerald/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonemerald.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonemerald.jpg" },
  { id: "pokemonfirered", name: "Pokemonfirered", url: "https://olivia-games.github.io/seraph/games/pokemonfirered/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonfirered.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonfirered.jpg" },
  { id: "supermariobros", name: "Supermariobros", url: "https://olivia-games.github.io/seraph/games/supermariobros/", category: "platformer", description: "Supermariobros challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermariobros.jpg" },
  { id: "supermariokart", name: "Supermariokart", url: "https://olivia-games.github.io/seraph/games/supermariokart/", category: "platformer", description: "A skill-based platforming adventure called Supermariokart.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermariokart.jpg" },
  { id: "supermarioworld", name: "Supermarioworld", url: "https://olivia-games.github.io/seraph/games/supermarioworld/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioworld.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermarioworld.jpg" },
  { id: "thereisnogame", name: "Thereisnogame", url: "https://olivia-games.github.io/seraph/games/thereisnogame/", category: "action", description: "React quickly and survive intense action in Thereisnogame.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thereisnogame.jpg" },
  { id: "worldshardestgame", name: "Worldshardestgame", url: "https://olivia-games.github.io/seraph/games/worldshardestgame/", category: "action", description: "Worldshardestgame delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/worldshardestgame.jpg" },
  { id: "castlevania", name: "Castlevania", url: "https://olivia-games.github.io/seraph/games/castlevania/", category: "action", description: "Fast-paced action challenge featuring Castlevania.", image: "https://olivia-games.github.io/seraph/images/thumbnails/castlevania.jpg" },
  { id: "donkeykong", name: "Donkeykong", url: "https://olivia-games.github.io/seraph/games/donkeykong/", category: "action", description: "React quickly and survive intense action in Donkeykong.", image: "https://olivia-games.github.io/seraph/images/thumbnails/donkeykong.jpg" },
  { id: "drmario", name: "Drmario", url: "https://olivia-games.github.io/seraph/games/drmario/", category: "platformer", description: "A skill-based platforming adventure called Drmario.", image: "https://olivia-games.github.io/seraph/images/thumbnails/drmario.jpg" },
  { id: "metroid", name: "Metroid", url: "https://olivia-games.github.io/seraph/games/metroid/", category: "platformer", description: "Jump, run, and explore classic platforming in Metroid.", image: "https://olivia-games.github.io/seraph/images/thumbnails/metroid.jpg" },
  { id: "supermariobros2", name: "Supermariobros2", url: "https://olivia-games.github.io/seraph/games/supermariobros2/", category: "platformer", description: "Supermariobros2 challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermariobros2.jpg" },
  { id: "supermariobros3", name: "Supermariobros3", url: "https://olivia-games.github.io/seraph/games/supermariobros3/", category: "platformer", description: "A skill-based platforming adventure called Supermariobros3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermariobros3.jpg" },
  { id: "thelegendofzelda", name: "Thelegendofzelda", url: "https://olivia-games.github.io/seraph/games/thelegendofzelda/", category: "platformer", description: "Jump, run, and explore classic platforming in Thelegendofzelda.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thelegendofzelda.jpg" },
  { id: "warioware", name: "Warioware", url: "https://olivia-games.github.io/seraph/games/warioware/", category: "action", description: "React quickly and survive intense action in Warioware.", image: "https://olivia-games.github.io/seraph/images/thumbnails/warioware.jpg" },
  { id: "yoshisisland", name: "Yoshisisland", url: "https://olivia-games.github.io/seraph/games/yoshisisland/", category: "action", description: "Yoshisisland delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/yoshisisland.jpg" },
  { id: "donkeykongland", name: "Donkeykongland", url: "https://olivia-games.github.io/seraph/games/donkeykongland/", category: "action", description: "Fast-paced action challenge featuring Donkeykongland.", image: "https://olivia-games.github.io/seraph/images/thumbnails/donkeykongland.jpg" },
  { id: "kirbysdreamland", name: "Kirbysdreamland", url: "https://olivia-games.github.io/seraph/games/kirbysdreamland/", category: "platformer", description: "Kirbysdreamland challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kirbysdreamland.jpg" },
  { id: "supermarioland", name: "Supermarioland", url: "https://olivia-games.github.io/seraph/games/supermarioland/", category: "platformer", description: "A skill-based platforming adventure called Supermarioland.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermarioland.jpg" },
  { id: "dogeminer", name: "Dogeminer", url: "https://olivia-games.github.io/seraph/games/dogeminer/", category: "action", description: "Fast-paced action challenge featuring Dogeminer.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dogeminer.jpg" },
  { id: "tanukisunset", name: "Tanukisunset", url: "https://olivia-games.github.io/seraph/games/tanukisunset/", category: "action", description: "React quickly and survive intense action in Tanukisunset.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tanukisunset.jpg" },
  { id: "aquaparkslides", name: "Aquaparkslides", url: "https://olivia-games.github.io/seraph/games/aquaparkslides/", category: "action", description: "Aquaparkslides delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/aquaparkslides.jpg" },
  { id: "colorswitch", name: "Colorswitch", url: "https://olivia-games.github.io/seraph/games/colorswitch/", category: "action", description: "Fast-paced action challenge featuring Colorswitch.", image: "https://olivia-games.github.io/seraph/images/thumbnails/colorswitch.jpg" },
  { id: "papasfreezeria", name: "Papasfreezeria", url: "https://olivia-games.github.io/seraph/games/papasfreezeria/", category: "restaurant", description: "Papasfreezeria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papasfreezeria.jpg" },
  { id: "btd-btd", name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd/", category: "strategy", description: "A strategic gameplay experience built around Btd.", image: "https://olivia-games.github.io/seraph/images/thumbnails/btd.jpg" },
  { id: "btd-btd2", name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd2/", category: "strategy", description: "Plan ahead and outthink opponents in Btd.", image: "https://olivia-games.github.io/seraph/images/thumbnails/btd2.jpg" },
  { id: "btd-btd3", name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd3/", category: "strategy", description: "Btd rewards smart decisions and strategy.", image: "https://olivia-games.github.io/seraph/images/thumbnails/btd3.jpg" },
  { id: "btd-btd4", name: "Btd", url: "https://olivia-games.github.io/seraph/games/btd/btd4/", category: "strategy", description: "A strategic gameplay experience built around Btd.", image: "https://olivia-games.github.io/seraph/images/thumbnails/btd4.jpg" },
  { id: "bomberman", name: "Bomberman", url: "https://olivia-games.github.io/seraph/games/bomberman/", category: "action", description: "Fast-paced action challenge featuring Bomberman.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bomberman.jpg" },
  { id: "fireemblem", name: "Fireemblem", url: "https://olivia-games.github.io/seraph/games/fireemblem/", category: "action", description: "React quickly and survive intense action in Fireemblem.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fireemblem.jpg" },
  { id: "iceclimber", name: "Iceclimber", url: "https://olivia-games.github.io/seraph/games/iceclimber/", category: "action", description: "Iceclimber delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/iceclimber.jpg" },
  { id: "mariokartsupercircuit", name: "Mariokartsupercircuit", url: "https://olivia-games.github.io/seraph/games/mariokartsupercircuit/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariokartsupercircuit.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariokartsupercircuit.jpg" },
  { id: "pokemonleafgreen", name: "Pokemonleafgreen", url: "https://olivia-games.github.io/seraph/games/pokemonleafgreen/", category: "rpg", description: "Pokemonleafgreen features progression, exploration, and story.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonleafgreen.jpg" },
  { id: "pokemonruby", name: "Pokemonruby", url: "https://olivia-games.github.io/seraph/games/pokemonruby/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonruby.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonruby.jpg" },
  { id: "pokemonsapphire", name: "Pokemonsapphire", url: "https://olivia-games.github.io/seraph/games/pokemonsapphire/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonsapphire.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonsapphire.jpg" },
  { id: "superstarsaga", name: "Superstarsaga", url: "https://olivia-games.github.io/seraph/games/superstarsaga/", category: "action", description: "React quickly and survive intense action in Superstarsaga.", image: "https://olivia-games.github.io/seraph/images/thumbnails/superstarsaga.jpg" },
  { id: "adofai", name: "Adofai", url: "https://olivia-games.github.io/seraph/games/adofai/", category: "action", description: "Adofai delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/adofai.jpg" },
  { id: "supersmashflash", name: "Supersmashflash", url: "https://olivia-games.github.io/seraph/games/supersmashflash/", category: "fighting", description: "Battle opponents in skill-based combat in Supersmashflash.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supersmashflash.jpg" },
  { id: "supermeatboy", name: "Supermeatboy", url: "https://olivia-games.github.io/seraph/games/supermeatboy/", category: "action", description: "React quickly and survive intense action in Supermeatboy.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermeatboy.jpg" },
  { id: "stickmanhook", name: "Stickmanhook", url: "https://olivia-games.github.io/seraph/games/stickmanhook/", category: "action", description: "Stickmanhook delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stickmanhook.jpg" },
  { id: "defendthetank", name: "Defendthetank", url: "https://olivia-games.github.io/seraph/games/defendthetank/", category: "action", description: "Fast-paced action challenge featuring Defendthetank.", image: "https://olivia-games.github.io/seraph/images/thumbnails/defendthetank.jpg" },
  { id: "sortthecourt", name: "Sortthecourt", url: "https://olivia-games.github.io/seraph/games/sortthecourt/", category: "action", description: "React quickly and survive intense action in Sortthecourt.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sortthecourt.jpg" },
  { id: "thisistheonlylevel", name: "Thisistheonlylevel", url: "https://olivia-games.github.io/seraph/games/thisistheonlylevel/", category: "action", description: "Thisistheonlylevel delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thisistheonlylevel.jpg" },
  { id: "run", name: "Run", url: "https://olivia-games.github.io/seraph/games/run/", category: "action", description: "Fast-paced action challenge featuring Run.", image: "https://olivia-games.github.io/seraph/images/thumbnails/run.jpg" },
  { id: "run2", name: "Run2", url: "https://olivia-games.github.io/seraph/games/run2/", category: "action", description: "React quickly and survive intense action in Run2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/run2.jpg" },
  { id: "battleships", name: "Battleships", url: "https://olivia-games.github.io/seraph/games/battleships/", category: "action", description: "Battleships delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/battleships.jpg" },
  { id: "breakingthebank", name: "Breakingthebank", url: "https://olivia-games.github.io/seraph/games/breakingthebank/", category: "action", description: "Fast-paced action challenge featuring Breakingthebank.", image: "https://olivia-games.github.io/seraph/images/thumbnails/breakingthebank.jpg" },
  { id: "ducklife", name: "Ducklife", url: "https://olivia-games.github.io/seraph/games/ducklife/", category: "action", description: "React quickly and survive intense action in Ducklife.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducklife.jpg" },
  { id: "ducklife2", name: "Ducklife2", url: "https://olivia-games.github.io/seraph/games/ducklife2/", category: "action", description: "Ducklife2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducklife2.jpg" },
  { id: "ducklife3", name: "Ducklife3", url: "https://olivia-games.github.io/seraph/games/ducklife3/", category: "action", description: "Fast-paced action challenge featuring Ducklife3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducklife3.jpg" },
  { id: "linerider", name: "Linerider", url: "https://olivia-games.github.io/seraph/games/linerider/", category: "action", description: "React quickly and survive intense action in Linerider.", image: "https://olivia-games.github.io/seraph/images/thumbnails/linerider.jpg" },
  { id: "mariocombat", name: "Mariocombat", url: "https://olivia-games.github.io/seraph/games/mariocombat/", category: "platformer", description: "A skill-based platforming adventure called Mariocombat.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariocombat.jpg" },
  { id: "raftwars2", name: "Raftwars2", url: "https://olivia-games.github.io/seraph/games/raftwars2/", category: "action", description: "Fast-paced action challenge featuring Raftwars2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/raftwars2.jpg" },
  { id: "spaceinvaders", name: "Spaceinvaders", url: "https://olivia-games.github.io/seraph/games/spaceinvaders/", category: "action", description: "React quickly and survive intense action in Spaceinvaders.", image: "https://olivia-games.github.io/seraph/images/thumbnails/spaceinvaders.jpg" },
  { id: "animalcrossingwildworld", name: "Animalcrossingwildworld", url: "https://olivia-games.github.io/seraph/games/animalcrossingwildworld/", category: "action", description: "Animalcrossingwildworld delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/animalcrossingwildworld.jpg" },
  { id: "mariokartds", name: "Mariokartds", url: "https://olivia-games.github.io/seraph/games/mariokartds/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariokartds.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariokartds.jpg" },
  { id: "newsupermariobros", name: "Newsupermariobros", url: "https://olivia-games.github.io/seraph/games/newsupermariobros/", category: "platformer", description: "Newsupermariobros challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/newsupermariobros.jpg" },
  { id: "nintendogs", name: "Nintendogs", url: "https://olivia-games.github.io/seraph/games/nintendogs/", category: "action", description: "Nintendogs delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/nintendogs.jpg" },
  { id: "sm64ds", name: "Sm64ds", url: "https://olivia-games.github.io/seraph/games/sm64ds/", category: "action", description: "Fast-paced action challenge featuring Sm64ds.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sm64ds.jpg" },
  { id: "gunmayhem", name: "Gunmayhem", url: "https://olivia-games.github.io/seraph/games/gunmayhem/", category: "action", description: "React quickly and survive intense action in Gunmayhem.", image: "https://olivia-games.github.io/seraph/images/thumbnails/gunmayhem.jpg" },
  { id: "learntofly", name: "Learntofly", url: "https://olivia-games.github.io/seraph/games/learntofly/", category: "action", description: "Learntofly delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/learntofly.jpg" },
  { id: "rooftop2", name: "Rooftop2", url: "https://olivia-games.github.io/seraph/games/rooftop2/", category: "action", description: "Fast-paced action challenge featuring Rooftop2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/rooftopsnipers2.jpg" },
  { id: "fireboywatergirl", name: "Fireboywatergirl", url: "https://olivia-games.github.io/seraph/games/fireboywatergirl/", category: "action", description: "React quickly and survive intense action in Fireboywatergirl.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fireboyandwatergirl.jpg" },
  { id: "chibiknight", name: "Chibiknight", url: "https://olivia-games.github.io/seraph/games/chibiknight/", category: "action", description: "Chibiknight delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chibiknight.jpg" },
  { id: "clusterrush", name: "Clusterrush", url: "https://olivia-games.github.io/seraph/games/clusterrush/", category: "action", description: "Fast-paced action challenge featuring Clusterrush.", image: "https://olivia-games.github.io/seraph/images/thumbnails/clusterrush.jpg" },
  { id: "doodledefender", name: "Doodledefender", url: "https://olivia-games.github.io/seraph/games/doodledefender/", category: "action", description: "React quickly and survive intense action in Doodledefender.", image: "https://olivia-games.github.io/seraph/images/thumbnails/doodledefender.jpg" },
  { id: "learntofly2", name: "Learntofly2", url: "https://olivia-games.github.io/seraph/games/learntofly2/", category: "action", description: "Learntofly2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/learntofly2.jpg" },
  { id: "papasscooperia", name: "Papasscooperia", url: "https://olivia-games.github.io/seraph/games/papasscooperia/", category: "restaurant", description: "Cook, serve, and manage customers in Papasscooperia.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papasscooperia.jpg" },
  { id: "papassushiria", name: "Papassushiria", url: "https://olivia-games.github.io/seraph/games/papassushiria/", category: "restaurant", description: "Papassushiria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papaswingeria.jpg" },
  { id: "papaswingeria", name: "Papaswingeria", url: "https://olivia-games.github.io/seraph/games/papaswingeria/", category: "restaurant", description: "Prepare meals and satisfy customers in Papaswingeria.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papassushiria.jpg" },
  { id: "raftwars", name: "Raftwars", url: "https://olivia-games.github.io/seraph/games/raftwars/", category: "action", description: "Fast-paced action challenge featuring Raftwars.", image: "https://olivia-games.github.io/seraph/images/thumbnails/raftwars.jpg" },
  { id: "unfairmario", name: "Unfairmario", url: "https://olivia-games.github.io/seraph/games/unfairmario/", category: "platformer", description: "Unfairmario challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/unfairmario.jpg" },
  { id: "boxingphysics2", name: "Boxingphysics2", url: "https://olivia-games.github.io/seraph/games/boxingphysics2/", category: "fighting", description: "Test your reflexes and combos in Boxingphysics2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/boxingphysics2.jpg" },
  { id: "aceattorney", name: "Aceattorney", url: "https://olivia-games.github.io/seraph/games/aceattorney/", category: "action", description: "Fast-paced action challenge featuring Aceattorney.", image: "https://olivia-games.github.io/seraph/images/thumbnails/aceattorney.jpg" },
  { id: "metalgearsolid", name: "Metalgearsolid", url: "https://olivia-games.github.io/seraph/games/metalgearsolid/", category: "action", description: "React quickly and survive intense action in Metalgearsolid.", image: "https://olivia-games.github.io/seraph/images/thumbnails/metalgearsolid.jpg" },
  { id: "mother3", name: "Mother3", url: "https://olivia-games.github.io/seraph/games/mother3/", category: "action", description: "Mother3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mother3.jpg" },
  { id: "pokemondiamond", name: "Pokemondiamond", url: "https://olivia-games.github.io/seraph/games/pokemondiamond/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemondiamond.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemondiamond.jpg" },
  { id: "pokemonplatinum", name: "Pokemonplatinum", url: "https://olivia-games.github.io/seraph/games/pokemonplatinum/", category: "rpg", description: "Pokemonplatinum features progression, exploration, and story.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonplatinum.jpg" },
  { id: "pokemonsoulsilver", name: "Pokemonsoulsilver", url: "https://olivia-games.github.io/seraph/games/pokemonsoulsilver/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonsoulsilver.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonsoulsilver.jpg" },
  { id: "advancewars", name: "Advancewars", url: "https://olivia-games.github.io/seraph/games/advancewars/", category: "action", description: "Fast-paced action challenge featuring Advancewars.", image: "https://olivia-games.github.io/seraph/images/thumbnails/advancewars.jpg" },
  { id: "banjopilot", name: "Banjopilot", url: "https://olivia-games.github.io/seraph/games/banjopilot/", category: "action", description: "React quickly and survive intense action in Banjopilot.", image: "https://olivia-games.github.io/seraph/images/thumbnails/banjopilot.jpg" },
  { id: "supermonkeyballjr", name: "Supermonkeyballjr", url: "https://olivia-games.github.io/seraph/games/supermonkeyballjr/", category: "action", description: "Supermonkeyballjr delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermonkeyballjr.jpg" },
  { id: "theimpossiblequiz2", name: "Theimpossiblequiz2", url: "https://olivia-games.github.io/seraph/games/theimpossiblequiz2/", category: "action", description: "Fast-paced action challenge featuring Theimpossiblequiz2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/theimpossiblequiz2.jpg" },
  { id: "papasdonuteria", name: "Papasdonuteria", url: "https://olivia-games.github.io/seraph/games/papasdonuteria/", category: "restaurant", description: "Papasdonuteria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papasdonuteria.jpg" },
  { id: "fancypantsadventure2", name: "Fancypantsadventure2", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure2/", category: "action", description: "Fancypantsadventure2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fancypantsadventure2.jpg" },
  { id: "tinyfishing", name: "Tinyfishing", url: "https://olivia-games.github.io/seraph/games/tinyfishing/", category: "action", description: "Fast-paced action challenge featuring Tinyfishing.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tinyfishing.jpg" },
  { id: "bigredbutton", name: "Bigredbutton", url: "https://olivia-games.github.io/seraph/games/bigredbutton/", category: "action", description: "React quickly and survive intense action in Bigredbutton.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bigredbutton.jpg" },
  { id: "achievementunlocked", name: "Achievementunlocked", url: "https://olivia-games.github.io/seraph/games/achievementunlocked/", category: "action", description: "Achievementunlocked delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/achievementunlocked.jpg" },
  { id: "kirbymassattack", name: "Kirbymassattack", url: "https://olivia-games.github.io/seraph/games/kirbymassattack/", category: "platformer", description: "Jump, run, and explore classic platforming in Kirbymassattack.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kirbymassattack.jpg" },
  { id: "sonicadvance", name: "Sonicadvance", url: "https://olivia-games.github.io/seraph/games/sonicadvance/", category: "platformer", description: "Sonicadvance challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicadvance.jpg" },
  { id: "wormsworldparty", name: "Wormsworldparty", url: "https://olivia-games.github.io/seraph/games/wormsworldparty/", category: "action", description: "Wormsworldparty delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wormsworldparty.jpg" },
  { id: "badicecream", name: "Badicecream", url: "https://olivia-games.github.io/seraph/games/badicecream/", category: "action", description: "Fast-paced action challenge featuring Badicecream.", image: "https://olivia-games.github.io/seraph/images/thumbnails/badicecream.jpg" },
  { id: "badicecream2", name: "Badicecream2", url: "https://olivia-games.github.io/seraph/games/badicecream2/", category: "action", description: "React quickly and survive intense action in Badicecream2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/badicecream2.jpg" },
  { id: "badicecream3", name: "Badicecream3", url: "https://olivia-games.github.io/seraph/games/badicecream3/", category: "action", description: "Badicecream3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/badicecream3.jpg" },
  { id: "adventurecapitalist", name: "Adventurecapitalist", url: "https://olivia-games.github.io/seraph/games/adventurecapitalist/", category: "action", description: "Fast-paced action challenge featuring Adventurecapitalist.", image: "https://olivia-games.github.io/seraph/images/thumbnails/adventurecaptialist.jpg" },
  { id: "monkeymart", name: "Monkeymart", url: "https://olivia-games.github.io/seraph/games/monkeymart/", category: "action", description: "React quickly and survive intense action in Monkeymart.", image: "https://olivia-games.github.io/seraph/images/thumbnails/monkeymart.jpg" },
  { id: "doom64", name: "Doom64", url: "https://olivia-games.github.io/seraph/games/doom64/", category: "action", description: "Doom64 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/doom64.jpg" },
  { id: "banjokazooie", name: "Banjokazooie", url: "https://olivia-games.github.io/seraph/games/banjokazooie/", category: "action", description: "Fast-paced action challenge featuring Banjokazooie.", image: "https://olivia-games.github.io/seraph/images/thumbnails/banjokazooie.jpg" },
  { id: "donkeykong64", name: "Donkeykong64", url: "https://olivia-games.github.io/seraph/games/donkeykong64/", category: "action", description: "React quickly and survive intense action in Donkeykong64.", image: "https://olivia-games.github.io/seraph/images/thumbnails/donkeykong64.jpg" },
  { id: "fzerox", name: "Fzerox", url: "https://olivia-games.github.io/seraph/games/fzerox/", category: "action", description: "Fzerox delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fzerox.jpg" },
  { id: "kirby64", name: "Kirby64", url: "https://olivia-games.github.io/seraph/games/kirby64/", category: "platformer", description: "Jump, run, and explore classic platforming in Kirby64.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kirby64.jpg" },
  { id: "mariokart64", name: "Mariokart64", url: "https://olivia-games.github.io/seraph/games/mariokart64/", category: "platformer", description: "Mariokart64 challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariokart64.jpg" },
  { id: "marioparty", name: "Marioparty", url: "https://olivia-games.github.io/seraph/games/marioparty/", category: "platformer", description: "A skill-based platforming adventure called Marioparty.", image: "https://olivia-games.github.io/seraph/images/thumbnails/marioparty.jpg" },
  { id: "marioparty2", name: "Marioparty2", url: "https://olivia-games.github.io/seraph/games/marioparty2/", category: "platformer", description: "Jump, run, and explore classic platforming in Marioparty2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/marioparty2.jpg" },
  { id: "ocarinaoftime", name: "Ocarinaoftime", url: "https://olivia-games.github.io/seraph/games/ocarinaoftime/", category: "action", description: "React quickly and survive intense action in Ocarinaoftime.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ocarinaoftime.jpg" },
  { id: "starfox64", name: "Starfox64", url: "https://olivia-games.github.io/seraph/games/starfox64/", category: "action", description: "Starfox64 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/starfox64.jpg" },
  { id: "supersmashbros", name: "Supersmashbros", url: "https://olivia-games.github.io/seraph/games/supersmashbros/", category: "fighting", description: "Battle opponents in skill-based combat in Supersmashbros.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supersmashbros.jpg" },
  { id: "streetfighter2", name: "Streetfighter2", url: "https://olivia-games.github.io/seraph/games/streetfighter2/", category: "fighting", description: "Streetfighter2 focuses on fast and competitive fighting.", image: "https://olivia-games.github.io/seraph/images/thumbnails/streetfighter2.jpg" },
  { id: "getawayshootout", name: "Getawayshootout", url: "https://olivia-games.github.io/seraph/games/getawayshootout/", category: "action", description: "Getawayshootout delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/getawayshootout.jpg" },
  { id: "rabbitsamurai", name: "Rabbitsamurai", url: "https://olivia-games.github.io/seraph/games/rabbitsamurai/", category: "action", description: "Fast-paced action challenge featuring Rabbitsamurai.", image: "https://olivia-games.github.io/seraph/images/thumbnails/rabbitsamurai.jpg" },
  { id: "mariopartyds", name: "Mariopartyds", url: "https://olivia-games.github.io/seraph/games/mariopartyds/", category: "platformer", description: "Mariopartyds challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariopartyds.jpg" },
  { id: "professorlayton", name: "Professorlayton", url: "https://olivia-games.github.io/seraph/games/professorlayton/", category: "action", description: "Professorlayton delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/professorlayton.jpg" },
  { id: "scribblenauts", name: "Scribblenauts", url: "https://olivia-games.github.io/seraph/games/scribblenauts/", category: "action", description: "Fast-paced action challenge featuring Scribblenauts.", image: "https://olivia-games.github.io/seraph/images/thumbnails/scribblenauts.jpg" },
  { id: "advancewars2", name: "Advancewars2", url: "https://olivia-games.github.io/seraph/games/advancewars2/", category: "action", description: "React quickly and survive intense action in Advancewars2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/advancewars2.jpg" },
  { id: "harvestmoon", name: "Harvestmoon", url: "https://olivia-games.github.io/seraph/games/harvestmoon/", category: "action", description: "Harvestmoon delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/harvestmoon.jpg" },
  { id: "mariotennis", name: "Mariotennis", url: "https://olivia-games.github.io/seraph/games/mariotennis/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariotennis.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariotennis.jpg" },
  { id: "megamanzero", name: "Megamanzero", url: "https://olivia-games.github.io/seraph/games/megamanzero/", category: "action", description: "React quickly and survive intense action in Megamanzero.", image: "https://olivia-games.github.io/seraph/images/thumbnails/megamanzero.jpg" },
  { id: "pokemonmysterydungeon", name: "Pokemonmysterydungeon", url: "https://olivia-games.github.io/seraph/games/pokemonmysterydungeon/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonmysterydungeon.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonmysterydungeon.jpg" },
  { id: "pokemonunbound", name: "Pokemonunbound", url: "https://olivia-games.github.io/seraph/games/pokemonunbound/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonunbound.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonunbound.jpg" },
  { id: "papascheeseria", name: "Papascheeseria", url: "https://olivia-games.github.io/seraph/games/papascheeseria/", category: "restaurant", description: "Papascheeseria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papascheeseria.jpg" },
  { id: "papascupcakeria", name: "Papascupcakeria", url: "https://olivia-games.github.io/seraph/games/papascupcakeria/", category: "restaurant", description: "Prepare meals and satisfy customers in Papascupcakeria.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papascupcakeria.jpg" },
  { id: "papasbakeria", name: "Papasbakeria", url: "https://olivia-games.github.io/seraph/games/papasbakeria/", category: "restaurant", description: "Cook, serve, and manage customers in Papasbakeria.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papasbakeria.jpg" },
  { id: "papaspastaria", name: "Papaspastaria", url: "https://olivia-games.github.io/seraph/games/papaspastaria/", category: "restaurant", description: "Papaspastaria lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papaspastaria.jpg" },
  { id: "gunmayhem2", name: "Gunmayhem2", url: "https://olivia-games.github.io/seraph/games/gunmayhem2/", category: "action", description: "Gunmayhem2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/gunmayhem2.jpg" },
  { id: "gunmayhemredux", name: "Gunmayhemredux", url: "https://olivia-games.github.io/seraph/games/gunmayhemredux/", category: "action", description: "Fast-paced action challenge featuring Gunmayhemredux.", image: "https://olivia-games.github.io/seraph/images/thumbnails/gunmayhemredux.jpg" },
  { id: "achievementunlocked2", name: "Achievementunlocked2", url: "https://olivia-games.github.io/seraph/games/achievementunlocked2/", category: "action", description: "React quickly and survive intense action in Achievementunlocked2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/achievementunlocked2.jpg" },
  { id: "achievementunlocked3", name: "Achievementunlocked3", url: "https://olivia-games.github.io/seraph/games/achievementunlocked3/", category: "action", description: "Achievementunlocked3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/achievementunlocked3.jpg" },
  { id: "factoryballs", name: "Factoryballs", url: "https://olivia-games.github.io/seraph/games/factoryballs/", category: "action", description: "Fast-paced action challenge featuring Factoryballs.", image: "https://olivia-games.github.io/seraph/images/thumbnails/factoryballs.jpg" },
  { id: "skywire", name: "Skywire", url: "https://olivia-games.github.io/seraph/games/skywire/", category: "action", description: "React quickly and survive intense action in Skywire.", image: "https://olivia-games.github.io/seraph/images/thumbnails/skywire.jpg" },
  { id: "supermarioflash", name: "Supermarioflash", url: "https://olivia-games.github.io/seraph/games/supermarioflash/", category: "platformer", description: "A skill-based platforming adventure called Supermarioflash.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermarioflash.jpg" },
  { id: "goldensun", name: "Goldensun", url: "https://olivia-games.github.io/seraph/games/goldensun/", category: "action", description: "Fast-paced action challenge featuring Goldensun.", image: "https://olivia-games.github.io/seraph/images/thumbnails/goldensun.jpg" },
  { id: "metroidfusion", name: "Metroidfusion", url: "https://olivia-games.github.io/seraph/games/metroidfusion/", category: "platformer", description: "Metroidfusion challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/metroidfusion.jpg" },
  { id: "dbzsupersonicwarriors", name: "Dbzsupersonicwarriors", url: "https://olivia-games.github.io/seraph/games/dbzsupersonicwarriors/", category: "platformer", description: "A skill-based platforming adventure called Dbzsupersonicwarriors.", image: "https://olivia-games.github.io/seraph/images/thumbnails/goldensun.jpg" },
  { id: "warioland4", name: "Warioland4", url: "https://olivia-games.github.io/seraph/games/warioland4/", category: "action", description: "Fast-paced action challenge featuring Warioland4.", image: "https://olivia-games.github.io/seraph/images/thumbnails/warioland4.jpg" },
  { id: "ducklife5", name: "Ducklife5", url: "https://olivia-games.github.io/seraph/games/ducklife5/", category: "action", description: "React quickly and survive intense action in Ducklife5.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducklife5.jpg" },
  { id: "learntofly3", name: "Learntofly3", url: "https://olivia-games.github.io/seraph/games/learntofly3/", category: "action", description: "Learntofly3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/learntofly3.jpg" },
  { id: "bloxors", name: "Bloxors", url: "https://olivia-games.github.io/seraph/games/bloxors/", category: "action", description: "Fast-paced action challenge featuring Bloxors.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bloxors.jpg" },
  { id: "electricman2", name: "Electricman2", url: "https://olivia-games.github.io/seraph/games/electricman2/", category: "action", description: "React quickly and survive intense action in Electricman2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/electricman2.jpg" },
  { id: "portal", name: "Portal", url: "https://olivia-games.github.io/seraph/games/portal/", category: "action", description: "Portal delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/portal.jpg" },
  { id: "portal2", name: "Portal2", url: "https://olivia-games.github.io/seraph/games/portal2/", category: "action", description: "Fast-paced action challenge featuring Portal2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/portal2.jpg" },
  { id: "skywire2", name: "Skywire2", url: "https://olivia-games.github.io/seraph/games/skywire2/", category: "action", description: "React quickly and survive intense action in Skywire2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/skywire2.jpg" },
  { id: "ducklife6", name: "Ducklife6", url: "https://olivia-games.github.io/seraph/games/ducklife6/", category: "action", description: "Ducklife6 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducklife6.jpg" },
  { id: "boxingrandom", name: "Boxingrandom", url: "https://olivia-games.github.io/seraph/games/boxingrandom/", category: "fighting", description: "Battle opponents in skill-based combat in Boxingrandom.", image: "https://olivia-games.github.io/seraph/images/thumbnails/boxingrandom.jpg" },
  { id: "cellmachine", name: "Cellmachine", url: "https://olivia-games.github.io/seraph/games/cellmachine/", category: "action", description: "React quickly and survive intense action in Cellmachine.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cellmachine.jpg" },
  { id: "stickmanboost", name: "Stickmanboost", url: "https://olivia-games.github.io/seraph/games/stickmanboost/", category: "action", description: "Stickmanboost delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stickmanboost.jpg" },
  { id: "vex3", name: "Vex3", url: "https://olivia-games.github.io/seraph/games/vex3/", category: "action", description: "Fast-paced action challenge featuring Vex3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex3.jpg" },
  { id: "vex4", name: "Vex4", url: "https://olivia-games.github.io/seraph/games/vex4/", category: "action", description: "React quickly and survive intense action in Vex4.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex4.jpg" },
  { id: "skibidi1v100", name: "Skibidi1v100", url: "https://olivia-games.github.io/seraph/games/skibidi1v100/", category: "action", description: "Skibidi1v100 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/skibiditoilet1v100.jpg" },
  { id: "goldeneye007", name: "Goldeneye007", url: "https://olivia-games.github.io/seraph/games/goldeneye007/", category: "action", description: "Fast-paced action challenge featuring Goldeneye007.", image: "https://olivia-games.github.io/seraph/images/thumbnails/goldeneye007.jpg" },
  { id: "majorasmask", name: "Majorasmask", url: "https://olivia-games.github.io/seraph/games/majorasmask/", category: "action", description: "React quickly and survive intense action in Majorasmask.", image: "https://olivia-games.github.io/seraph/images/thumbnails/majorasmask.jpg" },
  { id: "papermario", name: "Papermario", url: "https://olivia-games.github.io/seraph/games/papermario/", category: "platformer", description: "A skill-based platforming adventure called Papermario.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papermario.jpg" },
  { id: "mariogolf", name: "Mariogolf", url: "https://olivia-games.github.io/seraph/games/mariogolf/", category: "platformer", description: "Jump, run, and explore classic platforming in Mariogolf.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariogolf.jpg" },
  { id: "pokemonstadium", name: "Pokemonstadium", url: "https://olivia-games.github.io/seraph/games/pokemonstadium/", category: "rpg", description: "Pokemonstadium features progression, exploration, and story.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonstadium.jpg" },
  { id: "excitebike64", name: "Excitebike64", url: "https://olivia-games.github.io/seraph/games/excitebike64/", category: "action", description: "Excitebike64 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/excitebike64.jpg" },
  { id: "pokemonsnap", name: "Pokemonsnap", url: "https://olivia-games.github.io/seraph/games/pokemonsnap/", category: "rpg", description: "Embark on an epic role-playing journey in Pokemonsnap.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonsnap.jpg" },
  { id: "marioparty3", name: "Marioparty3", url: "https://olivia-games.github.io/seraph/games/marioparty3/", category: "platformer", description: "Marioparty3 challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/marioparty3.jpg" },
  { id: "sonicadvance2", name: "Sonicadvance2", url: "https://olivia-games.github.io/seraph/games/sonicadvance2/", category: "platformer", description: "A skill-based platforming adventure called Sonicadvance2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicadvance2.jpg" },
  { id: "bowsersinsidestory", name: "Bowsersinsidestory", url: "https://olivia-games.github.io/seraph/games/bowsersinsidestory/", category: "action", description: "Fast-paced action challenge featuring Bowsersinsidestory.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bowsersinsidestory.jpg" },
  { id: "spirittracks", name: "Spirittracks", url: "https://olivia-games.github.io/seraph/games/spirittracks/", category: "action", description: "React quickly and survive intense action in Spirittracks.", image: "https://olivia-games.github.io/seraph/images/thumbnails/spirittracks.jpg" },
  { id: "thesims2", name: "Thesims2", url: "https://olivia-games.github.io/seraph/games/thesims2/", category: "action", description: "Thesims2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thesims2.jpg" },
  { id: "tetrisds", name: "Tetrisds", url: "https://olivia-games.github.io/seraph/games/tetrisds/", category: "action", description: "Fast-paced action challenge featuring Tetrisds.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tetrisds.jpg" },
  { id: "sonicrush", name: "Sonicrush", url: "https://olivia-games.github.io/seraph/games/sonicrush/", category: "platformer", description: "Sonicrush challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicrush.jpg" },
  { id: "thesims3", name: "Thesims3", url: "https://olivia-games.github.io/seraph/games/thesims3/", category: "action", description: "Thesims3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thesims3.jpg" },
  { id: "superprincesspeach", name: "Superprincesspeach", url: "https://olivia-games.github.io/seraph/games/superprincesspeach/", category: "action", description: "Fast-paced action challenge featuring Superprincesspeach.", image: "https://olivia-games.github.io/seraph/images/thumbnails/superprincesspeach.jpg" },
  { id: "legobatman", name: "Legobatman", url: "https://olivia-games.github.io/seraph/games/legobatman/", category: "action", description: "React quickly and survive intense action in Legobatman.", image: "https://olivia-games.github.io/seraph/images/thumbnails/legobatman.jpg" },
  { id: "doom2", name: "Doom2", url: "https://olivia-games.github.io/seraph/games/doom2/", category: "action", description: "Doom2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/doomii.jpg" },
  { id: "dukenukemadvance", name: "Dukenukemadvance", url: "https://olivia-games.github.io/seraph/games/dukenukemadvance/", category: "action", description: "Fast-paced action challenge featuring Dukenukemadvance.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dukenukemadvance.jpg" },
  { id: "mariopartyadvance", name: "Mariopartyadvance", url: "https://olivia-games.github.io/seraph/games/mariopartyadvance/", category: "platformer", description: "Mariopartyadvance challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariopartyadvance.jpg" },
  { id: "mariopinballland", name: "Mariopinballland", url: "https://olivia-games.github.io/seraph/games/mariopinballland/", category: "platformer", description: "A skill-based platforming adventure called Mariopinballland.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariopinballland.jpg" },
  { id: "pacmanworld", name: "Pacmanworld", url: "https://olivia-games.github.io/seraph/games/pacmanworld/", category: "action", description: "Fast-paced action challenge featuring Pacmanworld.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pacmanworld.jpg" },
  { id: "rayman3", name: "Rayman3", url: "https://olivia-games.github.io/seraph/games/rayman3/", category: "action", description: "React quickly and survive intense action in Rayman3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/rayman3.jpg" },
  { id: "shrek2", name: "Shrek2", url: "https://olivia-games.github.io/seraph/games/shrek2/", category: "action", description: "Shrek2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shrek2.jpg" },
  { id: "simcity", name: "Simcity", url: "https://olivia-games.github.io/seraph/games/simcity/", category: "action", description: "Fast-paced action challenge featuring Simcity.", image: "https://olivia-games.github.io/seraph/images/thumbnails/simcity2000.jpg" },
  { id: "simpsonsroadrage", name: "Simpsonsroadrage", url: "https://olivia-games.github.io/seraph/games/simpsonsroadrage/", category: "action", description: "React quickly and survive intense action in Simpsonsroadrage.", image: "https://olivia-games.github.io/seraph/images/thumbnails/simpsonsroadrage.jpg" },
  { id: "diddykongracing", name: "Diddykongracing", url: "https://olivia-games.github.io/seraph/games/diddykongracing/", category: "racing", description: "Fast and competitive racing action in Diddykongracing.", image: "https://olivia-games.github.io/seraph/images/thumbnails/diddykongracing.jpg" },
  { id: "waverace64", name: "Waverace64", url: "https://olivia-games.github.io/seraph/games/waverace64/", category: "action", description: "Fast-paced action challenge featuring Waverace64.", image: "https://olivia-games.github.io/seraph/images/thumbnails/waveracing.jpg" },
  { id: "quest64", name: "Quest64", url: "https://olivia-games.github.io/seraph/games/quest64/", category: "action", description: "React quickly and survive intense action in Quest64.", image: "https://olivia-games.github.io/seraph/images/thumbnails/quest64.jpg" },
  { id: "gex64", name: "Gex64", url: "https://olivia-games.github.io/seraph/games/gex64/", category: "action", description: "Gex64 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/gex64.jpg" },
  { id: "dukenukem64", name: "Dukenukem64", url: "https://olivia-games.github.io/seraph/games/dukenukem64/", category: "action", description: "Fast-paced action challenge featuring Dukenukem64.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dukenukem64.jpg" },
  { id: "mortalkombat4", name: "Mortalkombat4", url: "https://olivia-games.github.io/seraph/games/mortalkombat4/", category: "action", description: "React quickly and survive intense action in Mortalkombat4.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mortalkombat4.jpg" },
  { id: "badpiggies", name: "Badpiggies", url: "https://olivia-games.github.io/seraph/games/badpiggies/", category: "action", description: "Badpiggies delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/badpiggies.jpg" },
  { id: "supermarioflash2", name: "Supermarioflash2", url: "https://olivia-games.github.io/seraph/games/supermarioflash2/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioflash2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermarioflash2.jpg" },
  { id: "swordsandsandals", name: "Swordsandsandals", url: "https://olivia-games.github.io/seraph/games/swordsandsandals/", category: "action", description: "React quickly and survive intense action in Swordsandsandals.", image: "https://olivia-games.github.io/seraph/images/thumbnails/swordsandsandals.jpg" },
  { id: "swordsandsandals2", name: "Swordsandsandals2", url: "https://olivia-games.github.io/seraph/games/swordsandsandals2/", category: "action", description: "Swordsandsandals2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/swordsandsandals2.jpg" },
  { id: "wordle", name: "Wordle", url: "https://olivia-games.github.io/seraph/games/wordle/", category: "puzzle", description: "Solve clever puzzles and brain teasers in Wordle.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wordle.jpg" },
  { id: "vex", name: "Vex", url: "https://olivia-games.github.io/seraph/games/vex/", category: "action", description: "React quickly and survive intense action in Vex.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex.jpg" },
  { id: "vex2", name: "Vex2", url: "https://olivia-games.github.io/seraph/games/vex2/", category: "action", description: "Vex2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex2.jpg" },
  { id: "vex5", name: "Vex5", url: "https://olivia-games.github.io/seraph/games/vex5/", category: "action", description: "Fast-paced action challenge featuring Vex5.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex5.jpg" },
  { id: "vex7", name: "Vex7", url: "https://olivia-games.github.io/seraph/games/vex7/", category: "action", description: "React quickly and survive intense action in Vex7.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vex7.jpg" },
  { id: "stack", name: "Stack", url: "https://olivia-games.github.io/seraph/games/stack/", category: "action", description: "Stack delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stack.jpg" },
  { id: "skibiditoiletattack", name: "Skibiditoiletattack", url: "https://olivia-games.github.io/seraph/games/skibiditoiletattack/", category: "action", description: "Fast-paced action challenge featuring Skibiditoiletattack.", image: "https://olivia-games.github.io/seraph/images/thumbnails/skibiditoiletattack.jpg" },
  { id: "motox3mpool", name: "Motox3mpool", url: "https://olivia-games.github.io/seraph/games/motox3mpool/", category: "racing", description: "Motox3mpool puts your driving skills to the test.", image: "https://olivia-games.github.io/seraph/images/thumbnails/motox3mpool.jpg" },
  { id: "offlineparadise", name: "Offlineparadise", url: "https://olivia-games.github.io/seraph/games/offlineparadise/", category: "action", description: "Offlineparadise delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/offlineparadise.jpg" },
  { id: "linktothepast", name: "Linktothepast", url: "https://olivia-games.github.io/seraph/games/linktothepast/", category: "action", description: "Fast-paced action challenge featuring Linktothepast.", image: "https://olivia-games.github.io/seraph/images/thumbnails/linktothepast.jpg" },
  { id: "donkeykongcountry", name: "Donkeykongcountry", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry/", category: "action", description: "React quickly and survive intense action in Donkeykongcountry.", image: "https://olivia-games.github.io/seraph/images/thumbnails/donkeykongcountry.jpg" },
  { id: "donkeykongcountry2", name: "Donkeykongcountry2", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry2/", category: "action", description: "Donkeykongcountry2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/donkeykongcountry2.jpg" },
  { id: "superbomberman", name: "Superbomberman", url: "https://olivia-games.github.io/seraph/games/superbomberman/", category: "action", description: "Fast-paced action challenge featuring Superbomberman.", image: "https://olivia-games.github.io/seraph/images/thumbnails/superbomberman.jpg" },
  { id: "mariopaint", name: "Mariopaint", url: "https://olivia-games.github.io/seraph/games/mariopaint/", category: "platformer", description: "Mariopaint challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mariopaint.jpg" },
  { id: "megamanx", name: "Megamanx", url: "https://olivia-games.github.io/seraph/games/megamanx/", category: "action", description: "Megamanx delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/megamanx.jpg" },
  { id: "supermariorpg", name: "Supermariorpg", url: "https://olivia-games.github.io/seraph/games/supermariorpg/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermariorpg.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermariorpg.jpg" },
  { id: "supertennis", name: "Supertennis", url: "https://olivia-games.github.io/seraph/games/supertennis/", category: "action", description: "React quickly and survive intense action in Supertennis.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supertennis.jpg" },
  { id: "warioswoods", name: "Warioswoods", url: "https://olivia-games.github.io/seraph/games/warioswoods/", category: "action", description: "Warioswoods delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/warioswoods.jpg" },
  { id: "worldshardestgame2", name: "Worldshardestgame2", url: "https://olivia-games.github.io/seraph/games/worldshardestgame2/", category: "action", description: "Fast-paced action challenge featuring Worldshardestgame2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/worldshardestgame2.jpg" },
  { id: "bubbletanks2", name: "Bubbletanks2", url: "https://olivia-games.github.io/seraph/games/bubbletanks2/", category: "action", description: "React quickly and survive intense action in Bubbletanks2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bubbletanks2.jpg" },
  { id: "chooseyourweapon", name: "Chooseyourweapon", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon/", category: "action", description: "Chooseyourweapon delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chooseyourweapon.jpg" },
  { id: "chooseyourweapon2", name: "Chooseyourweapon2", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon2/", category: "action", description: "Fast-paced action challenge featuring Chooseyourweapon2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chooseyourweapon2.jpg" },
  { id: "chooseyourweapon3", name: "Chooseyourweapon3", url: "https://olivia-games.github.io/seraph/games/chooseyourweapon3/", category: "action", description: "React quickly and survive intense action in Chooseyourweapon3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chooseyourweapon3.jpg" },
  { id: "connect4", name: "Connect4", url: "https://olivia-games.github.io/seraph/games/connect4/", category: "action", description: "Connect4 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/connect4.jpg" },
  { id: "electricbox", name: "Electricbox", url: "https://olivia-games.github.io/seraph/games/electricbox/", category: "action", description: "Fast-paced action challenge featuring Electricbox.", image: "https://olivia-games.github.io/seraph/images/thumbnails/electricbox.jpg" },
  { id: "mctowerdefence2", name: "Mctowerdefence2", url: "https://olivia-games.github.io/seraph/games/mctowerdefence2/", category: "action", description: "React quickly and survive intense action in Mctowerdefence2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mctowerdefence2.jpg" },
  { id: "cars2", name: "Cars2", url: "https://olivia-games.github.io/seraph/games/cars2/", category: "action", description: "Cars2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cars2.jpg" },
  { id: "cookingmama", name: "Cookingmama", url: "https://olivia-games.github.io/seraph/games/cookingmama/", category: "restaurant", description: "Cook, serve, and manage customers in Cookingmama.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cookingmama.jpg" },
  { id: "adventuretime", name: "Adventuretime", url: "https://olivia-games.github.io/seraph/games/adventuretime/", category: "action", description: "React quickly and survive intense action in Adventuretime.", image: "https://olivia-games.github.io/seraph/images/thumbnails/adventuretimeheyiceking.jpg" },
  { id: "garfieldgetsreal", name: "Garfieldgetsreal", url: "https://olivia-games.github.io/seraph/games/garfieldgetsreal/", category: "action", description: "Garfieldgetsreal delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/garfieldgetsreal.jpg" },
  { id: "wariowaretouched", name: "Wariowaretouched", url: "https://olivia-games.github.io/seraph/games/wariowaretouched/", category: "action", description: "Fast-paced action challenge featuring Wariowaretouched.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wariowaretouched.jpg" },
  { id: "kirbypowerpaintbrush", name: "Kirbypowerpaintbrush", url: "https://olivia-games.github.io/seraph/games/kirbypowerpaintbrush/", category: "platformer", description: "Kirbypowerpaintbrush challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kirbypowerpaintbrush.jpg" },
  { id: "sonicandknuckles", name: "Sonicandknuckles", url: "https://olivia-games.github.io/seraph/games/sonicandknuckles/", category: "platformer", description: "A skill-based platforming adventure called Sonicandknuckles.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicandknuckles.jpg" },
  { id: "alteredbeast", name: "Alteredbeast", url: "https://olivia-games.github.io/seraph/games/alteredbeast/", category: "action", description: "Fast-paced action challenge featuring Alteredbeast.", image: "https://olivia-games.github.io/seraph/images/thumbnails/alteredbeast.jpg" },
  { id: "sonicspinball", name: "Sonicspinball", url: "https://olivia-games.github.io/seraph/games/sonicspinball/", category: "platformer", description: "Sonicspinball challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicspinball.jpg" },
  { id: "sonicthehedgehog3", name: "Sonicthehedgehog3", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog3/", category: "platformer", description: "A skill-based platforming adventure called Sonicthehedgehog3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicthehedgehog3.jpg" },
  { id: "streetsofrage", name: "Streetsofrage", url: "https://olivia-games.github.io/seraph/games/streetsofrage/", category: "action", description: "Fast-paced action challenge featuring Streetsofrage.", image: "https://olivia-games.github.io/seraph/images/thumbnails/streetsofrage.jpg" },
  { id: "goldenaxe", name: "Goldenaxe", url: "https://olivia-games.github.io/seraph/games/goldenaxe/", category: "action", description: "React quickly and survive intense action in Goldenaxe.", image: "https://olivia-games.github.io/seraph/images/thumbnails/goldenaxe.jpg" },
  { id: "kirbyamazingmirror", name: "Kirbyamazingmirror", url: "https://olivia-games.github.io/seraph/games/kirbyamazingmirror/", category: "platformer", description: "A skill-based platforming adventure called Kirbyamazingmirror.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kirbyamazingmirror.jpg" },
  { id: "championisland", name: "Championisland", url: "https://olivia-games.github.io/seraph/games/championisland/", category: "action", description: "Fast-paced action challenge featuring Championisland.", image: "https://olivia-games.github.io/seraph/images/thumbnails/championisland.jpg" },
  { id: "supermarioconstruct", name: "Supermarioconstruct", url: "https://olivia-games.github.io/seraph/games/supermarioconstruct/", category: "platformer", description: "Supermarioconstruct challenges your timing and movement skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermarioconstruct.jpg" },
  { id: "clickerheroes", name: "Clickerheroes", url: "https://olivia-games.github.io/seraph/games/clickerheroes/", category: "strategy", description: "A strategic gameplay experience built around Clickerheroes.", image: "https://olivia-games.github.io/seraph/images/thumbnails/clickerheroes.jpg" },
  { id: "stairrace3d", name: "Stairrace3d", url: "https://olivia-games.github.io/seraph/games/stairrace3d/", category: "action", description: "Fast-paced action challenge featuring Stairrace3d.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stairrace3d.jpg" },
  { id: "slope2", name: "Slope2", url: "https://olivia-games.github.io/seraph/games/slope2/", category: "action", description: "React quickly and survive intense action in Slope2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/slope2.jpg" },
  { id: "paperio3d", name: "Paperio3d", url: "https://olivia-games.github.io/seraph/games/paperio3d/", category: "action", description: "Paperio3d delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/paperio3d.jpg" },
  { id: "motox3mspooky", name: "Motox3mspooky", url: "https://olivia-games.github.io/seraph/games/motox3mspooky/", category: "racing", description: "Race at high speed and master the tracks in Motox3mspooky.", image: "https://olivia-games.github.io/seraph/images/thumbnails/motox3mspooky.jpg" },
  { id: "motox3mwinter", name: "Motox3mwinter", url: "https://olivia-games.github.io/seraph/games/motox3mwinter/", category: "racing", description: "Motox3mwinter puts your driving skills to the test.", image: "https://olivia-games.github.io/seraph/images/thumbnails/motox3mwinter.jpg" },
  { id: "snake", name: "Snake", url: "https://olivia-games.github.io/seraph/games/snake/", category: "action", description: "Snake delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/snake.jpg" },
  { id: "papastacomia", name: "Papastacomia", url: "https://olivia-games.github.io/seraph/games/papastacomia/", category: "restaurant", description: "Cook, serve, and manage customers in Papastacomia.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papastacomia.jpg" },
  { id: "ovo", name: "Ovo", url: "https://olivia-games.github.io/seraph/games/ovo/", category: "action", description: "React quickly and survive intense action in Ovo.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ovo.jpg" },
  { id: "knifehit", name: "Knifehit", url: "https://olivia-games.github.io/seraph/games/knifehit/", category: "action", description: "Knifehit delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/knifehit.jpg" },
  { id: "cubefield", name: "Cubefield", url: "https://olivia-games.github.io/seraph/games/cubefield/", category: "action", description: "Fast-paced action challenge featuring Cubefield.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cubefield.jpg" },
  { id: "burgerandfrights", name: "Burgerandfrights", url: "https://olivia-games.github.io/seraph/games/burgerandfrights/", category: "action", description: "React quickly and survive intense action in Burgerandfrights.", image: "https://olivia-games.github.io/seraph/images/thumbnails/burgerandfrights.jpg" },
  { id: "chess", name: "Chess", url: "https://olivia-games.github.io/seraph/games/chess/", category: "puzzle", description: "A thoughtful puzzle experience named Chess.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chess.jpg" },
  { id: "fnfmidfight", name: "Fnfmidfight", url: "https://olivia-games.github.io/seraph/games/fnfmidfight/", category: "music", description: "Follow the rhythm and hit the beats in Fnfmidfight.", image: "https://olivia-games.github.io/seraph/images/thumbnails/midfightmasses.jpg" },
  { id: "thumbfighter", name: "Thumbfighter", url: "https://olivia-games.github.io/seraph/games/thumbfighter/", category: "fighting", description: "Thumbfighter focuses on fast and competitive fighting.", image: "https://olivia-games.github.io/seraph/images/thumbnails/thumbfighter.jpg" },
  { id: "snowbattleio", name: "Snowbattleio", url: "https://olivia-games.github.io/seraph/games/snowbattleio/", category: "action", description: "Snowbattleio delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/snowbattleio.jpg" },
  { id: "lazyjump3d", name: "Lazyjump3d", url: "https://olivia-games.github.io/seraph/games/lazyjump3d/", category: "action", description: "Fast-paced action challenge featuring Lazyjump3d.", image: "https://olivia-games.github.io/seraph/images/thumbnails/lazyjump3d.jpg" },
  { id: "goball", name: "Goball", url: "https://olivia-games.github.io/seraph/games/goball/", category: "action", description: "React quickly and survive intense action in Goball.", image: "https://olivia-games.github.io/seraph/images/thumbnails/goball.jpg" },
  { id: "flippyfish", name: "Flippyfish", url: "https://olivia-games.github.io/seraph/games/flippyfish/", category: "action", description: "Flippyfish delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/flippyfish.jpg" },
  { id: "shopempire", name: "Shopempire", url: "https://olivia-games.github.io/seraph/games/shopempire/", category: "action", description: "Fast-paced action challenge featuring Shopempire.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shopempire.jpg" },
  { id: "monsterbrawl", name: "Monsterbrawl", url: "https://olivia-games.github.io/seraph/games/monsterbrawl/", category: "action", description: "React quickly and survive intense action in Monsterbrawl.", image: "https://olivia-games.github.io/seraph/images/thumbnails/monsterbrawl.jpg" },
  { id: "multitask", name: "Multitask", url: "https://olivia-games.github.io/seraph/games/multitask/", category: "action", description: "Multitask delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/multitask.jpg" },
  { id: "shift", name: "Shift", url: "https://olivia-games.github.io/seraph/games/shift/", category: "action", description: "Fast-paced action challenge featuring Shift.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shift.jpg" },
  { id: "shift2", name: "Shift2", url: "https://olivia-games.github.io/seraph/games/shift2/", category: "action", description: "React quickly and survive intense action in Shift2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shift2.jpg" },
  { id: "shift3", name: "Shift3", url: "https://olivia-games.github.io/seraph/games/shift3/", category: "action", description: "Shift3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shift3.jpg" },
  { id: "shift4", name: "Shift4", url: "https://olivia-games.github.io/seraph/games/shift4/", category: "action", description: "Fast-paced action challenge featuring Shift4.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shift4.jpg" },
  { id: "monopoly", name: "Monopoly", url: "https://olivia-games.github.io/seraph/games/monopoly/", category: "action", description: "React quickly and survive intense action in Monopoly.", image: "https://olivia-games.github.io/seraph/images/thumbnails/monopoly.jpg" },
  { id: "picrossds", name: "Picrossds", url: "https://olivia-games.github.io/seraph/games/picrossds/", category: "action", description: "Picrossds delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/picrossds.jpg" },
  { id: "wariowarediy", name: "Wariowarediy", url: "https://olivia-games.github.io/seraph/games/wariowarediy/", category: "action", description: "Fast-paced action challenge featuring Wariowarediy.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wariowarediy.jpg" },
  { id: "pizzatower", name: "Pizzatower", url: "https://olivia-games.github.io/seraph/games/pizzatower/", category: "action", description: "React quickly and survive intense action in Pizzatower.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pizzatower.jpg" },
  { id: "territorialio", name: "Territorialio", url: "https://olivia-games.github.io/seraph/games/territorialio/", category: "action", description: "Territorialio delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/territorialio.jpg" },
  { id: "1v1lol", name: "1v1lol", url: "https://olivia-games.github.io/seraph/games/1v1lol/", category: "action", description: "Fast-paced action challenge featuring 1v1lol.", image: "https://olivia-games.github.io/seraph/images/thumbnails/1v1lol.jpg" },
  { id: "ballisticchickens", name: "Ballisticchickens", url: "https://olivia-games.github.io/seraph/games/ballisticchickens/", category: "action", description: "React quickly and survive intense action in Ballisticchickens.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ballisticchickens.jpg" },
  { id: "basketbrosio", name: "Basketbrosio", url: "https://olivia-games.github.io/seraph/games/basketbrosio/", category: "action", description: "Basketbrosio delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/basketbrosio.jpg" },
  { id: "mcclassic", name: "Mcclassic", url: "https://olivia-games.github.io/seraph/games/mcclassic/", category: "action", description: "Fast-paced action challenge featuring Mcclassic.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mcclassic.jpg" },
  { id: "deathrun3d", name: "Deathrun3d", url: "https://olivia-games.github.io/seraph/games/deathrun3d/", category: "action", description: "React quickly and survive intense action in Deathrun3d.", image: "https://olivia-games.github.io/seraph/images/thumbnails/deathrun3d.jpg" },
  { id: "soccerrandom", name: "Soccerrandom", url: "https://olivia-games.github.io/seraph/games/soccerrandom/", category: "action", description: "Soccerrandom delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/soccerrandom.jpg" },
  { id: "sprinter", name: "Sprinter", url: "https://olivia-games.github.io/seraph/games/sprinter/", category: "action", description: "Fast-paced action challenge featuring Sprinter.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sprinter.jpg" },
  { id: "tron", name: "Tron", url: "https://olivia-games.github.io/seraph/games/tron/", category: "action", description: "React quickly and survive intense action in Tron.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tron.jpg" },
  { id: "1on1soccer", name: "1on1soccer", url: "https://olivia-games.github.io/seraph/games/1on1soccer/", category: "action", description: "1on1soccer delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/1on1soccer.jpg" },
  { id: "badtimesimulator", name: "Badtimesimulator", url: "https://olivia-games.github.io/seraph/games/badtimesimulator/", category: "action", description: "Fast-paced action challenge featuring Badtimesimulator.", image: "https://olivia-games.github.io/seraph/images/thumbnails/badtimesimulator.jpg" },
  { id: "amazingropepolice", name: "Amazingropepolice", url: "https://olivia-games.github.io/seraph/games/amazingropepolice/", category: "action", description: "React quickly and survive intense action in Amazingropepolice.", image: "https://olivia-games.github.io/seraph/images/thumbnails/amazingropepolice.jpg" },
  { id: "celeste", name: "Celeste", url: "https://olivia-games.github.io/seraph/games/celeste/", category: "action", description: "Celeste delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/celeste.jpg" },
  { id: "justfalllol", name: "Justfalllol", url: "https://olivia-games.github.io/seraph/games/justfalllol/", category: "action", description: "Fast-paced action challenge featuring Justfalllol.", image: "https://olivia-games.github.io/seraph/images/thumbnails/justfalllol.jpg" },
  { id: "ngon", name: "Ngon", url: "https://olivia-games.github.io/seraph/games/ngon/", category: "action", description: "React quickly and survive intense action in Ngon.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ngon.jpg" },
  { id: "rocketsoccer", name: "Rocketsoccer", url: "https://olivia-games.github.io/seraph/games/rocketsoccer/", category: "action", description: "Rocketsoccer delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/rocketsoccer.jpg" },
  { id: "stickmanclimb", name: "Stickmanclimb", url: "https://olivia-games.github.io/seraph/games/stickmanclimb/", category: "action", description: "Fast-paced action challenge featuring Stickmanclimb.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stickmanclimb.jpg" },
  { id: "osumania", name: "Osumania", url: "https://olivia-games.github.io/seraph/games/osumania/", category: "action", description: "React quickly and survive intense action in Osumania.", image: "https://olivia-games.github.io/seraph/images/thumbnails/osumania.jpg" },
  { id: "helixjump", name: "Helixjump", url: "https://olivia-games.github.io/seraph/games/helixjump/", category: "action", description: "Helixjump delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/helixjump.jpg" },
  { id: "dadish", name: "Dadish", url: "https://olivia-games.github.io/seraph/games/dadish/", category: "action", description: "Fast-paced action challenge featuring Dadish.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dadish.jpg" },
  { id: "dadish2", name: "Dadish2", url: "https://olivia-games.github.io/seraph/games/dadish2/", category: "action", description: "React quickly and survive intense action in Dadish2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dadish2.jpg" },
  { id: "dadish3", name: "Dadish3", url: "https://olivia-games.github.io/seraph/games/dadish3/", category: "action", description: "Dadish3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dadish3.jpg" },
  { id: "snowrider3d", name: "Snowrider3d", url: "https://olivia-games.github.io/seraph/games/snowrider3d/", category: "action", description: "Fast-paced action challenge featuring Snowrider3d.", image: "https://olivia-games.github.io/seraph/images/thumbnails/snowrider3d.jpg" },
  { id: "tubejumpers", name: "Tubejumpers", url: "https://olivia-games.github.io/seraph/games/tubejumpers/", category: "action", description: "React quickly and survive intense action in Tubejumpers.", image: "https://olivia-games.github.io/seraph/images/thumbnails/tubejumpers.jpg" },
  { id: "yohoho", name: "Yohoho", url: "https://olivia-games.github.io/seraph/games/yohoho/", category: "action", description: "Yohoho delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/yohoho.jpg" },
  { id: "10minutestilldawn", name: "10minutestilldawn", url: "https://olivia-games.github.io/seraph/games/10minutestilldawn/", category: "action", description: "Fast-paced action challenge featuring 10minutestilldawn.", image: "https://olivia-games.github.io/seraph/images/thumbnails/10minutestilldawn.jpg" },
  { id: "volleyrandom", name: "Volleyrandom", url: "https://olivia-games.github.io/seraph/games/volleyrandom/", category: "action", description: "React quickly and survive intense action in Volleyrandom.", image: "https://olivia-games.github.io/seraph/images/thumbnails/volleyrandom.jpg" },
  { id: "waterworks", name: "Waterworks", url: "https://olivia-games.github.io/seraph/games/waterworks/", category: "action", description: "Waterworks delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/waterworks.jpg" },
  { id: "geometryrash", name: "Geometryrash", url: "https://olivia-games.github.io/seraph/games/geometryrash/", category: "action", description: "Fast-paced action challenge featuring Geometryrash.", image: "https://olivia-games.github.io/seraph/images/thumbnails/geometryrash.jpg" },
  { id: "holeio", name: "Holeio", url: "https://olivia-games.github.io/seraph/games/holeio/", category: "action", description: "React quickly and survive intense action in Holeio.", image: "https://olivia-games.github.io/seraph/images/thumbnails/holeio.jpg" },
  { id: "sandtrix", name: "Sandtrix", url: "https://olivia-games.github.io/seraph/games/sandtrix/", category: "action", description: "Sandtrix delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sandtrix.jpg" },
  { id: "shapeshipper", name: "Shapeshipper", url: "https://olivia-games.github.io/seraph/games/shapeshipper/", category: "action", description: "Fast-paced action challenge featuring Shapeshipper.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shapeshipper.jpg" },
  { id: "slopeball", name: "Slopeball", url: "https://olivia-games.github.io/seraph/games/slopeball/", category: "action", description: "React quickly and survive intense action in Slopeball.", image: "https://olivia-games.github.io/seraph/images/thumbnails/slopeball.jpg" },
  { id: "stickmangolf", name: "Stickmangolf", url: "https://olivia-games.github.io/seraph/games/stickmangolf/", category: "action", description: "Stickmangolf delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stickmangolf.jpg" },
  { id: "tabs", name: "Tabs", url: "https://olivia-games.github.io/seraph/games/tabs/", category: "action", description: "Fast-paced action challenge featuring Tabs.", image: "https://olivia-games.github.io/seraph/images/thumbnails/totallyaccuratebattlesim.jpg" },
  { id: "watermelongame", name: "Watermelongame", url: "https://olivia-games.github.io/seraph/games/watermelongame/", category: "action", description: "React quickly and survive intense action in Watermelongame.", image: "https://olivia-games.github.io/seraph/images/thumbnails/watermelongame.jpg" },
  { id: "wallsmash", name: "Wallsmash", url: "https://olivia-games.github.io/seraph/games/wallsmash/", category: "fighting", description: "Test your reflexes and combos in Wallsmash.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wallsmash.jpg" },
  { id: "crimsonfantasia", name: "Crimsonfantasia", url: "https://olivia-games.github.io/seraph/games/crimsonfantasia/", category: "action", description: "Fast-paced action challenge featuring Crimsonfantasia.", image: "https://olivia-games.github.io/seraph/images/thumbnails/crimsonfantasia.jpg" },
  { id: "cuttherope", name: "Cuttherope", url: "https://olivia-games.github.io/seraph/games/cuttherope/", category: "action", description: "React quickly and survive intense action in Cuttherope.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cuttherope.jpg" },
  { id: "funnymadracing", name: "Funnymadracing", url: "https://olivia-games.github.io/seraph/games/funnymadracing/", category: "racing", description: "Fast and competitive racing action in Funnymadracing.", image: "https://olivia-games.github.io/seraph/images/thumbnails/funnymadracing.jpg" },
  { id: "gdlite", name: "Gdlite", url: "https://olivia-games.github.io/seraph/games/gdlite/", category: "action", description: "Fast-paced action challenge featuring Gdlite.", image: "https://olivia-games.github.io/seraph/images/thumbnails/geometrydashlite.jpg" },
  { id: "grandtheftgrotto", name: "Grandtheftgrotto", url: "https://olivia-games.github.io/seraph/games/grandtheftgrotto/", category: "action", description: "React quickly and survive intense action in Grandtheftgrotto.", image: "https://olivia-games.github.io/seraph/images/thumbnails/grandtheftgrotto.jpg" },
  { id: "driftmania", name: "Driftmania", url: "https://olivia-games.github.io/seraph/games/driftmania/", category: "racing", description: "Fast and competitive racing action in Driftmania.", image: "https://olivia-games.github.io/seraph/images/thumbnails/driftmania.jpg" },
  { id: "risehigher", name: "Risehigher", url: "https://olivia-games.github.io/seraph/games/risehigher/", category: "action", description: "Fast-paced action challenge featuring Risehigher.", image: "https://olivia-games.github.io/seraph/images/thumbnails/risehigher.jpg" },
  { id: "burritobison", name: "Burritobison", url: "https://olivia-games.github.io/seraph/games/burritobison/", category: "action", description: "React quickly and survive intense action in Burritobison.", image: "https://olivia-games.github.io/seraph/images/thumbnails/burritobison.jpg" },
  { id: "pool", name: "Pool", url: "https://olivia-games.github.io/seraph/games/pool/", category: "action", description: "Pool delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pool.jpg" },
  { id: "redball1", name: "Redball1", url: "https://olivia-games.github.io/seraph/games/redball1/", category: "action", description: "Fast-paced action challenge featuring Redball1.", image: "https://olivia-games.github.io/seraph/images/thumbnails/redball.jpg" },
  { id: "redball3", name: "Redball3", url: "https://olivia-games.github.io/seraph/games/redball3/", category: "action", description: "React quickly and survive intense action in Redball3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/redball3.jpg" },
  { id: "redball4", name: "Redball4", url: "https://olivia-games.github.io/seraph/games/redball4/", category: "action", description: "Redball4 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/redball4.jpg" },
  { id: "redballv2", name: "Redballv2", url: "https://olivia-games.github.io/seraph/games/redballv2/", category: "action", description: "Fast-paced action challenge featuring Redballv2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/redball4vol2.jpg" },
  { id: "redballv3", name: "Redballv3", url: "https://olivia-games.github.io/seraph/games/redballv3/", category: "action", description: "React quickly and survive intense action in Redballv3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/redball4vol3.jpg" },
  { id: "roughdino", name: "Roughdino", url: "https://olivia-games.github.io/seraph/games/roughdino/", category: "action", description: "Roughdino delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/roughdino.jpg" },
  { id: "timeshooter1", name: "Timeshooter1", url: "https://olivia-games.github.io/seraph/games/timeshooter1/", category: "action", description: "Fast-paced action challenge featuring Timeshooter1.", image: "https://olivia-games.github.io/seraph/images/thumbnails/timeshooter.jpg" },
  { id: "timeshooter2", name: "Timeshooter2", url: "https://olivia-games.github.io/seraph/games/timeshooter2/", category: "action", description: "React quickly and survive intense action in Timeshooter2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/timeshooter2.jpg" },
  { id: "timeshooter3", name: "Timeshooter3", url: "https://olivia-games.github.io/seraph/games/timeshooter3/", category: "action", description: "Timeshooter3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/timeshooter3.jpg" },
  { id: "battletoads", name: "Battletoads", url: "https://olivia-games.github.io/seraph/games/battletoads/", category: "action", description: "Fast-paced action challenge featuring Battletoads.", image: "https://olivia-games.github.io/seraph/images/thumbnails/battletoads.jpg" },
  { id: "castlevaniaiii", name: "Castlevaniaiii", url: "https://olivia-games.github.io/seraph/games/castlevaniaiii/", category: "action", description: "React quickly and survive intense action in Castlevaniaiii.", image: "https://olivia-games.github.io/seraph/images/thumbnails/castlevania.jpg" },
  { id: "contra", name: "Contra", url: "https://olivia-games.github.io/seraph/games/contra/", category: "action", description: "Contra delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/contra.jpg" },
  { id: "ducktales", name: "Ducktales", url: "https://olivia-games.github.io/seraph/games/ducktales/", category: "action", description: "Fast-paced action challenge featuring Ducktales.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ducktales.jpg" },
  { id: "kidicarus", name: "Kidicarus", url: "https://olivia-games.github.io/seraph/games/kidicarus/", category: "action", description: "React quickly and survive intense action in Kidicarus.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kidicarus.jpg" },
  { id: "megaman2", name: "Megaman2", url: "https://olivia-games.github.io/seraph/games/megaman2/", category: "action", description: "Megaman2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/megaman2.jpg" },
  { id: "ninjagaiden", name: "Ninjagaiden", url: "https://olivia-games.github.io/seraph/games/ninjagaiden/", category: "action", description: "Fast-paced action challenge featuring Ninjagaiden.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ninjagaiden.jpg" },
  { id: "punchout", name: "Punchout", url: "https://olivia-games.github.io/seraph/games/punchout/", category: "action", description: "React quickly and survive intense action in Punchout.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mikestysonspunchout.jpg" },
  { id: "chronotrigger", name: "Chronotrigger", url: "https://olivia-games.github.io/seraph/games/chronotrigger/", category: "action", description: "Chronotrigger delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chronotrigger.jpg" },
  { id: "contraiii", name: "Contraiii", url: "https://olivia-games.github.io/seraph/games/contraiii/", category: "action", description: "Fast-paced action challenge featuring Contraiii.", image: "https://olivia-games.github.io/seraph/images/thumbnails/contraiii.jpg" },
  { id: "donkeykongcountry3", name: "Donkeykongcountry3", url: "https://olivia-games.github.io/seraph/games/donkeykongcountry3/", category: "action", description: "React quickly and survive intense action in Donkeykongcountry3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/donkeykongcountry3.jpg" },
  { id: "earthbound", name: "Earthbound", url: "https://olivia-games.github.io/seraph/games/earthbound/", category: "rpg", description: "An RPG adventure filled with depth: Earthbound.", image: "https://olivia-games.github.io/seraph/images/thumbnails/earthbound.jpg" },
  { id: "finalfantasyvi", name: "Finalfantasyvi", url: "https://olivia-games.github.io/seraph/games/finalfantasyvi/", category: "rpg", description: "Embark on an epic role-playing journey in Finalfantasyvi.", image: "https://olivia-games.github.io/seraph/images/thumbnails/finalfantasyiv.jpg" },
  { id: "fzero", name: "Fzero", url: "https://olivia-games.github.io/seraph/games/fzero/", category: "action", description: "React quickly and survive intense action in Fzero.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fzero.jpg" },
  { id: "supermetroid", name: "Supermetroid", url: "https://olivia-games.github.io/seraph/games/supermetroid/", category: "platformer", description: "A skill-based platforming adventure called Supermetroid.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermetroid.jpg" },
  { id: "banjotooie", name: "Banjotooie", url: "https://olivia-games.github.io/seraph/games/banjotooie/", category: "action", description: "Fast-paced action challenge featuring Banjotooie.", image: "https://olivia-games.github.io/seraph/images/thumbnails/banjotooie.jpg" },
  { id: "harvestmoon64", name: "Harvestmoon64", url: "https://olivia-games.github.io/seraph/games/harvestmoon64/", category: "action", description: "React quickly and survive intense action in Harvestmoon64.", image: "https://olivia-games.github.io/seraph/images/thumbnails/harvestmoon64.jpg" },
  { id: "jetforcegemini", name: "Jetforcegemini", url: "https://olivia-games.github.io/seraph/games/jetforcegemini/", category: "action", description: "Jetforcegemini delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/jetforcegemini.jpg" },
  { id: "mysticalninja", name: "Mysticalninja", url: "https://olivia-games.github.io/seraph/games/mysticalninja/", category: "action", description: "Fast-paced action challenge featuring Mysticalninja.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mysticalninja.jpg" },
  { id: "turokdinosaurhunter", name: "Turokdinosaurhunter", url: "https://olivia-games.github.io/seraph/games/turokdinosaurhunter/", category: "action", description: "React quickly and survive intense action in Turokdinosaurhunter.", image: "https://olivia-games.github.io/seraph/images/thumbnails/turokdinosaurhunter.jpg" },
  { id: "yoshisstory", name: "Yoshisstory", url: "https://olivia-games.github.io/seraph/games/yoshisstory/", category: "action", description: "Yoshisstory delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/yoshisstory.jpg" },
  { id: "kirbysdreamland2", name: "Kirbysdreamland2", url: "https://olivia-games.github.io/seraph/games/kirbysdreamland2/", category: "platformer", description: "Jump, run, and explore classic platforming in Kirbysdreamland2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/kirbysdreamland2.jpg" },
  { id: "linksawakeningdx", name: "Linksawakeningdx", url: "https://olivia-games.github.io/seraph/games/linksawakeningdx/", category: "action", description: "React quickly and survive intense action in Linksawakeningdx.", image: "https://olivia-games.github.io/seraph/images/thumbnails/linksawakeningdx.jpg" },
  { id: "metroidii", name: "Metroidii", url: "https://olivia-games.github.io/seraph/games/metroidii/", category: "platformer", description: "A skill-based platforming adventure called Metroidii.", image: "https://olivia-games.github.io/seraph/images/thumbnails/metroidii.jpg" },
  { id: "supermarioland2", name: "Supermarioland2", url: "https://olivia-games.github.io/seraph/games/supermarioland2/", category: "platformer", description: "Jump, run, and explore classic platforming in Supermarioland2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supermarioland2.jpg" },
  { id: "wariolandii", name: "Wariolandii", url: "https://olivia-games.github.io/seraph/games/wariolandii/", category: "action", description: "React quickly and survive intense action in Wariolandii.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wariolandii.jpg" },
  { id: "castlevaniaariaofsorrow", name: "Castlevaniaariaofsorrow", url: "https://olivia-games.github.io/seraph/games/castlevaniaariaofsorrow/", category: "action", description: "Castlevaniaariaofsorrow delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/castlevaniaariaofsorrow.jpg" },
  { id: "finalfantasytacticsadvance", name: "Finalfantasytacticsadvance", url: "https://olivia-games.github.io/seraph/games/finalfantasytacticsadvance/", category: "rpg", description: "Embark on an epic role-playing journey in Finalfantasytacticsadvance.", image: "https://olivia-games.github.io/seraph/images/thumbnails/finalfantasytacticsadventure.jpg" },
  { id: "drilldozer", name: "Drilldozer", url: "https://olivia-games.github.io/seraph/games/drilldozer/", category: "action", description: "React quickly and survive intense action in Drilldozer.", image: "https://olivia-games.github.io/seraph/images/thumbnails/drilldozer.jpg" },
  { id: "advancewarsdayofruin", name: "Advancewarsdayofruin", url: "https://olivia-games.github.io/seraph/games/advancewarsdayofruin/", category: "action", description: "Advancewarsdayofruin delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/advancewarsdaysofruin.jpg" },
  { id: "castlevaniadawnofsorrow", name: "Castlevaniadawnofsorrow", url: "https://olivia-games.github.io/seraph/games/castlevaniadawnofsorrow/", category: "action", description: "Fast-paced action challenge featuring Castlevaniadawnofsorrow.", image: "https://olivia-games.github.io/seraph/images/thumbnails/castlevaniadawnofsorrow.jpg" },
  { id: "castlevaniaorderofecclesia", name: "Castlevaniaorderofecclesia", url: "https://olivia-games.github.io/seraph/games/castlevaniaorderofecclesia/", category: "action", description: "React quickly and survive intense action in Castlevaniaorderofecclesia.", image: "https://olivia-games.github.io/seraph/images/thumbnails/castlevaniaorderofecclesia.jpg" },
  { id: "marioandluigipartnersintime", name: "Marioandluigipartnersintime", url: "https://olivia-games.github.io/seraph/games/marioandluigipartnersintime/", category: "platformer", description: "A skill-based platforming adventure called Marioandluigipartnersintime.", image: "https://olivia-games.github.io/seraph/images/thumbnails/marioandluigipartnersintime.jpg" },
  { id: "comixzone", name: "Comixzone", url: "https://olivia-games.github.io/seraph/games/comixzone/", category: "action", description: "Fast-paced action challenge featuring Comixzone.", image: "https://olivia-games.github.io/seraph/images/thumbnails/comixzone.jpg" },
  { id: "eccothedolphin", name: "Eccothedolphin", url: "https://olivia-games.github.io/seraph/games/eccothedolphin/", category: "action", description: "React quickly and survive intense action in Eccothedolphin.", image: "https://olivia-games.github.io/seraph/images/thumbnails/eccothedolphin.jpg" },
  { id: "gunstarheroes", name: "Gunstarheroes", url: "https://olivia-games.github.io/seraph/games/gunstarheroes/", category: "action", description: "Gunstarheroes delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/gunstarheroes.jpg" },
  { id: "phantasystariv", name: "Phantasystariv", url: "https://olivia-games.github.io/seraph/games/phantasystariv/", category: "action", description: "Fast-paced action challenge featuring Phantasystariv.", image: "https://olivia-games.github.io/seraph/images/thumbnails/phantasystariv.jpg" },
  { id: "rangerx", name: "Rangerx", url: "https://olivia-games.github.io/seraph/games/rangerx/", category: "action", description: "React quickly and survive intense action in Rangerx.", image: "https://olivia-games.github.io/seraph/images/thumbnails/rangerx.jpg" },
  { id: "ristar", name: "Ristar", url: "https://olivia-games.github.io/seraph/games/ristar/", category: "action", description: "Ristar delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ristar.jpg" },
  { id: "shiningforce", name: "Shiningforce", url: "https://olivia-games.github.io/seraph/games/shiningforce/", category: "action", description: "Fast-paced action challenge featuring Shiningforce.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shiningforce.jpg" },
  { id: "shinobiiii", name: "Shinobiiii", url: "https://olivia-games.github.io/seraph/games/shinobiiii/", category: "action", description: "React quickly and survive intense action in Shinobiiii.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shinobiiii.jpg" },
  { id: "sonicthehedgehog", name: "Sonicthehedgehog", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog/", category: "platformer", description: "A skill-based platforming adventure called Sonicthehedgehog.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicthehedgehog.jpg" },
  { id: "sonicthehedgehog2", name: "Sonicthehedgehog2", url: "https://olivia-games.github.io/seraph/games/sonicthehedgehog2/", category: "platformer", description: "Jump, run, and explore classic platforming in Sonicthehedgehog2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sonicthehedgehog2.jpg" },
  { id: "streetsofrage2", name: "Streetsofrage2", url: "https://olivia-games.github.io/seraph/games/streetsofrage2/", category: "action", description: "React quickly and survive intense action in Streetsofrage2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/streetsofrage2.jpg" },
  { id: "vectorman", name: "Vectorman", url: "https://olivia-games.github.io/seraph/games/vectorman/", category: "action", description: "Vectorman delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vectorman.jpg" },
  { id: "vectorman2", name: "Vectorman2", url: "https://olivia-games.github.io/seraph/games/vectorman2/", category: "action", description: "Fast-paced action challenge featuring Vectorman2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/vectorman2.jpg" },
  { id: "illusionofgaia", name: "Illusionofgaia", url: "https://olivia-games.github.io/seraph/games/illusionofgaia/", category: "action", description: "React quickly and survive intense action in Illusionofgaia.", image: "https://olivia-games.github.io/seraph/images/thumbnails/illusionofgaia.jpg" },
  { id: "pokemonyellow", name: "Pokemonyellow", url: "https://olivia-games.github.io/seraph/games/pokemonyellow/", category: "rpg", description: "An RPG adventure filled with depth: Pokemonyellow.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pokemonyellow.jpg" },
  { id: "abudathealien", name: "Abudathealien", url: "https://olivia-games.github.io/seraph/games/abudathealien/", category: "action", description: "Fast-paced action challenge featuring Abudathealien.", image: "https://olivia-games.github.io/seraph/images/thumbnails/abudathealien.jpg" },
  { id: "battlebeavers", name: "Battlebeavers", url: "https://olivia-games.github.io/seraph/games/battlebeavers/", category: "action", description: "React quickly and survive intense action in Battlebeavers.", image: "https://olivia-games.github.io/seraph/images/thumbnails/battlebeavers.jpg" },
  { id: "controlcraft2", name: "Controlcraft2", url: "https://olivia-games.github.io/seraph/games/controlcraft2/", category: "action", description: "Controlcraft2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/controlcraft2.jpg" },
  { id: "ageofwar", name: "Ageofwar", url: "https://olivia-games.github.io/seraph/games/ageofwar/", category: "action", description: "Fast-paced action challenge featuring Ageofwar.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ageofwar.jpg" },
  { id: "ageofwar2", name: "Ageofwar2", url: "https://olivia-games.github.io/seraph/games/ageofwar2/", category: "action", description: "React quickly and survive intense action in Ageofwar2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ageofwar2.jpg" },
  { id: "amorphous", name: "Amorphous", url: "https://olivia-games.github.io/seraph/games/amorphous/", category: "action", description: "Amorphous delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/amorphous.jpg" },
  { id: "bubblespinner", name: "Bubblespinner", url: "https://olivia-games.github.io/seraph/games/bubblespinner/", category: "action", description: "Fast-paced action challenge featuring Bubblespinner.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bubblespinner.jpg" },
  { id: "crushthecastle", name: "Crushthecastle", url: "https://olivia-games.github.io/seraph/games/crushthecastle/", category: "action", description: "React quickly and survive intense action in Crushthecastle.", image: "https://olivia-games.github.io/seraph/images/thumbnails/crushthecastle.jpg" },
  { id: "crushthecastle2", name: "Crushthecastle2", url: "https://olivia-games.github.io/seraph/games/crushthecastle2/", category: "action", description: "Crushthecastle2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/crushthecastle2.jpg" },
  { id: "epicbattlefantasy", name: "Epicbattlefantasy", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy/", category: "action", description: "Fast-paced action challenge featuring Epicbattlefantasy.", image: "https://olivia-games.github.io/seraph/images/thumbnails/epicbattlefantasy.jpg" },
  { id: "epicbattlefantasy2", name: "Epicbattlefantasy2", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy2/", category: "action", description: "React quickly and survive intense action in Epicbattlefantasy2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/epicbattlefantasy2.jpg" },
  { id: "epicbattlefantasy3", name: "Epicbattlefantasy3", url: "https://olivia-games.github.io/seraph/games/epicbattlefantasy3/", category: "action", description: "Epicbattlefantasy3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/epicbattlefantasy3.jpg" },
  { id: "fancypantsadventure3", name: "Fancypantsadventure3", url: "https://olivia-games.github.io/seraph/games/fancypantsadventure3/", category: "action", description: "Fast-paced action challenge featuring Fancypantsadventure3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/fancypantsadventure3.jpg" },
  { id: "floodrunner2", name: "Floodrunner2", url: "https://olivia-games.github.io/seraph/games/floodrunner2/", category: "action", description: "React quickly and survive intense action in Floodrunner2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/floodrunner2.jpg" },
  { id: "floodrunner3", name: "Floodrunner3", url: "https://olivia-games.github.io/seraph/games/floodrunner3/", category: "action", description: "Floodrunner3 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/floodrunner3.jpg" },
  { id: "dragonboy2", name: "Dragonboy2", url: "https://olivia-games.github.io/seraph/games/dragonboy2/", category: "action", description: "Fast-paced action challenge featuring Dragonboy2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/dragonboy2.jpg" },
  { id: "neonrider", name: "Neonrider", url: "https://olivia-games.github.io/seraph/games/neonrider/", category: "action", description: "React quickly and survive intense action in Neonrider.", image: "https://olivia-games.github.io/seraph/images/thumbnails/neonrider.jpg" },
  { id: "pandemic2", name: "Pandemic2", url: "https://olivia-games.github.io/seraph/games/pandemic2/", category: "action", description: "Pandemic2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pandemic2.jpg" },
  { id: "stickwar", name: "Stickwar", url: "https://olivia-games.github.io/seraph/games/stickwar/", category: "action", description: "Fast-paced action challenge featuring Stickwar.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stickwar.jpg" },
  { id: "stickwar2", name: "Stickwar2", url: "https://olivia-games.github.io/seraph/games/stickwar2/", category: "action", description: "React quickly and survive intense action in Stickwar2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stickwar2.jpg" },
  { id: "ultimateflashsonic", name: "Ultimateflashsonic", url: "https://olivia-games.github.io/seraph/games/ultimateflashsonic/", category: "platformer", description: "A skill-based platforming adventure called Ultimateflashsonic.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ultimateflashsonic.jpg" },
  { id: "zombocalypse", name: "Zombocalypse", url: "https://olivia-games.github.io/seraph/games/zombocalypse/", category: "action", description: "Fast-paced action challenge featuring Zombocalypse.", image: "https://olivia-games.github.io/seraph/images/thumbnails/zombocalpyse.jpg" },
  { id: "zombotron", name: "Zombotron", url: "https://olivia-games.github.io/seraph/games/zombotron/", category: "action", description: "React quickly and survive intense action in Zombotron.", image: "https://olivia-games.github.io/seraph/images/thumbnails/zombotron.jpg" },
  { id: "zombotron2", name: "Zombotron2", url: "https://olivia-games.github.io/seraph/games/zombotron2/", category: "action", description: "Zombotron2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/zombotron2.jpg" },
  { id: "backrooms2d", name: "Backrooms2d", url: "https://olivia-games.github.io/seraph/games/backrooms2d/", category: "horror", description: "A tense and scary experience awaits in Backrooms2d.", image: "https://olivia-games.github.io/seraph/images/thumbnails/backrooms2d.jpg" },
  { id: "basketrandom", name: "Basketrandom", url: "https://olivia-games.github.io/seraph/games/basketrandom/", category: "action", description: "React quickly and survive intense action in Basketrandom.", image: "https://olivia-games.github.io/seraph/images/thumbnails/basketrandom.jpg" },
  { id: "csgoclicker", name: "Csgoclicker", url: "https://olivia-games.github.io/seraph/games/csgoclicker/", category: "strategy", description: "A strategic gameplay experience built around Csgoclicker.", image: "https://olivia-games.github.io/seraph/images/thumbnails/csgoclicker.jpg" },
  { id: "doom", name: "Doom", url: "https://olivia-games.github.io/seraph/games/doom/", category: "action", description: "Fast-paced action challenge featuring Doom.", image: "https://olivia-games.github.io/seraph/images/thumbnails/doom.jpg" },
  { id: "funnyshooter2", name: "Funnyshooter2", url: "https://olivia-games.github.io/seraph/games/funnyshooter2/", category: "action", description: "React quickly and survive intense action in Funnyshooter2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/funnyshooter2.jpg" },
  { id: "gunfest", name: "Gunfest", url: "https://olivia-games.github.io/seraph/games/gunfest/", category: "action", description: "Gunfest delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/gunfest.jpg" },
  { id: "infinitecraft", name: "Infinitecraft", url: "https://olivia-games.github.io/seraph/games/infinitecraft/", category: "action", description: "Fast-paced action challenge featuring Infinitecraft.", image: "https://olivia-games.github.io/seraph/images/thumbnails/infinitecraft.jpg" },
  { id: "lowsadventures2", name: "Lowsadventures2", url: "https://olivia-games.github.io/seraph/games/lowsadventures2/", category: "action", description: "React quickly and survive intense action in Lowsadventures2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/lowsadventures2.jpg" },
  { id: "pakohighway", name: "Pakohighway", url: "https://olivia-games.github.io/seraph/games/pakohighway/", category: "action", description: "Pakohighway delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pakohighway.jpg" },
  { id: "recoil", name: "Recoil", url: "https://olivia-games.github.io/seraph/games/recoil/", category: "action", description: "Fast-paced action challenge featuring Recoil.", image: "https://olivia-games.github.io/seraph/images/thumbnails/recoil.jpg" },
  { id: "run3plus", name: "Run3plus", url: "https://olivia-games.github.io/seraph/games/run3plus/", category: "action", description: "React quickly and survive intense action in Run3plus.", image: "https://olivia-games.github.io/seraph/images/thumbnails/run3plus.jpg" },
  { id: "slopecity", name: "Slopecity", url: "https://olivia-games.github.io/seraph/games/slopecity/", category: "action", description: "Slopecity delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/slopecity.jpg" },
  { id: "stateio", name: "Stateio", url: "https://olivia-games.github.io/seraph/games/stateio/", category: "action", description: "Fast-paced action challenge featuring Stateio.", image: "https://olivia-games.github.io/seraph/images/thumbnails/stateio.jpg" },
  { id: "sudoku", name: "Sudoku", url: "https://olivia-games.github.io/seraph/games/sudoku/", category: "puzzle", description: "Sudoku challenges logic and problem-solving skills.", image: "https://olivia-games.github.io/seraph/images/thumbnails/sudoku.jpg" },
  { id: "superherodrop", name: "Superherodrop", url: "https://olivia-games.github.io/seraph/games/superherodrop/", category: "action", description: "Superherodrop delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/superherodrop.jpg" },
  { id: "balloonrun", name: "Balloonrun", url: "https://olivia-games.github.io/seraph/games/balloonrun/", category: "action", description: "Fast-paced action challenge featuring Balloonrun.", image: "https://olivia-games.github.io/seraph/images/thumbnails/balloonrun.jpg" },
  { id: "crazytunnel3d", name: "Crazytunnel3d", url: "https://olivia-games.github.io/seraph/games/crazytunnel3d/", category: "action", description: "React quickly and survive intense action in Crazytunnel3d.", image: "https://olivia-games.github.io/seraph/images/thumbnails/crazytunnel3d.jpg" },
  { id: "eagler1.8", name: "Eagler1.8", url: "https://olivia-games.github.io/seraph/games/eagler1.8/", category: "action", description: "Eagler1.8 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mc1.8.jpg" },
  { id: "geometrydashsky", name: "Geometrydashsky", url: "https://olivia-games.github.io/seraph/games/geometrydashsky/", category: "action", description: "Fast-paced action challenge featuring Geometrydashsky.", image: "https://olivia-games.github.io/seraph/images/thumbnails/geometrydashsky.jpg" },
  { id: "wubzzysamazingadventure", name: "Wubzzysamazingadventure", url: "https://olivia-games.github.io/seraph/games/wubzzysamazingadventure/", category: "action", description: "React quickly and survive intense action in Wubzzysamazingadventure.", image: "https://olivia-games.github.io/seraph/images/thumbnails/wubzzysamazingadventure.jpg" },
  { id: "golddiggerfrvr", name: "Golddiggerfrvr", url: "https://olivia-games.github.io/seraph/games/golddiggerfrvr/", category: "action", description: "Golddiggerfrvr delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/golddiggerfrvr.jpg" },
  { id: "hexgl", name: "Hexgl", url: "https://olivia-games.github.io/seraph/games/hexgl/", category: "action", description: "Fast-paced action challenge featuring Hexgl.", image: "https://olivia-games.github.io/seraph/images/thumbnails/hexgl.jpg" },
  { id: "houseofhazards", name: "Houseofhazards", url: "https://olivia-games.github.io/seraph/games/houseofhazards/", category: "action", description: "React quickly and survive intense action in Houseofhazards.", image: "https://olivia-games.github.io/seraph/images/thumbnails/houseofhazards.jpg" },
  { id: "pickcrafter", name: "Pickcrafter", url: "https://olivia-games.github.io/seraph/games/pickcrafter/", category: "action", description: "Pickcrafter delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/pickcrafter.jpg" },
  { id: "precisionclient", name: "Precisionclient", url: "https://olivia-games.github.io/seraph/games/precisionclient/", category: "action", description: "Fast-paced action challenge featuring Precisionclient.", image: "https://olivia-games.github.io/seraph/images/thumbnails/precisionclient.jpg" },
  { id: "subwayrunner", name: "Subwayrunner", url: "https://olivia-games.github.io/seraph/games/subwayrunner/", category: "action", description: "React quickly and survive intense action in Subwayrunner.", image: "https://olivia-games.github.io/seraph/images/thumbnails/subwayrunner.jpg" },
  { id: "xx142-b2.exe", name: "Xx142 B2.Exe", url: "https://olivia-games.github.io/seraph/games/xx142-b2.exe/", category: "action", description: "Xx142 B2.Exe delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/xx142b2.exe.jpg" },
  { id: "canopy", name: "Canopy", url: "https://olivia-games.github.io/seraph/games/canopy/", category: "action", description: "Fast-paced action challenge featuring Canopy.", image: "https://olivia-games.github.io/seraph/images/thumbnails/canopy.jpg" },
  { id: "cavechaos", name: "Cavechaos", url: "https://olivia-games.github.io/seraph/games/cavechaos/", category: "action", description: "React quickly and survive intense action in Cavechaos.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cavechaos.jpg" },
  { id: "changetype", name: "Changetype", url: "https://olivia-games.github.io/seraph/games/changetype/", category: "action", description: "Changetype delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/changetype.jpg" },
  { id: "cheesedreams", name: "Cheesedreams", url: "https://olivia-games.github.io/seraph/games/cheesedreams/", category: "action", description: "Fast-paced action challenge featuring Cheesedreams.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cheesedreams.jpg" },
  { id: "chisel", name: "Chisel", url: "https://olivia-games.github.io/seraph/games/chisel/", category: "action", description: "React quickly and survive intense action in Chisel.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chisel.jpg" },
  { id: "chisel2", name: "Chisel2", url: "https://olivia-games.github.io/seraph/games/chisel2/", category: "action", description: "Chisel2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/chisel2.jpg" },
  { id: "ditto", name: "Ditto", url: "https://olivia-games.github.io/seraph/games/ditto/", category: "action", description: "Fast-paced action challenge featuring Ditto.", image: "https://olivia-games.github.io/seraph/images/thumbnails/ditto.jpg" },
  { id: "feedme", name: "Feedme", url: "https://olivia-games.github.io/seraph/games/feedme/", category: "action", description: "React quickly and survive intense action in Feedme.", image: "https://olivia-games.github.io/seraph/images/thumbnails/feedme.jpg" },
  { id: "finalninja", name: "Finalninja", url: "https://olivia-games.github.io/seraph/games/finalninja/", category: "action", description: "Finalninja delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/finalninja.jpg" },
  { id: "frostbite", name: "Frostbite", url: "https://olivia-games.github.io/seraph/games/frostbite/", category: "action", description: "Fast-paced action challenge featuring Frostbite.", image: "https://olivia-games.github.io/seraph/images/thumbnails/frostbite.jpg" },
  { id: "frostbite2", name: "Frostbite2", url: "https://olivia-games.github.io/seraph/games/frostbite2/", category: "action", description: "React quickly and survive intense action in Frostbite2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/frostbite2.jpg" },
  { id: "icebreaker", name: "Icebreaker", url: "https://olivia-games.github.io/seraph/games/icebreaker/", category: "action", description: "Icebreaker delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/icebreaker.jpg" },
  { id: "mutiny", name: "Mutiny", url: "https://olivia-games.github.io/seraph/games/mutiny/", category: "action", description: "Fast-paced action challenge featuring Mutiny.", image: "https://olivia-games.github.io/seraph/images/thumbnails/mutiny.jpg" },
  { id: "nitromemustdie", name: "Nitromemustdie", url: "https://olivia-games.github.io/seraph/games/nitromemustdie/", category: "action", description: "React quickly and survive intense action in Nitromemustdie.", image: "https://olivia-games.github.io/seraph/images/thumbnails/nitromemustdie.jpg" },
  { id: "oodlegobs", name: "Oodlegobs", url: "https://olivia-games.github.io/seraph/games/oodlegobs/", category: "action", description: "Oodlegobs delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/oodlegobs.jpg" },
  { id: "supertreadmill", name: "Supertreadmill", url: "https://olivia-games.github.io/seraph/games/supertreadmill/", category: "action", description: "Fast-paced action challenge featuring Supertreadmill.", image: "https://olivia-games.github.io/seraph/images/thumbnails/supertreadmill.jpg" },
  { id: "swindler", name: "Swindler", url: "https://olivia-games.github.io/seraph/games/swindler/", category: "action", description: "React quickly and survive intense action in Swindler.", image: "https://olivia-games.github.io/seraph/images/thumbnails/swindler.jpg" },
  { id: "testsubjectarena", name: "Testsubjectarena", url: "https://olivia-games.github.io/seraph/games/testsubjectarena/", category: "action", description: "Testsubjectarena delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/testsubjectarena.jpg" },
  { id: "testsubjectcomplete", name: "Testsubjectcomplete", url: "https://olivia-games.github.io/seraph/games/testsubjectcomplete/", category: "action", description: "Fast-paced action challenge featuring Testsubjectcomplete.", image: "https://olivia-games.github.io/seraph/images/thumbnails/testsubjectcomplete.jpg" },
  { id: "twinshot", name: "Twinshot", url: "https://olivia-games.github.io/seraph/games/twinshot/", category: "action", description: "React quickly and survive intense action in Twinshot.", image: "https://olivia-games.github.io/seraph/images/thumbnails/twinshot.jpg" },
  { id: "twinshot2", name: "Twinshot2", url: "https://olivia-games.github.io/seraph/games/twinshot2/", category: "action", description: "Twinshot2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/twinshot2.jpg" },
  { id: "3line", name: "3line", url: "https://olivia-games.github.io/seraph/games/3line/", category: "action", description: "Fast-paced action challenge featuring 3line.", image: "https://olivia-games.github.io/seraph/images/thumbnails/threeline.jpg" },
  { id: "bikechamp", name: "Bikechamp", url: "https://olivia-games.github.io/seraph/games/bikechamp/", category: "action", description: "React quickly and survive intense action in Bikechamp.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bikechamp.jpg" },
  { id: "bikechamp2", name: "Bikechamp2", url: "https://olivia-games.github.io/seraph/games/bikechamp2/", category: "action", description: "Bikechamp2 delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/bikechamp2.jpg" },
  { id: "corporationinc", name: "Corporationinc", url: "https://olivia-games.github.io/seraph/games/corporationinc/", category: "action", description: "Fast-paced action challenge featuring Corporationinc.", image: "https://olivia-games.github.io/seraph/images/thumbnails/corporationinc.jpg" },
  { id: "shopempirefable", name: "Shopempirefable", url: "https://olivia-games.github.io/seraph/games/shopempirefable/", category: "action", description: "React quickly and survive intense action in Shopempirefable.", image: "https://olivia-games.github.io/seraph/images/thumbnails/shopempirefable.jpg" },
  { id: "cactusmccoy", name: "Cactusmccoy", url: "https://olivia-games.github.io/seraph/games/cactusmccoy/", category: "action", description: "Cactusmccoy delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cactusmccoy.jpg" },
  { id: "cactusmccoy2", name: "Cactusmccoy2", url: "https://olivia-games.github.io/seraph/games/cactusmccoy2/", category: "action", description: "Fast-paced action challenge featuring Cactusmccoy2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/cactusmccoy2.jpg" },
  { id: "papalouie", name: "Papalouie", url: "https://olivia-games.github.io/seraph/games/papalouie/", category: "restaurant", description: "Papalouie lets you run your own virtual restaurant.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papalouie.jpg" },
  { id: "papalouie2", name: "Papalouie2", url: "https://olivia-games.github.io/seraph/games/papalouie2/", category: "restaurant", description: "Prepare meals and satisfy customers in Papalouie2.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papalouie2.jpg" },
  { id: "papalouie3", name: "Papalouie3", url: "https://olivia-games.github.io/seraph/games/papalouie3/", category: "restaurant", description: "Cook, serve, and manage customers in Papalouie3.", image: "https://olivia-games.github.io/seraph/images/thumbnails/papalouie3.jpg" },
  { id: "steakandjake", name: "Steakandjake", url: "https://olivia-games.github.io/seraph/games/steakandjake/", category: "action", description: "React quickly and survive intense action in Steakandjake.", image: "https://olivia-games.github.io/seraph/images/thumbnails/steakandjake.jpg" },
  { id: "steakandjakemidnightmarch", name: "Steakandjakemidnightmarch", url: "https://olivia-games.github.io/seraph/games/steakandjakemidnightmarch/", category: "action", description: "Steakandjakemidnightmarch delivers nonstop arcade-style action.", image: "https://olivia-games.github.io/seraph/images/thumbnails/steakandjakemidnightmarch.jpg" },
];

// State Management
const state = {
    games: [...gamesData],
    currentCategory: 'all',
    currentView: 'grid',
    searchQuery: '',
    favorites: new Set(JSON.parse(localStorage.getItem('og-favorites-v2') || '[]')),
    currentRandomGame: null,
    currentModalGame: null
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
    totalGamesCounter: document.getElementById('total-games'),
    totalCategoriesCounter: document.getElementById('total-categories'),
    modal: document.getElementById('game-modal'),
    modalClose: document.getElementById('modal-close'),
    modalImg: document.getElementById('modal-img'),
    modalCategory: document.getElementById('modal-category'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalPlay: document.getElementById('modal-play'),
    modalFav: document.getElementById('modal-fav'),
    modalFavIcon: document.getElementById('modal-fav-icon'),
    modalFavLabel: document.getElementById('modal-fav-label')
};

// Simple HTML-escape helper to keep dynamically inserted text/attributes safe
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// A tiny inline placeholder used whenever a game has no thumbnail
const FALLBACK_THUMB =
    'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225">
            <rect width="100%" height="100%" fill="#1a1a24"/>
            <text x="50%" y="50%" font-size="48" text-anchor="middle" dominant-baseline="middle">🎮</text>
        </svg>`
    );

// Initialize App
function init() {
    setupEventListeners();
    applySearchFromURL();
    updateRandomGame();
    updateTotalGames();
    filterAndRender();
}

// Read ?search= from the URL on load so shared/search-engine links
// (e.g. https://seraph-games.github.io/?search=slope) pre-fill the search box
function applySearchFromURL() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('search');
    if (q) {
        elements.searchInput.value = q;
        state.searchQuery = q.toLowerCase().trim();
    }
}

// Keep the URL's ?search= param in sync with the current query, without
// adding a history entry per keystroke
function updateSearchURL(query) {
    const url = new URL(window.location.href);
    if (query) {
        url.searchParams.set('search', query);
    } else {
        url.searchParams.delete('search');
    }
    window.history.replaceState({}, '', url);
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

    // Submit search (Enter key) keeps the URL in sync immediately
    elements.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            clearTimeout(searchTimeout);
            handleSearch(e);
            elements.searchSuggestions.classList.remove('active');
        }
    });

    // Filters
    elements.filtersContainer.addEventListener('click', handleFilter);

    // Panic mode
    elements.panicBtn.addEventListener('click', () => togglePanicMode(false));
    elements.exitPanicBtn.addEventListener('click', () => togglePanicMode(true));

    document.addEventListener('keydown', (e) => {
        if (e.key === '`') {
            e.preventDefault();
            togglePanicMode();
        } else if (e.key === 'Escape') {
            if (elements.modal && elements.modal.classList.contains('active')) {
                e.preventDefault();
                closeModal();
            } else if (elements.mobileNav && elements.mobileNav.classList.contains('active')) {
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
            window.open(state.currentRandomGame.url, '_blank', 'noopener');
        }
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });

    // Game info modal
    if (elements.modalClose) {
        elements.modalClose.addEventListener('click', closeModal);
    }
    if (elements.modal) {
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });
    }
    if (elements.modalFav) {
        elements.modalFav.addEventListener('click', () => {
            if (!state.currentModalGame) return;
            toggleFavorite(state.currentModalGame.id);
            updateModalFavoriteUI();
        });
    }

    // Mobile menu: toggle, manage ARIA, focus and scroll locking
    function closeMobileMenu() {
        elements.mobileNav.classList.remove('active');
        elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        elements.mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
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
        if (elements.mobileCloseBtn) elements.mobileCloseBtn.focus();
    });

    elements.mobileCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMobileMenu();
    });

    elements.mobileNav.addEventListener('click', (e) => {
        if (e.target === elements.mobileNav) {
            closeMobileMenu();
        }
    });

    elements.mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
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

            window.scrollTo({ top: 0, behavior: 'smooth' });

            document.querySelectorAll('.filter-chip').forEach(chip => {
                chip.classList.remove('active');
                if (chip.dataset.category === category) {
                    chip.classList.add('active');
                }
            });

            state.currentCategory = category;
            filterAndRender();

            setTimeout(() => {
                elements.gamesSection.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        });
    });

    // Header scroll effect (single listener)
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

    // Event delegation for dynamically rendered game cards
    document.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.favorite-btn');
        if (favBtn && favBtn.dataset.id) {
            toggleFavorite(favBtn.dataset.id);
            return;
        }
        const infoBtn = e.target.closest('.info-btn');
        if (infoBtn && infoBtn.dataset.id) {
            showInfo(infoBtn.dataset.id);
            return;
        }
        const suggestion = e.target.closest('.suggestion-item');
        if (suggestion && suggestion.dataset.id) {
            selectGame(suggestion.dataset.id);
        }
    });
}

// Handle Search
function handleSearch(e) {
    state.searchQuery = e.target.value.toLowerCase().trim();
    updateSearchURL(e.target.value.trim());
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
        elements.searchSuggestions.innerHTML = `
            <div class="suggestion-item suggestion-empty">
                <div class="suggestion-name">No matching games</div>
            </div>
        `;
        elements.searchSuggestions.classList.add('active');
        return;
    }

    elements.searchSuggestions.innerHTML = suggestions.map(game => `
        <div class="suggestion-item" data-id="${escapeHtml(game.id)}">
            <img class="suggestion-thumb" src="${escapeHtml(game.image || FALLBACK_THUMB)}" alt="" loading="lazy" onerror="this.src='${FALLBACK_THUMB}'">
            <div>
                <div class="suggestion-name">${highlightMatch(escapeHtml(game.name), query)}</div>
                <div class="suggestion-category">${escapeHtml(game.category)}</div>
            </div>
        </div>
    `).join('');

    elements.searchSuggestions.classList.add('active');
}

// Highlight Match
function highlightMatch(text, query) {
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<span style="color: var(--primary-light); font-weight: 700;">$1</span>');
}

// Select Game from Suggestions
function selectGame(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (game) {
        window.open(game.url, '_blank', 'noopener');
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
        renderFavorites();
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
    const isFavorite = state.favorites.has(game.id);
    const thumb = game.image || FALLBACK_THUMB;
    const safeId = escapeHtml(game.id);
    const safeName = escapeHtml(game.name);
    return `
        <article class="game-card" style="animation-delay: ${Math.min(index, 20) * 0.05}s;">
            <div class="game-thumb">
                <img src="${escapeHtml(thumb)}" alt="${safeName} thumbnail" loading="lazy" width="400" height="225" onerror="this.onerror=null;this.src='${FALLBACK_THUMB}'">
            </div>
            <div class="game-body">
                <div class="game-header">
                    <span class="game-category">${escapeHtml(game.category)}</span>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}"
                            data-id="${safeId}"
                            aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}"
                            aria-pressed="${isFavorite}">
                        ${isFavorite ? '⭐' : '☆'}
                    </button>
                </div>
                <div class="game-content">
                    <h3 class="game-title">${safeName}</h3>
                    <p class="game-description">${escapeHtml(game.description)}</p>
                </div>
                <div class="game-footer">
                    <a href="${escapeHtml(game.url)}" target="_blank" rel="noopener" class="play-btn">
                        <span>⚡</span>
                        <span>Play Now</span>
                    </a>
                    <button class="info-btn" data-id="${safeId}" aria-label="Game info">
                        ℹ️
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Render Favorites
function renderFavorites() {
    const favoriteGames = gamesData.filter(game => state.favorites.has(game.id));

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
function toggleFavorite(gameId) {
    if (state.favorites.has(gameId)) {
        state.favorites.delete(gameId);
    } else {
        state.favorites.add(gameId);
    }
    localStorage.setItem('og-favorites-v2', JSON.stringify([...state.favorites]));
    renderGames();
}

// Show Game Info (modal)
function showInfo(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;
    openModal(game);
}

// Open the game-info modal
function openModal(game) {
    state.currentModalGame = game;

    elements.modalImg.src = game.image || FALLBACK_THUMB;
    elements.modalImg.alt = `${game.name} thumbnail`;
    elements.modalImg.onerror = function () { this.onerror = null; this.src = FALLBACK_THUMB; };
    elements.modalCategory.textContent = game.category;
    elements.modalTitle.textContent = game.name;
    elements.modalDescription.textContent = game.description;
    elements.modalPlay.href = game.url;

    updateModalFavoriteUI();

    elements.modal.classList.add('active');
    elements.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    elements.modalClose.focus();
}

// Close the game-info modal
function closeModal() {
    elements.modal.classList.remove('active');
    elements.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.currentModalGame = null;
}

// Reflect current favorite state on the modal's favorite button
function updateModalFavoriteUI() {
    if (!state.currentModalGame) return;
    const isFav = state.favorites.has(state.currentModalGame.id);
    elements.modalFav.classList.toggle('active', isFav);
    elements.modalFavIcon.textContent = isFav ? '⭐' : '☆';
    elements.modalFavLabel.textContent = isFav ? 'In Favorites' : 'Add to Favorites';
}

// Play Random Game
function playRandomGame() {
    const randomGame = gamesData[Math.floor(Math.random() * gamesData.length)];
    window.open(randomGame.url, '_blank', 'noopener');
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

    [elements.gamesContainer, elements.favoritesContainer].forEach(container => {
        if (!container) return;
        if (state.currentView === 'list') {
            container.classList.add('list-view');
        } else {
            container.classList.remove('list-view');
        }
    });
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
    document.querySelectorAll(`.nav-link[href="${target}"]`).forEach(l =>
        l.classList.add('active'));

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

// Update Total Games / Categories Counter
function updateTotalGames() {
    elements.totalGamesCounter.textContent = gamesData.length;
    if (elements.totalCategoriesCounter) {
        const categories = new Set(gamesData.map(g => g.category));
        elements.totalCategoriesCounter.textContent = categories.size;
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('✅ Service Worker registered'))
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

// Footer year
const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
