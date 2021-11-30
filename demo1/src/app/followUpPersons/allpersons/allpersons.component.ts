import { Component, OnInit, ViewChild } from '@angular/core';
import { NewFollowupPersonComponent } from '../new-followup-person/new-followup-person.component';
import { EditFollowupPersonComponent } from '../edit-followup-person/edit-followup-person.component';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { FollowupPersonService } from 'src/app/services/followup-person.service';
import { FollowUpPerson } from '../followupPerson';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-allpersons',
  templateUrl: './allpersons.component.html',
  styleUrls: ['./allpersons.component.css']
})
export class AllpersonsComponent implements OnInit {

 
  constructor(public dialog: MatDialog, private Service:FollowupPersonService) {

  }

 //dataSource :Registration[];
 public dataLength: number;

  displayedColumns: string[] = ['id', 'name','phone','actions'];
  public dataSource = new MatTableDataSource<FollowUpPerson>();


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
    this.Service.getAllFollowupPersons().subscribe((data:any)=>{
      this.dataLength = data.length;
      this.dataSource.data=data ; 
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

  
 AddNew() {

  const dialogRef = this.dialog.open(NewFollowupPersonComponent,{ disableClose: true, width:'350px' });
  dialogRef.afterClosed().subscribe((data)=>{
    console.log(data);
    this.getallPersons();
  })
}

  editRecord(dataSource)
  {
    const editdialog= this.dialog.open(EditFollowupPersonComponent, {data:dataSource, width:'350px'
        
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
    this.Service.deleteFollowUpPerson(id).subscribe((data:any)=>{
     // this.dataSource=data;
      console.log(data);
      this.getallPersons();
    },(error)=>{
      console.log(error);
    })  
 
}



fun(id){
  this.Service.followupData(id).subscribe((data:any)=>{
    console.log(data);
    this.dataSource=data ; 
  },(error)=>{
    console.log(error);
  })
}

}

