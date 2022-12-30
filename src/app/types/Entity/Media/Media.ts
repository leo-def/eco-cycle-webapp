import { TitleEntity } from "../Abstract/TitleEntity";

export interface Media extends TitleEntity {
  alt?: string;
  type?: string;
  mediaType?: string;
  src?: string;
}