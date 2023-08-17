import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "../../config";
import { authSlice } from "./authReducer";

export const authStateChanged = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        email: user.email,
        nickname: user.displayName,
        userId: user.uid,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

export const authSignUpUser =
  ({ email, password, nickname }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName: nickname });

      const { displayName, uid } = auth.currentUser;

      dispatch(
        authSlice.actions.updateUserProfile({
          userId: uid,
          nickname: displayName,
          email,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
    } catch (error) {
      console.log(error.message);
      //   Alert.alert("Entered email or password are incorrect!");
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  const auth = getAuth();
  await signOut(auth);

  dispatch(authSlice.actions.authSignOut());
};
