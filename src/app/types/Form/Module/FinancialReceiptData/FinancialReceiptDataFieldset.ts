import * as Yup from 'yup';
import { FinancialReceiptDataTypeEnum } from '../../../../enums/Entity/FinancialReceiptDataType.enum';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../../Abstract/EntityFieldset';

export interface FinancialReceiptDataFieldset extends EntityFieldset {
  role: FinancialReceiptDataTypeEnum;
}

export const FinancialReceiptDataFieldsetSchema = EntityFieldsetSchema.shape({
  role: Yup.string().oneOf(Object.values(FinancialReceiptDataTypeEnum) as Array<string>).nullable(true)
});

export const financialReceiptDataFieldsetInitialValues: FinancialReceiptDataFieldset = {
  ...entityFieldsetInitialValues,
  role: FinancialReceiptDataTypeEnum.pix
};