import { useState } from "react";
import "./portfolio.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/ZHVPixw.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/Z5ateqg.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/6KHpWGN.png",
    },
    {
      id: "4",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/J9Bjdwa.png",
    },
    {
      id: "5",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (RA)",
      img: "https://i.imgur.com/uO9kmy1.png",
    },
    {
      id: "6",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (RA)",
      img: "https://i.imgur.com/qpglfSh.png",
    },
    {
      id: "7",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (RA)",
      img: "https://i.imgur.com/2xxhKMR.png",
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Sistema do administrador (RA)",
      img: "https://i.imgur.com/pQ2gDuz.png",
    },
    {
      id: "10",
      icon: "./assets/mobile.png",
      title: "Mobile Development",
      desc: "RA app",
      img: "https://i.imgur.com/kQNLsDQ.png",
    },
    {
      id: "9",
      icon: "./assets/mobile.png",
      title: "Mobile Development",
      desc: "RA app",
      img: "https://i.imgur.com/QiVbQrB.png",
    },
    {
      id: "11",
      icon: "./assets/mobile.png",
      title: "Mobile Development",
      desc: "RA app",
      img: "https://i.imgur.com/Eeul3mW.png",
    },
    {
      id: "12",
      icon: "./assets/mobile.png",
      title: "Mobile Development",
      desc: "RA app",
      img: "https://i.imgur.com/9yspSTF.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(() => (currentSlide > 0 ? currentSlide - 1 : 11))
      : setCurrentSlide(() =>
          currentSlide < data.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portifólio</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <a href={d.img} rel="noreferrer" target="_blank">
                <img src={d.img} alt="Print da interface do sistema" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
