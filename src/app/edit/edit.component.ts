import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfluencerService } from './../services/influencer.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Influencer:any[] = []

  item:any = {
    username:'',
    full_name:'',
    phone:'',
    email:'',
    followers_count:'',
    following_count:'',
    category_id:'',
    social_networks_id:''
  }

  constructor(
    private ruta:ActivatedRoute,
    private influencerService:InfluencerService
  ) {
      this.ruta.params.subscribe(params => {
        console.log(params['id'])
        this.influencerService.getDatos(params['id'])
        this.Influencer.push(params['id'])
      })
   }

  ngOnInit(): void {
  }

  editar(item){
    this.influencerService.editarDato(item);
  }

}
