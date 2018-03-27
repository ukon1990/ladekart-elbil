import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule,
  MatProgressBarModule, MatInputModule,
  MatAutocompleteModule, MatToolbarModule,
  MatListModule, MatTabsModule,
  MatSidenavModule, MatPaginatorModule,
  MatSortModule, MatTableModule,
  MatCardModule, MatProgressSpinnerModule,
  MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatChipsModule,
  MatFormFieldModule, MatTooltipModule,
  MatExpansionModule, MatButtonToggleModule,
  MatSnackBarModule, MatSnackBar,
  MatRadioModule, MatSliderModule,
  MatDialogModule, MatStepperModule
} from '@angular/material';

// annlegg
@NgModule({
  exports: [
    CommonModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatProgressBarModule, MatInputModule,
    MatAutocompleteModule, MatToolbarModule,
    MatListModule, MatTabsModule,
    MatSidenavModule, MatPaginatorModule,
    MatSortModule, MatTableModule,
    MatCardModule, MatProgressSpinnerModule,
    MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatChipsModule,
    MatFormFieldModule, MatTooltipModule,
    MatExpansionModule, MatButtonToggleModule,
    MatSnackBarModule, MatRadioModule,
    MatSliderModule, MatDialogModule,
    MatStepperModule
  ],
  imports: [
  ],
  declarations: [],
  providers: [MatSnackBar]
})
export class MaterialModule { }
