import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteSimpleExample } from './autocomplete/autocomplete-simple.component';
import { TabsSimpleComponent } from './tabs/tabs-simple.component';
import { MdSidenavModule } from '@angular/material';
//table component declaration
import { TableFilteringExample } from './table/table.component';
import { DialogOverviewExample } from './dialogue/dialogue.component';
//diaglogue component declaration
import { DialogOverviewExampleDialog } from './dialogue/dialogue.component';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
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
//material select module  declaration
import { MdSelectModule } from '@angular/material';
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
const appRoutes: Routes = [
    { path: 'autocomplete', component: AutocompleteSimpleExample },
    { path: 'tabs', component: TabsSimpleComponent },
    { path: 'dialogue', component: DialogOverviewExample },
    { path: 'table', component: TableFilteringExample },
    { path: 'accordian', component: AccordionDemo },
    { path: 'autocompletemd2', component: AutocompleteDemo },
    { path: 'chipsmd2', component: ChipsDemo },
    { path: 'collapsemd2', component: CollapseDemo },
    { path: 'colorpicker', component: ColorpickerDemo },
    { path: 'datatable', component: DataTableDemo },
    { path: 'datepicker', component: DatepickerDemo },
    { path: 'md2dialogue', component: DialogDemo },
    { path: 'md2menu', component: MenuDemo },
    { path: 'md2select', component: SelectDemo },
    { path: 'md2tabs', component: TabsDemo },
    { path: 'md2tags', component: TagsDemo },
    { path: 'md2toast', component: ToastDemo },
    { path: 'md2tooltip', component: TooltipDemo },
    {
        path: '',
        redirectTo: '/autocomplete',
        pathMatch: 'full'
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
   
})

export class AppRoutingModule { }
