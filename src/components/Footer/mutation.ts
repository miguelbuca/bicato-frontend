export const useFooterMutation = () => {
  const goToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return {
    goToTop,
  };
};
