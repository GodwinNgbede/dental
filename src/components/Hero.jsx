import React from "react";
import { CalendarCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="scroll-m-20 py-16 bg-sky-50">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center space-y-6 lg:text-left ">
          <h1 className="text-xl sm:text-4xl lg:text-5xl  font-bold text-sky-900 leading-tight ">
            Brighten Your Smile <br /> With Expert Dental Care
          </h1>
          <p className="text-gray-700 text-sm lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur adipisci similique facere.
          </p>
          <a
            href="#"
            alt="Appointment Icon"
            className="inline-flex rounded-xl bg-sky-600 text-white px-3 py-2 sm:px-6 sm:py-2 items-center hover:bg-sky-700 transition text-base font-medium "
          >
            <CalendarCheck className="w-5 h-5 mr-2" />
            Book An Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
