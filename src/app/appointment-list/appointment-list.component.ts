import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  public loading = true;
  public errorMsg!: string;
  public successMsg!: string;

  public appointments!: Array<{
    _id: string;
    appointmentDate: string;
    name: string;
    email: string;
  }>;

  public columns!: Array<string>;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.columns = ['Appointment Date', 'Name', 'Email', 'Cancel'];

    try {
      const response = await axios.get('http://localhost:3001');
      if ((response.status = 200)) {
        console.log(response.data.payload);

        this.appointments = response.data.payload;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async cancelAppointment(id: string): Promise<void> {

    try {
      const response = await axios.delete(
        `http://localhost:3001/appointments/${id}`
      );
      if(response.status = 200){
        this.appointments = this.appointments.filter((appointment)=>appointment._id !== id
        )
      }

    } catch (error) {
      console.error(error);
    }
  }
}
