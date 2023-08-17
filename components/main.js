import { useEffect } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "../router";
import { authStateChanged } from "../redux/auth/authOperations";

const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  const navigationRef = useNavigationContainerRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChanged());
  }, []);

  const routing = useRoute(stateChange);
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // const uid = user.uid;
  //     setUser(user);
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  return (
    <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
  );
};
export default Main;
