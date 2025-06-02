import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import Video from "./pages/video/Video"

const App = () =>{

  const [sidebar, setSidebar] = useState(true);

  return(
    <div>
      <NavBar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
      </Routes>  
    </div>
  )
}


export default App