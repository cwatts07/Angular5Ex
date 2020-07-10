import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  constructor(private name: NameService) { }

  onSubmit(form: NgForm){
    this.name.setName(form.value.myName);
  }
  ngOnInit(): void {
  }

}
