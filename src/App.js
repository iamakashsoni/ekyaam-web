import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

// Dashboard
import Dashboard from "./pages/dashboard";

// Psyschiatrist Profile
import PsychiatristGeneralInformation from "./pages/PsychiatristGeneralInformation";
import PsychiatristClinicDetails from "./pages/PsychiatristClinicDetails";
import PsychiatristPendingTasks from "./pages/PsychiatristPendingTasks";
import PsychiatristPostSessionNotes from "./pages/PsychiatristPostSessionNotes";
import PsychiatristPrescriptions from "./pages/PsychiatristPrescriptions";
import PsychiatristSessionSynopsis from "./pages/PsychiatristSessionSynopsis";
import PsychiatristHomework from "./pages/PsychiatristHomework";

// Psyschiatrist Profile Edit
import PsychiatristGeneralInformationEdit from "./pages/PsychiatristGeneralInformationEdit";
import PsychiatristClinicDetailsEdit from "./pages/PsychiatristClinicDetailsEdit";
import PsychiatristAvailabilityEdit from "./pages/PsychiatristAvailabilityEdit";
import PsychiatristQualificationDetailsEdit from "./pages/PsychiatristQualificationDetailsEdit";
import PsychiatristReceptionistDetailsEdit from "./pages/PsychiatristReceptionistDetailsEdit";

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
      </Switch>
    </Layout>
  </Router>
);

export default App;
