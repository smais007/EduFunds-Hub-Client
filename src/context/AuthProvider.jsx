import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../service/firebase";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "sonner";
// import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const editUserProfile = (editName, editImage, editNumber) => {
    return updateProfile(auth.currentUser, {
      displayName: editName,
      photoURL: editImage,
      phoneNumber: editNumber,
    });
  };

  // const googleLogin = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, googleProvider);
  // };

  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      const userInfo = {
        name: user.displayName,
        email: user.email,
        profileImage: user.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        //console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Account creaded succesfully");
        }
      });
    });
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email;
      // const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      // if (currentUser) {
      //   axios
      //     .post("https://apis-server-eight.vercel.app/jwt", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log("login response", res.data);
      //     });
      // } else {
      //   axios
      //     .post("https://apis-server-eight.vercel.app/logout", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     });
      // }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    loading,
    googleLogin,
    githubLogin,
    updateUserProfile,
    editUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
