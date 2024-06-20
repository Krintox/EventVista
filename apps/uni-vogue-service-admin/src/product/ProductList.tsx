import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DESIGN_TITLE_FIELD } from "../design/DesignTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="design" source="design.id" reference="Design">
          <TextField source={DESIGN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="price" source="price" />
        <ReferenceField label="store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
