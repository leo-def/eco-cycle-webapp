import { Entity } from "../Abstract/Entity";

export interface Address extends Entity {
  cep?: string;
  street?: string;
  number?: string;
  city?: string;
  country?: string;
  state?: string;
  neighborhood?: string;
  complement?: string;
}