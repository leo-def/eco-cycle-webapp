import { Entity } from "../Abstract/Entity";
import { MeasurementUnit } from "./MeasurementUnit/MeasurementUnit";

export interface Value extends Entity {
  measurementUnitId?: number;
  measurementUnit?: MeasurementUnit;
  value?: number;
}