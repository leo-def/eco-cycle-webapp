import { PixFinancialReceiptDataKeyTypeEnum } from '../../../../enums/Entity/PixFinancialReceiptDataKeyType.enum';
import { FinancialReceiptData } from '../FinancialReceiptData';

export interface PixFinancialReceiptData extends FinancialReceiptData {
  keyType?: PixFinancialReceiptDataKeyTypeEnum;
  key?: string;
}
