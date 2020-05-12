import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatButtonModule],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatButtonModule],
  providers: []
})
export class MaterialdModule {}