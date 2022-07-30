import React from "react";
import { render } from "react-dom";
interface User {
  name: string;
  email: string;
}

const SubComponent: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      Components {user.name} {user.email}
    </div>
  );
};

const App: React.FunctionComponent = () => {
  return (
    <div>
      <SubComponent user={{ name: "Test Usere", email: "email@email.com" }} />
      <div>I am a main component</div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
