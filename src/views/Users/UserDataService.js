import { db } from '../../config/firebase'


class UserDataService {

    createUser(user) {
        return db.collection('users').add(user)
    }

}

export default new UserDataService();
