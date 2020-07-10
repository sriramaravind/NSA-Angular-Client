import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  currentTutorial = null;
  currentFreeze = null;
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: AuthenticationService
  ) { }

  ngOnInit() {
    this.message = '';
    this.getFreeze(this.route.snapshot.paramMap.get('id'));
  }

  getFreeze(id) {
    this.tutorialService.get1(id)
      .subscribe(
        data => {
          this.currentFreeze = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial1() {
    this.tutorialService.update1(this.currentFreeze.id, this.currentFreeze)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Date was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
}
