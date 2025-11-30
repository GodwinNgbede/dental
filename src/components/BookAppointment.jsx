import { Phone } from "lucide-react";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaChevronRight,
  FaTooth,
} from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { useState } from "react";

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "General Checkup",
  });
  const services = [
    "General CheckUps",
    "Teeth Cleaning",
    "Dental Filling",
    "Root Canal",
    "Teeth Whitening",
    "Orthodontic Consultation",
  ];
  const availableTime = [
    "9;00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "02:00PM",
    "03:00PM",
    "04:00PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  return (
    <section
      id="book"
      className="scroll-mt-20 py-12 bg-gradient-to-br from-sky-50 to-sky-50 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Book Your Perfect Smile</h2>
          <p className="text-gray-600 font-semibold">
            Schedule Your Visit With Our Experts
          </p>
        </div>
        <div className="mb-12">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-100 rounded-full z-0"></div>
            <div
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-sky-400 to-sky-400 rounded-full z-10 transition-all duration-500"
              style={{ width: `${(activeStep - 1) * 50}%` }}
            ></div>
            <div className="flex justify-between relative z-20">
              {[1, 2, 3].map((step) => {
                return (
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    key={step}
                    onClick={() => activeStep > step && setActiveStep(step)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeStep >= step
                          ? `bg-gradient-to-br from-sky-500 to-sky-500 text-white shadow-lg`
                          : `bg-white text-gray-300 border-2 border-gray-200`
                      } transition-all duration-300 font-bold mb-2`}
                    >
                      {activeStep > step ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        activeStep >= step ? "text-sky-600" : "text-gray-400"
                      } transition-colors`}
                    >
                      {["Your Info", "schedule", "confirm"][step - 1]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {activeStep === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUser className="mr-3 text-sky-500" />
                Personal Information
              </h2>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition"
                    required
                  />
                  <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telphone Number"
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition"
                    required
                  />
                  <FaPhone className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          )}
          {activeStep === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCalendarAlt className="mr-3 text-sky-500" />
                Appointment Details
              </h2>
              <div className="grid grid-col-1 md:grid-col-2 gap-6">
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <FaCalendarAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none appearance-none transition"
                    required
                  >
                    <option value="">Select Time</option>
                    {availableTime.map((time) => (
                      <option key={time} vlaue={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <FaClock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <FaChevronRight className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-90 text-gray-400" />
                </div>
                <div className="relative md:col-span-2">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none appearance-none transition"
                    required
                  >
                    {services.map((service) => (
                      <option value={service} key={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <FaTooth className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <FaChevronRight className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-90 text-gray-400" />
                </div>
              </div>
            </div>
          )}
          {activeStep === 3 && (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center bg-sky-100 p-6 rounded-full mb-6">
                <GiToothbrush className="text-4xl text-sky-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Confirm Your Appointment
              </h2>
              <div className="bg-sky-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                <div className="flex justify-between py-2 border-b border-sky-100">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-sky-100">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-sky-100">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-sky-100">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-sky-100">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{formData.service}</span>
                </div>
              </div>
              <button className="w-full bg-sky-600 text-white mx-auto py-4 max-w-xs font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Confirm & Book Appointment
              </button>
            </div>
          )}

          <div className="px-8 pb-8 flex justify-between">
            {activeStep > 1 && (
              <button
                className="px-6 py-3 text-gray-600 font-medium rounded-lg hover:bg-gray-100"
                onClick={prevStep}
              >
                Back
              </button>
            )}
            {activeStep < 3 && (
              <button
                className="ml-auto px-6 py-3 font-medium bg-sky-500 text-white rounded-lg flex justify-center items-center hover:bg-sky-600 transition"
                onClick={nextStep}
              >
                Next <FaChevronRight className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
