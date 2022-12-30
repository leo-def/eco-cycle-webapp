import { FetchParams } from './FetchParams';

export interface FetchResponse {
    items: Array<any>;
    count?: number;
    params?: FetchParams;
    fetched: boolean;
    fetchPending: boolean;
    error: string | null;
    fetchLoading: boolean;
}