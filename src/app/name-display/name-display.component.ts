import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {
  name: string='';
  
  constructor(private nameService: NameService) { }
  displayName(){
    console.log("before", this.name)
    this.name = this.nameService.getName();
    console.log('after', this.name);
  }
  ngOnInit(): void {
  }

}
