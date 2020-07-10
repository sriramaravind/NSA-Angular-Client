import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})

export class AddTutorialComponent implements OnInit {

  public date: Object = new Date();
  public minDate: Date = this.getFreezeDate(0, 0, 0);

  month: number;
  year: number;
  day: number;

  currentdate: any;
  currenttime: any;

  public show: boolean = false;
  public buttonName: any = 'Show';

  lateentry: boolean = false;

  tutorial = {
    name: '',
    date: '',
    time: ''
  };

  submitted = false;
  submitted1 = false;
  myControl = new FormControl();
  options: string[] = [
    'Angamuthu, Hariharan', 'Aravind, Sriram', 'D, Panneerselvam', 'E, Balasubramaniam', 'Elumalai, Saranya', 'Elumalai, Sarath Kumar',
    'Ganesan, karthikeyan', 'J, Lourdusamy', 'Kumar, Dharani', 'L, Floriann Deepika', 'M, Anandha Bhavani Devi', 'M, Franslin Alex Ruban',
    'Nisha, Nilofer', 'P, Sakthivel', 'PARI, SANGAVAI', 'R, Suresh', 'R, Swaminathan', 'Raj, Sujith', 'S, Priyanka', 'Sadhasivam, Krishnaveni',
    'Sasanapuri, Santhosh Kumar', 'Sebastin, Sunil Tony', 'TS, Abdulla', 'V, Malathi', 'V, Nithya Lakshmi', 'V, Uma', 'V Nair, Remya'
  ];

  getFreezeDate(day: number, month: number, year: number) {
    return new Date(year, month - 1, day)
  }

  filteredOptions: Observable<string[]>;

  constructor(private tutorialService: TutorialService,
    private loginService: AuthenticationService
  ) { }


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.freezeDate();
  }

  hideFunction() {
    this.lateentry = true
    var x = document.getElementById('auto');
    var y = document.getElementById('manual');
    var z = document.getElementById('manualtxt');
    if (x.style.display === 'none' && y.style.display === 'none' && z.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'block';
      z.style.display = 'block';
    } else {
      x.style.display = 'none';
      y.style.display = 'none';
      z.style.display = 'none';
    }
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  timeTo12HrFormat(time) {   // Take a time in 24 hour format and format it in 12 hour format
    var time_part_array = time.split(":");
    var ampm = 'AM';
    var formatted_time;

    if (time_part_array[0] >= 12) {
      ampm = 'PM';
    }

    if (time_part_array[0] > 12) {
      time_part_array[0] = time_part_array[0] - 12;
    }

    formatted_time = time_part_array[0] + ':' + time_part_array[1] + ':' + time_part_array[2] + ' ' + ampm;

    return formatted_time;
  }

  findlateentry(late) {

    if (this.lateentry == true) {
      this.tutorial.name = this.tutorial.name + '(M)'
    }
    else {
      this.tutorial.name = this.tutorial.name
    }
    return this.tutorial.name;
  }

  saveTutorial() {
    this.tutorial.name = this.findlateentry(this.lateentry)
    this.tutorial.date = new Date(this.tutorial.date).toLocaleDateString('en-US')
    this.tutorial.time = this.timeTo12HrFormat(this.tutorial.time)

    const data = {
      name: this.tutorial.name,
      date: this.tutorial.date,
      time: this.tutorial.time
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      name: '',
      date: '',
      time: ''
    };
  }

  freezeDate() {
    this.tutorialService.findByfday()
      .subscribe(
        (data: any) => {
          this.minDate = this.getFreezeDate(parseInt(data.fday), parseInt(data.fmonth), parseInt(data.fyear));
          console.log(data.fday);
        },
        error => {
          console.log(error);
        });
  }

  getcurrent() {
    this.currentdate = new Date().toLocaleDateString('en-US');
    this.currenttime = new Date().toLocaleTimeString('en-GB');
    this.tutorial.date = this.currentdate
    this.tutorial.time = this.currenttime
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}