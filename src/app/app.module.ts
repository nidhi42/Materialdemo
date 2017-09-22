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
//md2 accordion component
import { AccordionDemo } from './md2accordian/accordion-demo.component';
//md2 autocomplete
import { AutocompleteDemo } from './md2autocomplete/autocompletemd2.component';
//md2 Chips
import { ChipsDemo } from './md2chips/md2chips.component';
//md2 Collapse
import { CollapseDemo } from './md2collapse/collapsemd2.component';
//md2 ColorPicker
import { ColorpickerDemo } from './md2colorpicker/md2colorpicker.component';
//md2 Datatable
import { DataTableDemo, DataTablePipe } from './md2datatable/md2datatable.component';
//md2 Datatable
import { DatepickerDemo } from './md2datepicker/md2datepicker.component';
//md2 Datatable
import { DialogDemo } from './md2dialogue/md2dialogue.component';
//md2 Datatable
import { MenuDemo } from './md2menu/md2menu.component';
//md2 Datatable
import { SelectDemo } from './md2select/md2select.component';
//md2 Tabs
import { TabsDemo } from './md2tabs/md2tabs.component';
//md2 Tags
import { TagsDemo } from './md2tags/md2tags.component';
//md2 Toast
import { ToastDemo } from './md2toast/md2toast.component';
//md2 Tooltip
import { TooltipDemo } from './md2tooltip/md2tooltip.component';
//Http Module
import { HttpModule } from '@angular/http';
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
import { Md2Module } from 'md2';

@NgModule({
  declarations: [
      AppComponent, DataTablePipe, AutocompleteSimpleExample, TabsSimpleComponent, TableFilteringExample, DialogOverviewExample, DialogOverviewExampleDialog, AccordionDemo, AutocompleteDemo, ChipsDemo, CollapseDemo, ColorpickerDemo, DataTableDemo, DatepickerDemo, DialogDemo, MenuDemo, SelectDemo, TabsDemo, TagsDemo, ToastDemo, TooltipDemo
  ],
  imports: [
      BrowserAnimationsModule,BrowserModule, FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      AppRoutingModule,
      MdInputModule,
      Md2Module,
      /*Datepickar */
      MdDatepickerModule,
      MdNativeDateModule,
      MdSelectModule,
      MdDialogModule,
      HttpModule  

  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AutocompleteSimpleExample, DataTableDemo, TabsSimpleComponent, DialogOverviewExample, DialogOverviewExampleDialog, AccordionDemo,]
})

export class AppModule { }
