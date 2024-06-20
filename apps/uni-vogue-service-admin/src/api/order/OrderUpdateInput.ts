import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: string | null;
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  status?: "Option1" | null;
};
