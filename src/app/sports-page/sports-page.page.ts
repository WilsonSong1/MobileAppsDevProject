import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SportsService } from '../Services/sports-service.service';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle} from '@ionic/angular/standalone';


@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.page.html',
  styleUrls: ['./sports-page.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle],
})
export class SportsPagePage implements OnInit {

  sports:any = [];

  constructor(private weatherService:SportsService, private router:Router) { }


  //gets data about sports from api
  ngOnInit() {
    this.weatherService.GetSportsData().subscribe(
      (data)=>{
        this.sports = data.articles

      }
    )
  }

  //navigates back to the main page
  newsPage(){
    this.router.navigate(['/home',{item:this.sports}])
  }
}