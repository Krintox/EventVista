import { DesignWhereUniqueInput } from "../design/DesignWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  design?: DesignWhereUniqueInput | null;
  imageUrl?: InputJsonValue;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
};
