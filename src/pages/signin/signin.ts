import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../app/user';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }
  login(){
    //call a service that retrieves user
    this.navCtrl.setRoot(HomePage,{userobj : this.user});
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
