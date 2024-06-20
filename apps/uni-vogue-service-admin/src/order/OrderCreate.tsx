import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <DateTimeInput label="orderDate" source="orderDate" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
