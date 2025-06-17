import React from "react";
import logoImage from "/footer-logo.png";
import { FaFacebookF} from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-200 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src={logoImage} alt="Logo" />
            </Link>
          </div>
          <p className="text-sm">
            Professional electronic repair services with expert technicians and quality parts.
          </p>
          <div className="flex mt-4 space-x-3 text-gray-400">
            <Link to={"https://www.facebook.com/profile.php?id=61568221811046"}><FaFacebookF className="hover:text-white cursor-pointer" /></Link>
            <Link to={"https://www.linkedin.com/in/srpinki/"}></Link><LiaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <Link to={"/all-services"} className="hover:text-white">
                All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Popular Services
</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Smartphone Repair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Laptop Repair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gaming Console Fix
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tablet Repair
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MdEmail className="text-primary mr-2 mt-1" />
              <span>info@fixitron.com</span>
            </li>
            <li className="flex items-start">
              <MdPhone className="text-primary mr-2 mt-1" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-start">
              <MdLocationOn className="text-primary mr-2 mt-1" />
              <span>
                123 Tech Street, Digital City
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        © 2025 Fixitron. All rights reserved.
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
