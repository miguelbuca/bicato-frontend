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
        <div className="flex flex-row mb-16 gap-10">
          <div>
            <div>
              <strong className="text-lg">Contatos</strong>
              <ul className="mt-4">
                <li className="opacity-50 hover:opacity-100">
                  <Link href={"tel:+244948000000"}>+244 948000000</Link>
                </li>
                <li className="opacity-50 hover:opacity-100">
                  <Link href={"mailto:support@biscato.ao"}>
                    support@biscato.ao
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex-1">
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
            <div>
              <button className="flex gap-2 items-center justify-center lex-row p-[.7rem_1.2rem] font-semibold border-[2px] border-[rgba(0,0,0,0,0.5)] rounded-3xl dark:border-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0,0.5)] dark:text-[rgba(255,255,255,0.5)]">
                <BsArrowUpShort size={25} /> <span>Voltar para o topo</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between opacity-50">
          <div className="flex flex-row">
            <div className="mr-6">Política de Privacidade</div>
            <div>Código de Conduta</div>
          </div>
          <div>Copyright © 2023 Biscato.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
