import { Component } from '@angular/core';
import { Md2Toast } from 'md2';

@Component({
    selector: 'toast-demo',
    templateUrl: 'md2toast.component.html'
})
export class ToastDemo {
    constructor(private toast: Md2Toast) { }
    toastMe() {
        this.toast.toast('test message...');
    }
}
