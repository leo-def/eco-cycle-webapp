import { FinancialReceiptData } from "../FinancialReceiptData";

export interface TedFinancialReceiptData extends FinancialReceiptData {
  account?: string;
  agency?: string;
  agencyDigit?: string;
  bankCod?: string;
}