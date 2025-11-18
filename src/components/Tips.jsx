import { CiDroplet } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaTooth, FaSmileBeam } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";

const tips = [
  {
    icon: <GiToothbrush className="w-10 h-10 text-sky-500" />,
    title: "Proper Brushing Technique",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptas cumque expedita, ducimus est porro excepturi sed in id officiis",
  },
  {
    icon: <FaTooth className="w-10 h-10 text-yellow-500" />,
    title: "Cavity Prevention",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptas cumque expedita, ducimus est porro excepturi sed in id officiis",
  },
  {
    icon: <CiDroplet className="w-10 h-10 text-purple-500" />,
    title: "Gum Care",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptas cumque expedita, ducimus est porro excepturi sed in id officiis",
  },
  {
    icon: <VscWorkspaceTrusted className="w-10 h-10 text-red-500" />,
    title: "Trust Protection",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptas cumque expedita, ducimus est porro excepturi sed in id officiis",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-green-500" />,
    title: "Regular CheckUps",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptas cumque expedita, ducimus est porro excepturi sed in id officiis",
  },
];

const Tips = () => {
  const [activeTip, setActiveTip] = useState(0);

  return (
    <section id="tips" className="scroll-mt-20 py-20">
      <div className="container mx-auto text-center">
        <div className="">
          <h2 className="text-3xl font-bold ">Dental Care Tips</h2>
          <p className="text-gray-500 text-xl mb-15">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            incidunt.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 p-5 mx-5">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="shadow-md p-8 flex flex-col justify-center text-center items-center rounded-2xl bg-gray-200 hover:bg-white hover:border-b-4 hover:border-blue-900 transition-all"
              onClick={() => setActiveTip(index)}
            >
              <div>{tip.icon}</div>
              <h4 className=" font-bold">{tip.title}</h4>
            </motion.div>
          ))}
          {activeTip !== null && (
            <div className="col-span-full shadow-md bg-sky-200 p-10 my-6 text-start rounded-2xl">
              <div className="flex  flex-col md:flex-row items-center gap-5 ">
                <div className="bg-white p-3 flex-shrink-0 shadow-lg rounded-2xl">
                  {tips[activeTip].icon}
                </div>
                <div>
                  <h4 className=" font-bold text-xl mb-3">
                    {tips[activeTip].title}
                  </h4>
                  <p className="text-gray-500 font-semibold">
                    {tips[activeTip].desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* PAGINATION DOTS */}
        <div className=" flex justify-center gap-3 mt-3">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`
              w-2 h-2 rounded-full transition-all cursor-pointer
              ${
                activeTip === index
                  ? "bg-blue-600 W-4 scale-125"
                  : "bg-gray-300"
              }
            `}
              aria-label={`Go to ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
