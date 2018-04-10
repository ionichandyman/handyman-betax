import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Query } from '../../app/query';
import { SearchResultPage } from '../search-result/search-result';
import { StaticsProvider } from '../../providers/statics/statics';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../app/categories';
import { of } from 'rxjs/observable/of';
import { Service } from '../../app/service';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';
import * as firebase from 'Firebase';
import { snapShotToArray } from '../../providers/statics/statics';
/* * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  category:Category;
  searchcriteria:Query;
  categories:Category[]=[];
  services:Observable<Service[]>;
  form:FormGroup;
  ref=firebase.database().ref('/statics/');

  constructor(public navCtrl: NavController, public navParams: NavParams,private staticSrv : StaticsProvider,_FB:FormBuilder) {
    this.category = navParams.get("category");
    var me=this;
    this.searchcriteria = new Query();
    this.searchcriteria.category = this.category.catId.toString();
    this.form = _FB.group({
      'serviceType' : ['',Validators.required],
      'appointmentDate' : ['',Validators.required],
      'bookingTimeFr' : ['',Validators.required],
      'bookingTimeTo' : ['',Validators.required]
    });
   this.ref.child(this.searchcriteria.category).once('value').then(result=>{
     alert(snapShotToArray(result).length);
   })

  }
  search():void{
   //this.navCtrl.setRoot()
   this.searchcriteria
    this.navCtrl.setRoot(SearchResultPage,{searchObj : this.searchcriteria});
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
