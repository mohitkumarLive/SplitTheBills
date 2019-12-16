import { RandomString } from '../../globals/util';
export  class  UserModel {
    UserId: string;
    UserName: string;

    constructor(name: string) {
        this.UserId = RandomString();
        this.UserName  = name;
    }
}
