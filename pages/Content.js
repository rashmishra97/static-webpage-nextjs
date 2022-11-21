import Image from "next/image";
import React from "react";
import HowCanTimeHelpPage from "./HowCanTimeHelpPage";
import {} from "@fortawesome/free-solid-svg-icons";
import bg from "../public/bg_image.png";

const Content = () => {
  return (
    <>
      <div className="flex justify-between pb-20 ">
        <div className="pl-20 w-1/2">
          <p className="pt-28 text-2xl text-gray-900 ">
            Custom Software Development for
            <br /> Cloud and SaaS
          </p>
          <div className="pt-16 pr-20 leading-8 text-gray-600">
            <h1>
              Kanda is a premier custom software development and <br />
              quality assurance company delivering complex <br />
              world-class software solutions on a variety of technology
              <br /> platforms to clients ranging from Fortune 500 companies
              <br /> to dynamic startups. Our impeccable track record spans{" "}
              <br />
              two decades and includes helping develop well over a <br />
              thousand successful software initiatives that generated <br />
              hundreds of millions of dollars for our clients
            </h1>
          </div>

          <div className="bg-blue-500 px-4 w-32 py-3 text-center text-white rounded-full mb-20 mt-14">
            <h1>Learn more</h1>
          </div>
        </div>
        <div className=" pl-24 pt-10   w-2/3">
          <Image src="/laptop_photo.png" alt="" width={600} height={350} />
        </div>
      </div>

      <div className="flex pt-5 pb-19 mb-7">
        <div className="w-2/3 pl-7">
          <Image src="/startups.png" alt="" width={1100} height={100} />
        </div>
        <div className="w-1/2 pr-14 pl-16">
          <h1 className="text-2xl text-gray-900 ">
            Software Development Services
            <br /> for Startups
          </h1>
          <div className="pt-16 pb-9 leading-8 text-gray-600">
            <p>
              At Kanda, we are problem solvers above all and we love
              <br /> new challenges. Thus, we love working with startups.
              <br /> Entrepreneurs have brilliant ideas, and Kanda has the
              <br /> necessary technical expertise and rigorous processes to
              <br /> help transform ideas into a service or a product and <br />
              deliver it to the market. Kanda has worked with startups
              <br /> at just about every stage of growth and funding. We have
              <br /> thorough understanding of critical milestones that must{" "}
              <br />
              be accomplished to advance to the next stage of <br />
              growth. Our commitment to contemporary Agile
              <br /> practices helps to tackle development goals in a time
              <br /> sensitive manner delivering market ready solutions to our
              <br /> clients.
            </p>
          </div>
          <div className="bg-blue-500 px-4 py-4 w-32 text-center mt-5 rounded-full text-white ">
            <h1>Learn more</h1>
          </div>
        </div>
      </div>

      {/* New Content start Here */}
      <div className="flex justify-between  ">
        <div className="pl-20 w-1/2 pb-8">
          <p className="pt-24 text-2xl text-gray-900 ">
            Digital Health Solutions
            <br />
            and Development Services
          </p>
          <div className="pt-16 pr-20 leading-8 text-gray-600">
            <h1>
              While you build trust and credibility as a Digital Health
              <br /> company, Kanda will back you up with reliability and
              <br /> agility on the technical side, reducing time to market and
              <br />
              associated risks. We will help you transform your product
              <br /> roadmap into a HIPAA compliant, interoperable and <br />
              secure state-of-the-art solution without draining your <br />
              budget yet preserving quality. We have the engineering
              <br /> talent that has helped dozens of Digital Health and Life
              <br /> Sciences companies solve their most complex technology
              <br /> puzzles, and are trusted by companies like Janssen,
              <br />
              Imprivata, CTCA and industry disruptors like Intervention
              <br />
              Insights, Lifepod, Epion Health and others to achieve their
              <br />
              complex technical objectives and meet their development
              <br />
            </h1>
          </div>
          <div className="bg-blue-500 px-4 py-4 text-white rounded-full mb-20 mt-14">
            <h1>Learn more</h1>
          </div>
        </div>
        <div className="w-2/3 mb-32">
          <Image src="/mobile_photo.svg" alt="" width={1100} height={10} />
        </div>
      </div>

      <div
        className="w-full h-auto py-8 mb-24 flex-col"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100",
          height: "100",
        }}
      >
        <div className="flex pt-8 pb-2 text-green-500 items-center justify-around  px-10">
          <div className="flex pl-10">
            <h1 className="text-5xl pr-2">4+</h1>
            <h1 className="text-2xl pt-4">YEARS</h1>
          </div>
          <div className="text-2xl">
            <h1>EXCEPTIONAL</h1>
            <h1 className=" px-3">ENGINEERS</h1>
          </div>
          <div className="text-2xl pr-10 flex-col items-center">
            <h1>AGILE AT OUR</h1>
            <h1 className=" px-11">CORE</h1>
          </div>
        </div>
        <div className="flex  pt-4 pb-8 text-white items-center justify-around px-10">
          <div>
            <h1>of best practices</h1>
            <h1>in Software Development</h1>
          </div>
          <div>
            <h1>Experienced, Dedicated,</h1>
            <h1>And Continuously Learning</h1>
          </div>
          <div>
            <h1>Experienced, Dedicated,</h1>
            <h1>And Continuously Learning</h1>
          </div>
        </div>
      </div>
      <HowCanTimeHelpPage />
    </>
  );
};

export default Content;
