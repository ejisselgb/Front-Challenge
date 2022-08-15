import { getApi } from "../utils/api";

export const getCategory = async (
  data: DataEntity[],
  url: string
): Promise<string[]> => {
  let breadcrumb: string[] = [];
  let low = 0;
  for (const product of data) {
    const { path_from_root } = await getApi(`${url}${product.category_id}`);

    if (path_from_root.length > low) {
      low = path_from_root.length;
      const stringCategory = path_from_root.map(
        (value: Category) => value.name
      );
      breadcrumb = stringCategory;
    }
  }

  return breadcrumb;
};
