import Metrics from "@/components/Metrics";
import StoreButtons from "@/components/StoreButtons";
import Image from "next/image";

import Cover from "@/app/cover-bg.png";
import MobilePub from "@/app/mobile-pub.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biscato",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <section className="relative before:absolute dark:bg-secondary top-[-64px] bg-secondary xs:h-[33rem] ss:h-[25rem]">
        <div className="flex relative justify-center">
          <div className="flex flex-col pt-[64px] w-full max-w-screen-xl px-4 mx-auto h-[650px]">
            <div className="md:relative flex flex-1 text-white justify-center flex-col max-w-[50%] md:min-w-0 md:bottom-10 sm:absolute sm:z-10 sm:min-w-full sm:bottom-20 xs:absolute xs:z-10 xs:min-w-full xs:bottom-36 ss:absolute ss:z-10 ss:min-w-full ss:top-32 md:-top-10">
              <div className="sm:text-8xl xs:text-6xl ss:text-6xl">
                b<span className="text-primary">!</span>scato
              </div>
              <div className="md:max-w-none xs:max-w-[90%] ss:max-w-[90%]">
                <p className="md:text-base italic my-[3rem]  xs:text-sm ss:text-sm">
                  &quot; Não importa o trabalho que você precisa fazer, nós
                  temos um biscateiro perfeito para você. Baixe nosso aplicativo
                  de biscato agora e tenha acesso rápido a uma lista de
                  trabalhadores independentes qualificados em sua área.&quot;
                </p>
              </div>
              <StoreButtons />
            </div>
            <div className="flex ml:items-end h-[123px] ml:max-w-[50%] ml:bottom-0 xs:max-w-full xs:items-center xs:justify-center xs:absolute xs:w-full xs:bottom-[-128px] ss:max-w-full ss:items-center ss:justify-center ss:absolute ss:w-full ss:bottom-0">
              <Metrics
                data={[
                  {
                    name: "Trabalhos",
                    value: "2.7M",
                  },
                  {
                    name: "Biscateiros",
                    value: "782.7",
                  },
                  {
                    name: "Profissões",
                    value: "15K",
                  },
                ]}
              />
            </div>
          </div>
          <div className="absolute right-0 flex justify-end sm:bottom-0 xs:bottom-[123px] ss:top-[64px]">
            <Image height={650} src={Cover} alt="cover-person" />
          </div>
        </div>
      </section>
      <section className="relative flex gap-10 justify-center flex-row top-[64px] my-32 w-full max-w-screen-xl p-4 mx-auto sm:flex-col md:flex-row xs:flex-col ss:flex-col">
        <div>
          <div className="flex  sm:items-center sm:justify-center xs:items-center xs:justify-center ss:items-center ss:justify-center">
            <Image
              className="sm:h-[600px] w-auto ss:h-[500px]"
              src={MobilePub}
              alt="mobile-pub"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-4">
          <div className="mb-4">
            <strong className="text-3xl text-tertiary">
              Algumas funcionalidades
            </strong>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                - Encontrar de trabalhadores e empregadores
              </li>
              <li className="mb-2">- Anúncios de trabalho</li>
              <li className="mb-2">- Avaliações e comentários</li>
              <li className="mb-2">- Suporte ao cliente</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
