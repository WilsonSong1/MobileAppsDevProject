import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle, IonInput, IonLabel, IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, IonActionSheet, IonButton, IonMenu, IonGrid, IonRow, IonCol, IonMenuToggle, IonInput, IonLabel, IonItem, FormsModule],
})
export class SignInPage implements OnInit {

  signin:any = [];
  username: string = "";
  password: string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  newsPage(){
    this.router.navigate(['/home',{item:this.signin}])
  }

}
