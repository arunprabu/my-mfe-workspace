// projects/shell/src/app/shared/data-sharing.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private dataSubject = new BehaviorSubject<any>(null); // Use a type instead of `any` if possible
  currentData = this.dataSubject.asObservable();

  constructor() {}

  // Set data
  updateData(data: any) {
    this.dataSubject.next(data);
  }

  // Get current data
  getData() {
    return this.dataSubject.value;
  }
}
