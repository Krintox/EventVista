import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type DesignWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  products?: ProductListRelationFilter;
  title?: StringNullableFilter;
};
