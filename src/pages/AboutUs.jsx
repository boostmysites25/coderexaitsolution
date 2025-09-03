import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Web Full-Stack Development Services
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">
                  Coderexa IT Solution Pvt Ltd
                </span>
                , we deliver end-to-end web full-stack development solutions designed to help businesses scale and succeed in the digital era. Just like Coderexa IT Solution Pvt. Ltd., we specialize in building robust, secure, and user-friendly web applications by combining the power of front-end, back-end, and database technologies.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Full-Stack Development Services</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <p className="desc"><strong>Front-End Development</strong> – Engaging user interfaces using React.js, Angular, or Vue.js for smooth customer experiences.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <p className="desc"><strong>Back-End Development</strong> – Scalable server-side solutions with Node.js, Python (Django/Flask), Java (Spring Boot), or PHP (Laravel).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <p className="desc"><strong>Database Management</strong> – Secure and optimized databases (MySQL, PostgreSQL, MongoDB).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <p className="desc"><strong>API Development & Integration</strong> – RESTful & GraphQL APIs for seamless data flow.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <p className="desc"><strong>Custom Web Applications</strong> – Tailor-made solutions to meet unique business requirements.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✅</span>
                    <p className="desc"><strong>Deployment & Maintenance</strong> – Cloud hosting, CI/CD, and ongoing support for high availability.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <p className="desc"><strong>Full-Cycle Expertise</strong> – From UI/UX design to deployment and maintenance.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <p className="desc"><strong>Scalable Solutions</strong> – Applications that grow with your business.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <p className="desc"><strong>Agile Development</strong> – Faster delivery with iterative and transparent processes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <p className="desc"><strong>Proven Experience</strong> – Trusted by startups, SMEs, and enterprises.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="desc font-medium">
                  Partner with us to build a high-performance, scalable, and secure digital presence that drives results.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Visionary Goals
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
                             <p className="desc">
                 Our diverse expertise spans full-stack web development domains, enabling
                 businesses of all sizes to harness cutting-edge technologies
                 across front-end, back-end, database management, and custom web applications. <br />
                 <br /> Whether you're building dynamic web applications,
                 creating scalable platforms, or developing custom full-stack solutions, 
                 we provide comprehensive services to transform your
                 ideas into impactful digital realities. <br />
                 <br /> Our focus on innovation and data-driven strategies
                 ensures that every service we deliver unlocks new growth
                 opportunities and maximizes your business potential.
               </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
                          <p className="desc">
                                 Our mission is to drive innovation across industries with
                 solutions rooted in integrity and responsibility. We believe that
                 true innovation goes beyond cutting-edge technology—it must be
                 guided by principles that build trust, accountability, and
                 long-term value. Through our expertise in full-stack web development,
                 custom web application creation, and comprehensive digital solutions, we aim to catalyze transformative change for
                 businesses. By leveraging these advanced tools and frameworks, we
                 tackle unique challenges, unlock growth opportunities, and deliver
                 solutions that drive efficiency while maintaining the highest
                 ethical standards.
              </p>
          </div>
        </div>
      </section> */}
      <WhyChooseUs />
      <TrustWorthySection />
      {/* <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b>Coderexa IT Solution Pvt Ltd</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-primary text-center text-primary_text">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
