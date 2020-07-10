import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private name:string;
  getName(){
    return this.name;
  }
  setName(newName:string){
    console.log("new name", newName);
    this.name = newName;
  }
}
