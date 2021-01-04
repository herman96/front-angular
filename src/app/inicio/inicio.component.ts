import { Component, OnInit } from '@angular/core';
import { InfluencerService } from './../services/influencer.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public Influencer: Array<any> = []

  constructor(
    private influencerService:InfluencerService
  ) {
    this.influencerService.getInfluencer().subscribe((resp: any) => {
      resp.results.forEach(result => {
        this.influencerService.getDatos(result.name)
          .subscribe((resp: any) => {
            this.Influencer.push(resp);
            console.log(this.Influencer)
          });
      });
    })
   }

  ngOnInit(): void {
  }

  eliminar(item){
    this.influencerService.elimnarDato(item);
  }

}
