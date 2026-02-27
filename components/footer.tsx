"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import Button from "@/Utilities/button";
import Image from "next/image";
const Footer: React.FC = () => {
  const productLinks = [
    "Companies",
    "Pricing",
    "Terms",
    "Advice",
    "Privacy Policy",
  ];
  const resourcesLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FiInstagram />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
    { icon: <FiTwitter />, href: "#" },
  ];

  return (
    <footer className="w-full bg-secondary text-background border-t border-foreground/10">
      <section className="py-4 ">
        <div className="flex flex-wrap w-full max-sm:gap-10  justify-between">
          <div className="flex flex-col space-y-4 w-full md:w-1/3">
            <div className="flex space-x-2 items-center ">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-10 h-10"
              />
              <h1 className="text-xl font-bold text-text">QuickHire</h1>
            </div>
            <p className="text-sm! text-muted-foreground">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>

            <div className="flex gap-5 md:gap-10  text-xl"></div>
          </div>

          <div>
            <h6 className="font-semibold mb-4">About</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background!">
                    {link}
                  </a>
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
                  <a href="#" className="text-background!">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-2">
            <h6 className="font-semibold ">Get job notifications</h6>
            <p className="text-sm! text-muted-foreground">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex w-full gap-2 pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none bg-background text-text-primary px-3 py-2 w-2/3  "
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-text-neutrals/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-muted-foreground gap-2">
          <span className="text-center text-background/40">
            © {new Date().getFullYear()} QuickHire. All rights reserved.
          </span>
          <div className="flex space-x-4 justify-center">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background! text-2xl! bg-background/10 p-2 rounded-full"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
