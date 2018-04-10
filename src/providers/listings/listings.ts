import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../../app/user';
import { Skill } from '../../app/skill';
import { Service } from '../../app/service';
import { Query } from '../../app/query';

/*
  Generated class for the ListingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListingsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ListingsProvider Provider');
  }
  fetchProviders(query:Query) : Observable<User[]>{
    var user = [];
    

    return of(this.getUserListings(query));
  }
  getUserListings(query:Query):User[]{
    var allListings = [];
    allListings = this.generateUsers();
    var ret:User[]=[];
    //mockup sample
       allListings.forEach(function(listing,idx){
          if(listing.services.find(function(service){
            return service.catId==parseInt(query.category) &&
              service.serviceId == parseInt(query.serviceType);  
            })!=null){
            ret.push(listing);
          }
       });
        return ret;
  }
  hire(hiree:User): Observable<string> {
    return of("Success" );
  }
  private generateUsers() : User[] {
    var one = new User();
    var two = new User();
    var ret:User[]=[];
    var service1:Service;
    var service2:Service;
    var service3:Service;

    service1 = new Service();
    service1.catId = 1; //handyman
    service1.serviceId = 10001;
    service1.serviceDescription="Plumbing";
    
    service2 = new Service();
    service2.catId = 1; //handyman
    service2.serviceId = 10002;
    service2.serviceDescription ="Electrician";
    
    one.login_id='uncay';
    one.name = 'Jake Yabut Abella;';
    one.profilePic = "xxx";
    one.role = "provider";
    one.skills = [];
    one.services = [];
    one.services.push(service1);
    one.services.push(service2);
    ret.push(one);

    two.login_id='tmpfug';
    two.name="Gong Fucai";
    two.role = "provider";
    two.skills = [];

    //ff
    two.services = [];
    service3 = new Service();
    service3.catId = 2;
    service3.serviceDescription = "Reflexologist"
    service3.serviceId = 20001;
    two.services.push(service3);
    //end
    ret.push(two);

    return ret;

  }

}
