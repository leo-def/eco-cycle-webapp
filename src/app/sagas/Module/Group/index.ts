import collaboratorSaga from './Collaborator';
import itemOfferSaga from './ItemOffer';
import placeSaga from './Place';
import vehicleSaga from './Vehicle';
import setSaga from './Set';


const groupSagas: any[] = [
    ...collaboratorSaga,
    ...itemOfferSaga,
    ...placeSaga,
    ...vehicleSaga,
    setSaga
]

export default groupSagas