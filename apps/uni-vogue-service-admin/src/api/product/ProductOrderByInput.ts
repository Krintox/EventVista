import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  designId?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  price?: SortOrder;
  storeId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
