import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <section className="heroSection">
      <div className="container">
        <div className="heroContent">
          <div className="heroText">
            <h1>Find a job that suits your interests and skills</h1>
            
            <p>
              Discover job opportunities that match your interests and skills. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate repellat modi quidem aliquid eaque ducimus ipsa et, facere mollitia!
            </p>
          </div>
          <div className="heroImage">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p className="title">{element.title}</p>
                <p className="subTitle">{element.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
