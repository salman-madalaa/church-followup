import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren,  } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Registration } from '../Registration';
import { S1Service } from 'src/app/services/s1.service';
import { MatDialog, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { EditComponent } from '../edit/edit.component';
import { NewpersonComponent } from '../newperson/newperson.component';


@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit,AfterViewInit {

  

  constructor(public dialog: MatDialog, private Service:S1Service) {

  }

 //dataSource :Registration[];
 public dataLength: number;
 followup:boolean=true;

  displayedColumns: string[] = [ 'name', 'date','address', 'email','phoneNumber','prayerRequest','personId','actions'];
  public dataSource = new MatTableDataSource<Registration>();


  public applyFilter  = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

   
    @ViewChild(MatSort,{ static: false }) sort:MatSort;
    @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;


  ngAfterViewInit(): void {
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;

  } 

  ngOnInit()
  {
    this.getallPersons();
  }
  
  getallPersons()
  {
    this.Service.getAllPersons().subscribe((data:any)=>{
      this.dataLength = data.length;
      this.dataSource.data=data ; 
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

  
 AddNew() {

  const dialogRef = this.dialog.open(NewpersonComponent,{ disableClose: true });
  dialogRef.afterClosed().subscribe((data)=>{
    console.log(data);
    this.getallPersons();
  })
}

  editRecord(dataSource)
  {
    const editdialog= this.dialog.open(EditComponent, {data:dataSource,width:'400px'
        
         // idColumn: this.idColumn,
         // paginator: this.paginator,
          //dataSource: this.dataSource, 
      })

      editdialog.afterClosed().subscribe((data)=>{
        console.log(data);
        this.getallPersons();
      })
  }




delete(id)
{
    this.Service.deletePerson(id).subscribe((data:any)=>{
     // this.dataSource=data;
      console.log(data);
      this.getallPersons();
    },(error)=>{
      console.log(error);
    })  
 
}



  /*
  registrations:Registration[];

  registration = new Registration();

  constructor(private service:S1Service) { }

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


  onSubmit()
  {
      this.service.addPerson(this.registration).subscribe((data:any)=>{
        this.registration=data;
        console.log(data);
        this.getallPersons();
      },(error)=>{
        console.log(error);
      })
       
  }

  getallPersons()
  {
    this.service.getAllPersons().subscribe((data:any)=>{
      this.registrations=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
*/


FollowupData()
{
  this.followup=true; 
}

followupPersons()
{
  this.followup=false;
}


  

}
