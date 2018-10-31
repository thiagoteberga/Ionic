import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Protocolos } from '../../models/protocolo';
import { Observable } from 'rxjs/Observable';
import { AlertController} from 'ionic-angular';

/*
  Generated class for the ProtocoloServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProtocoloServiceProvider {

  protocolo: Observable<any>;

  constructor(public http: HttpClient,     private alertCtrl: AlertController) {
    console.log('Hello ProtocoloServiceProvider Provider');
  }

  getProtocolos(): Observable<Protocolos[]>{
    return this.http.get<Protocolos[]>('http://localhost:3000/api/protocolo');
  }

  postProtocolo(protocolo){
    var url = 'http://localhost:3000/api/protocolo';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers});

    this.http.post(url, protocolo)
    .map(res => { Response })
    .subscribe(data => console.log(data));

    let alert = this.alertCtrl.create({
      title: 'Registro Inserido com Sucesso!',
      subTitle: `<br><b>Nome: </b>${protocolo.nome}<br>
      <b>Descrição:</b> ${protocolo.descricao} `,
      buttons: ['Ok']
    });
    alert.present();
    protocolo.nome = '';
    protocolo.descricao = '';
};

}
