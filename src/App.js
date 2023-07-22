import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

// Main
import Dashboard from "./Page-Main/Dashboard";
import ManagePatient from "./Page-Main/ManagePatient";
import ManageTherapist from "./Page-Main/ManageTherapist";
import Chats from "./Page-Main/Chats";

// Psyschiatrist Profile
import PsychiatristGeneralInformation from "./Page-PsychiatristProfile/PsychiatristGeneralInformation";
import PsychiatristClinicDetails from "./Page-PsychiatristProfile/PsychiatristClinicDetails";
import PsychiatristPendingTasks from "./Page-PsychiatristProfile/PsychiatristPendingTasks";
import PsychiatristPostSessionNotes from "./Page-PsychiatristProfile/PsychiatristPostSessionNotes";
import PsychiatristPrescriptions from "./Page-PsychiatristProfile/PsychiatristPrescriptions";
import PsychiatristSessionSynopsis from "./Page-PsychiatristProfile/PsychiatristSessionSynopsis";
import PsychiatristHomework from "./Page-PsychiatristProfile/PsychiatristHomework";

// Psyschiatrist Profile Edit
import PsychiatristGeneralInformationEdit from "./Page-PsychiatristProfileEdit/PsychiatristGeneralInformationEdit";
import PsychiatristClinicDetailsEdit from "./Page-PsychiatristProfileEdit/PsychiatristClinicDetailsEdit";
import PsychiatristAvailabilityEdit from "./Page-PsychiatristProfileEdit/PsychiatristAvailabilityEdit";
import PsychiatristQualificationDetailsEdit from "./Page-PsychiatristProfileEdit/PsychiatristQualificationDetailsEdit";
import PsychiatristReceptionistDetailsEdit from "./Page-PsychiatristProfileEdit/PsychiatristReceptionistDetailsEdit";

// Patient Profile View
import PatientGeneralInformationView from "./Page-PatientProfile/PatientGeneralInformationView";

// Patient Profile Edit
import PatientGeneralInformationEdit from "./Page-PatientProfileEdit/PatientGeneralInformationEdit";
import PatientWorkDetailsEdit from "./Page-PatientProfileEdit/PatientWorkDetailsEdit";
import PatientEmergencyContactEdit from "./Page-PatientProfileEdit/PatientEmergencyContactEdit";
import PatientDigitalJournalView from "./Page-PatientProfile/PatientDigitalJournalView";
import PatientPostSessionNotesView from "./Page-PatientProfile/PatientPostSessionNotesView";
import PatientPrescriptionView from "./Page-PatientProfile/PatientPrescriptionView";
import PatientSessionSynopsisView from "./Page-PatientProfile/PatientSessionSynopsisView";
import PatientHomeworkView from "./Page-PatientProfile/PatientHomeworkView";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {/* Main */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/manage-patients" component={ManagePatient} />
        <Route exact path="/manage-therapists" component={ManageTherapist} />
        <Route exact path="/chats" component={Chats} />

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
