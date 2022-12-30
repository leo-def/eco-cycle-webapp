
import adminSagas from './Admin';
import clientSagas from './Client';
import groupSagas from './Group';
import sharedSagas from './Shared';

const moduleSagas: any[] = [
    ...adminSagas,
    ...clientSagas,
    ...groupSagas,
    ...sharedSagas
];

export default moduleSagas;
