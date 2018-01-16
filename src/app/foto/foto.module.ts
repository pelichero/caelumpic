import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FotoComponent} from './foto.component';

@NgModule({
  declarations: [
    FotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FotoComponent]
})
export class FotoModule { }
