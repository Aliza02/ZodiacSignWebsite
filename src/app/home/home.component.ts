import { Component, OnInit } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AriesComponent } from '../aries/aries.component';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { TaurusComponent } from '../taurus/taurus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openDialog()
    {
    let dialogref=this.dialog.open(TaurusComponent,{   width:'550px' , height:'900px'});
    }
}
