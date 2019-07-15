import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared/event-shared-barrel";

describe("SessionListComponent", () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe("ngOnchanges test", () => {
    it("should filter the sessions correctly", () => {
      component.sessions = <ISession[]>[
        { name: "session1", level: "beginner" },
        { name: "session2", level: "intermediate" },
        { name: "session3", level: "intermediate" }
      ];
      component.filterBy = "intermediate";
      component.sortBy = "name";
      component.eventId = 6;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it("should sort the sessions correctly", () => {
      component.sessions = <ISession[]>[
        { name: "session1", level: "beginner" },
        { name: "session3", level: "intermediate" },
        { name: "session2", level: "intermediate" }
      ];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 6;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe("session3");
    });
  });
});
