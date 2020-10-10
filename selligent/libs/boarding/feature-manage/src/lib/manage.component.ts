import { Component, OnInit} from '@angular/core';
import { ManageFacade } from '@selligent/boarding/domain';
import { Flight} from "@selligent/booking/domain";

@Component({
  selector: 'boarding-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
    private myFlight: Flight;


    constructor(private manageFacade: ManageFacade) {

    }


    ngOnInit() {
    }

}

