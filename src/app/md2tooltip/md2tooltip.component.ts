import { Component } from '@angular/core';

@Component({
    selector: 'tooltip-demo',
    templateUrl: 'md2tooltip.component.html'
})
export class TooltipDemo {
    tooltip: string = 'Tooltip!';
    position: string = 'below';
    delay: number = 0;
}
