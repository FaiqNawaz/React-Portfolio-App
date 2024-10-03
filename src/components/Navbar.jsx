import logo from "../assets/shortLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" flex mb-20 items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-11" src={logo} alt="logo" />
      </div>

      <div className="flex m-8 items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/faique-nawaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/FaiqNawaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/FaiqueNawaz92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook />
        </a>

        <a
          href="https://www.instagram.com/faiqnawaz92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
