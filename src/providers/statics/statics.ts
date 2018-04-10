import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Category } from '../../app/categories';
import { Service } from '../../app/service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'Firebase';

/*
  Generated class for the StaticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticsProvider {
  resp;
  //ref = firebase.database().ref('/statics/');

  allCategories: Observable<Category[]>;
  isLoaded : boolean;
  ref=firebase.database().ref('statics/');

  constructor(public http: HttpClient,afDatabase:AngularFireDatabase) {
    var data;
    console.log('Hello StaticsProvider Provider');
    
    
   }
  fetchCategories(cat:Observable<Category[]>):void{
    var me=this;
    var data:Observable<Category[]>;
    
     
 }
 fetchServices(catID:number){
    
 }
  getCategories():Observable<Category[]> {
    var catReturn:Category[] = [];
    var cat1:Category;
    var cat1Service1:Service;
    var cat1Service2:Service;

    var cat2:Category;
    var cat2Service1:Service;
    var cat2Service2:Service;

    cat1Service1 = new Service();
    cat1Service2 = new Service();
    cat2Service1 = new Service();
    cat2Service2 = new Service();
    cat1Service1.catId = 1;
    cat1Service1.serviceDescription = "Plumbing";
    cat1Service1.serviceId = 10001;
    
    cat1Service2.catId =1;
    cat1Service2.serviceDescription = "Electrictian"
    cat1Service2.serviceId = 10002;
  
    cat1 = new Category();
    cat1.catImg = "../../assets/imgs/basin-1502544_640.jpg";
  
    cat1.catId = 1;
    cat1.catServices = [];

    cat1.catDescription = "Handyman";
    cat1.catServices.push(cat1Service1);
    cat1.catServices.push(cat1Service2);
    catReturn.push(cat1);
   
    
    cat2 = new Category();
    cat2.catId = 2;
    cat2.catDescription =  "Wellness";
    cat2.catServices = [];
    cat2.catImg =   "../../assets/imgs/wellness.jpg";
    cat2Service1 = new Service();
    cat2Service1.catId=2;
    cat2Service1.serviceDescription = "Reflexologist";
    cat2Service1.serviceId = 20001;
    cat2.catServices.push(cat2Service1);
    cat2.catServices.push(cat2Service1);

    catReturn.push(cat2);
    return of(catReturn);

  }
  
  
}
export const snapShotToArray = snapshot =>{
  let returnArray = [];
  snapshot.forEach(childSnapshot=>{
    let item = childSnapshot.val();
   item.key = childSnapshot.key;
    console.log(childSnapshot);
   
    returnArray.push(item);
  });
  return returnArray;
}