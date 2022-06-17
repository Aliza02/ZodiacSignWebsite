import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {ViewEncapsulation, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches),shareReplay());
    open=false;
    
  title = 'material-test';
  constructor(
    private breakpointObserver: BreakpointObserver,){
    
    
   
  }
//   openDialog()
//   {
//   let dialogref=this.dialog.open(DialogExampleComponent,{   width:'550px' , height:'200px',
// data:{name:'aliza'}});
//   dialogref.afterClosed().subscribe(result=>{
//     console.log(`dialog result:${result}`);
//   });
//   }

}
