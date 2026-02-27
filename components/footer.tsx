"use client";
import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiX } from "react-icons/fi";

const Footer: React.FC = () => {
  const productLinks = ["Features", "Pricing", "Integrations", "Changelog"];
  const resourcesLinks = ["Documentation", "Tutorials", "Blog", "Support"];
  const companyLinks = ["About", "Careers", "Contact", "Partners"];
  const socialLinks = [
    { icon: <FiX />, href: "#" },
    { icon: <FiInstagram />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
    { icon: <FiGithub />, href: "#" },
  ];

  return (
    <footer className="w-full bg-background border-t border-foreground/10">
      <section className="py-4 ">
        <div className="flex flex-wrap w-full max-sm:gap-10  justify-between">
          <div className="flex flex-col space-y-4 w-full md:w-1/3">
            <h1 className="">Shahin</h1>
            <p className="text-sm text-muted-foreground">
              Building clean and scalable web experiences making development
              faster and easier.
            </p>

            <div className="flex gap-5 md:gap-10  text-xl">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h6 className="font-semibold mb-4">Product</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h6 className="font-semibold mb-4">Resources</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {resourcesLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h6 className="font-semibold mb-4">Company</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-foreground/10 pt-6 flex flex-col md:flex-row justify-between text-sm text-muted-foreground gap-2">
          <span className="text-center">
            © {new Date().getFullYear()} Shahin. All rights reserved.
          </span>
          <div className="flex space-x-4 justify-center">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
