import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  , signOut} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBrvwE5t5dRtLCLIXg4lhtcvrtvVTojuDk",
    authDomain: "unsplash-test-project-24c65.firebaseapp.com",
    projectId: "unsplash-test-project-24c65",
    storageBucket: "unsplash-test-project-24c65.appspot.com",
    messagingSenderId: "495305346489",
    appId: "1:495305346489:web:e39c7ebf8951ccb9cdba68"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

const provider = new GoogleAuthProvider()

export const singUpWithGoogleAccount = async () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error;
        })

}

export const signOutFromAccount = () =>{
    signOut(auth)
    .then((result)=>{
console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
}