import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Analista de Sistemas",
      company: "CAEd/UFJF",
      desc: "No CAEd/UFJF sou responsável por desenvolver e manter sistemas e tecnologias que suportam a avaliação da educação, incluindo gerenciamento de conteúdo, publicação dos resultados, disponibilização das avaliações e outros recursos de tecnologia educacional. Trabalho em colaboração com outros desenvolvedores, designers instrucionais e outros profissionais de tecnologia para garantir que a plataforma de educação atenda às necessidades dos usuários finais e ofereça uma experiência de aprendizado eficaz e envolvente.",
      img: "https://i.ytimg.com/vi/k97tvSpENfo/maxresdefault.jpg",
    },
    {
      id: "2",
      company: "RP Consultoria e Sistemas",
      icon: "./assets/globe.png",
      title: "Desenvolvedor PHP (Estágio)",
      desc: "Minha função era dar manutenção e desenvolver novos módulos para websites voltados para a gestão de franquias. Utilizando as tecnologias PHP, JQuery, HTML, CSS e MySQL.",
      img: "https://i.imgur.com/QnJGCoe.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      company: "Autônomo",
      title: "Desnvolvedor Android (Freelancer)",
      desc: "Desenvolvimento de um aplicativo em Java, para uma empresa que presta serviços de manutenção, voltado para a designação de tarefas aos funcionários, incluindo recursos como coleta de assinaturas, envio de imagens, etc.",
      img: "https://i.imgur.com/IhbagPr.png",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      company: "Granbery Consultoria",
      title: "Desnvolvedor front-end (Estágio)",
      desc: "Granbery Consultoria é a Empresa Júnior do Instituto Metodista Granbery. Minha função era realizar projetos relacionados à área de sistemas de informação, como a criação de websites e sistemas para pessoas físicas ou jurídicas.",
      img: "https://i.imgur.com/Qiu1QV5.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>Experiência profissional</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <strong>{d.company}</strong>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
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
