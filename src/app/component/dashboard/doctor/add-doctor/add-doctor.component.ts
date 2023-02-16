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
  id!:string;
  buttonName!:string;

  departments: string[] =['Medicine', 'Surgery', 'Gynaecology', 'Obstetrics', 'Paediatrics', 'Eye', 'ENT', 'Dental', 'Orthopaedics', 'Neurology', 'Cardiology', 'Psychiatry', 'Skin', 'V.D.', 'Plastic Surgery', 'Nuclear Medicine', 'Infectious disease'];

  constructor(
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AddDoctorComponent>
  ) { 
    this.title=data.title;
    this.id=data.id;
    this.name=data.name;
    this.mobile=data.mobile;
    this.email=data.email;
    this.gender=data.gender;
    this.department=data.department;
    this.dateofbirth=data.dateofbirth;
    this.qualification=data.qualification;
    this.buttonName=data.buttonName;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id:[this.id,[]],
      name:[this.name,[]],
      mobile:[this.mobile, [Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      email:[this.email,[Validators.required, Validators.email]],
      gender:[this.gender,[Validators.required]],
      department:[this.department,[Validators.required]],
      dateofbirth:[this.dateofbirth,[Validators.required]],
      qualification:[this.qualification,[Validators.required]]
    })
  }

  cancelRegistration() {
    this.dialogRef.close();
  }

  registerDoctor() {
    this.dialogRef.close(this.form.value);
  }

}
