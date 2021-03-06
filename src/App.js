import React from "react";
import BackButton from "./components/BackButton";
import PageHomePage from "./pages/PageHomePage";
import PageSettings from "./pages/PageSettings";
import PageGoalCategoryMenu from "./pages/PageGoalCategoryMenu";
import PageGoalCategoryChildren from "./pages/PageGoalCategoryChildren";
import PageGoalCategoryCustom from "./pages/PageGoalCategoryCustom";
import PageGoalCategoryEducation from "./pages/PageGoalCategoryEducation";
import PageGoalCategoryJob from "./pages/PageGoalCategoryJob";
import PageGoalCategoryHealth from "./pages/PageGoalCategoryHealth";
import PageGoalCategoryHousing from "./pages/PageGoalCategoryHousing";

import PageResourcesMenu from "./pages/PageResourcesMenu";
import PageResourcesEducation from "./pages/PageResourcesEducation";
import PageResourcesEducationFinances from "./pages/PageResourcesEducationFinances";
import PageResourcesEducationChildren from "./pages/PageResourcesEducationChildren";
import PageHelp from "./pages/PageHelp";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/settings" component={PageSettings} />
          <Route exact path="/help" component={PageHelp} />
          <Route exact path="/goals" component={PageGoalCategoryMenu} />
          <Route
            exact
            path="/goals/custom"
            component={PageGoalCategoryCustom}
          />
          <Route
            exact
            path="/goals/education"
            component={PageGoalCategoryEducation}
          />
          <Route
            exact
            path="/goals/housing"
            component={PageGoalCategoryHousing}
          />
          <Route
            exact
            path="/goals/children"
            component={PageGoalCategoryChildren}
          />
          <Route
            exact
            path="/goals/health"
            component={PageGoalCategoryHealth}
          />
          <Route exact path="/goals/job" component={PageGoalCategoryJob} />
          <Route exact path="/resources" component={PageResourcesMenu} />
          <Route exact path="/resources/health" component={PageResourcesMenu} />
          <Route
            exact
            path="/resources/education"
            component={PageResourcesEducation}
          />
          <Route
            exact
            path="/resources/education/finances"
            component={PageResourcesEducationFinances}
          />
          <Route
            exact
            path="/resources/education/children"
            component={PageResourcesEducationChildren}
          />
          <Route exact path="/resources/jobs" component={PageResourcesMenu} />
          <Route
            exact
            path="/resources/support"
            component={PageResourcesMenu}
          />
          <Route exact path="/" component={PageHomePage} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}
