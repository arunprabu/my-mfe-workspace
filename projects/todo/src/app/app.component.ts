import { Component } from '@angular/core';
import { DataSharingService } from '../../../shell/src/app/shared/services/data-sharing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
  sharedData: any;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    // Subscribe to shared data
    this.dataSharingService.currentData.subscribe((data) => {
      if (data) {
        console.log("Received data from shell app", data);
        this.sharedData = data;
      }
    });
  }

}
