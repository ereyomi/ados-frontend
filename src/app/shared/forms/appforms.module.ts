import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ButtonComponent, InputsComponent],
  exports: [ButtonComponent, InputsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AppFormsModule { }
