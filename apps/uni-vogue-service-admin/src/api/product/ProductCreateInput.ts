import { DesignWhereUniqueInput } from "../design/DesignWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  design?: DesignWhereUniqueInput | null;
  imageUrl?: InputJsonValue;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  store?: StoreWhereUniqueInput | null;
  title?: string | null;
};
