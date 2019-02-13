import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { TableSeviceComponent } from './table-sevice/table-sevice.component';
import { TableService } from './table.service';
import { PipePhone } from './pipe-phone';
import { PipeFill } from './pipe-fill';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableSeviceComponent,
    PipePhone,
    PipeFill,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
