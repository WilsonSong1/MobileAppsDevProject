import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle} from '@ionic/angular/standalone';
import { ScienceService } from '../Services/science-service.service';

@Component({
  selector: 'app-science-page',
  templateUrl: './science-page.page.html',
  styleUrls: ['./science-page.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle],
})
export class SciencePagePage implements OnInit {

  science:any = [];

  constructor(private sportsService:ScienceService, private router:Router) { }

  //gets data from api
  ngOnInit() {
    this.sportsService.GetScienceData().subscribe(
      (data)=>{
        this.science = data.articles

      }
    )
  }
  //navigates back to home page
  newsPage(){
    this.router.navigate(['/home',{item:this.science}])
  }
}