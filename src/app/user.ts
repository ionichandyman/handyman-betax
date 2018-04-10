import { UserOrders } from './user-orders';
import { Skill } from '../app/skill'
import { Service } from './service';
export class User{
    login_id : string;
    name : string;
    role : string;
    orders : UserOrders[];
    profilePic : string;
    skills: Skill[];
    services:Service[];
    status : string;
    areaCode:string;
}
