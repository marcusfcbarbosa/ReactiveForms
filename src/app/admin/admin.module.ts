import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { CommonModule } from "@angular/common";
import { AdminRouteModule } from "./admin.route";


@NgModule({

    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRouteModule
    ],
    providers: [],
    exports: []

})
export class AdminModule { }