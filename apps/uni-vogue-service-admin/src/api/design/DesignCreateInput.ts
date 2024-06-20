import { InputJsonValue } from "../../types";
import { ProductCreateNestedManyWithoutDesignsInput } from "./ProductCreateNestedManyWithoutDesignsInput";

export type DesignCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  products?: ProductCreateNestedManyWithoutDesignsInput;
  title?: string | null;
};
