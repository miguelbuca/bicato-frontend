"use client";

import { usePathname } from "next/navigation";
import { useBetterState } from "@/hooks";

export const useHeaderMutation = () => {
  const pathname = usePathname();
  const activeLink = useBetterState<string>(pathname);
  const menu: {
    name: string;
    url: string;
  }[] = [
    {
      name: "Início",
      url: "/",
    },
    {
      name: "Como funciona",
      url: "/how-it-works",
    },
    {
      name: "FAQ",
      url: "/faq",
    },
    {
      name: "Sobre",
      url: "./about",
    },
  ];

  const handlerLink = (url: string) => (activeLink.value = url);

  return {
    menu,
    activeLink,
    handlerLink,
  };
};
