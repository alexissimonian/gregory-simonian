<script>
    import { onMount } from "svelte";
    import {GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
    import { auth } from "$lib/firebase/firebase.client.js";

    let { data, children } = $props();
    onMount(async () => {
        let user = await data.getAuthUser();
        console.log(user);
        if (!user){
            let provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
        }
    });
</script>

{@render children()}
