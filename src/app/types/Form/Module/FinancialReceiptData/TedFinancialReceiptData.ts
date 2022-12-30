import * as Yup from 'yup';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../../Abstract/EntityFieldset';
import { FinancialReceiptDataFieldset, financialReceiptDataFieldsetInitialValues, FinancialReceiptDataFieldsetSchema } from "./FinancialReceiptDataFieldset";

export interface TedFinancialReceiptDataFieldset extends EntityFieldset {
  financialReceiptData: FinancialReceiptDataFieldset;
  account: string;
  agency: string;
  agencyDigit: string;
  bankCod: string;
}

export const TedFinancialReceiptDataFieldsetSchema = EntityFieldsetSchema.shape({
  financialReceiptData: FinancialReceiptDataFieldsetSchema.nullable(true),
  account: Yup.string().nullable(true),
  agency: Yup.string().nullable(true),
  agencyDigit: Yup.string().nullable(true),
  bankCod: Yup.string().nullable(true)
});

export const tedFinancialReceiptDataFieldsetInitialValues: TedFinancialReceiptDataFieldset = {
  ...entityFieldsetInitialValues,
  financialReceiptData: financialReceiptDataFieldsetInitialValues,
  account: '',
  agency: '',
  agencyDigit: '',
  bankCod: ''
};