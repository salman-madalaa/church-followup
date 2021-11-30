import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/services/s1.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';
import { Location } from '@angular/common';
import { FollowupPersonService } from 'src/app/services/followup-person.service';
import { Registration } from '../Registration';


@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  public registration: FormGroup;
 
  dataSource:Registration[];

  private dialogConfig;

    followupPersons:[];

  constructor(private service:S1Service,private ser:FollowupPersonService,private router:Router,private dialog: MatDialog,private location: Location,private dialogRefff: MatDialogRef<NewpersonComponent>) { }
 
  
  ngOnInit() {
      this.registration = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
     // dateOfBirth: new FormControl(new Date()), 
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email : new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[6-9]\\d{9}')]),  
      prayerRequest:new FormControl('',[Validators.required,Validators.maxLength(50)]),
      personId:new FormControl('')   
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
    this.getallPersons();
    this.getallfollowupPersons();

  }
    public hasError = (controlName: string, errorName: string) =>{
      return this.registration.controls[controlName].hasError(errorName);
    }

/*
  ngOnInit() {
    this.getallPersons();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
*/

 public onCancel = () => {
    this.location.back();
  }


  create(ob)
  {
    const formData=new FormData();
    //formData.append(person) 

      this.service.addPerson(ob).subscribe((data:any) => {
        this.dataSource=data;
        this.dialogRefff.close(); 
       /*---------success dialog box----------*/
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig); 
        dialogRef.afterClosed()
          .subscribe(result => {
           this.getallPersons();
          });
      },(error)=>{
        console.log(error);
      })
       
  }

  getallPersons()
  {
    this.service.getAllPersons().subscribe((data:any)=>{
      this.dataSource=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }


  getallfollowupPersons()
  {
    this.ser.getAllFollowupPersons().subscribe((data:any)=>{
      this.followupPersons=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }



}
