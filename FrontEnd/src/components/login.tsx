import { GoogleLogin } from "react-google-login";

const clientId =
  "842925445113-1m895k6pq2qq9sji58gdi1u3l0uk6h71.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("succress", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("fial", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
