import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {superHeroRoute} from "./super-hero.route";
import {SuperHeroComponent} from "./super-hero.component";
import {SuperHeroUpdateComponent} from "./super-hero-update.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {SuperHeroDeleteDialogComponent} from "./super-hero-delete-dialog.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSpinner} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    RouterModule.forChild(superHeroRoute),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [SuperHeroComponent, SuperHeroUpdateComponent, SuperHeroDeleteDialogComponent],
  entryComponents: [SuperHeroDeleteDialogComponent, MatSpinner]
})
export class SuperHeroModule {
}
