import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatButtonModule, 
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatButtonModule, 
    MatSnackBarModule
  ],
  providers: []
})
export class MaterialdModule {}