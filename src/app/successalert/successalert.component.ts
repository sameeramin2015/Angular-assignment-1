import { Component } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrl: './successalert.component.css'
})
export class SuccessalertComponent {
  serverID: number = 20;
  serverStatus: string = "offline";
}
