// core
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
// module
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RabbitModule} from "./rabbit/rabbit.module";
// root component
import {AppComponent} from "./app.component";
// route module
import {AppRoutingModule} from "./app-routing.module";
// service
import {UserService} from "./service/user.service";
import {ProjectService} from "./service/project.service";
// component
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {UserComponent} from "./page/user/user.component";
import {RoleComponent} from "./page/role/role.component";
import {PermissionComponent} from "./page/permission/permission.component";
import {ConfigureComponent} from "./page/configure/configure.component";
import {SettingComponent} from "./page/setting/setting.component";
import {UpgradeComponent} from "./page/upgrade/upgrade.component";
import {BackupComponent} from "./page/backup/backup.component";
import {LicenseComponent} from "./page/license/license.component";
import {LogComponent} from "./page/log/log.component";
import {AuditComponent} from "./page/audit/audit.component";
import {SystemComponent} from "./page/system/system.component";
import {SearchComponent} from "./page/search/search.component";
import {CustomerComponent} from "./page/customer/customer.component";
import {CreateComponent} from "./page/create/create.component";
import {TrackComponent} from "./page/track/track.component";
import {ManageComponent} from "./page/manage/manage.component";
import {TestComponent} from "./page/test/test.component";
// feature
// pipe
import {TimestampPipe} from "./pipe/timestamp.pipe";
import {UserEditComponent} from "./page/user/children/user-edit/user-edit.component";
import {ZoomDirective} from "./directive/zoom.directive";
import {ProjectComponent} from "./page/project/project.component";
import {ProjectImportComponent} from "./page/project/children/project-import/project-import.component";
import {ProjectEditComponent} from "./page/project/children/project-edit/project-edit.component";
import {RoleEditComponent} from "./page/role/children/role-edit/role-edit.component";
import {CustomerEditComponent} from "./page/customer/children/customer-edit/customer-edit.component";

@NgModule({
    providers   : [
        UserService,
        ProjectService
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        UserComponent,
        RoleComponent,
        PermissionComponent,
        ConfigureComponent,
        SettingComponent,
        UpgradeComponent,
        BackupComponent,
        LicenseComponent,
        LogComponent,
        AuditComponent,
        SystemComponent,
        SearchComponent,
        CustomerComponent,
        TimestampPipe,
        CreateComponent,
        TrackComponent,
        ManageComponent,
        TestComponent,
        UserEditComponent,
        ZoomDirective,
        ProjectComponent,
        ProjectImportComponent,
        ProjectEditComponent,
        RoleEditComponent,
        CustomerEditComponent,
    ],
    imports     : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        RabbitModule,
        AppRoutingModule
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {
}

