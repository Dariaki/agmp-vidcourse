import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  _loaderState$ = new BehaviorSubject(false);

  constructor() { }

  public hideDataLoader() {
    this._loaderState$.next(false);
  }

  public showDataLoader() {
    this._loaderState$.next(true);
  }

  public getLoaderState(): BehaviorSubject<boolean> {
    return this._loaderState$;
  }
}

