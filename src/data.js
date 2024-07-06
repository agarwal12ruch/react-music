import music1 from "./music1.mp3"
import music2 from "./music2.mp3"
import { v4 as uuidv4 } from 'uuid';
function chillHop() { 
return [ 
	{ 
	name: "Sunrise Serenade", 
	artist: "Harmony Harp", 
	audio: music1, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: true, 
	}, 
	{ 
	name: "Urban Groove", 
	artist: "Beatmaster B", 
	audio: music2,
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
]
}
export default chillHop;