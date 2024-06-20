import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  products?: ProductCreateNestedManyWithoutStoresInput;
};
