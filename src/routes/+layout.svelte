<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav>
    <a href="/">Accueil</a>
    <a href="/#demarches">Démarches</a>
    <a href="/spectacles">Spectacles</a>
    <a href="/ateliers_ecriture">Ateliers d'écritures</a>
</nav>

{@render children()}
