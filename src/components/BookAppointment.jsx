import { Phone } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    Phone: "",
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
      </div>
    </section>
  );
};

export default BookAppointment;
