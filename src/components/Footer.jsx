import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaTooth,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
        <div className="flex items-center gap-5">
          <FaTooth className=" bg-sky-700 text-2xl text-sky-100" />
          <h2 className="text-sky-100 font-bold text-3xl">BrightSmile</h2>
        </div>
        {socialLinks.map((socialLink) => (
          <div className="text-sky-100 flex mt-5 gap-4 bg-sky-700">
            {socialLink.icon}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
