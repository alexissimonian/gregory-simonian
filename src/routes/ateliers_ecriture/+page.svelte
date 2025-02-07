<script lang="ts">
    import ContactButton from "$lib/ContactButton.svelte";
    import Navbar from "$lib/Navbar.svelte";
</script>

<div class="content">
    <header>
        <Navbar --color="var(--brown-color)"/>
        <h1>Ateliers d'écriture</h1>
        <div>
            <p>
                Écrire son propre conte revient à créer un remède sur mesure,
                parfaitement adapté à sa propre vie.
            </p>
        </div>
    </header>
    <section>
        <header>
            <h2>Déroulement</h2>
        </header>
        <div>
            <p>
                Lors des premières séances, les participants découvriront les bases
                de l’écriture narrative et plongeront dans l’univers du conte grâce
                à des jeux interactifs.
            </p>
            <p>
                Une fois ces fondamentaux assimilés, ils écriront collectivement un
                conte, explorant ensemble les différentes facettes de sa
                construction.
            </p>
            <p>
                Enfin, un accompagnement pas à pas leur permettra de donner vie à
                leur propre conte.
            </p>
            <p>
                Chaque séance débute par un jeu d’écriture ludique autour du conte,
                suivi d’une proposition d’écriture où chacun peut explorer un aspect
                de la narration plus en profondeur, seul ou en groupe.
            </p>
            <p>
                En fin de séance, les participants qui le souhaitent pourront
                partager leurs écrits à voix haute, dans un esprit de convivialité.
            </p>
            <p>
                Une attention particulière est portée à créer un environnement
                chaleureux, où la créativité et le plaisir prennent toute leur
                place.
            </p>
        </div>
    </section>
    <section>
        <header>
            <h2>Inclusif</h2>
        </header>
        <div>
            <p>
                Pour les publics ne souhaitant pas ou ne pouvant pas passer par
                l’écrit, comme les tout-petits, les personnes en situation de
                handicap ou autre situation particulière, j’adapte mon atelier en
                privilégiant l’oralité. Ainsi, chacun peut créer son propre conte,
                mais à travers une approche orale.
            </p>
        </div>
    </section>
    <section>
        <div>
            <strong>
                Prêt à réserver une séance ou à échanger sur vos besoins spécifiques
                ?
            </strong>
            <strong>Contactez-moi, je suis à votre écoute !</strong>
        </div>
    </section>
    <section>
        <strong>Séances: 5</strong>
        <strong>Prix: 90€ par séances</strong>
    </section>
    <section>
        <ContactButton />
    </section>
</div>

<style>
    @import "/css/white-brown-design.css";
</style>