import { useState } from "react";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    console.log("calling charts page");
    return <ChatsPage user={user} />;
  }
}

export default App;