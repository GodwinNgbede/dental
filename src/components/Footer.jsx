import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaTooth,
} from "react-icons/fa";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram className="text-xl" />, href: "#" },
    { icon: <FaWhatsapp className="text-xl" />, href: "#" },
    { icon: <FaTelegram className="text-xl" />, href: "#" },
  ];
  const contactInfo = [
    {
      icon: <FaPhone className="mr-4 text-white/70" />,
      text: (
        <a href="#" className="hover:text-sky-300 transition-colors">
          +234 45 7600
        </a>
      ),
    },
    {
      icon: <MdEmail className="mr-4 text-white/70" />,
      text: (
        <a href="#" className="hover:text-sky-300 transition-colors">
          godwinonah@gmail.com
        </a>
      ),
    },
    {
      icon: <FaLocationDot className="mr-4 text-white/70" />,
      text: (
        <a href="#" className="hover:text-sky-300 transition-colors">
          123 Karu Abuja FCT, Nigeria
        </a>
      ),
    },
  ];
  const clinicHours = [
    { day: "Sunday-Friday", time: "9AM-8PM" },
    { day: "Friday", time: "4PM-9AM" },
    { day: "saturday", time: "Closed" },
  ];
  return (
    <footer
      id="footer"
      className="scroll-mt-20 relative py-16 bg-blue-900 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-5 ">
          <div className="w-12 h-12 bg-sky-700 rounded-full items relative">
            <FaTooth className="  text-2xl text-sky-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-sky-300 font-bold text-3xl">BrightSmile</h2>
        </div>
        <div className="flex mt-4 gap-4">
          {socialLinks.map((socialLink, index) => (
            <div
              key={index}
              className="text-sky-100 flex  w-8 h-8 rounded-full items-center justify-center bg-sky-700 "
            >
              {socialLink.icon}
            </div>
          ))}
        </div>
        <div className="p-8 mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center items-stretch">
          <div className="bg-sky-800  p-12 rounded-xl h-full hover:border hover:border-sky-300">
            <div className="flex items-center justify-start mb-5">
              <FaRegClock className="text-sky-300 font-semibold mr-3" />
              <h3 className="font-bold text-sky-200 text-2xl">Clinic Hours</h3>
            </div>
            <ul className="space-y-3 ">
              {clinicHours.map((items, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-sky-300 font-semibold mr-3">
                    {items.day}
                  </span>
                  <span className="font-bold text-sky-200">{items.time}</span>
                </li>
              ))}
              <li className="border-t border-white/20 text-sky-400 font-semibold mt-5">
                Emergency Services Available 24/7
              </li>
            </ul>
          </div>
          <div className="bg-sky-800 p-12  rounded-xl h-full hover:border hover:border-sky-300">
            <div className="flex items-center justify-start mb-5">
              <FaPhone className="text-sky-300 font-semibold mr-3" />
              <h3 className="font-bold text-sky-200 text-2xl">Contact</h3>
            </div>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} href={item.href} className="flex items-start">
                  <span className="text-sky-300 font-semibold mr-3">
                    {item.icon}
                  </span>
                  <span className="font-bold text-sky-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-sky-800 p-12 rounded-xl w-full h-full hover:border hover:border-sky-300">
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-sky-200 text-2xl">
                Dental Tips Newsletter
              </h3>
              <p className="text-sky-300 font-semibold mt-5">
                Subscribe to recieve oral health care tips and special offers
              </p>
            </div>
            <div className="flex mt-5">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 min-w-0 border-sky/20 rounded-xl rounded-r-none rounded-l-lg bg-sky-700 text-sky-200 font-semibold p-2 focus:outline-none"
              />
              <button className="flex items-center whitespace-nowrap rounded-l-none rounded-r-lg text-blue-900 bg-sky-400 hover:bg-sky-300 px-3 font-semibold">
                Subscribe &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between text-sky-300 text-sm font-semibold px-8 ">
        <p className="justify-start mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} Smile Dental Clinic. All rights
          reserved
        </p>
        <div className="flex justify-end gap-5 ">
          <a href="#">
            <p>Terms of service</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
