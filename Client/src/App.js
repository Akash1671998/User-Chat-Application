import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Message from "./component/message";
import AccountProvider from "./contex";

function App() {
  const clientId =
    "617719383326-f0n2jev8ba9gtc2f1ve6u8o05m434s38.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Message />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
