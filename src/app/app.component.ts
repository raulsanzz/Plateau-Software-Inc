import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map } from 'rxjs';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  apiData: any;

  constructor(
    public apiSercice: ApiServiceService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.ngxService.start();
    this.apiSercice
      .getData()
      .pipe()
      .subscribe((res) => {
        this.apiData = res;

        this.ngxService.stop();
      });
  }
}
