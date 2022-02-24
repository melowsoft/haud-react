import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import MainContent from "../MainContent";

const UserList = lazy(() => import("../UserList"));
const AddUser = lazy(() => import("../AddUser"));
const EditUser = lazy(() => import("../EditUser"));

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={() => <div>ooops!! and error occured</div>}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/edit-user/:id" component={EditUser} />
          </Switch>
        </MainContent>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
