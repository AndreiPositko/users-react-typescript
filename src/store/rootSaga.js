import { all } from '@redux-saga/core/effects';

import sagaPosts from '../store/middleware/saga-posts';
import sagaUsers from '../store/middleware/saga-users';
import sagaPhotos from '../store/middleware/saga-photos';

export default function* rootSaga() {
  yield all([sagaPosts(), sagaUsers(), sagaPhotos()]);
}
