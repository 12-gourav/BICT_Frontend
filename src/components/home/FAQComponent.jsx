import React, { useState } from "react";

const FAQComponent = () => {
  const [state, setState] = useState(false);

  return (
    <div className="faq">
      <div className="faq-wrap">
        <h2>
          Navigating Your Journey: Frequently Asked Questions at
          <br /> <span>Bashar Institute of Computer Technology.</span>
        </h2>
        <p>
          Explore the Answers to Common Queries about{" "}
          <span>Bashar Institute of Computer Technology.</span>'s Programs and
          Services
        </p>

        <div className="tab">
          <div
            className="question"
            onClick={() => setState(state === "answer1" ? false : "answer1")}
          >
            <h4>
              How can I apply for admission to{" "}
              <span>Bashar Institute of Computer Technology</span>?
            </h4>
            <span>
              {state !== "answer1" ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i class="bx bx-chevron-up"></i>
              )}
            </span>
          </div>
          {state === "answer1" && (
            <div className="answer">
              <p>
                Applying to <span>Bashar Institute of Computer Technology</span>{" "}
                is a straightforward process. Visit our official website and
                navigate to the 'Admissions' section. Follow the outlined steps,
                including filling out the online application form and submitting
                the necessary documents. Our admissions team is also available
                to assist you throughout the application process.
              </p>
            </div>
          )}
        </div>
        <div className="tab">
          <div
            className="question"
            onClick={() => setState(state === "answer2" ? false : "answer2")}
          >
            <h4>
              What technology courses does{" "}
              <span>Bashar Institute of Computer Technology</span> offer?
            </h4>
            <span>
              {state !== "answer2" ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i class="bx bx-chevron-up"></i>
              )}
            </span>
          </div>
          {state === "answer2" && (
            <div className="answer">
              <p>
                <span>Bashar Institute of Computer Technology</span> provides a
                diverse range of technology courses, including programming
                languages, software development, networking, and cybersecurity.
                Explore our course catalog on the website to find detailed
                information about each program, including curriculum, duration,
                and prerequisites.
              </p>
            </div>
          )}
        </div>
        <div className="tab">
          <div
            className="question"
            onClick={() => setState(state === "answer3" ? false : "answer3")}
          >
            <h4>
              Can I get assistance with job placement or internships after
              completing a program at
              <span>Bashar Institute of Computer Technology</span>?
            </h4>
            <span>
              {state !== "answer3" ? (
                <i className="bx bx-chevron-down"></i>
              ) : (
                <i class="bx bx-chevron-up"></i>
              )}
            </span>
          </div>
          {state === "answer3" && (
            <div className="answer">
              <p>
                Absolutely!
                <span>Bashar Institute of Computer Technology</span> is
                dedicated to fostering not just education but also successful
                career paths for our students. We provide robust career
                services, including job placement assistance and internship
                opportunities. Our career counselors work closely with students
                to refine resumes, hone interview skills, and connect them with
                potential employers in the technology industry. Additionally,
                our network of industry partners often seeks talent directly
                from our pool of graduates, enhancing your chances of securing a
                fulfilling job or internship upon program completion.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
