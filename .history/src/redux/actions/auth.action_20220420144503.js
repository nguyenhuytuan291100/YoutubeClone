import firebase from "firebase/compat/app"
import auth from '../../firebase'
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"

export const login = () => async dispatch => {
    try{
        dispatch({
            type:LOGIN_REQUEST
        })
        const provider= new firebase.auth.GoogleAuthProvider()
        const res= await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken=res.credential.accessToken
        const profile={
            name:res.additionalUserInfo.profile.displayName,
            photoURL:res.additionalUserInfo.profile.photoURL
        }
        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken,
        })
    }
    catch(error)
    {

    }
}