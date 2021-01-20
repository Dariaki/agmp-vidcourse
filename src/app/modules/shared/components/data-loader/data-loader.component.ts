import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from '../../../../services/data-loader.service';

@Component({
  selector: 'agmp-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.scss']
})
export class DataLoaderComponent implements OnInit {

  public isLoading = false;

  constructor(
    private _dataLoaderService: DataLoaderService
  ) {
  }

  ngOnInit(): void {
    this._dataLoaderService.getLoaderState()
      .subscribe((loaderState: boolean) => {
        this.isLoading = loaderState;
    })
  }

}
