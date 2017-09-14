import { Component, ViewEncapsulation } from '@angular/core';
import { MdSnackBar } from '@angular/material';
@Component({
    selector: 'tabs-simple',
    templateUrl: 'tabs-simple.component.html',
    encapsulation: ViewEncapsulation.None,
  
    styleUrls: ['tabs-simple.component.css'],
   
})
export class TabsSimpleComponent {
    typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

    folders = [
        {
            name: 'Photos',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/16'),
        }
    ];
    notes = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
        }
    ];
    color: string;

    availableColors = [
        { name: 'none', color: '' },
        { name: 'Primary', color: 'primary' },
        { name: 'Accent', color: 'accent' },
        { name: 'Warn', color: 'warn' }
    ];

    mode = 'determinate';
    value = 50;
    constructor(public snackBar: MdSnackBar) { }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
