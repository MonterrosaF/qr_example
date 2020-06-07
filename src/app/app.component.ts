import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
declare let $: JQueryStatic;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;

  datos: string;
  mostrar: boolean;
  constructor() {
    this.mostrar = false;
  }

  camerasFoundHandler(e) {
    console.log('camerasfound', e);
  }

  camerasNotFoundHandler(e) {
    console.log('cameranotfound', e);
  }

  scanSuccessHandler(e) {
    console.log('scanSuccessHandler', e);
    this.datos = e;
    this.mostrar = true;
  }

  // scanErrorHandler(e) {
  //   console.log('scanErrorHandler', e);
  // }

  // scanFailureHandler(e) {
  //   console.log('scanFailureHandler', e);
  // }

  // scanCompleteHandler(e) {
  //   console.log('scanCompleteHandler', e);
  // }

  ngOnInit(): void {}
}
