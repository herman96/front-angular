import { Component, OnInit } from '@angular/core';
import { InfluencerService } from './../services/influencer.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    private influencerService:InfluencerService
  ) { }

  ngOnInit(): void {
  }

  agregar(){
    this.influencerService.agregarDato(this.item);
  }

}
