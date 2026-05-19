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
description: "Equates and memory mapping for Prince of Persia's Apple II assembly code"

summary:
  - point: "Memory banks are mapped for both main and auxiliary memory"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Jump tables are used for efficient subroutine dispatch"
    link: "https://en.wikipedia.org/wiki/Jump_table"
    link_label: "Jump Table"
  - point: "Blueprints and image lists organize game assets"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Zero-page memory is optimized for critical variables"
    link: "https://en.wikipedia.org/wiki/Zero_page"
    link_label: "Zero Page"
  - point: "Constants define screen dimensions and bit masks"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "memory-mapping-and-equates"
    line_start: 11
    line_end: 32
    title: "Memory Mapping: Main and Auxiliary Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "This section defines memory locations for various buffers, tables, and graphics assets, split across main and auxiliary memory banks. The Apple II's 6502 processor supports bank-switched memory, allowing programs to access more than the standard 64KB of addressable memory. Jordan Mechner uses this feature to fit Prince of Persia into the Apple II's 128KB memory by carefully organizing assets and code into different memory regions. For example, 'peelbuf1' and 'peelbuf2' are allocated in the main memory, while 'grafix' and 'tables' reside in auxiliary memory. This organization reflects the constraints of the Apple II hardware, where memory was a scarce resource. Mechner's meticulous mapping ensured smooth gameplay and efficient use of the system's capabilities. This approach influenced later developers working on memory-constrained systems, emphasizing the importance of careful memory planning in game development."
  - id: "jump-tables-for-subroutine-dispatch"
    line_start: 39
    line_end: 216
    title: "Jump Tables: Efficient Subroutine Dispatch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: ""
    image_caption: ""
    content: "This section contains jump tables, which are arrays of pointers to subroutines. Jump tables allow the program to quickly call specific routines based on an index, avoiding costly conditional branching. For example, '_firstboot', '_loadlevel', and '_reload' are entries in the jump table, each pointing to a different subroutine. This technique is particularly useful in assembly programming, where performance is critical and branching can be slow. Mechner uses jump tables extensively to manage game states, animations, and interactions, reflecting the need for efficiency on the Apple II's 1MHz processor. This method became a standard practice in game development, influencing later systems like the NES and SNES, where jump tables were used for similar purposes in games like Super Mario Bros. and The Legend of Zelda."
  - id: "blueprints-and-image-lists"
    line_start: 258
    line_end: 356
    title: "Blueprints and Image Lists: Organizing Game Assets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines blueprints and image lists, which organize the game's graphical assets and layout information. Blueprints ('BLUETYPE', 'BLUESPEC') describe the properties and specifications of game objects, while image lists ('bgX', 'bgY', 'bgIMG') manage the positions and images of background elements. These structures are essential for the game's cinematic platforming experience, where precise control over graphics and animations is required. Mechner's use of these data structures reflects his background in film and his desire to create a visually compelling game. By organizing assets in this way, he ensured that the Apple II could handle complex scenes and animations efficiently. This approach influenced later games that prioritized visual storytelling, such as Another World and Flashback, which also used structured asset management to achieve cinematic effects."
  - id: "zero-page-memory-optimization"
    line_start: 365
    line_end: 424
    title: "Zero-Page Memory: Optimizing Critical Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zero_page"
    image_url: ""
    image_caption: ""
    content: "This section defines variables stored in the zero page, the first 256 bytes of memory in the 6502 processor. Accessing zero-page memory is faster than other memory locations, making it ideal for frequently used variables like 'PAGE', 'XCO', and 'YCO'. Mechner uses this space to store critical parameters for graphics rendering and game logic, optimizing performance on the Apple II's limited hardware. The zero page's efficiency was a key factor in the success of many 6502-based systems, including the Apple II and Commodore 64. Mechner's careful use of zero-page memory highlights his understanding of the hardware's strengths and limitations. This technique influenced other developers working on 6502 systems, reinforcing the importance of optimizing memory access for performance-critical applications."
  - id: "screen-dimensions-and-bit-masks"
    line_start: 476
    line_end: 491
    title: "Constants: Screen Dimensions and Bit Masks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section defines constants for screen dimensions ('ScrnWidth', 'ScrnHeight') and bit masks ('secmask', 'reqmask', 'idmask'). These constants are used throughout the game to manage graphics rendering and input handling. The Apple II's screen resolution of 140x192 pixels is reflected in these definitions, emphasizing the constraints of the hardware. Mechner's use of bit masks demonstrates his efficiency in handling binary data, a common practice in assembly programming. These constants provide a foundation for the game's graphical and logical operations, ensuring consistency and clarity in the code. The use of such constants became a standard practice in game development, influencing later systems like the NES and Sega Genesis, where similar techniques were used to manage screen layouts and input states."

---

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