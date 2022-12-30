import { FetchPagination } from "../../types/Fetch/FetchPagination";
import { FetchParams } from "../../types/Fetch/FetchParams";
import { FetchResponse } from "../../types/Fetch/FetchResponse";
import { TableParams } from "../../types/Fetch/TableParams";

export class FetchUtils {

    static convertTableParamsToFetchResponse(tableParams: TableParams, fetchResponse?: FetchResponse): FetchResponse | undefined {
        if (!tableParams) {
            return fetchResponse;
        }
        fetchResponse = fetchResponse || {} as FetchResponse;
        fetchResponse.params = FetchUtils.convertTableParamsToFetchParams(tableParams, fetchResponse.params);
        return fetchResponse;
    }

    static convertTableParamsToFetchParams(tableParams: TableParams, fetchParams?: FetchParams): FetchParams | undefined {
        if (!tableParams) {
            return fetchParams;
        }
        fetchParams = fetchParams || {} as FetchParams;
        const pagination = fetchParams.pagination || {} as FetchPagination
        pagination.skip = (tableParams.page + 1) * tableParams.size;
        pagination.size = tableParams.size;
        return fetchParams;
    }

    static convertFetchResponseToTableParams(fetchResponse: FetchResponse, tableParams?: TableParams): TableParams | undefined {
        if (!fetchResponse) {
            return tableParams;
        }
        return FetchUtils.convertFetchParamsToTableParams(fetchResponse.params, fetchResponse.count, tableParams);
    }

    static convertFetchParamsToTableParams(fetchParams?: FetchParams, count?: number, tableParams?: TableParams): TableParams | undefined {
        if (!fetchParams || !fetchParams.pagination) {
            return tableParams;
        }
        tableParams = tableParams || {} as TableParams;
        const pagination = fetchParams.pagination;
        const { skip, size } = pagination;
        tableParams.page = (skip ? Math.ceil(skip / size) : 1);
        tableParams.pages = (count ? Math.ceil(count / size) : 0);
        tableParams.size = (size);
        return tableParams;
    }

}