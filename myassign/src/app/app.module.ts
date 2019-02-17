import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule, MatTextareaAutosize, MatGridTileText } from '@angular/material';
import { MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import {AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAk8ztLrJUVUXKgH-_j8JxrtSc9kSTwHhk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
