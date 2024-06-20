/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { DesignWhereUniqueInput } from "../../design/base/DesignWhereUniqueInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { StoreWhereUniqueInput } from "../../store/base/StoreWhereUniqueInput";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DesignWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DesignWhereUniqueInput)
  @IsOptional()
  @Field(() => DesignWhereUniqueInput, {
    nullable: true,
  })
  design?: DesignWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  imageUrl?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => StoreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoreWhereUniqueInput)
  @IsOptional()
  @Field(() => StoreWhereUniqueInput, {
    nullable: true,
  })
  store?: StoreWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ProductUpdateInput as ProductUpdateInput };