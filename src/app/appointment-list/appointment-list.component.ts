import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  public loading = true;
  public errorMsg!: string;
  public successMsg!: string;

  public appointments!: Array<{appointmentDate: string, name: string, email: string}>;

  public columns!: Array<string>;


  constructor() {}

  ngOnInit() {

    this.columns = ['Appointment Date', 'Name', 'Email', 'Cancel'];

    this.appointments =[
      {
        appointmentDate: '01/01/1999',
        name: 'emilio',
        email: 'emilio@correo.com',
      },
      {
        appointmentDate: '01/03/1999',
        name: 'emilio',
        email: 'emilio@correo.com',
      }
    ]
    ;

  }

}
