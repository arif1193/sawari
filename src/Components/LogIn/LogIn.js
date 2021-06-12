import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}



const provider = new firebase.auth.GoogleAuthProvider();

const LogIn = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''

    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    const handleGoogleSighIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setLoggedInUser(user);
                setUser(user);
                history.push(from)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (event) => {
        // console.log(user.email, user.password)
        if (newUser && user.email && user.password) {
            console.log(user.email, user.password)
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    // ...
                })

            // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            //     .then(res => {
            //         console.log(res)
            //         const newUserInfo = res.user;
            //         // newUserInfo.error = '';
            //         // newUserInfo.success = true;
            //         // setUser(newUserInfo);
            //         // updateUserName(user.name);


            //     })
            //     .catch((error) => {
            //         const newUserInfo = { ...user }
            //         newUserInfo.error = error.massage;
            //         newUserInfo.success = false;
            //         setUser(newUserInfo);
            //     });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(user);
                    setUser(user);
                    history.push(from)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.massage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        event.preventDefault();
    }




    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
            .then(function () {
                console.log('User name Update Successfully')
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const checkValidation = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
        if (password !== confirmPassword) {
            setIsError("Password Should be match  with  Confirm Password");
        }
        else {
            setIsError("");
        }
    };



    return (
        <div>
            <div className="login">
                <h1>Your Authentication please </h1>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">Create Account</label>
                <form onSubmit={handleSubmit}>
                    <div>
                        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                        <br />
                        <br />
                        <input type="text" name="email" onBlur={handleBlur} placeholder="Your email" required />
                        <br />
                        <br />
                        <div className="wrap-input100 validation-input"
                            data-validate="Confirm password is required"
                        >
                            <input
                                className="from-control"
                                value={password}
                                type="password"
                                name="password"
                                onBlur={handleBlur}
                                onChange={(event) => setPassword(event.target.value)} placeholder="Your Password"
                                required
                            />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100"> <i className="fa fa-lock" aria-hidden="true"></i> </span>
                            <br />
                            <br />
                        </div>
                        <div className="wrap-input100 validation-input"
                            data-validate="Confirm password is required">

                            {newUser && <input
                                className="from-control"
                                value={confirmPassword}
                                type="password"
                                name="Confirm password"
                                onBlur={handleBlur}
                                onChange={(event) => checkValidation(event)}
                                placeholder="Confirm Password"
                                required
                            />}
                            <span className="focus-input100"></span>
                            <span className="symbol-input100"> <i className="fa fa-lock" aria-hidden="true"></i> </span>
                        </div>
                        <br />
                        <br />
                        <input type="submit" className="btn-success" value={newUser ? 'Create Account' : 'Sign In'} />
                    </div>
                </form>
                <p style={{ color: "red" }}>{user.error}</p>
                {user.success && <p style={{ color: "green" }}>User {newUser ? "created" : "Logged In"} Successfully</p>}

                <div style={{ textAlign: "center", color: "red" }}>
                    {isError}
                </div>

            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
                <button onClick={handleGoogleSighIn}>Log In by Google</button>
                {/* <h3>Email:{user.email}</h3>
            <h4>Name:{user.displayName}</h4> */}
            </div>
        </div>
    );
};

export default LogIn;