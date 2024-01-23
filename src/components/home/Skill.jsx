import React from "react";

const Skill = ({ img3 }) => {
  return (
    <div className="skill-section">
      <div className="skill-wrap">
        <div className="skill-left">
          <img src={img3} alt="image" />
        </div>
        <div className="skill-right">
          <h1>
            With the Best & <br />
            <span>Experienced Members</span>
          </h1>
          <p>
            At our institute, we pride ourselves on fostering a vibrant learning
            environment that encourages hands-on experience and collaborative
            problem-solving. Our dedicated team of experienced instructors is
            committed to providing personalized guidance, ensuring that each
            student achieves their full potential.
          </p>
          <h3>
            <div className="st"></div>Online Course
          </h3>
          <p>
            Our virtual platform brings the classroom to you, offering flexible
            schedules and interactive sessions led by expert instructors.
          </p>
          <h3>
            <div className="st"></div>Live Classes
          </h3>
          <p>
            Experience real-time education with our live classes. Engage in
            dynamic sessions led by experienced instructors, where you can ask
            questions, participate in discussions, and receive instant feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
