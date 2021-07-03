import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import Image from "../../../images/login-bg.png";
import ParticlesBg from "particles-bg";
import googleImage from "../../../images/google-image.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6">
            <div class=" mt-5 text-center">
              <button onClick={handleGoogleSignIn} className="btn btn-brand">
                <img className="img-fluid" src={googleImage} /> <br />
                Google SignIn
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={Image} />
          </div>
        </div>
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </section>
  );
};

export default Login;
