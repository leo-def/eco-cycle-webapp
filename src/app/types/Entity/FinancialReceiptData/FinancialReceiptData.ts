import { Entity } from '../Abstract/Entity';
import { FinancialReceiptDataTypeEnum } from '../../../enums/Entity/FinancialReceiptDataType.enum';

export interface FinancialReceiptData extends Entity {
  type?: FinancialReceiptDataTypeEnum;
}

