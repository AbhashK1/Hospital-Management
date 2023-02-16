import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/shared/service/data.service';
import { AddDoctorComponent } from '../doctor/add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(
    public dialog : MatDialog,
    private dataApi:DataService,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addPatient(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title: 'Register Doctor',
      buttonName : 'Register'
    }
    const dialogRef=this.dialog.open(AddPatientComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>{
      if(data){
        this.dataApi.addPatient(data);
        this.openSnackBar("Registration Successful","Ok");
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
