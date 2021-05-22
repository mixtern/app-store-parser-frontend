import { Component } from '@angular/core';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  Apps = ["a","a","a"];
  Reviews = [["sadsa"],[],['da','dsa','asdsq']]

  openAddAppModal() {
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");

    let link = modal.querySelector("[id=app-link]");
    console.log(link);
    console.log(link.textContent);
    link.textContent = "";
  }
}
