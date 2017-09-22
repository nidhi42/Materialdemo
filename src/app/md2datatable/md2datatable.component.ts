import {
    Component,
    Pipe,
    PipeTransform
} from '@angular/core';
import { Http } from '@angular/http';

@Pipe({ name: 'dataPipe' })
export class DataTablePipe implements PipeTransform {
    transform(array: any[], query: string): any {
        if (query) {
            query = query.toLowerCase();
            return array.filter((value: any) =>
                value.name.toLowerCase().indexOf(query) > -1);
        }
        return array;
    }
}

@Component({
    selector: 'data-table-demo',
    templateUrl: 'md2datatable.component.html'
})
export class DataTableDemo {
    data: any = null;
    search: string = null;

    constructor(private http: Http) {
        this.http.get('./assets/data.json')
            .subscribe((data) => {
                this.data = data.json();
            });
    }
}
