import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { explaboral } from 'src/app/model/explaboral.model';
import { persona } from 'src/app/model/persona.model';
import { ExplaboralService } from 'src/app/service/explaboral.service';
import { PersonaService } from 'src/app/service/persona.service';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: persona = new persona("","","","","","");
  explaboral: explaboral = new explaboral("", "","", "","");

  constructor(public personaService: PersonaService, 
              public explaboralService: ExplaboralService,
              private OpenEditExp: MatDialog) { }


  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.persona = data
    })
    this.explaboralService.getExplaboral().subscribe(data =>{
      this.explaboral = data
    })
  }
  openEdit(){
    this.OpenEditExp.open(EditarComponent);
  }

}
