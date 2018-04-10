import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { Query } from '../../app/query';
import { ListingsProvider } from '../../providers/listings/listings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  results : User[];
  query : Query;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private ListingSrv:ListingsProvider) {
    this.query = navParams.get("searchObj");
    
    this.searchProviders(this.query);
  }
  searchProviders(queryx:Query):void{
    this.ListingSrv.fetchProviders(queryx).subscribe(result=>this.results = result);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }
  hire(hiree:User){
    
     this.ListingSrv.hire(hiree).subscribe(res=>status=res);
     if(status=="Success"){
        this.showAlert("Your request to hire : " + hiree.name+ " had been approved!");
     }
  }
  viewProfile(hiree:User){
    this.showAlert('showing ' + hiree.name);
  }
  showAlert(msg:string) {
    let alert = this.alertCtrl.create({
      title: 'Pronto!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  
}
