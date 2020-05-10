import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatSidenavModule, MatListModule],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule],
  providers: []
})
export class MaterialdModule {}