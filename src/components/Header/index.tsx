"use client";
import Link from "next/link";
import React from "react";
import { useHeaderMutation } from "./mutation";

import Logo from "@/app/icon.svg";
import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa";

export const Header = () => {
  const { menu, activeLink, handlerLink } = useHeaderMutation();

  return (
    <header className="h-[64px] sticky top-0 z-50 flex flex-col w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-white/50 dark:bg-black/50">
      <nav className="mb-[-1px] h-full flex items-center w-full max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-row flex-1">
          <div className="mr-16">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex items-center">
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
                          ? `text-primary before:flex-none before:absolute before:w-full before:h-[0.01rem] before:bottom-[-21px] mt-[21px] z-10 before:bg-primary bottom-0 opacity-100`
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
        </div>
        <div>
          <button className="flex gap-2 items-center justify-center text-white bg-secondary dark:bg-primary p-[.5rem_1.2rem] rounded-3xl">
            <span>Entrar</span>
            <FaSignInAlt />
          </button>
        </div>
      </nav>
      <div className="border-b border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)]"></div>
    </header>
  );
};
