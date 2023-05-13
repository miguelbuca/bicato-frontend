import { useBetterState } from "@/hooks";

export const useHeaderMutation = () => {
  const activeLink = useBetterState<string>("/");
  const menu: {
    name: string;
    url: string;
  }[] = [
    {
      name: "Início",
      url: "/",
    },
    {
      name: "Profissões",
      url: "/professions",
    },
    {
      name: "Apoio ao cliente",
      url: "./support",
    },
  ];

  const handlerLink = (url: string) => (activeLink.value = url);

  return {
    menu,
    activeLink,
    handlerLink,
  };
};
