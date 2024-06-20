import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  productId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
