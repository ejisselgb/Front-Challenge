import { Request, Response } from "express";
import { getApi } from "../utils/api";
import { UrlServices, author } from "../common";

export const getItemId = async (req: Request, res: Response) => {
  const baseurl = UrlServices(`${process.env.ENDPOINT}`).items;
  const url = `${baseurl}${req.params.id}`;
  const urlDescription = UrlServices(`${url}/`).description;

  const {
    id,
    title,
    price,
    currency_id,
    pictures,
    condition,
    shipping: { free_shipping },
    sold_quantity,
    category_id,
  } = await getApi(url);
  const { plain_text } = await getApi(urlDescription);

  const urlCategory = UrlServices(process.env.ENDPOINT).category;
  const { path_from_root } = await getApi(`${urlCategory}${category_id}`);
  const categories = path_from_root.map((value: Category) => value.name);

  res.send({
    author,
    categories,
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: 3,
      },
      picture: pictures[0].url,
      condition,
      free_shipping,
      sold_quantity,
      description: plain_text,
    },
  });
};
