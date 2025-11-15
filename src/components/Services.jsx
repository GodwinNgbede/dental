import { FaTooth, FaSmileBeam, FaXRay } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-yellow-500" />,
    title: "Comprehensive Dental exam",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-sky-500" />,
    title: "Professional Tooth Cleaning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-green-500" />,
    title: "Cosmetic Dentistry",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-purple-500" />,
    title: "Comprehensive Dental exam",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-24 bg-gradient-to-br from white to-sky-50"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col justify-center text-center mb-16">
          <h2 className="text-sky-900 font-bold text-4xl mb-2">
            Our Dental Services
          </h2>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            assumenda. Deserunt, ducimus aliquam?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-9 shadow-md bg-white rounded-3xl text-center border border-sky-100 hover:border-sky-400 hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-sky-600 text-xl font-bold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-center">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
