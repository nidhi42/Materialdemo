import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdAutocompleteModule } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: './autocomplete-simple.component.html'
 
})
export class AutocompleteSimpleExample {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];
  foods = [
      { value: 'steak-0', viewValue: 'Steak' },
      { value: 'pizza-2', viewValue: 'BUrgure' },
      { value: 'tacos-2', viewValue: 'Tacos' }
  ];

}