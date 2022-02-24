import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
      strings: ["PHP", "Java", "React", "React Native", "Kotlin"],
    })
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/photo_fl.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, me chamo</h2>
          <h1>Filipe Lacerda</h1>
          <h3>Desenvolvedor Freelancer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrow"/>
        </a>
      </div>
    
    </div>
  )
}
