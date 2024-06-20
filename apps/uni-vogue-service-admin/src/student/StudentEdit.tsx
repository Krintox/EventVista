import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="enrollmentDate" source="enrollmentDate" />
        <TextInput label="name" source="name" />
        <TextInput label="university" source="university" />
      </SimpleForm>
    </Edit>
  );
};
