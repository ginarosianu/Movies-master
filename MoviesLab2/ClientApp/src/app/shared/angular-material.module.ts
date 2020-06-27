import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,

    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
   

    MatDatepickerModule,
    MatNativeDateModule,

} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatTableModule,
        MatGridListModule,

        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,

        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule
    ],
    exports: [
        MatSlideToggleModule,
        MatSliderModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatTableModule,
        MatGridListModule,

        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,

        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule
    ],
})

export class AngularMaterialModule { }
