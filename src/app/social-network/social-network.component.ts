import { Component, OnInit } from '@angular/core';
import { InfluencerService } from './../services/influencer.service'

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {

  public social: Array<any> = []

  constructor(
    private influencerService:InfluencerService
  ) {
    this.influencerService.getSocialNet().subscribe((resp: any) => {
      resp.results.forEach(result => {
        this.influencerService.getSocialData(result.name)
          .subscribe((resp: any) => {
            this.social.push(resp);
            console.log(this.social)
          });
      });
    })
   }

  ngOnInit(): void {
  }

}
