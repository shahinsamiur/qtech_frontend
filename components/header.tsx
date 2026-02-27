"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";
import { headerMenu as Menu, MenuItemType } from "@/_mock/headerMenu";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <header className="w-full bg-background  fixed top-0 left-0 z-50">
      <section>
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-text">Shahin</h1>

          <nav className="hidden md:flex space-x-8">
            {Menu.map((item: MenuItemType, index) => (
              <a key={index} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-text focus:outline-none transition-transform duration-300"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </section>

      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-white shadow-md"
        style={{ height: 0 }}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4">
          {Menu.map((item, index) => (
            <a key={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
