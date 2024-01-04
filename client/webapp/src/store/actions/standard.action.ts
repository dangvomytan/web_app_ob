import { createAction } from '@reduxjs/toolkit';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';

const getStandard: PayloadActionCreator<undefined> = createAction('GET_STANDARD');

export { getStandard };
