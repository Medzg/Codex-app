import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatGridListModule,
        MatSelectModule
    ],
    exports: [MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatDialogModule,
        MatGridListModule,
        MatSelectModule
    ]
})
export class MaterialModule { }