import { auth, provider } from "@/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getUser, postUser } from "../api/user";
import { postUserIcon } from "../api/user";

const signin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential === null) {
      throw new Error("Failed to get credential");
    }
    if (!result.user.displayName) {
      throw new Error("Name is required");
    }
    const idToken = await result.user.getIdToken();

    localStorage.setItem("jwt", idToken);
    let user;
    user = await getUser(result.user.uid);
    if (user === undefined) {
      await postUser(result.user.uid, result.user.displayName);
    }
    const usericonPath = result.user.photoURL?.toString();
    if (usericonPath === undefined) {
      return;
    }
    const res = await fetch(usericonPath);
    const blob = await res.blob();
    const usericon = new File([blob], "image.png");
    await postUserIcon(usericon, result.user.uid);
  } catch (error) {
    localStorage.removeItem("jwt");
    await signOut(auth);
  }
};
const signout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("jwt");
  } catch (error) {}
};

export { signin, signout };
