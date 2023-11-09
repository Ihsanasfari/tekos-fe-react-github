import nookies from "nookies";

export const getToken = () => {
  return nookies.get()?.access_token ?? null;
};

export const removeSpace = (word) => {
  return word.replace(/\s/g, "");
};
