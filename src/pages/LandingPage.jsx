import React, { lazy } from "react";
import vid from "../assets/vids/banner.mp4";
import SubHeading from "../components/SubHeading";
import { webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpg";
import ReactPlayer from "react-player";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  let services = webDevelopmentServices; // Only web development services available

  return (
    <>
      <LandingHeader />
      <section
        id="banner"
        className="h-screen banner relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/10 to-background">
          {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/60 via-[#ffffffb5] to-background/60"> */}
          {/* <img
          loading="lazy"
          src={banner}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}

          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Coderexa IT Solution Pvt Ltd
              </span>
            </p>
            <h1 className="heading-1 whitespace-pre-line capitalize">
              Elevate your business with cutting-edge Website Development
            </h1>
            <p className="sub-heading max-w-6xl mx-auto">
              Transform your business with our advanced IT services, enhancing
              efficiency, agility, and growth in today's fast-paced digital
              world.
            </p>
          </div>
        </div>
        <ReactPlayer
          url={vid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={webDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading="Web Development"
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={webDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Innovative Web Development Solutions for Modern Brands
              </h2>
              <p className="desc">
                Your website is more than just a digital address—it's your brand's online identity. Our websites are designed to captivate, convert, and function flawlessly. From sleek designs to responsive performance, we build websites that not only look good but also deliver exceptional results. Your website should be more than just functional—it should leave a lasting impression. We develop fast, responsive, and visually appealing websites designed to reflect your brand and achieve your goals. From e-commerce platforms to custom web applications, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading="Web Development Services"
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          Enhancing Brands with Engaging Web Experiences
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-secondary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
