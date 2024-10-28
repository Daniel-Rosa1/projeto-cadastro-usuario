import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { PipesModule } from "../pipes/pipes.module";
import { BrowserModule } from "@angular/platform-browser";
import { DirectiveModule } from "../directives/directives.module";
import { AngularMaterialModule } from "../angular-material.module";
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    UsersCardListComponent,
    UserFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    DirectiveModule,
    PipesModule,

  ],
  exports: [
    UsersCardListComponent,
    UserFormComponent,
  ],
})
export class ComponentsModule { }
