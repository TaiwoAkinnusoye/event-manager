import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Component Imports
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";

// Service Imports
import { AuthService } from "./user/auth.service";

// Route Imports
import { appRoutes } from "./routes";

// Common Imports
import {
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common/common-barrel";

// Event Imports
import {
  EventsListResolver,
  EventResolver,
  EventService,
  VoterService,
  EventsListComponent,
  CreateEventComponent,
  EventDetailComponent,
  CreateSessionComponent,
  EventThumbnailComponent,
  SessionListComponent,
  UpVoteComponent,
  DurationPipe,
  LocationValidator
} from "./events/event-barrel";

// Global 3rd Party Objects
let toastr: Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CollapsibleWellComponent,
    EventDetailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    VoterService,
    EventResolver,
    EventsListResolver,
    AuthService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
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
