import { generateClosedReadme, generateReadme } from "./generate-readme";
import { List } from "./types";

const list: List = [
	{
		title: "Creative Technology",
		rows: {
			"1024 Architecture": {
				keywords: "architectural and digital works, orchestrated sound and light scores",
				link: "https://www.1024architecture.net/",
				locations: ["Paris"],
			},
			"AV Controls": {
				keywords: "site-specific technology installations, digital landmarks",
				link: "https://www.av-controls.com/",
				locations: ["NYC"],
			},
			"Acrylicize": {
				keywords: "harness the power of art and creativity to help people fall in love with spaces",
				link: "https://www.acrylicize.com/",
				locations: ["London", "NYC", "Seattle"],
			},
			"Ada": {
				keywords:
					"experience innovation and design agency that partners with the world's most ambitious visionaries and brands in the culture, arts and social impact space",
				link: "https://a-da.co/",
				locations: ["NYC"],
			},
			"Adirondack Studios": {
				keywords: "concept, schematic, design, construction, fabrication, installation, support",
				link: "https://www.adkstudios.com/",
				locations: ["Glens Falls, NY", "Dubai", "Orlando", "Shanghai", "LA", "Singapore"],
			},
			"Alt Ethos": {
				keywords: "experiential, metaverse, and event design agency",
				link: "https://altethos.com/",
				locations: ["Denver"],
			},
			"Art + Com": {
				keywords: "media sculptures, data installations, new media",
				link: "https://artcom.de/en/",
				locations: ["Berlin"],
			},
			"Augmented Magic": {
				keywords: "augmented magic shows, digital installations",
				link: "https://www.augmented-magic.com/",
				locations: ["Paris"],
			},
			"BRDG Studios": {
				keywords: "digital moments in physical spaces, retail environments, art galleries, events",
				link: "https://www.brdg.co/",
				locations: ["Philadelphia"],
			},
			"BREAKFAST": {
				keywords: "software-/hardware-driven artworks, flip discs",
				link: "https://breakfastny.com/",
				locations: ["NYC"],
			},
			"Barbarian": {
				keywords: "marketing and advertising, new media",
				link: "https://wearebarbarian.com/",
				locations: ["NYC"],
			},
			"Beaudry Interactive": {
				link: "https://www.binteractive.com/",
				locations: ["LA"],
				keywords: "themed entertainment, museum exhibitions, live shows, and branded experiences",
			},
			"Blackbow": {
				keywords: "projection mapping, digital art and cultural experiences",
				link: "https://www.blackbow.cn/",
				locations: ["Beijing"],
			},
			"Blublu": {
				keywords: "projection mapping, immersive experiences for museums and workspace",
				link: "http://www.blu-blu.com/",
				locations: ["Hangzhou"],
			},
			"Bluecadet": {
				keywords: "experience design across digital and physical environments, visitor centers",
				link: "https://www.bluecadet.com/",
				locations: ["Philadelphia", "NYC"],
			},
			"Breeze Creative": {
				keywords:
					"interactive experience design, family entertainment, museums, playgrounds, educational institutions",
				link: "https://www.breezecreative.com/",
				locations: ["NYC", "Miami"],
			},
			"C&G Partners": {
				keywords:
					"branding, digital installations, exhibits and environments, signage, wayfinding, websites",
				link: "https://www.cgpartnersllc.com/",
				locations: ["NYC"],
			},
			"Charcoalblue": {
				keywords: "amazing spaces where stories are told and experiences are shared",
				link: "https://www.charcoalblue.com/",
				locations: ["NYC", "Melbourne", "Chicago", "UK", "London"],
			},
			"Cinimod Studio": {
				keywords:
					"location based work where technology, environment, content and real life interaction meet",
				link: "https://www.cinimodstudio.com",
				locations: ["London"],
			},
			"Code and Theory": {
				keywords:
					"strategically driven, digital-first agency that lives at the intersection of creativity and technology",
				link: "https://www.codeandtheory.com/",
				locations: ["NYC", "San Francisco", "London", "Manila"],
			},
			"Cognition": {
				keywords:
					"an interactive studio designed to enrich experiences by building creative technology with human empathy",
				link: "https://cognitionlabs.io/",
				locations: ["LA"],
			},
			"Comuzi": {
				keywords: "explore and imagine and prototyp and creatr future-forward creative concepts",
				link: "https://www.comuzi.xyz/",
				locations: ["London"],
			},
			"Deeplocal": {
				keywords: "creative engineers, inventors, interactive experiences, human stories",
				link: "https://www.deeplocal.com/",
				locations: ["Pittsburgh"],
			},
			"Design I/O": {
				keywords:
					"immersive, interactive installations, storytelling, events, galleries, museums, exhibitions and public space",
				link: "https://www.design-io.com/",
				locations: ["NYC", "San Francisco"],
			},
			"Dome": {
				link: "http://www.domecollective.com",
				locations: ["NYC"],
				keywords:
					"experience design studio that gathers designers, technologists, and strategists to solve unusual problems",
			},
			"Digifun": {
				keywords: "projection mapping, new media art education",
				link: "http://www.digitalfun.net/",
				locations: ["Shanghai"],
			},
			"Dimensional Innovations": {
				keywords: "experience design, interactive experiences, brand activation",
				link: "https://dimin.com/",
				locations: ["Kansas City", "Atlanta", "Minneapolis", "Denver", "LA", "Pittsburgh"],
			},
			"Downstream": {
				keywords: "strategy + design + content + technology",
				link: "https://downstream.com/",
				locations: ["Portland", "Amsterdam", "Melbourne"],
			},
			"ESI Design": {
				keywords: "transforms places into experiences, immersive deisgn, architectural scale",
				link: "https://esidesign.nbbj.com/",
				locations: ["NYC"],
			},
			"Envoy": {
				keywords: "transform environments into exceptional experiences, formerly Leviathan",
				link: "https://www.weareenvoy.com/",
				locations: ["Chicago", "LA", "San Diego"],
			},
			"Extrapolation Factory": {
				keywords: "research studio, futures studies, collaborative prototyping",
				link: "https://extrapolationfactory.com/",
				locations: ["NYC"],
			},
			"FIELD": {
				keywords: "future aesthetics for design, motion, experiential",
				link: "https://www.field.io/",
				locations: ["London"],
			},
			"Fake Love (New York Times)": {
				closureReason: "COVID-19",
				keywords: "experiential design, real emotional connections, marketing",
				link: "https://www.nytco.com/products/fake-love/",
				locations: ["NYC"],
			},
			"Fast Horse": {
				keywords: "a truly integrated creative agency",
				link: "https://www.fasthorseinc.com/",
				locations: ["Minneapolis"],
			},
			"Float4": {
				keywords: "integrates digital experiences into physical spaces to amplify their identity",
				link: "https://float4.com/en/",
				locations: ["Montreal", "NYC"],
			},
			"Future Colossal": {
				keywords: "experiential technologies in advertising and entertainment and art",
				link: "https://www.futurecolossal.com/",
				locations: ["NYC"],
			},
			"Gallagher Design": {
				keywords: "harmony between technology, narrative, and physical design",
				link: "https://www.gallagherdesign.com/",
				locations: ["DC", "NYC", "Portland", "Singapore"],
			},
			"Game Seven": {
				keywords: "intersection of sport and culture, brand stories",
				link: "https://www.gamesevenmktg.com/",
				locations: ["NYC", "LA"],
			},
			"Geeksart": {
				keywords: "media sculptures, new media exhibition",
				link: "http://geeks-art.com/",
				locations: ["Guangzhou", "Shanghai"],
			},
			"Giant Spoon": {
				keywords: "translate cultural trends into big ideas, experiential, gaming",
				link: "https://giantspoon.com/",
				locations: ["NYC", "LA"],
			},
			"Hettema Group": {
				keywords: "experiential, exhibit, live shows, theme parks, retail, dining, museums",
				link: "https://thehettemagroup.com/",
				locations: ["LA"],
			},
			"Hotel Creative": {
				keywords: "retail, branding, exhibitions, events",
				link: "https://hotelcreative.com/",
				locations: ["London"],
			},
			"Hovercraft": {
				keywords: "interactive installations, site-specific content, retail, sports",
				link: "https://www.hovercraftstudio.com/",
				locations: ["Denver", "Portland"],
			},
			"Hush Studios": {
				keywords: "marketing and advertising, retail and DTC, archtecture",
				link: "https://heyhush.com/",
				locations: ["NYC"],
			},
			"IMG SRC": {
				keywords: "full-service communication agency focusing on websites, installations, and R&D",
				link: "https://www.imgsrc.co.jp/",
				locations: ["Tokyo"],
			},
			"Intergalactic": {
				link: "https://intergalactic.com",
				locations: ["Vancouver", "London"],
				keywords:
					"mobile apps, interactive screens, web development, application design and visualization",
			},
			"Invisible North": {
				keywords: "culturally fluent, thoughtful experiences, bring brands to life",
				link: "https://www.invisiblenorth.com/",
				locations: ["NYC"],
			},
			"Jam3": {
				keywords: "create modern experiences for tomorrow's brands",
				link: "https://www.jam3.com",
				locations: ["Toronto", "LA", "Montevideo", "Amsterdam"],
			},
			"Jason Sherwood Design": {
				keywords: "television and broadway and concert stage design",
				link: "https://jasonsherwooddesign.com/",
				locations: ["NYC"],
			},
			"Left Field Labs": {
				link: "https://www.leftfieldlabs.com/",
				locations: ["LA"],
				keywords: "products, platforms, and services that solve fundamental human challenges",
			},
			"Listen": {
				keywords: "sensory-driven brand assets, modern cultural landscape, sound, experiences",
				link: "https://wearelisten.com/",
				locations: ["NYC"],
			},
			"Lorem Ipsum": {
				keywords: "experience design, narrative, physical and digital environments",
				link: "https://loremipsumcorp.com/",
				locations: ["NYC", "Moscow", "London"],
			},
			"MSCHF": {
				keywords: "viral stunts and products, trying to do stuff that the world can't even define",
				link: "https://mschf.xyz/",
				locations: ["NYC"],
			},
			"Magnopus": {
				keywords: "unite the physical and digital worlds with extraordinary experiences",
				link: "https://www.magnopus.com/",
				locations: ["LA", "London"],
			},
			"Manifold": {
				keywords: "we hire smart people and get out of their way",
				link: "https://www.wearemanifold.com/",
				locations: ["San Francisco", "LA", "Portland"],
			},
			"Map": {
				keywords: "industrial designers who believe great design can solve problems",
				link: "http://mapprojectoffice.com/",
				locations: ["London"],
			},
			"Marshmallow Laser Feast": {
				keywords: "leaving a slug trail of sensory nuggets as we journey through the cosmos",
				link: "https://www.marshmallowlaserfeast.com/",
				locations: ["London"],
			},
			"Midnight Commercial": {
				keywords: "unite the disparate digital and physical worlds",
				link: "http://midnightcommercial.com/",
				locations: ["NYC"],
			},
			"MindBuffer": {
				keywords: "audiovisual research and digital design studio",
				link: "https://mindbuffer.net/",
				locations: ["Berlin"],
			},
			"Moment Factory": {
				keywords: "shows, destinations, content, interactive, scenography",
				link: "https://momentfactory.com/home",
				locations: ["Montreal", "LA", "London", "Tokyo", "Paris", "NYC"],
			},
			"Momentum Worldwide": {
				keywords:
					"disruptive, entertaining, shareable, unforgettable experiences for clients and their fans",
				link: "https://www.momentumww.com/",
				locations: [
					"NYC",
					"Athens",
					"Atlanta",
					"Bogota",
					"Bucharest",
					"Cairo",
					"Chicago",
					"Dubai",
					"Frankfurt",
					"Gothenburg",
					"Lima",
					"London",
					"Madrid",
					"Manchester",
					"Mexico City",
					"Milan",
					"New Delhi",
					"Santiago",
					"Sao Paulo",
					"Seattle",
					"Seoul",
					"St. Louis",
					"Sydney",
					"Toronto",
					"Tokyo",
				],
			},
			"Motse": {
				keywords: "digital art",
				link: "https://www.behance.net/motseart/projects",
				locations: ["Shenzhen"],
			},
			"NCompass": {
				keywords:
					"brand and marketing solutions creating experiences that integrate the latest technology and creative",
				link: "https://ncompassonline.com/",
				locations: ["LA"],
			},
			"NGX Interactive": {
				keywords: "pushing new technologies to create experiences that are vivid and meaningful",
				link: "https://ngxinteractive.com/",
				locations: ["Vancouver"],
			},
			"NeoPangea": {
				keywords: "microsites, games, VR/AR, digital, social",
				link: "https://www.neopangea.com/",
				locations: ["Reading, PA"],
			},
			"Night Kitchen": {
				keywords: "dynamic digital experiences, online exhibitions, digital strategy, storytelling",
				link: "https://www.whatscookin.com/",
				locations: ["Philadelphia"],
			},
			"Nowhere": {
				keywords: "marketing events, interactive experiences",
				link: "https://studionowhere.com/",
				locations: ["Shanghai"],
			},
			"Oat Foundry": {
				keywords: "split-flap displays, electromechanical stuff, think tank, products, experiences",
				link: "https://www.oatfoundry.com/",
				locations: ["Philadelphia"],
			},
			"Onformative": {
				keywords:
					"studio for digital art and design, challenge the boundaries between art and design and technology",
				link: "https://onformative.com/",
				locations: ["Berlin"],
			},
			"Optimist": {
				keywords:
					"architects of subculture, creative, design, strategy, production, content, brand experience",
				link: "https://optimistinc.com/",
				locations: ["LA", "NYC", "London", "Amsterdam", "Hamburg", "Berlin", "Prague"],
			},
			"Patten Studio": {
				keywords: "informed by research at the MIT Media Lab, experiences that connect people",
				link: "https://www.pattenstudio.com/",
				locations: ["NYC"],
			},
			"Potion Design": {
				keywords: "design and technology studio, interactive, musuems",
				link: "https://www.potiondesign.com/",
				locations: ["NYC"],
			},
			"Rare Volume": {
				keywords: "design and technology studio, interactive video walls",
				link: "https://rarevolume.com/",
				locations: ["NYC"],
			},
			"Red Paper Heart": {
				keywords: "art from real world interaction",
				link: "https://redpaperheart.com",
				locations: ["NYC"],
			},
			"Relative Scale": {
				keywords: "bespoke digital products and experiences for brands and institutions",
				link: "https://relativescale.com/",
				locations: ["Raleigh"],
			},
			"Rosie Lee Creative": {
				keywords: "design, creative, digital and consultancy",
				link: "https://rosieleecreative.com/",
				locations: ["London", "Amsterdam", "NYC"],
			},
			"Second Story": {
				keywords: "exhibition, interactive, software, experience, hardware, VR, AR, projection",
				link: "https://secondstory.com/",
				locations: ["Atlanta", "Portland", "NYC"],
			},
			"Seeeklab": {
				keywords: "marketing events, interactive installation",
				link: "https://www.seeeklab.com/en/",
				locations: ["Xiamen"],
			},
			"SOSO": {
				link: "https://www.sosolimited.com/",
				locations: ["Boston", "San Diego"],
				keywords:
					"delivering real human impact across physical and virtual space, placemaking and storytelling",
			},
			"space150": {
				link: "https://www.space150.com/",
				locations: ["Minneapolis", "LA", "NYC"],
				keywords: "a tech-driven creative agency",
			},
			"Special Projects": {
				keywords:
					"design and innovation agency that reveals user needs and transforms them into experiences and products",
				link: "https://specialprojects.studio/",
				locations: ["London"],
			},
			"Spectacle": {
				keywords: "expertise in fabricating experiences that drive engagement and wow participants",
				link: "https://spectacle.works/",
				locations: ["Phoenix"],
			},
			"Staat": {
				keywords:
					"branding, editorial, event, film, graphic design, illustration, installation, interactive, interior design, production, retail",
				link: "https://www.staat.com/",
				locations: ["Amsterdam"],
			},
			"Stimulant": {
				keywords:
					"experience design and interactive installation, human-scale, site-specific digital experiences and touchscreen applications",
				link: "https://stimulant.com/",
				locations: ["San Francisco"],
			},
			"StoreyStudio": {
				keywords: "spatial design, set design, window displays, moving image",
				link: "https://www.storeystudio.com/",
				locations: ["London"],
			},
			"Studio Black": {
				keywords: "technical production, design advisory, content management, digital content",
				link: "https://www.studioblack.org/",
				locations: ["LA", "NYC"],
			},
			"Studio Elsewhere": {
				keywords: "bio-experiential design and technology to support brain health",
				link: "https://www.studioelsewhere.co/",
				locations: ["NYC"],
			},
			"Superfly": {
				keywords: "create shared experiences that shape how the world plays & connects",
				link: "https://superf.ly/",
				locations: ["NYC"],
			},
			"S1T2": {
				link: "https://s1t2.com/",
				locations: ["Sydney", "Melbourne", "Shanghai"],
				keywords:
					"We create interactive experiences that immerse audiences in the future of storytelling through technology.",
			},
			"TAD": {
				link: "https://technologyarchitecturedesign.com/",
				locations: ["NYC", "London"],
				keywords: "digital experiences, technology and architecture, designed to inspire people.",
			},
			"Team Epiphany": {
				keywords: "influencer marketing, IRL, vertical integration",
				link: "https://www.teamepiphany.com/",
				locations: ["NYC", "LA"],
			},
			"Tellart": {
				keywords:
					"transformative experiences, invention, physical & digital experiences, new technologies",
				link: "https://www.tellart.com/",
				locations: ["Providence", "Amsterdam", "San Francisco"],
			},
			"The Gathery": {
				keywords:
					"editorially-born creative agency specializing in brand marketing and content creation",
				link: "http://www.thegathery.com/",
				locations: ["NYC"],
			},
			"The Lab at Rockwell Group": {
				keywords: "architecture and design, branded experiences, immersive environments, pop ups",
				link: "https://www.labatrockwellgroup.com",
				locations: ["NYC"],
			},
			"The Projects": {
				keywords: "brand consultancy, meaningful experiences, tell stories",
				link: "http://theprojects.com/",
				locations: ["London", "LA", "NYC", "Sydney"],
			},
			"Thinkwell": {
				keywords:
					"strategy, experience design, production, master planning, entertainment destinations, branded attractions, interactive media installations, events, museums, expos",
				link: "https://thinkwellgroup.com/",
				locations: ["LA", "Montreal", "Abu Dhabi", "Riyadh"],
			},
			"Tool": {
				keywords:
					"help brands and agencies with ideation, content, and experience production that generate buzz",
				link: "https://www.toolofna.com/",
				locations: ["LA"],
			},
			"Trivium Interactive": {
				keywords: "experience design and production",
				link: "https://www.triviuminteractive.com/",
				locations: ["Boston"],
			},
			"Two Goats": {
				keywords: "AR, interactive branded experiences",
				link: "https://www.twogoats.us/",
				locations: ["NYC", "LA", "London"],
			},
			"UNIT9": {
				keywords:
					"innovation architects, product designers, software engineers, gaming experts, creatives, art directors, designers, producers and film directors",
				link: "https://www.unit9.com/",
				locations: ["London", "LA", "NYC", "Berlin"],
			},
			"Unified Field": {
				keywords:
					"content-rich, experiential and interactive media for digital branding, media environments, and exhibits in public spaces",
				link: "https://www.unifiedfield.com/",
				locations: ["NYC"],
			},
			"Upswell": {
				keywords: "digital and physical content first experiences",
				link: "https://hello-upswell.com/",
				locations: ["Portland"],
			},
			"VTProDesign": {
				keywords: "high tech robotics and projection mapping",
				link: "https://vtprodesign.com/",
				locations: ["LA"],
			},
			"VVOX": {
				keywords: "high-end design, code, fabrication, sound",
				link: "https://volvoxlabs.com/",
				locations: ["NYC", "LA"],
			},
			"We Are Royale": {
				keywords:
					"frontlines of design & technology to arm brands with the creative to turn audiences into advocates",
				link: "https://weareroyale.com/",
				locations: ["LA", "Seattle"],
			},
			"We're Magnetic": {
				closureReason: "COVID-19",
				keywords: "immersive, authentic, culturally relevant experiences",
				link: "https://weremagnetic.com/",
				locations: ["NYC", "London", "LA"],
			},
			"Wonderlabs": {
				keywords: "marketing events, interactive installation",
				link: "https://www.wonderlabsstudio.com/",
				locations: ["Shanghai"],
			},
			"XORXOR": {
				keywords:
					"collaboration between scientists, engineers, artists and robots, real-time visuals meet complex design",
				link: "https://www.xorxor.hu",
				locations: ["Budapest"],
			},
			"Yellow Studio": {
				keywords: "artistically-minded design, tv/concert/event production design, set design",
				link: "https://yellowstudio.com/",
				locations: ["NYC"],
			},
			"dotdotdash": {
				keywords: "innovation agency that seamlessly blends the physical and digital",
				link: "https://dotdotdash.io/",
				locations: ["Portland", "LA", "NYC"],
			},
			"fuse": {
				keywords: "live-media performances, experimentation, electronic music, digital arts",
				link: "https://www.fuseworks.it/en/",
				locations: ["Modena, Italy"],
			},
			"m ss ng p eces": {
				keywords:
					"new wave production and entertainment partner for content and immersive experiences that inspire culture",
				link: "https://mssngpeces.com/",
				locations: ["NYC", "LA"],
			},
			"mycotoo": {
				keywords:
					"entertainment development company specializing in theme park design, immersive experiences, and best-in-class events worldwide",
				link: "https://mycotoo.com/",
				locations: ["LA", "Barcelona"],
			},
			"pretty bloody simple": {
				keywords: "interactive experiences, analog and digital, musuems",
				link: "https://www.prettybloodysimple.com",
				locations: ["Munich"],
			},
		},
	},
	{
		title: "Collectives & Practices",
		description:
			"Established artist collectives/practices that work with creative technology (here primarily for reference, not necessarily for career opportunities).",
		rows: {
			"The Cuttelfish": {
				link: "https://www.thecuttlefish.com/",
				locations: ["USA"],
				keywords: "explore and imagine and prototyp and creatr future-forward creative concepts",
			},
			"Dave + Gabe": {
				link: "https://www.daveandgabe.care/",
				locations: ["NYC"],
				keywords: "interactive installation studio, real-time animation, generative 3D sound",
			},
			"NONOTAK Studio": {
				link: "https://www.nonotak.com/",
				locations: ["Paris"],
				keywords: "light and sound installations, ethereal, immersive, dreamlike",
			},
			"panGenerator": {
				link: "https://pangenerator.com/",
				locations: ["Warsaw"],
				keywords: "new media art and design collective, mixing bits & atoms",
			},
			"Random International": {
				link: "https://www.random-international.com/",
				locations: ["London", "Berlin"],
				keywords:
					"experimental practice within contemporary art, human condition in an increasingly mechanised world",
			},
			"Smooth Technology": {
				link: "https://smooth.technology/",
				locations: ["NYC"],
				keywords:
					"cutting-edge technology and artistic sensibility, wireless wearables, create the impossible",
			},
			"teamLab": {
				link: "https://www.teamlab.art/",
				locations: ["Tokyo"],
				keywords:
					"full-room interactive projection mapping, interdisciplinary group of ultratechnologists",
			},
			"Taller Estampa": {
				link: "https://www.tallerestampa.com",
				locations: ["Barcelona"],
				keywords:
					"group of filmmakers, programmers and researchers who work in the fields of experimental audiovisual and digital environments.",
			},
			"United Visual Artists": {
				link: "https://www.uva.co.uk/",
				locations: ["London"],
				keywords:
					"new technologies with traditional media, site-specific, instruments that manipulate perception",
			},
			"WHYIXD": {
				link: "https://www.whyixd.com/",
				locations: ["Taiwan"],
				keywords: "cross-disciplinary art installations, dance, architecture, music",
			},
			"Zebradog": {
				link: "https://www.zebradog.com/",
				locations: ["Madison"],
				keywords: "communication design and the built environment, higher education",
			},
		},
	},
	{
		title: "Experiential Spaces & Experiences",
		description: "Groups that create experential spaces & experiences full of creative technology.",
		rows: {
			"29 Rooms (Vice Media Group)": {
				link: "https://www.29rooms.com/",
				locations: ["USA"],
				keywords: "multi-sensory installations, performances, and workshops",
			},
			"Cascade": {
				link: "https://cascadeshow.com/",
				locations: ["LA"],
				keywords: "interactive art experience",
			},
			"Color Factory": {
				link: "https://www.colorfactory.co/",
				locations: ["NYC", "Houston"],
				keywords: "collaborative interactive exhibit",
			},
			"Meow Wolf": {
				link: "https://meowwolf.com/",
				locations: ["Santa Fe"],
				keywords:
					"immersive and interactive experiences that transport audiences of all ages into fantastic realms of story and exploration",
			},
			"Museum of Ice Cream": {
				link: "https://www.museumoficecream.com/",
				locations: ["San Francisco", "NYC"],
				keywords:
					"transforms concepts and dreams into spaces that provoke imagination and creativity",
			},
			"PopUpMob": {
				link: "https://popupmob.com/",
				locations: ["NYC", "LA", "London", "Paris"],
				keywords: "one-stop shop for pop up experiences",
			},
			"Studio Daguet": {
				link: "https://www.daguet-staging.com/",
				locations: ["Nantes", "Paris"],
				keywords:
					"Staging stories. Show, music, theme parks, museums, hotels",
			},
		},
	},
	{
		title: "Fabricators",
		description: "Groups that mostly fabricate pieces for creative technology companies.",
		rows: {
			"Bednark": {
				link: "https://builtbybednark.com/",
				locations: ["NYC"],
				keywords: "full-service fabrication, production, install",
			},
			"Pink Sparrow": {
				link: "https://www.pinksparrow.com/",
				locations: ["NYC", "LA"],
				keywords: "environmental design, project management",
			},
			"Visionary Effects": {
				link: "http://www.visionaryeffects.com/",
				locations: ["Pittsburgh"],
				keywords: "old-school manufacturing processes with digital design and fabrication",
			},
		},
	},
	{
		title: "Event Production",
		description:
			"Groups that specialize in event production, often with a creative technology twist.",
		rows: {
			"Dera Lee Productions": {
				link: "http://www.deralee.com/",
				locations: ["NYC"],
				keywords: "theatre arts, story-telling",
			},
			"GPJ": {
				link: "https://www.gpj.com/",
				locations: [
					"Austin",
					"Boston",
					"Dallas",
					"Detroit",
					"LA",
					"Nashville",
					"NYC",
					"San Francisco",
					"Silicon Valley",
				],
				keywords: "immersive events and experiences",
			},
			"Sparks": {
				link: "https://wearesparks.com/",
				locations: [
					"Philadelphia",
					"Detroit",
					"Connecticut",
					"Atlanta",
					"LA",
					"Las Vegas",
					"NYC",
					"San Francisco",
					"Shanghai",
				],
				keywords: "trade show, experiential, retail",
			},
		},
	},
	{
		title: "Architecture",
		description:
			"Groups that generally design architecture often incorporating creative technology.",
		rows: {
			"Carlo Ratti Associatti": {
				link: "https://carloratti.com/",
				locations: ["Torino, Italy", "NYC", "UK"],
				keywords: "design and innovation office, MIT Media Lab: Senseable City Lab",
			},
			"Gensler": {
				link: "https://dxd.gensler.com/",
				locations: ["Worldwide"],
				keywords:
					"built environment with integrated capabilities in strategy, design, technology, data, and architecture",
			},
			"Olson Kundig": {
				link: "https://olsonkundig.com/",
				locations: ["Seattle", "NYC"],
				keywords:
					"architecture, vessel that supports specific art installations, seamless spatial experience",
			},
			"SOFTlab": {
				link: "https://softlabnyc.com/",
				locations: ["NYC"],
				keywords:
					"mixes research and creativity and technology with a strong desire to make working fun",
			},
			"Universal Design Studio": {
				link: "http://www.universaldesignstudio.com/",
				locations: ["London", "NYC"],
				keywords:
					"driven by a deeply held belief in the transformative power of well designed and finely crafted spaces",
			},
		},
	},
	{
		title: "Creative Agencies",
		description:
			"Groups that are have a more general focus, but have a knack for projects imbued with creative technology.",
		rows: {
			"&Walsh": {
				link: "https://andwalsh.com/",
				locations: ["NYC"],
				keywords: "brand strategy, art direction, design and production across all platforms",
			},
			"Framestore": {
				link: "https://www.framestore.com/",
				locations: ["London", "NYC", "Montreal"],
				keywords:
					"virtual, augmented and mixed realities, location-based entertainment, and theme park rides",
			},
			"ManvsMachine": {
				link: "https://mvsm.com/",
				locations: ["London", "LA"],
				keywords: "multidimensional creative studio",
			},
			"Media Monks": {
				link: "https://www.mediamonks.com/",
				locations: [
					"Amsterdam",
					"London",
					"Dubai",
					"Stockholm",
					"NYC",
					"LA",
					"San Francisco",
					"Mexico City",
					"São Paulo",
					"Buenos Aires",
					"Shanghai",
					"Singapore",
				],
				keywords: "creative production",
			},
			"R/GA": {
				link: "https://www.rga.com/",
				locations: [
					"Austin",
					"Chicago",
					"LA",
					"NYC",
					"Portland",
					"San Francisco",
					"Berlin",
					"Bucharest",
					"London",
					"Buenos Aires",
					"Santiago",
					"São Paulo",
					"Melbourne",
					"Shanghai",
					"Singapore",
					"Sydney",
					"Tokyo",
				],
				keywords: "business, experience, and marketing transformation",
			},
			"SuperUber": {
				link: "https://www.superuber.com/",
				locations: ["Rio de Janeiro", "São Paulo"],
				keywords: "experiences that blend art, technology, architecture and design",
			},
			"The Mill": {
				link: "https://www.themill.com/",
				locations: ["London", "NYC", "LA", "Chicago", "Bangalore", "Berlin"],
				keywords:
					"experience makers, media and brand activation, innovative design, and inventive technologies",
			},
		},
	},
	{
		title: "Museums",
		description:
			"Groups that generally focus on designing museums and similar experiences using creative technology.",
		rows: {
			"Art Processors": {
				link: "https://www.artprocessors.net/",
				locations: ["Melbourne"],
				keywords: "specialist interactive media and exhibition design",
			},
			"Cortina Productions": {
				link: "https://www.cortinaproductions.com/",
				locations: ["McLean, VA"],
				keywords:
					"artistry, content, and technology, we render the word to the story, the story to the medium, and the medium to the space.",
			},
			"Exploratorium": {
				link: "https://www.exploratorium.edu/",
				locations: ["San Francisco"],
				keywords: "exhibits made in-house, public-facing workshop",
			},
			"GSM Project": {
				link: "https://gsmproject.com/en/",
				locations: ["Montreal", "Singapore", "Dubai"],
				keywords: "content first, exhibitions",
			},
			"Ideum": {
				link: "https://www.ideum.com/",
				locations: ["Albuquerque"],
				keywords: "interactive exhibits and exhibitions, integrated hardware products",
			},
			"Iglhaut + von Grote": {
				link: "http://iglhaut-vongrote.de/en/",
				locations: ["Berlin"],
				keywords: "scenography, spatial mise-en-scène",
			},
			"Local Projects": {
				link: "https://localprojects.com/",
				locations: ["NYC"],
				keywords: "experience Designers pushing the boundaries of human interaction",
			},
			"Monadnock Media": {
				link: "https://monadnock.org/",
				locations: ["Massachusetts"],
				keywords: "multimedia experiences for museums, historic sites and public places",
			},
			"Northern Light Productions": {
				link: "https://nlprod.com/",
				locations: ["Boston"],
				keywords: "immersive media environments, interactive experiences, or documentary films.",
			},
			"Roto": {
				link: "https://roto.com/",
				locations: ["Columbus, OH"],
				keywords:
					"experience design, immersive media, interactive engineering, and custom fabrication for museums, brands, attractions and architectural placemaking.",
			},
			"Thinc": {
				link: "https://www.thincdesign.com/",
				locations: ["NYC"],
				keywords: "provoke meaningful conversations about the world in which we live",
			},
		},
	},
	{
		title: "Festivals & Conferences",
		description: "Meetups for creative technologists.",
		rows: {
			Eyeo: {
				link: "https://www.eyeofestival.com/",
				locations: ["Melbourne"],
				keywords: "a gathering for the creative technology community",
			},
			ISEA: {
				link: "https://isea2022.isea-international.org/",
				locations: ["Barcelona", "Paris"],
				keywords: "the crossroads where art, design, science, technology and society meet",
			},
			SXSW: {
				link: "https://www.sxsw.com/",
				locations: ["Austin"],
				keywords: "film, music, interactive arts",
			},
		},
	},
	{
		title: "Education",
		description:
			"Undergrad programs, masters and open course teaching and researching creative technologies",
		rows: {
			"ITP": {
				link: "https://tisch.nyu.edu/itp",
				locations: ["NYC"],
				keywords:
					"ITP/IMA offers four programs focused on creative and meaningful application of interactive tools and media.",
			},
			"Goldsmiths": {
				link: "https://www.gold.ac.uk/pg/ma-computational-arts/",
				locations: ["London"],
				keywords:
					"a degree which develops your arts practice through the expressive world of creative computation",
			},
			"MIT Medialab": {
				link: "https://media.mit.edu/",
				locations: ["Boston"],
				keywords:
					"art, science, design, and technology build and play off one another in an environment designed for collaboration and inspiration",
			},
			"Paris College of Art": {
				link: "https://www.paris.edu/programs/graduate/master-transdisciplinary-new-media/",
				locations: ["Paris"],
				keywords:
					"designed for those who are interested in exploring the wide-ranging creative field of New Media",
			},
			"University of the Arts": {
				link: "https://www.arts.ac.uk/subjects/creative-computing/postgraduate/mres-creative-computing",
				locations: ["London"],
				keywords: "computational technologies in the context of creative computing research",
			},
		},
	},
];

generateReadme(list);
generateClosedReadme(list);
