import React from "react";
import about from "../assets/about.jpg";
import { FaUserAlt } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-sky-50 py-20">
      <div className="container mx-auto py-4 flex flex-col-reverse lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={about}
            alt="About"
            className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full shadow-md object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:text-left space-y-6 text-center">
          <div className="flex items-center justify-center lg:justify-start space-x-2 ">
            <FaUserAlt className="w-7 h-7 text-blue-600" />
            <h3 className="text-sky-900 text-2xl font-bold">
              About Our Clinic
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloremque dolores corporis quaerat libero voluptatibus, tempora
            aliquam quae ullam omnis iure cum deleniti, ipsa repellat, molestias
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloremque dolores corporis quaerat libero voluptatibus, tempora
            aliquam
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
