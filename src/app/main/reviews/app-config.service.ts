import { Injectable } from '@angular/core';

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
  constructor() { this.apps =  this.getApps()}
  
  createApp(id: number,
    appLink: string,
    name?: string,
    slackLink?: string,
    reviews: Review[] = new Array) {
      
    this.apps.push({id, name, appLink, slackLink, reviews});
  }

  getApps() {
    return [{id: 0, appLink: "dsadas", slackLink: "yuvibvuyib", name: "AMOGUS", reviews: this.getReviews(0)}];
  }

  getReviews(appId: number) : Review[] {
    return [{id: 0, text: "sus", username: "IMPOSTA"}]
  }
}
