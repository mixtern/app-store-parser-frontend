import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  appLink: string;
  slackLink: string;

  constructor() { }
}
