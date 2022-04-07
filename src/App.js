import "./App.css";
import { GoogleLogin } from "react-google-login";

function App() {
  function handleSuccess(response){
    console.log(response)
  }
  function handleFaild(error){
    console.log(error)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google login App</h1>
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID}
            buttonText="Login with google"
            onSuccess={handleSuccess}
            onFailure={handleFaild}
            cookiePolicy='single_host_origin'
          ></GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
