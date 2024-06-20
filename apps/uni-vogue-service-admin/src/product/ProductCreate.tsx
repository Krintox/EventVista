import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DesignTitle } from "../design/DesignTitle";
import { OrderTitle } from "../order/OrderTitle";
import { StoreTitle } from "../store/StoreTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="design.id" reference="Design" label="design">
          <SelectInput optionText={DesignTitle} />
        </ReferenceInput>
        <div />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <ReferenceInput source="store.id" reference="Store" label="store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
