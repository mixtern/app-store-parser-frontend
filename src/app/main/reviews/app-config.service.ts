import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import axios from 'axios';

export class Review {
  id: number;
  username: string;
  avatar_link?: string;
  date?: Date;
  app_version?: string;
  rating?: number;
  relevance?: number;
  text: string;
}

export class App {
  id: number;
  name?: string;
  appLink: string;
  slackLink?: string;
  reviews?: Review[];
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  apps: App[];
  auth: AuthService;
  constructor(auth: AuthService) { 
    this.auth = auth;
    this.apps = this.getApps();
  }
  
  createApp(id: number,
    appLink: string,
    name?: string,
    slackLink?: string,
    reviews: Review[] = new Array) {
    axios.post("https://gres.ml/api/add-app", {
      "url": appLink,
      "platform": "google_play"
    }, {
      headers: {"Authorization" : "Bearer " + this.auth.token}
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log();
    })
  }
  getApps() {
    console.log(this.auth.token)
    axios.get("https://gres.ml/api/integration-list", {
        headers: {"Authorization" : "Bearer " + this.auth.token}
      }
    )
    .then(res => {
      return res.data;
    })
    .catch(res => {
      console.log(res);
    });
    return []
  }

  getReviews(appId: number) : Review[] {
    return [{id: 0, text: "Сложность искусствунного интелекта поражает! Играю все дни напролёт", username: "Professional player"},
    {id: 1, text: "сложно и непонятно", username: "Juan"},
    {id: 2, text: "а как играть?", username: "Jeff"},
    {id: 3, text: "Классное приложение, и набор косметических улучшений огромный.", username: "Cosmo"},
    {id: 4, text: "Думаю, голосовой чат был бы идеален", username: "Ted"},
    {id: 4, text: "А можете сделать шахматы?", username: "Anon42"}]
  }
}
