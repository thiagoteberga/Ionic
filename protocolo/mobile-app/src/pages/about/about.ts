import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';
import { ProtocoloServiceProvider } from '../../providers/protocolo-service/protocolo-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public protocol = {
    nome: "",
    descricao: ""
  };

  constructor(
    public navCtrl: NavController,
    private protocoloService: ProtocoloServiceProvider,
    public http: HttpClient,
    public navParams: NavParams
  ) { }

  saveProtocolo(protocolo){
    this.protocoloService.postProtocolo(protocolo);
  };

}
