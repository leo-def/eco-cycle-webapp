import { Media } from "../Media/Media";
import { TitleEntity } from "../Abstract/TitleEntity";

export const getTitle = (item?: Product) => {
  return item?.title;
}

export interface Product extends TitleEntity {
  media?: Array<Media>;
}