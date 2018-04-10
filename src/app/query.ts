import { DateTimeData } from "ionic-angular/util/datetime-util";

export class Query{
    serviceType : string;
    appointmentDate:DateTimeData;
    bookingTimeFr:DateTimeData;
    bookingTimeTo:DateTimeData;
    area : string;
    category:string;
}