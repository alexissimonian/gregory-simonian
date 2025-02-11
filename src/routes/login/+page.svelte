<script>
    import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { auth } from "$lib/firebase/firebase.client";
    import { goto } from "$app/navigation";

    async function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider).then(() => {
            goto('/');
        });
    };
</script>

<button on:click={loginWithGoogle}>Login with Google</button>