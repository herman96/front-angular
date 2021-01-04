import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(
    private http: HttpClient
  ) {
    console.log('Hola soy un influencer!')
  }
  
  getInfluencer() {
    return this.http.get('https://127.0.0.1/api/influencers');
  }

  getDatos(name: String) {
    return this.http.get(`https://127.0.0.1/api/influencers/${name}`);
  }

  getUno(i) {
    return this.http.get(`https://127.0.0.1/api/influencers/${i}`);
  }

  agregarDato(item: Item){
    return this.http.post('https://127.0.0.1/api/influencers/create',item);
  }

  editarDato(item: Item){
    return this.http.post(`https://127.0.0.1/api/influencers/${item}`,item);
  }

  elimnarDato(item: Item){
    return this.http.post(`https://127.0.0.1/api/influencers/delete/${item}`,item);
  }

  getCategoria() {
    return this.http.get('https://127.0.0.1/api/categories');
  }

  getCategoriaData(name: String) {
    return this.http.get(`https://127.0.0.1/api/categories/${name}`);
  }

  getSocialNet() {
    return this.http.get('https://127.0.0.1/api/social-networks');
  }

  getSocialData(name: String) {
    return this.http.get(`https://127.0.0.1/api/social-networks/${name}`);
  }
}
