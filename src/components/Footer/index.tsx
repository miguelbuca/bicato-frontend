import Image from "next/image";
import React from "react";

import Logo from "@/app/icon.svg";
import Link from "next/link";

import { BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-center flex-col ">
      <div className="border-b border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)]"></div>
      <div className="flex flex-col w-full max-w-screen-xl p-4 pt-12 mx-auto">
        <div className="flex sm:flex-row mb-16 gap-10 xs:flex-col ss:flex-col">
          <div className="flex md:flex-1 md:gap-10 md:flex-row xs:justify-around xs:flex-row ss:flex-row ss:gap-10">
            <div>
              <strong className="text-lg">Contatos</strong>
              <ul className="mt-4">
                {/*<li className="opacity-50 hover:opacity-100">
                  <Link href={"tel:+244948000000"}>+244 948000000</Link>
  </li>*/}
                <li className="opacity-50 hover:opacity-100">
                  <Link href={"mailto:support@biscato.ao"}>
                    support@biscato.ao
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 sm:flex-none">
              <div className="w-fit">
                <div>
                  <strong className="text-lg">Junte-se a nós</strong>
                  <ul className="mt-4">
                    <li className="opacity-50 hover:opacity-100">
                      <Link href={"mailto:support@biscato.ao"}>Instagram</Link>
                    </li>
                    <li className="opacity-50 hover:opacity-100">
                      <Link href={"mailto:support@biscato.ao"}>Linkedin</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col xs:flex-col ss:flex-col">
            <div className="flex xs:items-center xs:justify-center ss:items-center ss:justify-center">
              <button className="flex gap-2 items-center justify-center lex-row p-[.7rem_1.2rem] border-[1px] border-[rgba(0,0,0,0.5)] rounded-3xl dark:border-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.5)] ">
                <BsArrowUpShort size={25} /> <span>Voltar para o topo</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row justify-between opacity-50 sm:flex-col xs:flex-col ss:flex-col">
          <div className="flex flex-row sm:items-center sm:justify-center sm:mb-6 xs:items-center xs:justify-center xs:mb-6 ss:items-center ss:justify-center ss:mb-6">
            <div className="mr-6">Política de Privacidade</div>
            <div>Código de Conduta</div>
          </div>
          <div className="flex sm:items-center sm:justify-center xs:items-center xs:justify-center ss:items-center ss:justify-center">
            Copyright © 2023 Biscato.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
