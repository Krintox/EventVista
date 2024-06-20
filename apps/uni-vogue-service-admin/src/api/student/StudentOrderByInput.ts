import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  enrollmentDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  university?: SortOrder;
  updatedAt?: SortOrder;
};
