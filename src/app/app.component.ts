import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billdesk-integration';

  constructor(private http: HttpClient) {

  }

  pay() {
    this.http.post<any>('https://www.billdesk.com', {
      message: `'BDSKUATY';|MXYZ0412001668|NA|100.00|NA|NA|NA|INR|NA|R|'bdskuaty';|NA|NA|F|NA|john@gmail.com|9903103632|NA|NA|NA|NA|'http://localhost:3000/payment_success';|45519334E87395638A17F6AFAB3548D76051FF9C5107CF8E45D64C3926C12245'`
    }).subscribe(data => {
      console.log(data);

    })
  }
}
