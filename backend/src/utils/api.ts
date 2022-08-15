import axios, { AxiosError } from "axios";

export const getApi = async (url: string) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data;
  }
};
