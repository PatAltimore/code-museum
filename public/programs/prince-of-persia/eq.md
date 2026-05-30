---
title: "EQ.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/EQ.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/EQ.S"
year: 1989
author: "Jordan Mechner"
slug: "eq"
order: 18
description: "Equates and jump tables for Prince of Persia's Apple II assembly code, defining memory layout and function dispatch."

summary:
  - point: "Memory addresses for bank-switched Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Jump tables for modular function dispatch"
    link: "https://en.wikipedia.org/wiki/Jump_table"
    link_label: "Jump Table"
  - point: "Blueprints for screen layout and animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "memory-layout-and-equates"
    line_start: 3
    line_end: 17
    title: "Why Memory Mapping Was a Puzzle in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "This section defines key memory addresses for the Apple II's bank-switched memory model, including main memory, auxiliary memory, and language card banks. The addresses correspond to specific regions used for graphics buffers, game logic, and auxiliary functions. In the late 1980s, fitting a complex game like Prince of Persia into the Apple II's 128KB memory required clever use of bank-switching, a technique that allowed programmers to access more memory by switching between different banks. Jordan Mechner meticulously mapped out these memory regions to optimize performance while adhering to the hardware constraints. This approach was critical for enabling the game's smooth animations and cinematic feel. The memory layout influenced later Apple II games and demonstrated how to push the limits of the platform."
  - id: "jump-tables-for-function-dispatch"
    line_start: 41
    line_end: 365
    title: "The Jump Table: Modular Code Before It Was Cool"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: ""
    image_caption: ""
    content: "This section defines jump tables, a technique for modular function dispatch. Each entry in the table points to a specific subroutine, such as '_loadlevel' or '_savegame'. Jump tables were a common solution for organizing code in assembly, where direct function calls were less flexible. Mechner's use of jump tables allowed Prince of Persia to efficiently manage its diverse gameplay routines, from loading levels to handling animations. The modularity provided by jump tables made the code easier to maintain and extend, a crucial factor for a solo developer working under tight constraints. This technique became a staple in assembly programming and influenced later game engines, where modularity and reusability were key."
  - id: "blueprint-data-structures"
    line_start: 28
    line_end: 39
    title: "Blueprints: The DNA of Prince of Persia's Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The blueprint section defines data structures for level design and character positioning, including 'KidStartScrn' and 'GdStartBlock'. These constants and tables describe the initial state of the game world, such as where the protagonist starts and how the environment is laid out. Mechner's approach to level design was influenced by his cinematic vision for the game, which relied on precise spatial relationships and smooth transitions. The blueprint data structures were integral to creating the game's iconic fluid animations and challenging gameplay. This level of detail set a new standard for platformers and inspired later games to adopt similar structured approaches to level design."
  - id: "image-lists-for-animation"
    line_start: 26
    line_end: 27
    title: "How Image Lists Made Animation Look Alive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This section defines image lists for background, foreground, and object layers, including coordinates, dimensions, and operations. These lists were used to manage the game's graphical assets and ensure smooth transitions between frames. Mechner's use of rotoscoping, where he traced filmed sequences of his brother performing moves, required a sophisticated system to handle animation frames efficiently. The image lists allowed the Apple II to render complex animations within its limited graphical capabilities. This technique influenced the development of animation systems in later games, particularly those that sought to replicate cinematic realism."
  - id: "zero-page-optimization"
    line_start: 367
    line_end: 390
    title: "Zero Page: The Fast Lane of Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zero_page"
    image_url: ""
    image_caption: ""
    content: "The zero page section defines variables stored in the Apple II's zero page memory, such as 'PAGE' and 'XCO'. Zero page memory was the fastest to access on the 6502 processor, making it ideal for frequently used variables. Mechner leveraged this speed to optimize performance-critical parts of the game, such as rendering and collision detection. This use of zero page memory highlights the ingenuity required to maximize the Apple II's limited resources. The technique was widely adopted by other developers and remains a fascinating example of low-level optimization."
  - id: "miscellaneous-constants"
    line_start: 471
    line_end: 486
    title: "Constants That Defined the Game's World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Constant_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "This section defines constants such as 'ScrnWidth' and 'ScrnHeight', which describe the dimensions of the game screen. These values were essential for coordinating graphics rendering and gameplay mechanics. Mechner's careful definition of constants ensured consistency across the game's codebase, a critical factor in maintaining stability and predictability. The use of constants for screen dimensions and masks influenced best practices in game development, where such definitions became standard for managing game states and rendering systems."

---

```asm
 tr on
 lst off
* eq
*-------------------------------
*
*  Equates
*
*-------------------------------
*  Main l.c.

rw18 = $d000
peelbuf1 = $d000
peelbuf2 = $d800
hrtables = $e000
unpack = $ea00 ;game only
hires = $ee00
master = $f880

*  Auxmem

grafix = $400
tables = $e00
frameadv = $1290
redbufs = $5e00
menudata = $960f ;ed only
imlists = $ac00
endimspace = $b600
blueprnt = $b700

*  Aux l.c.

bluecopy = $d000 ;bank 1

*-------------------------------
*
*  Jump tables
*
*-------------------------------
 dum master

_firstboot ds 3
_loadlevel ds 3
_reload ds 3
_loadstage2 ds 3
 ds 3

_attractmode ds 3
_cutprincess ds 3
_savegame ds 3
_loadgame ds 3
_dostartgame ds 3

_epilog ds 3
_loadaltset ds 3
 ds 3 ;_screendump

 dum master ;ed

 ds 15

_edreboot ds 3
_gobuild ds 3
_gogame ds 3
_writedir ds 3
_readdir ds 3

_savelevel ds 3
_savelevelg ds 3
_screendump ds 3

 dum hrtables

YLO ds $c0
YHI ds $c0

 dum hires

_boot3 ds 3
_cls ds 3
_lay ds 3
_fastlay ds 3
_layrsave ds 3

_lrcls ds 3
_fastmask ds 3
_fastblack ds 3
_peel ds 3
_getwidth ds 3

_copy2000 ds 3
_copy2000aux ds 3
_setfastaux ds 3
_setfastmain ds 3
_copy2000ma ds 3

_copy2000am ds 3


 dum unpack

SngExpand ds 3
DblExpand ds 3
DeltaExpPop ds 3
_inverty ds 3
DeltaExpWipe ds 3

purple ds 3
prompt ds 3
blackout ds 3
clr ds 3
text ds 3

setdhires ds 3
fadein ds 3
loadsuper ds 3
fadeout ds 3

 dum grafix

gr ds 3
drawall ds 3
controller ds 3
 ds 3
saveblue ds 3

reloadblue ds 3
movemem ds 3
buttons ds 3
gtone ds 3
setcenter ds 3

dimchar ds 3
cvtx ds 3
zeropeel ds 3
zeropeels ds 3
pread ds 3

addpeel ds 3
copyscrn ds 3
sngpeel ds 3
rnd ds 3
cls ds 3

lay ds 3
fastlay ds 3
layrsave ds 3
lrcls ds 3
fastmask ds 3

fastblack ds 3
peel ds 3
getwidth ds 3
copy2000 ds 3
copy2000ma ds 3

setfastaux ds 3
setfastmain ds 3
loadlevel ds 3
attractmode ds 3
xminit ds 3

xmplay ds 3
cutprincess ds 3
xtitle ds 3
copy2000am ds 3
reload ds 3

loadstage2 ds 3
 ds 3
getselect ds 3
getdesel ds 3
edreboot ds 3 ;ed

gobuild ds 3 ;ed
gogame ds 3 ;ed
writedir ds 3 ;ed
readdir ds 3 ;ed
savelevel ds 3 ;ed

savelevelg ds 3 ;ed
addback ds 3
addfore ds 3
addmid ds 3
addmidez ds 3

addwipe ds 3
addmsg ds 3
savegame ds 3
loadgame ds 3
zerolsts ds 3

screendump ds 3
minit ds 3
mplay ds 3
savebinfo ds 3
reloadbinfo ds 3

inverty ds 3
normspeed ds 3
addmidezo ds 3
calcblue ds 3
zerored ds 3

xplaycut ds 3
checkIIGS ds 3
fastspeed ds 3
musickeys ds 3
dostartgame ds 3

epilog ds 3
loadaltset ds 3
xmovemusic ds 3
whoop ds 3
vblank ds 3

vbli ds 3

 dum redbufs

 ds 60 ;unused
halfbuf ds 30
redbuf ds 30
fredbuf ds 30
floorbuf ds 30
wipebuf ds 30
movebuf ds 30
objbuf ds 30
whitebuf ds 30
topbuf ds 10

 dum menudata ;ed only

menutype ds 30
menuspec ds 30
menubspec ds 30

 dum frameadv

sure ds 3
fast ds 3
getinitobj ds 3

 dum tables

ByteTable ds $100
OffsetTable ds $100
BlockTable ds $100
PixelTable ds $100
Mult10 ds $10
Mult7 ds $10
Mult30 ds $40
BlockEdge ds 20
BlockTop ds 5
BlockBot ds 5
FloorY ds 5
BlockAy ds 5

 dum blueprnt

BLUETYPE ds 24*30
BLUESPEC ds 24*30
LINKLOC ds 256
LINKMAP ds 256
MAP ds 24*4
INFO ds 256

*-------------------------------
*
*  Blueprint info
*
*-------------------------------
 dum INFO

 ds 64
KidStartScrn ds 1
KidStartBlock ds 1
KidStartFace ds 1
 ds 1
SwStartScrn ds 1
SwStartBlock ds 1
 ds 1
GdStartBlock ds 24
GdStartFace ds 24
GdStartX ds 24
GdStartSeqL ds 24
GdStartProg ds 24
GdStartSeqH ds 24

*-------------------------------
*
*  Image lists
*
*-------------------------------
maxback = 200 ;x4
maxfore = 100 ;x4
maxwipe = 20 ;x5
maxpeel = 46 ;x4
maxmid = 46 ;x11
maxobj = 20 ;x12
maxmsg = 32 ;x5

 dum imlists

genCLS ds 1

bgX ds maxback
bgY ds maxback
bgIMG ds maxback
bgOP ds maxback

fgX ds maxfore
fgY ds maxfore
fgIMG ds maxfore
fgOP ds maxfore

wipeX ds maxwipe
wipeY ds maxwipe
wipeH ds maxwipe
wipeW ds maxwipe
wipeCOL ds maxwipe

peelX ds maxpeel*2
peelY ds maxpeel*2
peelIMGL ds maxpeel*2
peelIMGH ds maxpeel*2

midX ds maxmid
midOFF ds maxmid
midY ds maxmid
midIMG ds maxmid
midOP ds maxmid
midTYP ds maxmid
midCU ds maxmid
midCD ds maxmid
midCL ds maxmid
midCR ds maxmid
midTAB ds maxmid

objINDX ds maxobj
objX ds maxobj
objOFF ds maxobj
objY ds maxobj
objIMG ds maxobj
objFACE ds maxobj
objTYP ds maxobj
objCU ds maxobj
objCD ds maxobj
objCL ds maxobj
objCR ds maxobj
objTAB ds maxobj

msgX ds maxmsg
msgOFF ds maxmsg
msgY ds maxmsg
msgIMG ds maxmsg
msgOP ds maxmsg

*-------------------------------
*
*  Zero page
*
*-------------------------------
*  $00-17: Hires parameters
*-------------------------------
 dum $00

PAGE ds 1
XCO ds 1
YCO ds 1
OFFSET ds 1
IMAGE ds 2
OPACITY ds 1
TABLE ds 2
PEELBUF ds 2
PEELIMG ds 2
PEELXCO ds 1
PEELYCO ds 1
TOPCUT ds 1
LEFTCUT ds 1
RIGHTCUT ds 1
BANK ds 1
BOTCUT ds 1

height = IMAGE
width = IMAGE+1

*-------------------------------
*  $18-3f: Global vars
*-------------------------------
 dum $18

JSTKX ds 1
JSTKY ds 1
BTN0 ds 1
BTN1 ds 1
BUTT0 ds 1
BUTT1 ds 1
JSTKUP ds 1
b0down ds 1
b1down ds 1
SINGSTEP ds 1
blackflag ds 1
SCRNUM ds 1
BlueType ds 2
BlueSpec ds 2
CUTTIMER ds 1
PRECED ds 1
spreced ds 1
PREV ds 3
sprev ds 3
scrnLeft ds 1
scrnRight ds 1
scrnAbove ds 1
scrnBelow ds 1
scrnBelowL ds 1
scrnAboveL ds 1
scrnAboveR ds 1
scrnBelowR ds 1
kbdX ds 1
kbdY ds 1
joyX ds 1
joyY ds 1
btn ds 1
butt ds 1

*-------------------------------
*
*  Pages 2-3
*
*-------------------------------
 dum $200

inmenu ds 1
inbuilder ds 1
ineditor ds 1
soundon ds 1
jctr ds 2
jthres1x ds 1
jthres1y ds 1
jthres2x ds 1
jthres2y ds 1
jvert ds 1
jhoriz ds 1
jbtns ds 1
joyon ds 1
develment ds 1
keypress ds 1
keydown ds 1
IIGS ds 1

 dum $3c0

sortX ds $10
BELOW ds $10
SBELOW ds $10

 dum $3f0

bluepTRK ds 1
bluepREG ds 1
binfoTRK ds 1
binfoREG ds 1
level ds 1
BBundID ds 1
redherring2 ds 1
pausetemp ds 1
recheck0 ds 1

 dend

*-------------------------------
*
*  Misc. constants
*
*-------------------------------
ScrnWidth = 140
ScrnHeight = 192

ScrnLeft = 58
ScrnRight = ScrnLeft+ScrnWidth-1
ScrnTop = 0
ScrnBottom = ScrnTop+ScrnHeight-1

secmask = %11000000
reqmask = %00100000
idmask = %00011111

and = 0
ora = 1
sta = 2
eor = 3
mask = 4

 lst off
```