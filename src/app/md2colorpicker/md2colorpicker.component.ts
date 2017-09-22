import { Component } from '@angular/core';

@Component({
  selector: 'colorpicker-demo',
  templateUrl: 'md2colorpicker.component.html'
})
export class ColorpickerDemo {
  _color: string = null;
  isRequired = false;
  isDisabled = false;
  container: string = 'inline';
  containers: Array<any> = [
    { text: 'Inline', value: 'inline' },
    { text: 'Dialog', value: 'dialog' }];
}
