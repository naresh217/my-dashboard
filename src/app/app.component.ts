import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public customerData;
  public objectKeys;
  constructor(private _appService: AppService) {
    this._appService.getCustomerData().subscribe(data => {
      data.sheet1.splice(0, 1 )
      this.customerData = data.sheet1;
      console.log(this.customerData);
    });
  }
  selectedCustomerId: string = null;
  ngOnInit() {
    console.log('App Started');

  }
  private onSelect (value: any ) {

    this.objectKeys = Object.keys(value);

  }

}
