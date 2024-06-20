import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer?: string | null;
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  status?: "Option1" | null;
};
