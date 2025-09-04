import React, { useContext } from "react";
import SubHeading from "../SubHeading";
// import bgImg from "../../assets/images/landingpage/landing-contactus.webp";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div
      id="contact"
      className="py-[5rem] bg-secondary/5 bg-[100%_40%] relative min-h-[40rem] flex items-center"
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-background/70"></div>
      <div className="wrapper relative z-10 w-full">
        <div className="flex flex-col items-center gap-5">
          <SubHeading heading="Contact Us" />
          <h2
            data-aos="fade-up"
            className="heading-2 max-w-[60rem] mx-auto font-light text-center"
          >
            Get In Touch With Us!
          </h2>
          <p data-aos="fade-up" className="desc text-center max-w-[60rem]">
            Let Coderexa IT Solution Pvt Ltdbe the catalyst for your digital transformation.
            Together, we can build solutions that are as dynamic as your vision,
            helping your business reach new heights.
          </p>
        </div>
        
        {/* Contact Information Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 mb-8">
          <div
            data-aos="fade-up"
            className="bg-white/80 backdrop-blur-sm flex flex-col gap-2 text-primary items-center justify-center rounded-lg p-4 shadow-lg"
          >
            <MapPin strokeWidth={2} size={30} className="inline" />
            <span className="text-center text-sm font-medium">
              {companyDetails.address}
            </span>
          </div>
          <a
            href={`mailto:${companyDetails.email}`}
            data-aos="fade-up"
            className="bg-white/80 backdrop-blur-sm flex flex-col gap-2 text-primary items-center justify-center rounded-lg p-4 shadow-lg hover:bg-white/90 transition-colors"
          >
            <Mail strokeWidth={2} size={30} className="inline" />
            <span className="text-center text-xs font-medium break-words leading-tight">
              {companyDetails.email}
            </span>
          </a>
          <a
            href={`tel:${companyDetails.phone}`}
            data-aos="fade-up"
            className="bg-white/80 backdrop-blur-sm flex flex-col gap-2 text-primary items-center justify-center rounded-lg p-4 shadow-lg hover:bg-white/90 transition-colors"
          >
            <Phone strokeWidth={2} size={30} className="inline" />
            <span className="text-center text-sm font-medium">
              {companyDetails.phone}
            </span>
          </a>
          <a
            href={`https://wa.me/${companyDetails.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            className="bg-white/80 backdrop-blur-sm flex flex-col gap-2 text-primary items-center justify-center rounded-lg p-4 shadow-lg hover:bg-white/90 transition-colors"
          >
            <MessageCircle strokeWidth={2} size={30} className="inline" />
            <span className="text-center text-sm font-medium">
              WhatsApp
            </span>
          </a>
        </div>
        
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          data-aos="fade-up"
          className="flex flex-col max-w-xl mx-auto gap-4 mt-7"
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="tel"
              placeholder="Phone Number"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Subject"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <textarea
              rows="3"
              placeholder="Message"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.message?.message}</small>
          </div>
          <button
            disabled={isSubmitting}
            type="button"
            className="secondary-btn mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
