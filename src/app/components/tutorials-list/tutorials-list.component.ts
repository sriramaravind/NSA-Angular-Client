import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  currentIndex = -1;
  name = '';
  freezes: any;
  currentFreeze = null;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.retrieveFreezes();
  }

  //freeze
  retrieveFreezes() {
    this.tutorialService.getAll1()
      .subscribe(
        data => {
          this.freezes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList1() {
    this.retrieveFreezes();
    this.currentFreeze = null;
    this.currentIndex = -1;
  }

  setActiveFreeze(freeze, index) {
    this.currentFreeze = freeze;
    this.currentIndex = index;
  }

  removeAllFreezes() {
    this.tutorialService.deleteAll1()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveFreezes();
        },
        error => {
          console.log(error);
        });
  }

}
