import { useBetterState } from "@/hooks";

export const useHeaderMutation = () => {
  const activeLink = useBetterState<string>(window.location.pathname);
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
