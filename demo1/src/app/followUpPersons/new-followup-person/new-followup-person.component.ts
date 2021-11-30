import { Component, OnInit } from '@angular/core';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FollowUpPerson } from '../followupPerson';
import { FollowupPersonService } from 'src/app/services/followup-person.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Location} from '@angular/common';


@Component({
  selector: 'app-new-followup-person',
  templateUrl: './new-followup-person.component.html',
  styleUrls: ['./new-followup-person.component.css']
})
export class NewFollowupPersonComponent implements OnInit {

  public followupPersons: FormGroup;

  dataSourcee:FollowUpPerson[];

  private dialogConfig;

  

  constructor(private service:FollowupPersonService,private router:Router,private dialog: MatDialog,private location: Location,private dialogRefff: MatDialogRef<NewFollowupPersonComponent>) { }
 
  
  ngOnInit() {
      this.followupPersons = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      phone: new FormControl('',[Validators.required,Validators.pattern('[6-9]\\d{9}')]),  
 
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
    this.getallPersons();

  }
    public hasError = (controlName: string, errorName: string) =>{
      return this.followupPersons.controls[controlName].hasError(errorName);
    }



  create(ob)
  {
      this.service.insertFollowUpPersons(ob).subscribe((data:any) => {
        this.dataSourcee=data;
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
    this.service.getAllFollowupPersons().subscribe((data:any)=>{
      this.dataSourcee=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }


}
