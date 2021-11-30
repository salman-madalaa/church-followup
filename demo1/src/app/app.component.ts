import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AllDetailsComponent } from './followup/all-details/all-details.component';
import { S1Service } from './services/s1.service';
import {Registration} from './followup/Registration'
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}



  /*
  constructor(public dialog: MatDialog, private Service:S1Service) {}

  registrations :Registration[];


  openDialog() {
    const dialogRef = this.dialog.open(AllDetailsComponent,{ disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  displayedColumns: string[] = ['id', 'name', 'date','address', 'email','phoneNumber','actions'];
 
  


 
  
  ngOnInit()
  {
    this.getallPersons();
  }


  getallPersons()
  {
    this.Service.getAllPersons().subscribe((data:any)=>{
      this.registrations=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }



delete(id)
{
    this.Service.deletePerson(id).subscribe((data:any)=>{
      this.registrations=data;
      console.log(data);
      this.getallPersons();
    },(error)=>{
      console.log(error);
    })
}
*/
  
}
