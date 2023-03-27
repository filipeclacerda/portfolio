import { useState } from "react";
import "./portfolio.scss";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "7",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/6KHpWGN.png"
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/J9Bjdwa.png"
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/Z5ateqg.png"
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/ZHVPixw.png"
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (RA)",
      img: "https://i.imgur.com/uO9kmy1.png"
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/ZHVPixw.png"
    },
    {
      id: "8",
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc:
        "Sistema do administrador (Hypvel)",
      img: "https://i.imgur.com/ZHVPixw.png"
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(() => currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(() => currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <img src={d.img} />
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
