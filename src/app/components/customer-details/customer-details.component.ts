import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-customer-details',
    templateUrl: 'customer-details.component.html'
})

export class CustomerDetailsComponent {
    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe((data) => {
            console.log('Data-------->>>', data);
        });
    }
}
