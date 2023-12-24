import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./shared.routes";
import { DxDateBoxModule } from "devextreme-angular";


// const Layouts = [MainLayout];

const Modules = [
    DxDateBoxModule,
];

// const Components = [
// ];

@NgModule({
    // declarations: [...Components],
    imports: [CommonModule, RouterModule.forChild(routes), ...Modules],
    // exports: [...Layouts, ...Components],
    providers: [],
})
export class SharedModule {
    constructor() { }
}