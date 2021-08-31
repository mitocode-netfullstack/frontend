import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@igmh/services/local/loading.service';

@Component({
  selector: 'igmh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loadingStatus: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.initProgress();
  }

  initProgress(): void {
    this.loadingService.listenLoading().subscribe(r => this.loadingStatus = r);
  }
}
