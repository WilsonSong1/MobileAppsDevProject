import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle} from '@ionic/angular/standalone';
import { NewsService } from '../Services/newsservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle],
})
export class HomePage implements OnInit{
  news:any = [];
  constructor(private newsService:NewsService, private router:Router) {
  }
  
  //Navigates to sign in page
  signInPage(){
    this.router.navigate(['/sign-in',{item:this.news}])
  }
  
  //Navigates to sports page
  sportsPage(){
    this.router.navigate(['/sports-page',{item:this.news}])
  }

  //Navigates to science page
  sciencePage(){
    this.router.navigate(['/science-page',{item:this.news}])
  }

  //calls the method to get data from api
  ngOnInit(): void{
    this.loadNews();
  }

  loadNews() {
    this.newsService.getTopHeadlines().subscribe((data) => {
      this.news = data.articles;
    });
  }

}