import { Request, Response } from "express";
import { getCategory } from "../helpers";
import { getApi } from "../utils/api";
import { UrlServices, author } from "../common";

const getItems = async (req: Request, res: Response) => {
  const url = `${UrlServices(process.env.ENDPOINT).search}${
    req.query.q
  }&&limit=4`;
  let responseItem: Items = {} as Items;
  if (req.query.q) {
    const { results } = await getApi(url);
    const breadcrumb: string[] = await getCategory(
      results,
      `${UrlServices(process.env.ENDPOINT).category}`
    );

    const items = results.map((item: DataEntity) => {
      const {
        id,
        title,
        thumbnail,
        condition,
        installments: { currency_id, amount },
        shipping: { free_shipping },
      } = item;
      return {
        id,
        title,
        price: { currency: currency_id, amount: amount, decimals: 3 },
        picture: thumbnail,
        condition,
        free_shipping,
      };
    });

    responseItem = {
      ...responseItem,
      author,
      categories: breadcrumb,
      items,
    };

    res.send(responseItem);
  }
};

export default getItems;
