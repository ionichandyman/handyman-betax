import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';

/**
 * Generated class for the WorkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workorder',
  templateUrl: 'workorder.html'
})
export class WorkorderPage {
   user:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get("userobj");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkorderPage');
  }

}
