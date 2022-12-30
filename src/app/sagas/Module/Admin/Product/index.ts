import productCrudSaga from './ProductCrud';
import productFetchSaga from './ProductFetch';

const productSagas: any[] = [
    productCrudSaga,
    productFetchSaga
]

export default productSagas
