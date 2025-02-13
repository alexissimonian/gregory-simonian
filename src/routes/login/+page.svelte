<script>
    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { firebaseClientAuth } from "$lib/firebase/firebase.client";
    import { goto } from "$app/navigation";

    async function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        let result = await signInWithPopup(firebaseClientAuth, provider)
            .catch((error) => {
                console.error(error.message);
            });

        const response = await fetch('/api/auth', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(result)});
        if (response.ok){
           goto('/');
        } else {
            console.error("Unauthorized");
        }
    }
</script>

<button on:click={loginWithGoogle}>Login with Google</button>

