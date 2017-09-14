import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//routing module declaration
import { AppRoutingModule } from './app-routing.module';
//autocomplete component declaration
import { AutocompleteSimpleExample } from './autocomplete/autocomplete-simple.component';
//tabs component declaration
import { TabsSimpleComponent } from './tabs/tabs-simple.component';
//table component declaration
import { TableFilteringExample } from './table/table.component';
//diaglogue component declaration
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialogue/dialogue.component';

//material module for autocomplete declaration
import { MdAutocompleteModule } from '@angular/material';
//material module for Forms declaration
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//main material module  declaration
import { MaterialModule } from '@angular/material';
//material datepicker module  declaration
import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';	
//material select module  declaration
import { MdSelectModule } from '@angular/material';
//material slide module  declaration
import { MdSlideToggleModule } from '@angular/material';
//material slider nav module  declaration
import { MdSidenavModule } from '@angular/material';
//material grid list module  declaration
import { MdGridListModule } from '@angular/material';

//material mdcard  module  declaration
import { MdCardModule } from '@angular/material';

//material expandion module
import { MdExpansionModule } from '@angular/material';
//material button
import { MdButtonModule } from '@angular/material';

//material Chips
import { MdChipsModule } from '@angular/material';
//material progressbar spinner
import { MdProgressSpinnerModule } from '@angular/material';
//material progressbar 
import { MdProgressBarModule } from '@angular/material';
//material dialogue
import { MdDialogModule } from '@angular/material';
//tootip
import { MdTooltipModule } from '@angular/material';
//snackbar
import { MdSnackBarModule } from '@angular/material';
//table Module
import { MdTableModule } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
@NgModule({
  declarations: [
      AppComponent, AutocompleteSimpleExample, TabsSimpleComponent, TableFilteringExample, DialogOverviewExample, DialogOverviewExampleDialog
  ],
  imports: [
      BrowserAnimationsModule,BrowserModule, FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      AppRoutingModule,
      MdInputModule,
      /*Datepickar */
      MdDatepickerModule,
      MdNativeDateModule,
      MdSelectModule,
      MdDialogModule

  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AutocompleteSimpleExample, TabsSimpleComponent, DialogOverviewExample, DialogOverviewExampleDialog]
})

export class AppModule { }
