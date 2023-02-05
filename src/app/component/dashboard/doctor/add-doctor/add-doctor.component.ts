import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  form!: FormGroup;
  title!: string;
  name!:string;
  mobile!:string;
  email!:string;
  gender!:string;
  department!:string;
  dateofbirth!:string;
  qualification!:string;

  departments: string[] =['Medicine', 'Surgery', 'Gynaecology', 'Obstetrics', 'Paediatrics', 'Eye', 'ENT', 'Dental', 'Orthopaedics', 'Neurology', 'Cardiology', 'Psychiatry', 'Skin', 'V.D.', 'Plastic Surgery', 'Nuclear Medicine', 'Infectious disease'];

  constructor(
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) { 
    this.title=data.title;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:['',[]],
      name:['',[]],
      mobile:['', [Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email]],
      gender:['',[Validators.required]],
      department:['',[Validators.required]],
      dateofbirth:['',[Validators.required]],
      qualification:['',[Validators.required]]
    })
  }

  cancelRegistration() {
    this.dialogRef.close();
  }

  registerDoctor() {
    this.dialogRef.close(this.form.value);
  }

}
