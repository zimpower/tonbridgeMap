import uuid from "uuid"
import _ from "lodash"

const data = [
  {
    name: "School House",
    description: "School House was the original boarding house run by the Headmasters from 1553 to 1970, based at a central site on the school grounds.  In 1990, the new School House was built on London Road.  Famous old boys include the author Vikram Seth and the actors Benjamin Whitrow and David Tomlinson.",
    image: require("../images/thumbnails/SchoolHouse.png"),
    location: { longitude: 0.271869, latitude: 51.202916 },
    coordinates: [
      { longitude: 0.271566, latitude: 51.202826 },
      { longitude: 0.271563, latitude: 51.202915 },
      { longitude: 0.271826, latitude: 51.202903 },
      { longitude: 0.271775, latitude: 51.202951 },
      { longitude: 0.271791, latitude: 51.203014 },
      { longitude: 0.272223, latitude: 51.202986 },
      { longitude: 0.272215, latitude: 51.202903 },
      { longitude: 0.271957, latitude: 51.202912 },
      { longitude: 0.271949, latitude: 51.202803 },
    ],
    type: "Boarding House",
  },
  {
    name: "Judde House",
    description: "Founded in 1825, Judde House is the second oldest of Tonbridge School’s boarding houses. By 1893, Judde House had outgrown its original site on the school campus and moved to new premises on London Road under Mr Whitby. The original house was renamed ‘Old Judde’ and now houses the languages department. The House has many notable old boys, including the businessman Tim Waterstone, the architect Sir Herbert Baker and Richard Hughes, drummer in the band ‘Keane’.",
    location: { latitude: 51.2036191, longitude: 0.27087810000000445 },
    coordinates: [
      { latitude: 51.20324343694912, longitude: 0.27131617069244385 },
      { latitude: 51.20339132634875, longitude: 0.2696746587753296 },
      { latitude: 51.20387196361823, longitude: 0.2711981534957886 },
      { latitude: 51.203801380836886, longitude: 0.27135908603668213 },
    ],
    image: require("../images/thumbnails/juddehouse.png"),
    type: "Boarding House",
  },
  {
    name: "Park House",
    description: "Park House was founded in 1867, the first boarding house outside the school grounds, in a response to a large increase in pupil numbers.  In 1890, H R Stokoe took over the running of the House and stayed there for 41 years, ensuring he welcomed the sons of some past pupils to the House. The cricketer Graham Cowdrey, the writer Christopher Reid and the actor Maurice Denham are all old boys.",
    location: { latitude: 51.20266531928553, longitude: 0.275532603263855 },
    coordinates: [
      { latitude: 51.20312243617806, longitude: 0.27529120445251465 },
      { latitude: 51.20291740636821, longitude: 0.2758437395095825 },
      { latitude: 51.20243003676369, longitude: 0.2757042646408081 },
      { latitude: 51.20286698906203, longitude: 0.27478158473968506 },
    ],
    image: require("../images/thumbnails/parkhouse.png"),
    type: "Boarding House",
  },
  {
    name: "Hill Side",
    description: "Hill Side was founded in 1875 in response to the rapid expansion of the School. Aptly named, it sits on the edge of a high piece of ground in North Tonbridge. The House has many notable old boys, including the historian and educationalist Sir Anthony Seldon, Air Chief Marshal Sandy Wilson and Tom Chaplin and Tim Rice-Oxley, from the band ‘Keane’.",
    location: { latitude: 51.20436604005912, longitude: 0.2730649709701538 },
    coordinates: [
      { latitude: 51.20427697224878, longitude: 0.27319103479385376 },
      { latitude: 51.2042164732605, longitude: 0.2725553512573242 },
      { latitude: 51.205730604601364, longitude: 0.2725633978843689 },
      { latitude: 51.20524494525398, longitude: 0.27352094650268555 },
    ],
    image: require("../images/thumbnails/hillsidehouse.png"),
    type: "Boarding House",
  },
  {
    name: "Parkside",
    description: "Parkside was purpose-built as a school boarding house in the 1880s and underwent a major renovation in 2003. Past Parkside boys include the author Frederick Forsyth, one of the world’s leading thriller writers, and Norman Heatley, the scientist who turned the discovery of Penicillin into useable medicine.",
    location: { latitude: 51.2033622, longitude: 0.27558380000004945 },
    coordinates: [
      { latitude: 51.20285354443774, longitude: 0.276256799697876 },
      { latitude: 51.203246798077124, longitude: 0.2753019332885742 },
      { latitude: 51.20348879864796, longitude: 0.275457501411438 },
      { latitude: 51.20336107628288, longitude: 0.2761709690093994 },
    ],
    image: require("../images/thumbnails/parkside.png"),
    type: "Boarding House",
  },
  {
    name: "Ferox Hall",
    description: "Ferox Hall opened as a boarding house in 1892.  The oldest part of the Hall dates back to the sixteenth century, with additions built over the years. Old Ferocians include the world-famous cricketer Colin Cowdrey and the politician John Bowis.",
    image: require("../images/thumbnails/Feroxhall.png"),
    location: { longitude: 0.2765455999999631, latitude: 51.1994054 },
    coordinates: [
      { longitude: 0.276206, latitude: 51.199391 },
      { longitude: 0.277091, latitude: 51.199204 },
      { longitude: 0.277880, latitude: 51.199719 },
      { longitude: 0.276732, latitude: 51.200151 },
    ],
    type: "Boarding House",
  },
  {
    name: "Manor House",
    description: "Manor House was founded in 1894, later than the other Victorian boarding houses, in a response to another large increase in numbers. Whilst the other houses of the School have obvious geographical or historically relevant names, Manor was named on the whim of its first Housemaster, J A Pott. Manor House old boys include the actor Dan Stevens, the MP Sir Peter Tapsell and the explorer Tim Severin.",
    location: { longitude: 0.276960, latitude: 51.202087 },
    coordinates: [
      { latitude: 51.202063, longitude: 0.275973 },
      { longitude: 0.276278, latitude: 51.202436 },
      { longitude: 0.277346, latitude: 51.202140 },
      { longitude: 0.277126, latitude: 51.201653 },
    ],
    image: require("../images/thumbnails/ManorHouse.png"),
    type: "Boarding House",
  },
  {
    name: "Welldon House",
    description: "About the Housemaster. Richard Evans grew up in the Staffordshire Moorlands. He graduated from Leicester University with the top First in English and took his Masters Degree at Bristol. He joined Tonbridge in 1993. He coaches Rugby in the Michaelmas Term and Athletics in the Summer Term. He is a prize-winning writer and teacher of English, and has published articles in magazines and newspapers, particularly on strategies for teaching and working with boys. Before becoming a housemaster, he was Head of English, Master in Charge of the Community Group and Cross-Country. His wife, Charlie, teaches locally and he has two young children, Anna and Ted.",
    location: { latitude: 51.20290732291137, longitude: 0.2726653218269348 },
    coordinates: [
      { latitude: 51.203093866505185, longitude: 0.27261704206466675 },
      { longitude: 0.2729952335357666, latitude: 51.202903961758615 },
      { longitude: 0.2725660800933838, latitude: 51.202488857506815 },
      { longitude: 0.2722281217575073, latitude: 51.20267372221051 },
    ],
    image: require("../images/thumbnails/welldonhouse.png"),
    type: "Day House",
  },
  {
    description: "About the Housemaster. Chris Henshall was educated at The Manchester Grammar School and St. Peters College, Oxford. He taught at Cranleigh School (where he was an assistant housemaster) and Kings College, Taunton (where he was Head of Geography) before coming to Tonbridge to run the Geography Department in January 1996; he took over Smythe House in September, 2005. He has played an active role in coaching athletics, cross country running, football, hockey and rugby throughout his teaching career and, as a keen mountaineer and a qualified instructor, he runs the schools Climbing Club. As well as numerous trips within Britain, he has also run major school expeditions to the European Alps, Iceland, Morocco, New Zealand and Peru. His wife, Hilary, teaches at Hilden Grange Preparatory School and they have two grown up children who are at university.",
    name: "Smythe House",
    location: { latitude: 51.2024065084454, longitude: 0.27337610721588135 },
    coordinates: [
      { latitude: 51.202697250392326, longitude: 0.27336806058883667 },
      { longitude: 0.27279943227767944, latitude: 51.20230567265948 },
      { longitude: 0.27319371700286865, latitude: 51.202048540406295 },
      { longitude: 0.27356386184692383, latitude: 51.20241995320017 },
    ],
    image: require("../images/thumbnails/smythehouse.png"),
    type: "Day House",
  },
  {
    name: "Whitworth",
    description: "About the Housemaster. Will Biddle is an old Tonbridgian, having been in Park House between 1976 and 1981. He studied Biochemistry at the University of London, and after a year travelling and working around the world, went on to spend six years working in management for a London advertising agency. He then studied for a PGCE in Design Technology in Newcastle and has been teaching ever since. He joined us in 2004 from Wymondham College in Norfolk. Will teaches Design Technology and coaches Ultimate Frisbee and Hockey. He has previously been the Anti-Bullying Coordinator and ran the schools PSHEE programme. He is married to Tara, and they have twin girls, Grace and Ruby.",
    location: { latitude: 51.20324343694912, longitude: 0.27481645345687866 },
    coordinates: [
      { latitude: 51.20309050536604, longitude: 0.2747949957847595 },
      { longitude: 0.27457237243652344, latitude: 51.20318125603705 },
      { longitude: 0.27488619089126587, latitude: 51.203512326413424 },
      { longitude: 0.27500420808792114, latitude: 51.20348207642704 },
    ],
    image: require("../images/thumbnails/Whitworth.png"),
    type: "Day House",
  },
  {
    name: "Cowdrey House",
    description: "Cowdrey was established in 1994 under the housemastership of John Maynard, who now teaches in China.  The house is named after the Old Tonbridgian and former Captain of England Cricket Colin Cowdrey.",
    image: require("../images/thumbnails/Cowdrey.png"),
    location: { longitude: 0.274542, latitude: 51.204038 },
    coordinates: [
      { longitude: 0.274355, latitude: 51.204179 },
      { longitude: 0.274763, latitude: 51.204180 },
      { longitude: 0.274716, latitude: 51.203684 },
      { longitude: 0.274375, latitude: 51.203750 },
    ],
    type: "Day House",
  },
  {
    name: "Oakeshott House",
    description: "About the Housemaster. Graham Barnes read Physics at Nottingham University and arrived at Tonbridge sin 2006, having previously taught at Shrewsbury, Sedburgh and The King’s School Chester. He is master in charge of Rugby, and has coached the 2nd XV for a number of years, as well as being a coach of hockey, cricket and football. He has a wealth of pastoral experience, having been a Senior Student Housemaster and Assistant Housemaster of Manor House and has also enjoyed spells as Head of Physics and master in charge of the Tonbridge seminar programme. Away from school his interests are mountain related - either climbing up them or skiing down them - and playing the piano. He is married to Jo, a Historic Environment Adviser for DEFRA, and they have two daughters, Eleanor and Abigail.",
    location: { latitude: 51.20349468059046, longitude: 0.272810161113739 },
    coordinates: [
      { latitude: 51.203553499974085, longitude: 0.272798091173172 },
      { longitude: 0.2730327844619751, latitude: 51.2035072847504 },
      { longitude: 0.27307838201522827, latitude: 51.20330141637261 },
      { longitude: 0.27252718806266785, latitude: 51.20334174984154 },
    ],
    image: require("../images/thumbnails/oakeshotthouse.png"),
    type: "Day House",
  },
  {
    name: "Temporary Science Block",
    description: "Our current Science facilities have served us well for over 100 years. Both science and teaching methods have changed radically since they were built. To reflect this, we are planning a new facility which will transform the boys’ experience of science and enable us to share their excitement with local schools. ",
    image: require("../images/thumbnails/Scienceblock.png"),
    location: { longitude: 0.274217, latitude: 51.202102 },
    coordinates: [
      { latitude: 51.20174098817913, longitude: 0.2746251365169883 },
      { latitude: 51.20216618279175, longitude: 0.274981870315969 },
      { latitude: 51.202467009810995, longitude: 0.27377487625926733 },
      { latitude: 51.201981316051125, longitude: 0.2733618160709739 },
    ],
    type: "Teaching",
  },
  {
    name: "The Library",
    description: "The library recently re-opened following a £6.1M refurbishment and extension to reflect the growing school, changes in the curriculum, the use of modern technology and the need for flexible teaching spaces. A new mezzanine level was added to the building, spaces built for the Careers and University and Learning Strategies departments, the Chan Café was added as a community gathering area and new, well-equipped teaching areas constructed.  The extended building was officially opened by HRH Princess Alexandra in 2016. The original library building was designed by Sir William Holford and built in 1962.  The library contains tens of thousands of volumes – some of which have been in the school’s possession since the seventeenth century. The oldest book in the collection is a Jenson Bible dated 1479. The Archives of Tonbridge School are also held in the library, ensuring effective access to all documents which are relevant to the history of the school. The library catalogue is computerised and available on the network for boys and staff to access at all times from any computer within the school and from home: department libraries have also been added to the system.",
    location: { longitude: 0.2746501564979553, latitude: 51.19999143070793 },
    coordinates: [
      { latitude: 51.1999107578675, longitude: 0.2748352289199829 },
      { latitude: 51.19998302729367, longitude: 0.2744865417480469 },
      { latitude: 51.20005193524556, longitude: 0.27452677488327026 },
      { latitude: 51.1999897500252, longitude: 0.27486473321914673 },
    ],
    image: require("../images/thumbnails/smythelibrary.png"),
    type: "Teaching",
  },
  {
    name: "Orchard Centre",
    description: "The Orchard Centre is a modern, fully air conditioned facility overlooking the wonderful view of The Head, the school’s primary cricket pitch. Each day House has its separate dining room either within the House or in the Orchard Centre. Where the boys go to have lunch",
    location: { longitude: 0.27463674545288086, latitude: 51.20130066392974 },
    coordinates: [
      { latitude: 51.20146536585927, longitude: 0.27467161417007446 },
      { latitude: 51.20121831274415, longitude: 0.2745509147644043 },
      { latitude: 51.20117293549733, longitude: 0.27468234300613403 },
      { latitude: 51.20138973749536, longitude: 0.27485400438308716 },
    ],
    image: require("../images/thumbnails/Orchardcentre.png"),
    type: "Teaching",
  },
  {
    name: "OBS Gallery",
    description: "The gallery is a non-profit space that showcases work from artists that are recent graduates as well as established names. It also provides a platform for the work of Tonbridge School students and staff. Exhibitions explore particular themes or provide a showcase for individual artists. They often include objects that are not traditionally thought of as ‘art’ and may thereby entice their audience to re-examine their preconceptions about what art can be. OBS Gallery provides a space for enquiry and reflection. Three major exhibitions take place during the year; the middle of January to the beginning of March, the middle of September to the beginning of November and the beginning of December. Between these times there are wall based exhibitions that take into account the space’s additional use for student exams.",
    location: { longitude: 0.27554601430892944, latitude: 51.20012924648355 },
    coordinates: [
      { latitude: 51.200223364337255, longitude: 0.2755272388458252 },
      { latitude: 51.20000487616759, longitude: 0.27539849281311035 },
      { latitude: 51.199988069342396, longitude: 0.275532603263855 },
      { latitude: 51.20020991894136, longitude: 0.2756801247596741 },
    ],
    image: require("../images/thumbnails/obs.png"),
    type: "Teaching",
  },
  {
    name: "The Tunnel Gallery",
    description: "We hold up to 7 exhibitions per year and these are curated and installed by the Art staff and always launched with a Private View. Every year group has at least one exhibition annually and this provides fabulous incentive for them to produce work, but also validates the work and places it within an arena shared by visiting artists and other organisations. As a space it is extremely versatile, allowing us to change the floor plan, add partition walls where necessary, and ‘dark spaces’ for projection.",
    location: { longitude: 0.27511686086654663, latitude: 51.20124520294338 },
    coordinates: [
      { latitude: 51.20126368994626, longitude: 0.27510613203048706 },
      { latitude: 51.201238480395055, longitude: 0.2750726044178009 },
      { latitude: 51.201290580119014, longitude: 0.2749478816986084 },
      { latitude: 51.201325033129926, longitude: 0.2750001847743988 },
    ],
    image: require("../images/thumbnails/Tunelgalery.png"),
    type: "Teaching",
  },
  {
    name: "E.M. Forster Theatre",
    description: "The modern proscenium arch theatre seats 370 people in comfort, with excellent panoramic views throughout and very good disabled access. It is a highly adaptable theatre with a large stage, orchestra pit, advanced lighting, sound and audio-visual facilities. Also situated within the complex is a Studio Theatre, with seating for up to 90, which is well suited to small-scale and experimental performances. The theatre is staffed by a Theatre Manager, a Marketing Officer, two Technicians and two part-time Wardrobe Assistants. The theatre is linked into a single complex with the Vere Hodge Centre, which gathers all the creative and practical facilities of the school into one integrated building, designed to allow for the greatest flexibility of interaction between the various departments, all of which have their input to the work of the theatre.",
    location: { longitude: 0.2758491039276123, latitude: 51.200994787355405 },
    coordinates: [
      { latitude: 51.2013678892782, longitude: 0.2756693959236145 },
      { latitude: 51.201238480395055, longitude: 0.27555137872695923 },
      { latitude: 51.2009460485928, longitude: 0.27576595544815063 },
      { latitude: 51.20102840026514, longitude: 0.27605026960372925 },
    ],
    image: require("../images/thumbnails/emtheatre.png"),
    type: "Teaching",
  },
  {
    name: "ICT",
    description: "The IT teaching department have 65 computers in three laboratories and is located in the Vere Hodge centre",
    location: { longitude: 0.27524828910827637, latitude: 51.20140906475573 },
    coordinates: [
      { latitude: 51.2013393185171, longitude: 0.27518391609191895 },
      { latitude: 51.201408224440236, longitude: 0.2751222252845764 },
      { latitude: 51.20148385277379, longitude: 0.275307297706604 },
      { latitude: 51.20144687893734, longitude: 0.27539312839508057 },
    ],
    image: require("../images/thumbnails/ICT2.png"),
    type: "Teaching",
  },
  {
    name: "Music School",
    description: "There are several orchestras, bands, and smaller ensemble groups (covering all musical styles): the school has an extensive performance programme, both within and beyond the school. The school offers a series of masterclasses with visiting tutors. Each term there are several concerts and less formal recitals, including a weekly concert in the Octagon. Houses hold their own musical evenings and there is an annual House music competition. Jazz and popular music are actively encouraged and flourish. The Music School facilities include two recital halls equipped with Bosendorfer grand pianos, a suite of teaching and practice rooms, a music library, a sound-isolated percussion and rock suite, and a well-equipped recording studio. Larger scale events are held in the school’s main hall which has a Copeman Hart organ and a Bosendorfer Imperial grand piano, or in the magnificently restored Chapel - the four-manual Marcussen organ is internationally famous and frequently used for recordings: Gillian Weir, Simon Preston and Kevin Bowyer have all made highly acclaimed CDs on the organ.",
    location: { longitude: 0.27492374181747437, latitude: 51.20145864334307 },
    coordinates: [
      { latitude: 51.20156284223405, longitude: 0.2748553454875946 },
      { latitude: 51.20134015883388, longitude: 0.27518123388290405 },
      { latitude: 51.20123091752699, longitude: 0.275069922208786 },
      { latitude: 51.20148217214552, longitude: 0.2747775614261627 },
    ],
    image: require("../images/thumbnails/Verehodgecentre.png"),
    type: "Teaching",
  },
  {
    name: "Vere Hodge Centre",
    description: "The Vere Hodge Arts and Technology Centre was opened in 1996 and includes spacious accommodation for the departments of Art, Digital Creativity and Design Technology. It also comprises a substantial extension to the Music School, a Reprographics centre, and an exhibition area, and it is linked in one complex with the E.M. Forster Theatre.",
    location: { longitude: 0.2751946449279785, latitude: 51.20136284738049 },
    coordinates: [
      { latitude: 51.201557800357655, longitude: 0.27486205101013184 },
      { latitude: 51.20136284738049, longitude: 0.2755969762802124 },
      { latitude: 51.20126873185484, longitude: 0.2755165100097656 },
      { latitude: 51.20122755625191, longitude: 0.27506858110427856 },
      { latitude: 51.201480491517145, longitude: 0.2747762203216553 },
    ],
    image: require("../images/thumbnails/verehodge.png"),
    type: "Teaching",
  },
  {
    name: "Headmaster's Office",
    description: "Tim Haynes became Headmaster of Tonbridge in September 2005.  Prior to coming to Tonbridge he was the Headmaster of Monmouth School for 10 years. Monmouth is an HMC school for about 700 boys, boarding and day, aged 7 - 18: it was founded in 1614 and is one of the Haberdashers Company schools. Before his appointment to Monmouth Tim had taught History at St Pauls School for 13 years, and was Surmaster (i.e. Deputy Head) from 1992.Tim was educated at Shrewsbury School and Reading University, thereafter taking his PGCE at Pembroke College, Cambridge. He has two teenage sons, Theo and Joseph.",
    location: { longitude: 0.27568817138671875, latitude: 51.19967546127593 },
    coordinates: [
      { latitude: 51.199678822664275, longitude: 0.27607977390289307 },
      { latitude: 51.19956957741766, longitude: 0.27598321437835693 },
      { latitude: 51.19968890682783, longitude: 0.27543067932128906 },
      { latitude: 51.19976453798411, longitude: 0.275532603263855 },
    ],
    image: require("../images/thumbnails/headmastersoffice.png"),
    type: "Other",
  },
  {
    name: "Chapel",
    description: "Tonbridge is a Christian foundation, and Chapel services play an important and regular part of school life. The Chapel is staffed by the Senior Chaplain, along with a Chapel Verger. Religious life is taken seriously at Tonbridge. Boys and staff are invited to think positively about faith and to explore what their individual faith means to them and to the society from which they come and are to enter. The Chapel of St Augustine of Canterbury is both spiritually and physically at the centre of the school and its daily life. It was consecrated first in 1902 to replace a smaller nineteenth century chapel. It was a notable building and much loved by boys and staff alike. In 1988 it was severely damaged by fire. Restoration and repair took seven years to complete and the Chapel was re-consecrated by the Bishop of Rochester in 1995. The Chapel is collegiate in layout with twelve blocks of pews and seats corresponding to the respective Houses. The focal point of the Chapel is the fine stone High Altar and there are two pulpits, one each on the north and south sides of the Chapel. The fire enabled an extra Chapel area to be developed. The Lady Chapel is used for the daily celebration of the Eucharist, Reservation of the Blessed Sacrament and Baptisms. The Narthex or outer lobby of the Chapel is also the school War Memorial. The original statuary, lost in the fire, was copied and installed. In addition the names of all Old Tonbridgians who lost their lives in the First or Second World Wars are displayed in stone or ironwork. Each year wreaths are laid here during the school Remembrance Day service. The 1995 Marcussen organ is widely regarded as one of the finest instruments in the country; it is a four-manual tracker-action instrument with 66 speaking stops, including two 32 stops. Each year a series of organ recitals is given, often by major international soloists. These are often followed by masterclasses, in which our boys participate, together with outstanding young organists from other schools.",
    location: { longitude: 0.2751249074935913, latitude: 51.20087041937629 },
    coordinates: [
      { latitude: 51.200734286473654, longitude: 0.2754950523376465 },
      { latitude: 51.20088722587958, longitude: 0.2747681736946106 },
      { latitude: 51.201013274458795, longitude: 0.274808406829834 },
      { latitude: 51.200934284056146, longitude: 0.27558356523513794 },
    ],
    image: require("../images/thumbnails/chapel.png"),
    type: "Other",
  },
  {
    name: "The Quad",
    description: "The main parking area in the school located opposite the libary",
    location: { latitude: 51.20024857444401, longitude: 0.27500420808792114 },
    coordinates: [
      { latitude: 51.200549413986444, longitude: 0.2747252583503723 },
      { latitude: 51.200172944082404, longitude: 0.274507999420166 },
      { latitude: 51.19990907718183, longitude: 0.27532875537872314 },
      { latitude: 51.200171263406276, longitude: 0.2754601836204529 },
      { latitude: 51.200260339155754, longitude: 0.27507662773132324 },
      { latitude: 51.20044353213689, longitude: 0.2751195430755615 },
    ],
    image: require("../images/thumbnails/Libary.png"),
    type: "Parking",
  },
  {
    name: "Knotts",
    description: "",
    location: { latitude: 51.19918, longitude: 0.26307 },
    coordinates: [
      { latitude: 51.20048386810828, longitude: 0.26260972023010254 },
      { latitude: 51.20000655684981, longitude: 0.2598845958709717 },
      { latitude: 51.19866871443069, longitude: 0.25986313819885254 },
      { latitude: 51.198346012955945, longitude: 0.26409029960632324 },
    ],
    image: require("../images/thumbnails/sportsfield.png"),
    type: "Sports",
  },
  {
    name: "TSC Parking",
    description: "",
    location: { latitude: 51.2031056304903, longitude: 0.26906847953796387 },
    coordinates: [
      { latitude: 51.202351048790455, longitude: 0.26892632246017456 },
      { latitude: 51.20296446247083, longitude: 0.26857495307922363 },
      { latitude: 51.20329721496756, longitude: 0.2692723274230957 },
      { latitude: 51.203203103394095, longitude: 0.2696424722671509 },
    ],
    image: require("../images/thumbnails/tsc.png"),
    type: "Parking",
  },
  {
    name: "Tonbridge School Centre",
    description: "Opened in June 2008, Tonbridge School Centre (TSC) offers some of the very best sport and leisure facilities in the South East. TSC is open to pupils, parents and staff of Tonbridge School as well as members of the local community. TSC Leisure Club offers Members use of our extensive facilities including our well-equipped contemporary Fitness Suite (Gym), award-winning Swimming Pool, an extensive array of Exercise Classes and our stunning world-class Athletics Track. Other activities including Tennis, Badminton and Table Tennis are available to Members free of charge and subject to availability. For further information about TSC Leisure Club. TSC is also home of the Recre8 Children's Activity Courses which include a comprehensive range of leisure, sporting, creative and educational activities during term time and the school holidays.",
    image: require("../images/thumbnails/TonbridgeSportsCenter.png"),
    location: { longitude: 0.268795, latitude: 51.201475 },
    coordinates: [
      { longitude: 0.268244, latitude: 51.201374 },
      { longitude: 0.268798, latitude: 51.201853 },
      { longitude: 0.269350, latitude: 51.201605 },
      { longitude: 0.268799, latitude: 51.201126 },
    ],
    type: "Sports",
  },
  {
    name: "Pavilion",
    description: "",
    location: { latitude: 51.200769580227785, longitude: 0.27230724692344666 },
    coordinates: [
      { latitude: 51.200658656909475, longitude: 0.2721691131591797 },
      { latitude: 51.20081159656646, longitude: 0.27208060026168823 },
      { latitude: 51.20089815010341, longitude: 0.2723783254623413 },
      { latitude: 51.20076789957343, longitude: 0.2725003659725189 },
    ],
    image: require("../images/thumbnails/Cricketpavilion.png"),
    type: "Sports",
  },

  {
    name: "The Head",
    description: "",
    location: { latitude: 51.20118, longitude: 0.27351 },
    coordinates: [
      { latitude: 51.20179980980216, longitude: 0.27341097593307495 },
      { latitude: 51.200888906529556, longitude: 0.2724587917327881 },
      { latitude: 51.20056117862138, longitude: 0.27395009994506836 },
      { latitude: 51.20162166408455, longitude: 0.2744007110595703 },
    ],
    image: require("../images/thumbnails/head.png"),
    type: "Sports",
  },
  {
    name: "The Fifty",
    description: "",
    location: { latitude: 51.20166, longitude: 0.27179 },
    coordinates: [
      { latitude: 51.200893948479155, longitude: 0.2715897560119629 },
      { latitude: 51.201283857577295, longitude: 0.27076900005340576 },
      { latitude: 51.202178, longitude: 0.27171313762664795 },
      { latitude: 51.20183846397068, longitude: 0.27258217334747314 },
    ],
    image: require("../images/thumbnails/sportsfield.png"),
    type: "Sports",
  },
  {
    name: "Martins",
    description: "",
    location: { latitude: 51.19989, longitude: 0.27500420808792114 },
    coordinates: [
      { latitude: 51.200549413986444, longitude: 0.2747252583503723 },
      { latitude: 51.200172944082404, longitude: 0.274507999420166 },
      { latitude: 51.19990907718183, longitude: 0.27532875537872314 },
      { latitude: 51.200171263406276, longitude: 0.2754601836204529 },
    ],
    image: require("../images/thumbnails/sportsfield.png"),
    type: "Sports",
  },
  {
    name: "Tennis",
    description: "Tennis courts",
    location: { latitude: 51.20247, longitude: 0.26859 },
    coordinates: [
      { latitude: 51.20285690559419, longitude: 0.268376 },
      { latitude: 51.202382980115075, longitude: 0.2678561210632324 },
      { latitude: 51.202137612525746, longitude: 0.26848912239074707 },
      { latitude: 51.202433397951026, longitude: 0.26882171630859375 },
    ],
    image: require("../images/thumbnails/tenniscourt.png"),
    type: "Sports",
  },
  {
    name: "Willmot Athletics Track",
    description: "The chosen pre-2012 Olympics training venue for Athletics Australia. Our certified six-lane Athletics Track has been used by Double Olympic Gold Medallist Dame Kelly Holmes for much of her training. Field athletes are catered for with our discus, javelin, shot put, high jump, Olympic standard pole vault and long jump facilities.",
    image: require("../images/thumbnails/willmotttrack.png"),
    location: { latitude: 51.20080655460785, longitude: 0.27023524045944214 },
    coordinates: [
      { longitude: 0.269651, latitude: 51.201512 },
      { longitude: 0.268799, latitude: 51.200967 },
      { longitude: 0.270639, latitude: 51.200114 },
      { longitude: 0.271488, latitude: 51.200711 },
    ],
    type: "Sports",
  },
  {
    name: "Foundation Astro",
    description: "World class floodlit water-based astro with a tiered seating unit accommodating 170 people, plus standing area.",
    image: require("../images/thumbnails/foundationastro.png"),
    location: { longitude: 0.268464, latitude: 51.200679 },
    coordinates: [
      { longitude: 0.267584, latitude: 51.200706 },
      { longitude: 0.268127, latitude: 51.201184 },
      { longitude: 0.269315, latitude: 51.200673 },
      { longitude: 0.268800, latitude: 51.200204 },
    ],
    type: "Sports",
  },
  {
    name: "Rowan’s Astro",
    description: "Floodlit Tiger Turf Evolution, water-based or dry astro with an 80 seat tiered unit plus standing area. Available for Hockey, Football and Tennis.",
    location: { latitude: 51.20167712461765, longitude: 0.26766300201416016 },
    coordinates: [
      { latitude: 51.20138469560003, longitude: 0.26686906814575195 },
      { latitude: 51.20111915499881, longitude: 0.26766836643218994 },
      { latitude: 51.20192249465988, longitude: 0.2683335542678833 },
      { latitude: 51.202154418566735, longitude: 0.26755034923553467 },
    ],
    image: require("../images/thumbnails/rowansastro.png"),
    type: "Sports",
  },
  {
    name: "Thomas’ Astro",
    description: "A Polytan sand filled pitch, ideal for Tennis or Hockey with capacity for 150 standing spectators.",
    location: { latitude: 51.20158973223218, longitude: 0.2660536766052246 },
    coordinates: [
      { latitude: 51.202036776151196, longitude: 0.2663809061050415 },
      { latitude: 51.2020300537184, longitude: 0.2656245231628418 },
      { latitude: 51.2012233546577, longitude: 0.26559770107269287 },
      { latitude: 51.20123679975782, longitude: 0.26637017726898193 },
    ],
    image: require("../images/thumbnails/thomasastro.png"),
    type: "Sports",
  },
  {
    name: "Whitbys",
    description: "Sports fields",
    location: { latitude: 51.19984, longitude: 0.26599 },
    coordinates: [
      { latitude: 51.20110907114833, longitude: 0.26505589485168457 },
      { latitude: 51.1986014851432, longitude: 0.2643585205078125 },
      { latitude: 51.19867543735403, longitude: 0.2669227123260498 },
      { latitude: 51.200719160570756, longitude: 0.26641845703125 },
    ],
    image: require("../images/thumbnails/sportsfield.png"),
    type: "Sports",
  },
  {
    name: "Marriotts",
    description: "Sports fields",
    location: { latitude: 51.19989, longitude: 0.26791 },
    coordinates: [
      { latitude: 51.200567901268535, longitude: 0.2670246362686157 },
      { latitude: 51.199835126951264, longitude: 0.2695298194885254 },
      { latitude: 51.19908553382338, longitude: 0.2688431739807129 },
      { latitude: 51.19945528980543, longitude: 0.2669870853424072 },
    ],
    image: require("../images/thumbnails/sportsfield.png"),
    type: "Sports",
  },
  {
    name: "Astons",
    description: "Sports fields",
    location: { latitude: 51.20173, longitude: 0.26402 },
    coordinates: [
      { latitude: 51.20360979845662, longitude: 0.2624166011810303 },
      { latitude: 51.2014720883745, longitude: 0.2614402770996094 },
      { latitude: 51.20029563327301, longitude: 0.2642083168029785 },
      { latitude: 51.20273590380774, longitude: 0.2651524543762207 },
    ],
    image: require("../images/thumbnails/sportsfield.png"),
    type: "Sports",
  },
]

const facilities = data.map(place => ({
  ...place,
  id: uuid.v4(),
}))

const ordererFacilities = _.chain(facilities)
  .groupBy("type")
  .toPairs()
  .map(item => _.zipObject(["key", "data"], item))
  .value()

const school = _.reduce(
  facilities,
  (result, facility) => {
    const coordinates = facility.coordinates || []
    const location = facility.location === null ? [] : [facility.location]
    return [...result, ...coordinates, ...location]
  },
  []
)

export { ordererFacilities, facilities, school }

// # Boarding Houses
// School House done
// Judde House
// Park House
// Hill Side
// Parkside
// Ferox Hall done
// Manor House  done

// # Day Boarding Houses
// Welldon House
// Smythe House
// Whitworth
// Cowdrey House  done
// Oakeshott House

// # Teaching
// Teaching Spaces
// The Library
// Orchard Centre
// OBS Gallery
// The Tunnel Gallery
// E.M. Forster Theatre
// ICT
// Music School
// Vere Hodge Centre

// Other
// Headmaster's Office
// Chapel

// # Parking
// The Quad
// Knotts
// TSC Parking

// # Sports
// Tonbridge School Centre
// Pavilion
// Playing Fields
// The Head
// The Fifty
// Martins
// Tennis
// Willmot Athletics Track
// Foundation Astro
// Rowan’s Astro
// Thomas’ Astro
// Whitbys
// Marriotts
// Astons
