import { Component, OnInit, Inject } from '@angular/core';
import { S1Service } from 'src/app/services/s1.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  public editdata: FormGroup;
 // public matcher = new ErrorMatcherService();


  constructor(private service:S1Service,public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data:any,private formBuilder: FormBuilder)
  {

                this.editdata = this.formBuilder.group({
                  id:['',Validators.required],
                  name: ['',[ Validators.required,Validators.maxLength(20)]],
                  address: ['', [Validators.required,Validators.maxLength(50)] ],
                  email:['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
                  phoneNumber:['', [Validators.required,Validators.pattern('[6-9]\\d{9}'),Validators.maxLength(10)]],
                  prayerRequest:[ '',[ Validators.required,Validators.maxLength(100)]] ,
                  date:[''],
                });

  }


ngOnInit() {
    console.log("data in modal",this.data)
    //this.editdata = this.data;

    this.editdata.patchValue({
      id:this.data.id,
      name: this.data.name,
      address: this.data.address,
      email:this.data.email,
      phoneNumber:this.data.phoneNumber,
      prayerRequest:this.data.prayerRequest,
      date:this.data.date
    })
}
public hasError = (controlName: string, errorName: string) =>{
  return this.editdata.controls[controlName].hasError(errorName);
}

update(ob)
{
  this.service.update(ob.id,ob).subscribe((data:any)=>{
    this.editdata=data;
    console.log(data);
    this.dialogRef.close();
  },(error)=>{
    console.log(error);
  })
}

}
