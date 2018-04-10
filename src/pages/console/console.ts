import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { SearchPage } from '../search/search';
import { StaticsProvider, snapShotToArray } from '../../providers/statics/statics';
import { Category } from '../../app/categories';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as firebase from 'Firebase';
/**
 * Generated class for the ConsolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-console',
  templateUrl: 'console.html',
})
export class ConsolePage {
  user:User;
  categories:Category[];
  ref = firebase.database().ref('/statics/');
  constructor(public navCtrl: NavController, public navParams: NavParams,private staticSrv : StaticsProvider) {
    //load all categories
    var me=this;
    this.ref.once('value').then(result=>{
      me.categories = snapShotToArray(result);
    })
  }
  ionViewDidLoad() {  
    console.log('ionViewDidLoad ConsolePage');
  }
  selectCat(cat:Category){
    alert(cat.catDescription);
    this.navCtrl.setRoot(SearchPage,{category:cat});
  }
  loadCategories(){
    var me=this;
  
  }
}
