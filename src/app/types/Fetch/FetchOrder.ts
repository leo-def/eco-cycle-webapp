import { OrderEnum } from  '../../enums/Fetch/Order.enum';

export interface FetchOrder {
    [field: string]: OrderEnum;
}
