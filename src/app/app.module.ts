import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      UserComponent,
    ],                   //for non stand alone components
    bootstrap: [AppComponent], //root component which i wanna start the application
    imports: [BrowserModule, SharedModule, TasksModule] //for stand alone components
})
export class AppModule {}
