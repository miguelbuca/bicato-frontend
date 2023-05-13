import Metrics from "@/components/Metrics";
import StoreButtons from "@/components/StoreButtons";
import Image from "next/image";

import Cover from "@/app/cover-bg.png";
import MobilePub from "@/app/mobile-pub.png";
import UserVerified from "@/app/user-virefied.png";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative before:absolute dark:bg-secondary top-[-64px] bg-secondary h-[33rem]">
        <div className="flex relative justify-center">
          <div className="flex flex-col pt-[64px] w-full max-w-screen-xl px-4 mx-auto h-[650px]">
            <div className="flex flex-1 text-white justify-center flex-col max-w-[50%]">
              <div className="text-8xl">
                b<span className="text-primary">!</span>scato
              </div>
              <div>
                <p className="text-base italic my-[3rem]">
                  &quot; Não importa o trabalho que você precisa fazer, nós
                  temos um biscateiro perfeito para você. Baixe nosso aplicativo
                  de biscato agora e tenha acesso rápido a uma lista de
                  trabalhadores independentes qualificados em sua área.&quot;
                </p>
              </div>
              <StoreButtons />
            </div>
            <div className="flex items-end h-[123px] max-w-[50%]">
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
          <div className="absolute right-0 flex justify-end">
            <Image height={650} src={Cover} alt="cover-person" />
          </div>
        </div>
      </section>
      <section className="relative flex gap-10 justify-center flex-row top-[64px] my-32 w-full max-w-screen-xl p-4 mx-auto">
        <div>
          <div>
            <Image
              style={{
                height: 600,
                width: "auto",
              }}
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
