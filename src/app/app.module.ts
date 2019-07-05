import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Component Imports
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";

// Service Imports
import { ToastrService } from "./common/toastr.service";
import { AuthService } from "./user/auth.service";

// Route Imports
import { appRoutes } from "./routes";

// Barrel Imports
import {
  EventsListResolver,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  CreateEventComponent,
  EventDetailComponent,
  CreateSessionComponent,
  EventThumbnailComponent
} from "./events/event-barrel";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event. Do you really want to cancel?"
    );
  }
  return true;
}
