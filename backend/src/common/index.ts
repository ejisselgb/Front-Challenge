export const UrlServices = (baseurl: string | undefined) => {
  return {
    search: `${baseurl}sites/MLA/search?q=`,
    category: `${baseurl}categories/`,
    items: `${baseurl}items/`,
    description: `${baseurl}description`,
  };
};

export const author = { name: "Erika", lastname: "Gutierrez Beltran" };
