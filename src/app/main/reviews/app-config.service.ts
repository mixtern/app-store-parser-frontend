import { Injectable } from '@angular/core';

export class App {
  id: number;
  appLink: string;
  slackLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  apps: App[];
  constructor() { this.apps = [{id: 0, appLink: "dsadas"}] }
}
