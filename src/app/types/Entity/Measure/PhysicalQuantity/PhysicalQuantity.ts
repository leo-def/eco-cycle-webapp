import { TitleEntity } from "../../Abstract/TitleEntity";

export const getTitle = (item?: PhysicalQuantity) => {
  return item?.title;
}

export interface PhysicalQuantity extends TitleEntity {
  symbol?: string;
}