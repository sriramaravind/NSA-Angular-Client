import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { GridviewComponent } from './components/grid/grid.component';
import{GridModule, PagerModule} from '@syncfusion/ej2-angular-grids';
import{SortService,FilterService,GroupService,ToolbarService, ExcelExportService,PageService} from '@syncfusion/ej2-angular-grids';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule,MatCardModule,
  MatSlideToggleModule, MatSelectModule, MatOptionModule} from '@angular/material'; 
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'; 

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    GridviewComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    DatePickerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    TimePickerModule,
    MatInputModule  
  ],
  providers: [
    PagerModule,
    FilterService,
    GroupService,
    ToolbarService,
    ExcelExportService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
