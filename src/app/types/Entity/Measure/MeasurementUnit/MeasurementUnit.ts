import { TitleEntity } from "../../Abstract/TitleEntity";
import { PhysicalQuantity } from "../PhysicalQuantity/PhysicalQuantity";

export const getTitle = (item?: MeasurementUnit) => {
  return item?.title;
}

export interface MeasurementUnit extends TitleEntity {
  value?: number;
  physicalQuantity?: PhysicalQuantity;
  physicalQuantitySymbol?: string;
  symbol?: string;
}