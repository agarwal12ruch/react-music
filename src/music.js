import React,{createContext,useState,useRef} from "react";
import data from "./data"
const MusicContext=createContext({});
export const MusicProvider=({children})=>{
    const [song,setSong]=useState(data);
    const [currentSong,setCurrentSong]=useState(song[0]);
    const [playing,setPlaying]=useState(false);
    const [showplaylist,setShowplaylist]=useState(false);
    const audiostate=useRef(null);
    const [songInfo,setSongInfo]=useState({
        currentDura:0,
        songDuration:0,
        lefttime:0
    });
// time left handler
const timeleft=(e)=>{
   const current=e.target.currentDura;
   const duration=e.target.duration;   
   const roucurr=Math.round(current);
   const rouduration=Math.round(duration);
   const timeleft=(roucurr/rouduration)*100;
   setSongInfo({
    currentDura:current,
    duration,
    lefttime:timeleft
})
}
const startplaying= async()=>{
    const currentIndex = song.findIndex((sing)=>sing.id===currentSong.id);
    await setCurrentSong(song[(currentIndex+1)%(song.length)])
    if(playing){
        audiostate.current.play();
    }
}
return(
    <MusicContext.Provider value={{song,showplaylist,setShowplaylist,currentSong,playing,songInfo,timeleft,startplaying}}>
        {children}
    </MusicContext.Provider>
) 
}
export default MusicContext;