export const getStylesAndUrl = projectName => {
  const obj = {
    Fash: {
      backColor: "#f8f7ff",
      color: "#271c64",
      url: "https://react-e-commerce-app-18fea.web.app/",
    },
    Mysplash: {
      backColor: "#fdf0f2",
      color: "#770012",
      url: "https://myspash-18bb4.web.app/",
    },
    GitHub_S: {
      backColor: "#eff5fd",
      color: "#00397c",
      url: "https://github-search-graphql-2c08a.web.app/",
    },
  };

  return obj[projectName];
};
