import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-customerlist',
    templateUrl: './customerlist.component.html'
})

export class CustomerListComponent {
    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe((data) => {
            console.log('Data-------->>>', data);
        });
    }
}
