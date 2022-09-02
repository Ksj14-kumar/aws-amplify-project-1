import './App.css';

import Amplify, { Auth } from "aws-amplify";
import Config from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(Config);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        welcome to my app
      </header>
    </div>
  );
}
export default withAuthenticator(App);
