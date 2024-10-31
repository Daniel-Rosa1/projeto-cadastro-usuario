import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@
  NgModule({
    imports: [
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,

    ],
    exports: [
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,
      
    ],
  })

export class AngularMaterialModule {

}
