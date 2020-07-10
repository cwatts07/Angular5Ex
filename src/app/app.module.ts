import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NameFormComponent } from './name-form/name-form.component';
import { NameDisplayComponent } from './name-display/name-display.component';
import { NameService } from './name.service'
@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent,
    NameDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
