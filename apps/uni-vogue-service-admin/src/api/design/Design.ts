import { JsonValue } from "type-fest";
import { Product } from "../product/Product";

export type Design = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  imageUrl: JsonValue;
  products?: Array<Product>;
  title: string | null;
  updatedAt: Date;
};
