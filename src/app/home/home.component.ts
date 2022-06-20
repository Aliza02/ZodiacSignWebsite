import { Component, OnInit } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AquariusComponent } from '../aquarius/aquarius.component';
import { AriesComponent } from '../aries/aries.component';
import { CancerComponent } from '../cancer/cancer.component';
import { CapricornComponent } from '../capricorn/capricorn.component';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { GeminiComponent } from '../gemini/gemini.component';
import { LeoComponent } from '../leo/leo.component';
import { LibraComponent } from '../libra/libra.component';
import { PiscesComponent } from '../pisces/pisces.component';
import { SagittariusComponent } from '../sagittarius/sagittarius.component';
import { ScorpioComponent } from '../scorpio/scorpio.component';
import { TaurusComponent } from '../taurus/taurus.component';
import { VirgoComponent } from '../virgo/virgo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openAries()
    {
    let dialogref=this.dialog.open(AriesComponent,{   width:'550px' , height:'900px'});
    }

    openTaurus()
    {
    let dialogref=this.dialog.open(TaurusComponent,{   width:'550px' , height:'900px'});
    }
    openGemini()
    {
    let dialogref=this.dialog.open(GeminiComponent,{   width:'550px' , height:'900px'});
    }
    openCancer()
    {
    let dialogref=this.dialog.open(CancerComponent,{   width:'550px' , height:'900px'});
    }
    openLeo()
    {
    let dialogref=this.dialog.open(LeoComponent,{   width:'550px' , height:'900px'});
    }
    openVirgo()
    {
    let dialogref=this.dialog.open(VirgoComponent,{   width:'550px' , height:'900px'});
    }
    openLibra()
    {
    let dialogref=this.dialog.open(LibraComponent,{   width:'550px' , height:'900px'});
    }
    openScorpio()
    {
    let dialogref=this.dialog.open(ScorpioComponent,{   width:'550px' , height:'900px'});
    }
    openSagittarius()
    {
    let dialogref=this.dialog.open(SagittariusComponent,{   width:'550px' , height:'900px'});
    }
    openCapricorn()
    {
    let dialogref=this.dialog.open(CapricornComponent,{   width:'550px' , height:'900px'});
    }
    openAquarius()
    {
    let dialogref=this.dialog.open(AquariusComponent,{   width:'550px' , height:'900px'});
    }
    openPisces()
    {
    let dialogref=this.dialog.open(PiscesComponent,{   width:'550px' , height:'900px'});
    }
}
