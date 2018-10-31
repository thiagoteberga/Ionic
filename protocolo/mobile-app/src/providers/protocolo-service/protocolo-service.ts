import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Protocolos } from '../../models/protocolo';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProtocoloServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProtocoloServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProtocoloServiceProvider Provider');
  }

  getProtocolos(): Observable<Protocolos[]>{
    return this.http.get<Protocolos[]>('http://localhost:3000/api/protocolo');
  }

}
