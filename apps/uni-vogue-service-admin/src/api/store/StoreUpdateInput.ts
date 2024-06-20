import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  products?: ProductUpdateManyWithoutStoresInput;
};
