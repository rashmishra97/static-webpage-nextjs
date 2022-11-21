import React from "react";
import {
  faAlignRight,
  faBrain,
  faBrazilianRealSign,
  faCloud,
  faLaptop,
  faMicrophoneSlash,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faReact,
  faScribd,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons";

const HowCanTimeHelpPage = () => {
  return (
    <>
      <div className="flex-col justify-around items-center">
        <h1 className="text-center text-3xl pt-16 ">HOW CAN TIME STACK HELP</h1>

        <div className="flex justify-around pt-16 pb-20">
          <div className="   text-center">
            <FontAwesomeIcon
              icon={faLaptop}
              className="w-20 h-20 text-blue-600"
            ></FontAwesomeIcon>
            <h1 className="pt-3 leading-none">Custom Software</h1>
            <h1>Design and Development </h1>
          </div>

          <div className="  text-center">
            <FontAwesomeIcon
              icon={faMobile}
              className="w-20 h-20 text-blue-600"
            ></FontAwesomeIcon>
            <h1 className="pt-3 leading-none">Mobile Application</h1>
            <h1>Development</h1>
          </div>

          <div className="text-center  flex-col justify-end items-end">
            <FontAwesomeIcon
              icon="fa-solid fa-cloud-arrow-up"
              className="w-20 h-20"
            />
            <h1 className="pt-3 leading-none">Cloud Migration, Optimization</h1>
            <h1>and Management</h1>
          </div>

          <div className="text-center">
            <FontAwesomeIcon
              icon={faCloud}
              className="w-20 h-20 text-blue-600"
            ></FontAwesomeIcon>
            <h1 className="pt-3 leading-none">Software Quality</h1>
            <h1>Assurance and Testing</h1>
          </div>
        </div>

        <div className="flex justify-around pb-20">
          <div className="text-center">
            <FontAwesomeIcon
              icon="fa-light fa-head-side-brain"
              className="w-20 h-20"
            ></FontAwesomeIcon>
            <h1 className="pt-3">Digital Transformation</h1>
          </div>

          <div className="text-center">
            <FontAwesomeIcon icon="fa-solid fa-starship-freighter" />
            <h1 className="pt-3">DevOps Services</h1>
          </div>

          <div className="text-center ">
            <FontAwesomeIcon></FontAwesomeIcon>
            <h1>Big Data and Analytics</h1>
          </div>

          <div className="text-center ">
            <FontAwesomeIcon icon="fa-solid fa-starship-freighter"></FontAwesomeIcon>
            <h1 className="pt-3 leading-none">Software Maintenance</h1>
            <h1>and Support</h1>
          </div>
        </div>
      </div>
      <div className="pt-28 text-gray-900">
        <div>
          <h1 className="text-center text-5xl font-bold">
            The tech stack designed for
            <br /> building competitive products
          </h1>
        </div>
        <div className="text-center pt-10">
          Just like you, we choose scalable and flexible technologies. The
          engineering mindset our talents have already
          <br /> solved the challenges of 160+ clients. Unsure how to lead
          development forward? Your future team will guide you
          <br /> to the most optimal software solutions and strategies.
        </div>
        <div className="text-center pt-10 pb-20 font-bold text-2xl ">
          Work with future-proof technologies
        </div>
      </div>

      <div className="flex justify-around  pb-32 ">
        <div className="flex  text-blue-600">
          <FontAwesomeIcon
            icon={faScribd}
            className="w-20 h-20"
          ></FontAwesomeIcon>
        </div>

        <div className="flex text-blue-600">
          <FontAwesomeIcon
            icon={faReact}
            className="w-20 h-20"
          ></FontAwesomeIcon>
        </div>

        <div className="flex text-blue-600">
          <FontAwesomeIcon
            icon={faNode}
            className="w-20 h-20"
          ></FontAwesomeIcon>
        </div>

        <div className="flex text-gray-900">
          <FontAwesomeIcon
            icon={faNode}
            className="w-20 h-20"
          ></FontAwesomeIcon>
        </div>

        <div className="flex text-black">
          <FontAwesomeIcon
            icon={faSymfony}
            className="w-20 h-20"
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
};

export default HowCanTimeHelpPage;
