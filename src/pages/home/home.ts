import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/user';
import { ConsolePage } from '../console/console';
import { WorkorderPage } from '../workorder/workorder';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user : User;
  consoleTab = ConsolePage;
  workorderTab = WorkorderPage;
 
  constructor(public navCtrl: NavController, public navParams : NavParams) {
    this.user = this.navParams.get("userobj");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsolePage');
  }
}
