import React, { useContext ,useState} from "react";
import  MusicContext  from "../music";
const Navbar=()=>{
    const {showplaylist,setShowplaylist,}=useContext(MusicContext)
    return(
        <>
        <h1>Welcome To Jam</h1>
        <button onClick={()=>{
            setShowplaylist(!showplaylist)
        }}>
        Playlist</button>
        </>
    )
}
export default Navbar