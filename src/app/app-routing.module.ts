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
const appRoutes: Routes = [
    { path: 'autocomplete', component: AutocompleteSimpleExample },
    { path: 'tabs', component: TabsSimpleComponent },
    { path: 'dialogue', component: DialogOverviewExample },
    { path: 'table', component: TableFilteringExample },
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
