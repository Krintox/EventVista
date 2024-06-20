import { InputJsonValue } from "../../types";
import { ProductUpdateManyWithoutDesignsInput } from "./ProductUpdateManyWithoutDesignsInput";

export type DesignUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  products?: ProductUpdateManyWithoutDesignsInput;
  title?: string | null;
};
