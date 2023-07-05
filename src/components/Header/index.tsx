"use client";
import Link from "next/link";
import React from "react";
import { useHeaderMutation } from "./mutation";

import Logo from "@/app/icon.svg";
import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

export const Header = () => {
  const { menu, activeLink, toggleMenu, handlerLink } = useHeaderMutation();

  return (
    <header className="h-[64px] sticky top-0 z-50 flex flex-col w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-white/50 dark:bg-black/50">
      <nav className="mb-[-1px] h-full flex items-center w-full max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-row flex-1">
          <div className="mr-16 md:flex-none sm:flex-none xs:flex-1 ss:flex-1">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex items-center  md:hidden sm:hidden xs:flex ss:flex">
            <button onClick={() => (toggleMenu.value = !toggleMenu.value)}>
              <BiMenuAltRight size={35} />
            </button>
          </div>
          <div className="flex items-center sm:flex xs:hidden ss:hidden">
            <ul className="flex flex-row">
              {menu.map(({ name, url }, index) => (
                <li
                  className="px-3"
                  key={index}
                  onClick={() => handlerLink(url)}
                >
                  <Link href={url}>
                    <span
                      className={`relative text-sm font-[500]  hover:opacity-100 transition-all ${
                        activeLink.value === url
                          ? `text-primary before:flex-none before:absolute before:w-full before:h-[0.01rem] before:bottom-[-22px] mt-[21px] z-10 before:bg-primary bottom-0 opacity-100`
                          : `dark:opacity-50 opacity-70`
                      }`}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={(e) => {
              toggleMenu.value = !toggleMenu.value;
              e.preventDefault();
            }}
            style={{
              left: toggleMenu.value ? "0" : "-100%",
            }}
            className="hidden xs:flex ss:flex flex-col fixed bg-[rgba(0,0,0,0.3)] left-[-100%] transition-all top-0 w-[100%] z-[999] h-[100vh]"
          >
            <ul className="flex flex-1 flex-col bg-white h-[100%] dark:bg-black max-w-[50%] w-[300px] border-r border-r-[rgba(0,0,0,0.06)] dark:border-r-[rgba(255,255,255,0.06)]">
              <li className="px-3 py-4">
                <strong>Menu</strong>
              </li>
              {menu.map(({ name, url }, index) => (
                <li
                  className="px-3 py-4"
                  key={index}
                  onClick={() => handlerLink(url)}
                >
                  <Link href={url}>
                    <span
                      className={`relative text-sm font-[500]  hover:opacity-100 transition-all ${
                        activeLink.value === url
                          ? toggleMenu.value
                            ? `text-primary before:flex-none before:absolute before:h-[32px] before:w-[0.2rem] before:left-[-12px] before:top-[-6px] mt-[21px] z-10 before:bg-primary  opacity-100`
                            : `text-primary before:flex-none before:absolute before:w-full before:h-[0.01rem] before:bottom-[-22px] mt-[21px] z-10 before:bg-primary bottom-0 opacity-100`
                          : `dark:opacity-50 opacity-70`
                      }`}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="flex justify-center items-end px-3 py-4">
                <button className="flex gap-2 items-center justify-center text-white bg-secondary dark:bg-primary p-[.5rem_1.2rem] rounded-3xl sm:flex">
                  <span>Entrar</span>
                  <FaSignInAlt />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="flex gap-2 items-center justify-center text-white bg-secondary dark:bg-primary p-[.5rem_1.2rem] rounded-3xl sm:flex xs:hidden ss:hidden">
            <span>Entrar</span>
            <FaSignInAlt />
          </button>
        </div>
      </nav>
      <div className="border-b border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)]"></div>
    </header>
  );
};
