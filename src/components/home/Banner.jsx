import React from "react";

const Banner = ({ img2 }) => {
  return (
    <div className="banner">
      <div className="first-banner">
        <div className="left">
          <h1>
            Smart Learning Deeper <br />& More <span>- Amazing</span>
          </h1>
          <p>
            Welcome to Bashar Institute of Computer Technology, your gateway to
            a world of technological excellence and career empowerment. At our
            esteemed computer institute, we take pride in offering a diverse
            range of computer courses designed to equip you with the skills and
            knowledge needed to thrive in the rapidly evolving digital
            landscape.
          </p>
          <p>
            As technology continues to redefine industries, staying ahead of the
            curve is essential. Our courses are regularly updated to reflect the
            latest trends and advancements in the field, ensuring that our
            students are well-prepared for the challenges and opportunities of
            the digital era.
          </p>
          <button>Join Today</button>
        </div>
        <div className="right">
          <img src={img2} alt="Banner-img" />
          <div className="pulse">
            <div className="pulse-animation">
              <i className="bx bx-play-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
