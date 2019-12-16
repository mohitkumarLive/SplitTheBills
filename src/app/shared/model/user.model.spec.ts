import { UserModel } from './user.model';

describe('Testing User Model', () => {

    let  user: UserModel;
    beforeEach(() => {
          user = new UserModel('Mohit');
    });

    it('New UserModel', () => {
            expect(user.UserName).toBe('Mohit');
    });


});
