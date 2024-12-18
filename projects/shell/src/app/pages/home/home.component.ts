import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataSharingService } from '../../shared/services/data-sharing.service';

@Component({
  selector: 'app-shell-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private dataSharingService: DataSharingService) {}

  // Send data to the shared service
  sendDataToTodo() {
    const data = { message: 'Hello from Home Component!' };
    this.dataSharingService.updateData(data);
  }
}
