import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-contact.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Hello ! I’m a passionate Front-End Developer with expertise in HTML, CSS, JS and REACT JS. As a recent graduate with a passion for new technologies and web development, I aim to deliver modern, responsive, and user-friendly web solutions. My goal is to transform creative ideas into functional digital experiences that stand out. I’m always eager to take on new challenges and help clients build impactful digital experiences. `;

export const ABOUT_TEXT = `I’m deeply interested in the ever-evolving world of tech, especially web development. With a strong foundation in front-end technologies, I love creating visually appealing and efficient websites. I’m always keen to explore new tools and innovations. Currently, I’m honing my front-end skills with a long-term goal of transitioning to full-stack development. Beyond coding, I enjoy connecting with like-minded individuals who are driven to create something big and meaningful. Let’s collaborate and build something amazing together!`;

export const PROJECTS = [
  {
    title: "E-Commerce Website - FYP",
    image: project1,
    description:
      "Developed a high-performance ecommerce store using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented web scraping for product and price comparison across multiple platforms. Utilized MongoDB Atlas and Compass for data management. Integrated Google APIs for secure authentication. Enhanced user experience with a seamless interface for product comparison and order placement.",
    technologies: ["HTML", "Tailwind CSS", "MERN"],
  },
  {
    title: "Contact Management App",
    image: project2,
    description:
      "Developed a user-friendly contact management application using React JS, Tailwind CSS, and Firebase. Implemented custom notifications and robust form validation with Yup and Formik, enabling efficient CRUD operations. Utilized Toastify for pop-up notifications and managed state with useState and useEffect. Incorporated search functionality to enhance user experience. ",
    technologies: ["React Js", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Crypto Dashboard App",
    image: project3,
    description:
      "Converted a Figma design into a Crypto Dashboard Application using React.js, Chakra UI, and React Router DOM. The application enables users to view and manage cryptocurrency transactions with a responsive, user-friendly interface. Implemented dynamic routing for seamless navigation and utilized Chakra UI to match the design's visual specifications.",
    technologies: ["HTML", "CSS", "React Js", "Chakra UI"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "Created a fully responsive portfolio website using React JS, Tailwind CSS, and Framer Motion. Showcased my projects with engaging animations and included contact information for easy connection. Highlighted the technologies I can work on, demonstrating my skills and expertise.",
    technologies: ["React Js", "Tailwind CSS & Framer Motion"],
  },
  {
    title: "Sample Brand App",
    image: project5,
    description:
      "Developed a brand application page by converting a Figma design file into a functional web app using React.js, HTML, CSS, and JavaScript. Integrated Google Fonts to enhance the visual appeal and ensure consistent typography across different devices and browsers.",
    technologies: ["HTML", "CSS", "React Js"],
  },
];

export const CONTACT = {
  address: "Karachi, Pakistan ",
  phoneNo: "+92 320 3950 924 ",
  email: "faiqnawaz92@gmail.com",
};
