import * as Yup from 'yup';
import { PixFinancialReceiptDataKeyTypeEnum } from '../../../../enums/Entity/PixFinancialReceiptDataKeyType.enum';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../../Abstract/EntityFieldset';
import { FinancialReceiptDataFieldset, financialReceiptDataFieldsetInitialValues, FinancialReceiptDataFieldsetSchema } from "./FinancialReceiptDataFieldset";

export interface PixFinancialReceiptDataFieldset extends EntityFieldset {
  financialReceiptData: FinancialReceiptDataFieldset;
  type: PixFinancialReceiptDataKeyTypeEnum;
  value: string;
}

export const PixFinancialReceiptDataFieldsetSchema = EntityFieldsetSchema.shape({
  financialReceiptData: FinancialReceiptDataFieldsetSchema.nullable(true),
  type: Yup.string().oneOf(Object.values(PixFinancialReceiptDataKeyTypeEnum) as Array<string>).nullable(true),
  value: Yup.string().nullable(true)
});

export const pixFinancialReceiptDataFieldsetInitialValues: PixFinancialReceiptDataFieldset = {
  ...entityFieldsetInitialValues,
  financialReceiptData: financialReceiptDataFieldsetInitialValues,
  type: PixFinancialReceiptDataKeyTypeEnum.doc,
  value: ''
};