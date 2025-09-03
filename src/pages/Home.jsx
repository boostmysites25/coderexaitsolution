import React from "react";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner relative text-primary_text">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background via-background/10 to-background">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-4 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to{" "}
              <span className="text-primary font-semibold block sm:inline">
                Coderexa IT Solution Pvt Ltd
              </span>
            </p>
            <h1 className="heading capitalize">
              Pioneering AI-Infused <br /> Tech Solutions
            </h1>
            <p className="sub-heading max-w-6xl">
              Begin your AI-powered transformation journey with Coderexa IT Solution Pvt Ltd.
              Our innovative IT services ensure you stay ahead in a competitive
              market.
            </p>
          </div>
        </div>
        {/* <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-top"
          alt=""
        /> */}
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
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 flex justify-center"
      >
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">
              Web Full-Stack Development
            </p>
          </div>
          <p className="desc">
            Delivering comprehensive full-stack web solutions from frontend to backend, database management, and deployment. Our end-to-end development services combine cutting-edge technologies for scalable, robust web applications.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <img
                loading="lazy"
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover rounded-lg w-full object-center"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
                >
                  <img
                    loading="lazy"
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Transforming Visions into Reality
                </h2>
                <p className="desc">
                  At{" "}
                  <span className="font-medium text-primary">
                    Coderexa IT Solution Pvt Ltd
                  </span>
                  , we're dedicated to driving your business forward with
                  innovative software solutions. With a passion for technology
                  and a commitment to excellence, we specialize in delivering
                  tailored software products and services to meet your unique
                  needs. <br /> <br /> Our Mission is to revolutionize
                  industries through technology, empowering businesses to thrive
                  in a in an advanced AI Tech world. <br /> <br /> We believe in
                  the power of creativity. We help to create a strong online
                  presence that showcases your work and tells your story.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us" className="primary-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
