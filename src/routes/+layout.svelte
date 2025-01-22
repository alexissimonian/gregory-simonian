<script lang="ts">
    import "../app.css";
    let { children } = $props();
</script>

<nav>
    <a href="/">Accueil</a>
    <a href="/#demarche">Démarche</a>
    <a href="/spectacles">Spectacles</a>
    <a href="/ateliers_ecriture">Ateliers d'écritures</a>
</nav>

{@render children()}

<style>
    nav {
        position: absolute;
        top: 0;
        padding: 15px;
        font-size: 2rem;
        color: var(--yellow-color);
        text-transform: uppercase;

        a {
            margin: 15px;
        }
    }
</style>
