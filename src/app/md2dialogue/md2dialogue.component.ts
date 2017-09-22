import { Component } from '@angular/core';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'dialog-demo',
  templateUrl: 'md2dialogue.component.html'
})
export class DialogDemo {
  dialogHeader: string = 'Lorum Ipsum';

  open(dialog: Md2Dialog) {
    dialog.open();
  }

  close(dialog: any) {
    dialog.close();
  }
}
