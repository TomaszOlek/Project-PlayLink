import { GoogleLogout } from "react-google-login";

const clientId =
  "842925445113-1m895k6pq2qq9sji58gdi1u3l0uk6h71.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log out successful");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
