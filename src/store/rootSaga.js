import { all } from '@redux-saga/core/effects';

import sagaPosts from '../store/middleware/saga-posts';
import sagaSinglePost from '../store/middleware/saga-single-post';
import sagaUsers from '../store/middleware/saga-users';
import sagaSingleUser from '../store/middleware/saga-single-user';
import sagaPhotos from '../store/middleware/saga-photos';
import sagaSinglePhoto from '../store/middleware/saga-single-photo';

export default function* rootSaga() {
  yield all([
    sagaPosts(),
    sagaSinglePost(),
    sagaUsers(),
    sagaSingleUser(),
    sagaPhotos(),
    sagaSinglePhoto(),
  ]);
}
