import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

// Dashboard
import Dashboard from "./dashboard/dashboard";

// Psyschiatrist Profile
import PsychiatristGeneralInformation from "./PsychiatristProfile/PsychiatristGeneralInformation";
import PsychiatristClinicDetails from "./PsychiatristProfile/PsychiatristClinicDetails";
import PsychiatristPendingTasks from "./PsychiatristProfile/PsychiatristPendingTasks";
import PsychiatristPostSessionNotes from "./PsychiatristProfile/PsychiatristPostSessionNotes";
import PsychiatristPrescriptions from "./PsychiatristProfile/PsychiatristPrescriptions";
import PsychiatristSessionSynopsis from "./PsychiatristProfile/PsychiatristSessionSynopsis";
import PsychiatristHomework from "./PsychiatristProfile/PsychiatristHomework";

// Psyschiatrist Profile Edit
import PsychiatristGeneralInformationEdit from "./PsychiatristProfileEdit/PsychiatristGeneralInformationEdit";
import PsychiatristClinicDetailsEdit from "./PsychiatristProfileEdit/PsychiatristClinicDetailsEdit";
import PsychiatristAvailabilityEdit from "./PsychiatristProfileEdit/PsychiatristAvailabilityEdit";
import PsychiatristQualificationDetailsEdit from "./PsychiatristProfileEdit/PsychiatristQualificationDetailsEdit";
import PsychiatristReceptionistDetailsEdit from "./PsychiatristProfileEdit/PsychiatristReceptionistDetailsEdit";

// Patient Profile View
import PatientGeneralInformationView from "./PatientProfile/PatientGeneralInformationView";

// Patient Profile Edit
import PatientGeneralInformationEdit from "./PatientProfileEdit/PatientGeneralInformationEdit";
import PatientWorkDetailsEdit from "./PatientProfileEdit/PatientWorkDetailsEdit";
import PatientEmergencyContactEdit from "./PatientProfileEdit/PatientEmergencyContactEdit";
import PatientDigitalJournalView from "./PatientProfile/PatientDigitalJournalView";
import PatientPostSessionNotesView from "./PatientProfile/PatientPostSessionNotesView";
import PatientPrescriptionView from "./PatientProfile/PatientPrescriptionView";
import PatientSessionSynopsisView from "./PatientProfile/PatientSessionSynopsisView";
import PatientHomeworkView from "./PatientProfile/PatientHomeworkView";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {/* Dashboard */}
        <Route exact path="/" component={Dashboard} />

        {/* Psyschiatrist Profile */}
        <Route
          path="/psychiatrist-general-information"
          component={PsychiatristGeneralInformation}
        />
        <Route
          path="/psychiatrist-clinic-details"
          component={PsychiatristClinicDetails}
        />
        <Route
          path="/psychiatrist-pending-tasks"
          component={PsychiatristPendingTasks}
        />
        <Route
          path="/psychiatrist-post-session-notes"
          component={PsychiatristPostSessionNotes}
        />
        <Route
          path="/psychiatrist-prescription"
          component={PsychiatristPrescriptions}
        />
        <Route
          path="/psychiatrist-session-synopsis"
          component={PsychiatristSessionSynopsis}
        />
        <Route path="/psychiatrist-homework" component={PsychiatristHomework} />

        {/* Psyschiatrist Profile Edit */}
        <Route
          path="/psychiatrist-general-information-edit"
          component={PsychiatristGeneralInformationEdit}
        />
        <Route
          path="/psychiatrist-clinic-details-edit"
          component={PsychiatristClinicDetailsEdit}
        />
        <Route
          path="/psychiatrist-qualification-details-edit"
          component={PsychiatristQualificationDetailsEdit}
        />
        <Route
          path="/psychiatrist-availability-edit"
          component={PsychiatristAvailabilityEdit}
        />
        <Route
          path="/psychiatrist-receptionist-details-edit"
          component={PsychiatristReceptionistDetailsEdit}
        />

        {/* Patient Profile View */}
        <Route
          path="/patient-general-information"
          component={PatientGeneralInformationView}
        />
        <Route
          path="/patient-digital-journal"
          component={PatientDigitalJournalView}
        />
        <Route
          path="/patient-post-session-notes"
          component={PatientPostSessionNotesView}
        />
        <Route
          path="/patient-prescription"
          component={PatientPrescriptionView}
        />
        <Route
          path="/patient-session-synopsis"
          component={PatientSessionSynopsisView}
        />
        <Route path="/patient-homework" component={PatientHomeworkView} />

        {/* Patient Profile Edit */}
        <Route
          path="/patient-general-information-edit"
          component={PatientGeneralInformationEdit}
        />
        <Route
          path="/patient-work-details-edit"
          component={PatientWorkDetailsEdit}
        />
        <Route
          path="/patient-emergency-contact-edit"
          component={PatientEmergencyContactEdit}
        />
      </Switch>
    </Layout>
  </Router>
);

export default App;
