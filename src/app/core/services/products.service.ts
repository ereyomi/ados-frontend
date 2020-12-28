import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  isDisplay: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
  getDisplayStatus(): Observable<boolean> {
    return this.isDisplay.asObservable();
  }
  openModal(): void {
    this.isDisplay.next(true);
  }
  closeModal(): void {
    this.isDisplay.next(false);
  }
}
