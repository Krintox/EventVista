import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="enrollmentDate" source="enrollmentDate" />
        <TextInput label="name" source="name" />
        <TextInput label="university" source="university" />
      </SimpleForm>
    </Create>
  );
};
