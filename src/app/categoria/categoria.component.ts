import { Component, OnInit } from '@angular/core';
import { InfluencerService } from './../services/influencer.service'

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public categorias: Array<any> = []

  constructor(
    private influencerService:InfluencerService
  ) {
    this.influencerService.getCategoria().subscribe((resp: any) => {
      resp.results.forEach(result => {
        this.influencerService.getCategoriaData(result.name)
          .subscribe((resp: any) => {
            this.categorias.push(resp);
            console.log(this.categorias)
          });
      });
    })
   }

  ngOnInit(): void {
  }

}
