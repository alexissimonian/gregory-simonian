import { initializeFirebase, auth } from "$lib/firebase/firebase.client";
import { browser } from "$app/environment";
import { onAuthStateChanged } from "firebase/auth";

export async function load() {
  if (browser) {
    try {
      initializeFirebase();
    } catch (ex) {
      console.error(ex);
    }
  }

  function getAuthUser() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user ? user : false));
    });
  }

  return {
    getAuthUser: getAuthUser,
  };
}
