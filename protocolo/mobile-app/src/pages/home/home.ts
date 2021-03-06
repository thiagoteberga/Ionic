import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ProtocoloServiceProvider } from '../../providers/protocolo-service/protocolo-service';
import { Protocolos } from '../../models/protocolo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _protocolos: Protocolos[];

  constructor(
    public navCtrl: NavController,
    private protocoloService: ProtocoloServiceProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {

  }

  ionViewDidEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Aguarde...',
    });

  loading.present();
  this.protocoloService.getProtocolos().subscribe(
    (protocolos) => {
      loading.dismiss();
      this._protocolos = protocolos;
    },
    () => {
      let alert = this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Wrewn, nem deu... Try Again!!',
        buttons: ['Ok, né...']
      });
      loading.dismiss();
      alert.present();
    }
  );
  }

  onProtocoloSelected(protocolo: Protocolos){
    let alert = this.alertCtrl.create({
      title: 'Informações do Protocolo:',
      subTitle: `<br><b>Id: </b>${protocolo.id}<br>
      <b>Protocolo:</b> <i>${protocolo.protocolo}</i><br>
      <b>Nome:</b> ${protocolo.nome}<br>
      <b>Descrição:</b> ${protocolo.descricao} `,
      buttons: ['Ok']
    });
    alert.present();
  }

}