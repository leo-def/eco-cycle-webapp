import { Entity } from "../Abstract/Entity";
import { Value } from "../Measure/Value";
import { Media } from "../Media/Media";
import { Product } from "../Product/Product";

export interface ProductItem extends Entity {
  productId: number;
  product: Product;
  value: Value;
  valueId: number;
  media: Array<Media>;
  financialValue: Value;
  financialValueId: number;
}