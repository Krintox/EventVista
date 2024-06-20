import { SortOrder } from "../../util/SortOrder";

export type DesignOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
