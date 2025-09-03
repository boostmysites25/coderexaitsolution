import logoImg from "./assets/logo/coderexa-logo.svg";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// web development services only
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

export { logoImg };

export const companyDetails = {
  phone: "+919149386916",
  address: "Pacific Golf Estate Dehradun",
  email: "abc@xyz.com",
  whatsapp: "+919149386916",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Web Full-Stack Development",
    icon: webServiceIcon4,
    description:
      "Delivering comprehensive full-stack web solutions from frontend to backend, database management, and deployment. Our end-to-end development services combine cutting-edge technologies for scalable, robust web applications.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];



// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "Operations Manager at EcoFlow Systems",
    img: require("./assets/images/testimonial3.png"),
    desc: "Coderexa IT Solution Pvt Ltd's full-stack web development service is exceptional. They built a complete e-commerce platform with robust backend and stunning frontend. The database optimization and API integration exceeded our expectations!",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Marketing Director at PlayForge Studios",
    img: require("./assets/images/testimonial1.png"),
    desc: "Coderexa IT Solution Pvt Ltd delivered a comprehensive full-stack solution that transformed our business. From React.js frontend to Node.js backend with MongoDB, their technical expertise is outstanding. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Operations Manager at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "The full-stack web development solutions from Coderexa IT Solution Pvt Ltd revolutionized our operations. Their expertise in both frontend and backend technologies, along with database management, made them a truly strategic partner.",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Manager of Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "Coderexa IT Solution Pvt Ltd's full-stack development team delivered a seamless, feature-rich web application with Python Django backend and React frontend. The deployment and CI/CD setup was flawless!",
  },
  {
    id: 5,
    name: "Jessica M",
    position: "COO of Creative Solutions",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "Impressed with Coderexa IT Solution Pvt Ltd's full-stack development capabilities. They built our custom web application from database design to frontend deployment. Exceptional end-to-end service!",
  },
];

// web development services only
export const allServices = [
  {
    id: 1,
    title: "Web Full-Stack Development",
    link:"/web-development",
    description:
      "Delivering comprehensive full-stack web solutions from frontend to backend, database management, and deployment. Our end-to-end development services combine cutting-edge technologies for scalable, robust web applications.",
    icon: webServiceIcon4,
    detailHeading: "Web Full-Stack Development: End-to-End Solutions for Modern Businesses",
    detailContent: `<p>Web Full-Stack Development is revolutionizing the way businesses approach digital transformation, offering comprehensive solutions that cover every aspect of web application development. At Coderexa IT Solution Pvt Ltd, we specialize in building robust, scalable, and high-performance web applications using cutting-edge technologies across the entire development stack.</p>
      <br/>
      <h3>Our Full-Stack Development Services Include:</h3>
      <br/>
      <ol>
        <li><b>Frontend Development:</b><br/>We build engaging, responsive user interfaces using modern frameworks like React.js, Angular, and Vue.js, ensuring exceptional user experiences across all devices.</li>
        <br/>
        <li><b>Backend Development:</b><br/>We develop scalable server-side solutions using Node.js, Python (Django/Flask), Java (Spring Boot), and PHP (Laravel) to handle complex business logic and data processing.</li>
        <br/>
        <li><b>Database Management:</b><br/>We design and optimize secure databases using MySQL, PostgreSQL, and MongoDB, ensuring data integrity, performance, and scalability for your applications.</li>
        <br/>
        <li><b>API Development & Integration:</b><br/>We create RESTful and GraphQL APIs that enable seamless data flow between different systems and third-party integrations.</li>
        <br/>
        <li><b>DevOps & Deployment:</b><br/>We implement CI/CD pipelines, cloud hosting solutions, and monitoring systems to ensure high availability and performance of your web applications.</li>
      </ol>
      <br/>
      <br/>
      <p>Our full-stack approach ensures that every component of your web application is built with the same level of expertise and attention to detail, resulting in robust, scalable, and maintainable solutions that drive business growth.</p>`,
  },
];
