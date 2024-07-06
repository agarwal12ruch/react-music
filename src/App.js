import React,{useContext} from 'react'
import MusicContext from './music'
import Navbar from "./components/Navbar"
export default function App() {
  const {showplaylist,setShowplaylist,}=useContext(MusicContext)
  return (
    <>
     <Navbar showplaylist={showplaylist} setShowplaylist={setShowplaylist} /> 
    </>
  )
}
