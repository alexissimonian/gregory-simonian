<script>
    import { onMount } from "svelte";
    import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { auth } from "$lib/firebase/firebase.client";

    let { data, children } = $props();
    onMount(async () => {
        let user = await data.getAuthUser();
        
        if (!user){
            let provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        }
    });
</script>

{@render children()}
