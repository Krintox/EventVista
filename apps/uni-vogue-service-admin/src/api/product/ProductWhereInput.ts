import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DesignWhereUniqueInput } from "../design/DesignWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  design?: DesignWhereUniqueInput;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  store?: StoreWhereUniqueInput;
  title?: StringNullableFilter;
};
