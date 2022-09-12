import { generateClosedReadme, generateReadme } from "./generate-readme";
import { List } from "./types";

const list: List = [
	{
		title: "Creative Technology",
		rows: {
			"Spectacle": {
				link: "https://spectacle.works/",
				locations: ["Phoenix"],
				keywords: "expertise in fabricating experiences that drive engagement and wow participants",
			},
			"Cognition": {
				link: "https://cognitionlabs.io/",
				locations: ["LA"],
				keywords:
					"an interactive studio designed to enrich experiences by building creative technology with human empathy",
			},
			"1024 Architecture": {
				link: "https://www.1024architecture.net/",
				locations: ["Paris"],
				keywords: "architectural and digital works, orchestrated sound and light scores",
			},
			"Alt Ethos": {
				link: "https://altethos.com/",
				locations: ["Denver"],
				keywords: "experiential, metaverse, and event design agency",
			},
			"Art + Com": {
				link: "https://artcom.de/en/",
				locations: ["Berlin"],
				keywords: "media sculptures, data installations, new media",
			},
			"Augmented Magic": {
				link: "https://www.augmented-magic.com/",
				locations: ["Paris"],
				keywords: "augmented magic shows, digital installations",
			},
			"AV Controls": {
				link: "https://www.av-controls.com/",
				locations: ["NYC"],
				keywords: "site-specific technology installations, digital landmarks",
			},
			"Barbarian": {
				link: "https://wearebarbarian.com/",
				locations: ["NYC"],
				keywords: "marketing and advertising, new media",
			},
			"Blackbow": {
				link: "https://www.blackbow.cn/",
				locations: ["Beijing"],
				keywords: "projection mapping, digital art and cultural experiences",
			},
			"Blublu": {
				link: "http://www.blu-blu.com/",
				locations: ["Hangzhou"],
				keywords: "projection mapping, immersive experiences for museums and workspace",
			},
			"Blue Cadet": {
				link: "https://www.bluecadet.com/",
				locations: ["Philadelphia", "NYC"],
				keywords: "experience design across digital and physical environments, visitor centers",
			},
			"BREAKFAST": {
				link: "https://breakfastny.com/",
				locations: ["NYC"],
				keywords: "software-/hardware-driven artworks, flip discs",
			},
			"Breeze Creative": {
				link: "https://www.breezecreative.com/",
				locations: ["NYC", "Miami"],
				keywords:
					"interactive experience design, family entertainment, museums, playgrounds, educational institutions",
			},
			"BRDG Studios": {
				link: "https://www.brdg.co/",
				locations: ["Philadelphia"],
				keywords: "digital moments in physical spaces, retail environments, art galleries, events",
			},
			"C&G Partners": {
				link: "https://www.cgpartnersllc.com/",
				locations: ["NYC"],
				keywords:
					"branding, digital installations, exhibits and environments, signage, wayfinding, websites",
			},
			"Cinimod Studio": {
				link: "https://www.cinimodstudio.com",
				locations: ["London"],
				keywords:
					"location based work where technology, environment, content and real life interaction meet",
			},
			"Comuzi": {
				link: "https://www.comuzi.xyz/",
				locations: ["London"],
				keywords: "explore and imagine and prototyp and creatr future-forward creative concepts",
			},
			"Deeplocal": {
				link: "https://www.deeplocal.com/",
				locations: ["Pittsburgh"],
				keywords: "creative engineers, inventors, interactive experiences, human stories",
			},
			"Design I/O": {
				link: "https://www.design-io.com/",
				locations: ["NYC", "San Francisco"],
				keywords:
					"immersive, interactive installations, storytelling, events, galleries, museums, exhibitions and public space",
			},
			"Dimensional Innovations": {
				link: "https://dimin.com/",
				locations: ["Kansas City", "Atlanta", "Minneapolis", "Denver", "Los Angeles", "Pittsburgh"],
				keywords: "experience design, interactive experiences, brand activation",
			},
			"Dome": {
				link: "http://www.domecollective.com",
				locations: ["NYC"],
				keywords:
					"experience design studio that gathers designers, technologists, and strategists to solve unusual problems",
			},
			"Digifun": {
				link: "http://www.digitalfun.net/",
				locations: ["Shanghai"],
				keywords: "projection mapping, new media art education",
			},
			"dotdotdash": {
				link: "https://dotdotdash.io/",
				locations: ["Portland", "LA", "NYC"],
				keywords: "innovation agency that seamlessly blends the physical and digital",
			},
			"Downstream": {
				link: "https://downstream.com/",
				locations: ["Portland", "Amsterdam", "Melbourne"],
				keywords: "strategy + design + content + technology",
			},
			"Envoy": {
				link: "https://www.weareenvoy.com/",
				locations: ["Chicago", "LA", "San Diego"],
				keywords: "transform environments into exceptional experiences, formerly Leviathan",
			},
			"ESI Design": {
				link: "https://esidesign.nbbj.com/",
				locations: ["NYC"],
				keywords: "transforms places into experiences, immersive deisgn, architectural scale",
			},
			"Extrapolation Factory": {
				link: "https://extrapolationfactory.com/",
				locations: ["NYC"],
				keywords: "research studio, futures studies, collaborative prototyping",
			},
			"Fast Horse": {
				link: "https://www.fasthorseinc.com/",
				locations: ["Minneapolis"],
				keywords: "a truly integrated creative agency",
			},
			"FIELD": {
				link: "https://www.field.io/",
				locations: ["London"],
				keywords: "future aesthetics for design, motion, experiential",
			},
			"Float4": {
				link: "https://float4.com/en/",
				locations: ["Montreal", "NYC"],
				keywords: "integrates digital experiences into physical spaces to amplify their identity",
			},
			"fuse": {
				link: "https://www.fuseworks.it/en/",
				locations: ["Modena, Italy"],
				keywords: "live-media performances, experimentation, electronic music, digital arts",
			},
			"Future Colossal": {
				link: "https://www.futurecolossal.com/",
				locations: ["NYC"],
				keywords: "experiential technologies in advertising and entertainment and art",
			},
			"Gallagher Design": {
				link: "https://www.gallagherdesign.com/",
				locations: ["DC", "NYC", "Portland", "Singapore"],
				keywords: "harmony between technology, narrative, and physical design",
			},
			"Game Seven": {
				link: "https://www.gamesevenmktg.com/",
				locations: ["NYC", "LA"],
				keywords: "intersection of sport and culture, brand stories",
			},
			"Geeksart": {
				link: "http://geeks-art.com/",
				locations: ["Guangzhou", "Shanghai"],
				keywords: "media sculptures, new media exhibition",
			},
			"Giant Spoon": {
				link: "https://giantspoon.com/",
				locations: ["NYC", "LA"],
				keywords: "translate cultural trends into big ideas, experiential, gaming",
			},
			"Hotel Creative": {
				link: "https://hotelcreative.com/",
				locations: ["London"],
				keywords: "retail, branding, exhibitions, events",
			},
			"Hovercraft": {
				link: "https://www.hovercraftstudio.com/",
				locations: ["Denver", "Portland"],
				keywords: "interactive installations, site-specific content, retail, sports",
			},
			"Hush Studios": {
				link: "https://heyhush.com/",
				locations: ["NYC"],
				keywords: "marketing and advertising, retail and DTC, archtecture",
			},
			"Invisible North": {
				link: "https://www.invisiblenorth.com/",
				locations: ["NYC"],
				keywords: "culturally fluent, thoughtful experiences, bring brands to life",
			},
			"Jam3": {
				link: "https://www.jam3.com",
				locations: ["Toronto", "LA", "Montevideo", "Amsterdam"],
				keywords: "create modern experiences for tomorrow's brands",
			},
			"Listen": {
				link: "https://wearelisten.com/",
				locations: ["NYC"],
				keywords: "sensory-driven brand assets, modern cultural landscape, sound, experiences",
			},
			"Lorem Ipsum": {
				link: "https://loremipsumcorp.com/",
				locations: ["NYC", "Moscow", "London"],
				keywords: "experience design, narrative, physical and digital environments",
			},
			"Manifold": {
				link: "https://www.wearemanifold.com/",
				locations: ["San Francisco", "LA", "Portland"],
				keywords: "we hire smart people and get out of their way",
			},
			"Map": {
				link: "http://mapprojectoffice.com/",
				locations: ["London"],
				keywords: "industrial designers who believe great design can solve problems",
			},
			"Marshmallow Laser Feast": {
				link: "https://www.marshmallowlaserfeast.com/",
				locations: ["London"],
				keywords: "leaving a slug trail of sensory nuggets as we journey through the cosmos",
			},
			"Midnight Commercial": {
				link: "http://midnightcommercial.com/",
				locations: ["NYC"],
				keywords: "unite the disparate digital and physical worlds",
			},
			"MindBuffer": {
				link: "https://mindbuffer.net/",
				locations: ["Berlin"],
				keywords: "audiovisual research and digital design studio",
			},
			"Moment Factory": {
				link: "https://momentfactory.com/home",
				locations: ["Montreal", "LA", "London", "Tokyo", "Paris", "NYC"],
				keywords: "shows, destinations, content, interactive, scenography",
			},
			"Motse": {
				link: "https://www.behance.net/motseart/projects",
				locations: ["Shenzhen"],
				keywords: "digital art",
			},
			"MSCHF": {
				link: "https://mschf.xyz/",
				locations: ["NYC"],
				keywords: "viral stunts and products, trying to do stuff that the world can't even define",
			},
			"NeoPangea": {
				link: "https://www.neopangea.com/",
				locations: ["Reading, PA"],
				keywords: "microsites, games, VR/AR, digital, social",
			},
			"NGX Interactive": {
				link: "https://ngxinteractive.com/",
				locations: ["Vancouver"],
				keywords: "pushing new technologies to create experiences that are vivid and meaningful",
			},
			"Night Kitchen": {
				link: "https://www.whatscookin.com/",
				locations: ["Philadelphia"],
				keywords: "dynamic digital experiences, online exhibitions, digital strategy, storytelling",
			},
			"Nowhere": {
				link: "https://studionowhere.com/",
				locations: ["Shanghai"],
				keywords: "marketing events, interactive experiences",
			},
			"Oat Foundry": {
				link: "https://www.oatfoundry.com/",
				locations: ["Philadelphia"],
				keywords: "split-flap displays, electromechanical stuff, think tank, products, experiences",
			},
			"Onformative": {
				link: "https://onformative.com/",
				locations: ["Berlin"],
				keywords:
					"studio for digital art and design, challenge the boundaries between art and design and technology",
			},
			"Optimist": {
				link: "https://optimistinc.com/",
				locations: ["LA", "NYC", "London", "Amsterdam", "Hamburg", "Berlin", "Prague"],
				keywords:
					"architects of subculture, creative, design, strategy, production, content, brand experience",
			},
			"Patten Studio": {
				link: "https://www.pattenstudio.com/",
				locations: ["NYC"],
				keywords: "informed by research at the MIT Media Lab, experiences that connect people",
			},
			"Potion Design": {
				link: "https://www.potiondesign.com/",
				locations: ["NYC"],
				keywords: "design and technology studio, interactive, musuems",
			},
			"pretty bloody simple": {
				link: "https://www.prettybloodysimple.com",
				locations: ["Munich"],
				keywords: "interactive experiences, analog and digital, musuems",
			},
			"Rare Volume": {
				link: "https://rarevolume.com/",
				locations: ["NYC"],
				keywords: "design and technology studio, interactive video walls",
			},
			"Red Paper Heart": {
				link: "https://redpaperheart.com",
				locations: ["NYC"],
				keywords: "art from real world interaction",
			},
			"Relative Scale": {
				link: "https://relativescale.com/",
				locations: ["Raleigh"],
				keywords: "bespoke digital products and experiences for brands and institutions",
			},
			"The Lab at Rockwell Group": {
				link: "https://www.labatrockwellgroup.com",
				locations: ["NYC"],
				keywords: "architecture and design, branded experiences, immersive environments, pop ups",
			},
			"Rosie Lee Creative": {
				link: "https://rosieleecreative.com/",
				locations: ["London", "Amsterdam", "NYC"],
				keywords: "design, creative, digital and consultancy",
			},
			"Second Story": {
				link: "https://secondstory.com/",
				locations: ["Atlanta", "Portland", "NYC"],
				keywords: "exhibition, interactive, software, experience, hardware, VR, AR, projection",
			},
			"Seeeklab": {
				link: "https://www.seeeklab.com/en/",
				locations: ["Xiamen"],
				keywords: "marketing events, interactive installation",
			},
			"space150": {
				link: "https://www.space150.com/",
				locations: ["Minneapolis", "LA", "NYC"],
				keywords: "a tech-driven creative agency",
			},
			"Staat": {
				link: "https://www.staat.com/",
				locations: ["Amsterdam"],
				keywords:
					"branding, editorial, event, film, graphic design, illustration, installation, interactive, interior design, production, retail",
			},
			"Stimulant": {
				link: "https://stimulant.com/",
				locations: ["San Francisco"],
				keywords:
					"experience design and interactive installation, human-scale, site-specific digital experiences and touchscreen applications",
			},
			"StoreyStudio": {
				link: "https://www.storeystudio.com/",
				locations: ["London"],
				keywords: "spatial design, set design, window displays, moving image",
			},
			"Studio Black": {
				link: "https://www.studioblack.org/",
				locations: ["LA", "NYC"],
				keywords: "technical production, design advisory, content management, digital content",
			},
			"Team Epiphany": {
				link: "https://www.teamepiphany.com/",
				locations: ["NYC", "LA"],
				keywords: "influencer marketing, IRL, vertical integration",
			},
			"Tellart": {
				link: "https://www.tellart.com/",
				locations: ["Providence", "Amsterdam", "San Francisco"],
				keywords:
					"transformative experiences, invention, physical & digital experiences, new technologies",
			},
			"The Gathery": {
				link: "http://www.thegathery.com/",
				locations: ["NYC"],
				keywords:
					"editorially-born creative agency specializing in brand marketing and content creation",
			},
			"The Projects": {
				link: "http://theprojects.com/",
				locations: ["London", "LA", "NYC", "Sydney"],
				keywords: "brand consultancy, meaningful experiences, tell stories",
			},
			"Two Goats": {
				link: "https://www.twogoats.us/",
				locations: ["NYC", "LA", "London"],
				keywords: "AR, interactive branded experiences",
			},
			"Trivium Interactive": {
				link: "https://www.triviuminteractive.com/",
				locations: ["Boston"],
				keywords: "experience design and production",
			},
			"UNIT9": {
				link: "https://www.unit9.com/",
				locations: ["London", "LA", "NYC", "Berlin"],
				keywords:
					"innovation architects, product designers, software engineers, gaming experts, creatives, art directors, designers, producers and film directors",
			},
			"Unified Field": {
				link: "https://www.unifiedfield.com/",
				locations: ["NYC"],
				keywords:
					"content-rich, experiential and interactive media for digital branding, media environments, and exhibits in public spaces",
			},
			"Upswell": {
				link: "https://hello-upswell.com/",
				locations: ["Portland"],
				keywords: "digital and physical content first experiences",
			},
			"VTProDesign": {
				link: "https://vtprodesign.com/",
				locations: ["LA"],
				keywords: "high tech robotics and projection mapping",
			},
			"VVOX": {
				link: "https://volvoxlabs.com/",
				locations: ["NYC", "LA"],
				keywords: "high-end design, code, fabrication, sound",
			},
			"Wonderlabs": {
				link: "https://www.wonderlabsstudio.com/",
				locations: ["Shanghai"],
				keywords: "marketing events, interactive installation",
			},
			"XORXOR": {
				link: "https://www.xorxor.hu",
				locations: ["Budapest"],
				keywords:
					"collaboration between scientists, engineers, artists and robots, real-time visuals meet complex design",
			},
			"Yellow Studio": {
				link: "https://yellowstudio.com/",
				locations: ["NYC"],
				keywords: "artistically-minded design, tv/concert/event production design, set design",
			},
			"Adirondack Studios": {
				link: "https://www.adkstudios.com/",
				locations: ["Glens Falls, NY", "Dubai", "Orlando", "Shanghai", "LA", "Singapore"],
				keywords: "concept, schematic, design, construction, fabrication, installation, support",
			},
			"Charcoalblue": {
				link: "https://www.charcoalblue.com/",
				locations: ["NYC", "Melbourne", "Chicago", "UK", "London"],
				keywords: "amazing spaces where stories are told and experiences are shared",
			},
			"Hettema Group": {
				link: "https://thehettemagroup.com/",
				locations: ["LA"],
				keywords: "experiential, exhibit, live shows, theme parks, retail, dining, museums",
			},
			"Jason Sherwood Design": {
				link: "https://jasonsherwooddesign.com/",
				locations: ["NYC"],
				keywords: "television and broadway and concert stage design",
			},
			"We're Magnetic": {
				link: "https://weremagnetic.com/",
				locations: ["NYC", "London", "LA"],
				keywords: "immersive, authentic, culturally relevant experiences",
				closureReason: "COVID-19",
			},
			"Fake Love (New York Times)": {
				link: "https://www.nytco.com/products/fake-love/",
				locations: ["NYC"],
				keywords: "experiential design, real emotional connections, marketing",
				closureReason: "COVID-19",
			},
			"Magnopus": {
				link: "https://www.magnopus.com/",
				locations: ["LA", "London"],
				keywords: "unite the physical and digital worlds with extraordinary experiences",
			},
			"Code and Theory": {
				link: "https://www.codeandtheory.com/",
				locations: ["NYC", "San Francisco", "London", "Manila"],
				keywords:
					"strategically driven, digital-first agency that lives at the intersection of creativity and technology",
			},
			"Tool": {
				link: "https://www.toolofna.com/",
				locations: ["LA"],
				keywords:
					"help brands and agencies with ideation, content, and experience production that generate buzz",
			},
			"Thinkwell": {
				link: "https://thinkwellgroup.com/",
				locations: ["LA", "Montreal", "Abu Dhabi", "Riyadh"],
				keywords:
					"strategy, experience design, production, master planning, entertainment destinations, branded attractions, interactive media installations, events, museums, expos",
			},
			"mycotoo": {
				link: "https://mycotoo.com/",
				locations: ["LA", "Barcelona"],
				keywords:
					"entertainment development company specializing in theme park design, immersive experiences, and best-in-class events worldwide",
			},
			"NCompass": {
				link: "https://ncompassonline.com/",
				locations: ["LA"],
				keywords:
					"brand and marketing solutions creating experiences that integrate the latest technology and creative",
			},
			"Momentum Worldwide": {
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
				keywords:
					"disruptive, entertaining, shareable, unforgettable experiences for clients and their fans",
			},
			"Superfly": {
				link: "https://superf.ly/",
				locations: ["NYC"],
				keywords: "create shared experiences that shape how the world plays & connects",
			},
			"We Are Royale": {
				link: "https://weareroyale.com/",
				locations: ["LA", "Seattle"],
				keywords:
					"frontlines of design & technology to arm brands with the creative to turn audiences into advocates",
			},
			"m ss ng p eces": {
				link: "https://mssngpeces.com/",
				locations: ["NYC", "LA"],
				keywords:
					"new wave production and entertainment partner for content and immersive experiences that inspire culture",
			},
			"Studio Elsewhere": {
				link: "https://www.studioelsewhere.co/",
				locations: ["NYC"],
				keywords: "bio-experiential design and technology to support brain health",
			},
			"Ada": {
				link: "https://a-da.co/",
				locations: ["NYC"],
				keywords:
					"experience innovation and design agency that partners with the world's most ambitious visionaries and brands in the culture, arts and social impact space",
			},
			"Special Projects": {
				link: "https://specialprojects.studio/",
				locations: ["London"],
				keywords:
					"design and innovation agency that reveals user needs and transforms them into experiences and products",
			},
			"Acrylicize": {
				link: "https://www.acrylicize.com/",
				locations: ["London", "NYC", "Seattle"],
				keywords: "harness the power of art and creativity to help people fall in love with spaces",
			},
			"Bluecadet": {
				link: "https://www.bluecadet.com/",
				locations: ["Philadelphia", "NYC"],
				keywords: "digital products and environments",
			},
			"IMG SRC": {
				link: "https://www.imgsrc.co.jp/",
				locations: ["Tokyo"],
				keywords: "full-service communication agency focusing on websites, installations, and R&D",
			},
		},
	},
	{
		title: "Collectives & Practices",
		description:
			"Established artist collectives/practices that work with creative technology (here primarily for reference, not necessarily for career opportunities).",
		rows: {
			"Cuttefish": {
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
];

generateReadme(list);
generateClosedReadme(list);
