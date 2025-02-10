<script>
    import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
    import { auth } from "$lib/firebase/firebase.app"
    let provider = new GoogleAuthProvider();
	let { children } = $props();
</script>

{@render children()}