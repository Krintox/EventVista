import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  enrollmentDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  university?: StringNullableFilter;
};
