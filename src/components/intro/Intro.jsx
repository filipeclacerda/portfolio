import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      typeSpeed: 100,
      backSpeed: 60,
      strings: [
        "PHP",
        "Java",
        "React",
        "React Native",
        "HTML/CSS",
        "JavaScript",
        "Kotlin",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/filipelacerda.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, me chamo</h2>
          <h1>Filipe Lacerda</h1>
          <h3>
            Desenvolvedor FullStack <br />
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <a href="#portfolio">
        <KeyboardArrowDownIcon className="arrow" />
      </a>
    </div>
  );
}
