import { DateTime } from "ionic-angular";

export class UserOrders{
    login_id : string;
    job_id : string;
    job_owner : string;
    appointmentDate : DateTime;
    orderDate : DateTime;
    isCompleted: boolean;
}