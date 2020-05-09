import { Injectable } from '@angular/core';
import { Header } from '../../models/header.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header = new BehaviorSubject<Header>({
    title: 'Home',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get header(): Header {
    return this._header.value;
  }

  set header(header: Header) {
    this._header.next(header);
  }

}
