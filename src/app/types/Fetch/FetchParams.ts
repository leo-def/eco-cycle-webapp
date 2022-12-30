import { FetchFields } from "./FetchFields";
import { FetchFilter } from "./FetchFilter";
import { FetchOrder } from "./FetchOrder";
import { FetchPagination } from "./FetchPagination";

export interface FetchParams {
	order?: FetchOrder;
	pagination?: FetchPagination;
	filter?: FetchFilter;
	fields?: FetchFields;
}
