import { Design } from "../design/Design";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Store } from "../store/Store";

export type Product = {
  createdAt: Date;
  description: string | null;
  design?: Design | null;
  id: string;
  imageUrl: JsonValue;
  orders?: Array<Order>;
  price: number | null;
  store?: Store | null;
  title: string | null;
  updatedAt: Date;
};
