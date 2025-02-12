<script>
    import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { firebaseClientAuth } from "$lib/firebase/firebase.client";

    async function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(firebaseClientAuth, provider);
        console.log(result);
    };
</script>

<button on:click={loginWithGoogle}>Login with Google</button>