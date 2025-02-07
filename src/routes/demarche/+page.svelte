<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
</script>

<div class="content">
    <header>
        <Navbar />
        <h1>Mon chemin de conteur</h1>
    </header>
    <section>
        <div id="chemin-conteur-content">
            <div class="chemin-paper-piece-container">
                <h2>Démarche</h2>
                <div class="paper-piece">
                    <p>
                        Je vois le conte comme un espace de transformation et de
                        renouveau. Chaque récit offre la possibilité de grandir
                        à travers des épreuves, de trouver un chemin vers
                        l’espoir. Ce qui me rend fier, c’est de faire vivre une
                        tradition orale millénaire, un art vivant qui se
                        réinvente à chaque voix, devenant unique et intemporel.
                        Conter, pour moi, c’est offrir un soin, un remède adapté
                        aux histoires et aux besoins de ceux qui écoutent. C’est
                        cette capacité du conte à guérir, inspirer et rassembler
                        qui donne tout son sens à ma démarche.
                    </p>
                </div>
            </div>
            <div class="chemin-paper-piece-container">
                <h3>Formation</h3>
                <div class="paper-piece">
                    <strong>Conte</strong><br />
                    <p>
                        Je me suis formé auprès de conteuses et conteurs
                        professionnels pendant plusieurs années. J'ai conté dans
                        divers lieux, allant des hôpitaux aux maisons de
                        retraite, en passant par des associations, des écoles ou
                        divers espaces publics, et auprès de publics variés, en
                        situation de handicap ou non.
                    </p>
                    <strong>Ateliers d'écriture</strong><br />
                    <p>
                        Je suis diplômé d’une formation pour la mise en place
                        d'ateliers d'écriture reconnue par l'État, complétée par
                        une spécialisation en ateliers d'écriture thérapeutique,
                        me permettant d’adapter ces ateliers aux besoins
                        spécifiques de personnes en situation de handicap moteur
                        ou mental.
                    </p>
                </div>
            </div>
            <div class="chemin-paper-piece-container">
                <h2>Mon parcours avant le conte</h2>
                <div class="paper-piece">
                    <p>
                        Avant d’être conteur, mon parcours professionnel m'a
                        conduit à travailler dans différents environnements, ce
                        qui m'a permis d'acquérir une connaissance approfondie
                        des publics auprès desquels je conte et de leurs
                        besoins. J'ai notamment exercé à la médiathèque de
                        l'hôpital Necker, animé des activités culturelles, comme
                        des cours d'histoire en maison de retraite, et enseigné
                        en tant que professeur des écoles, tant en maternelle
                        qu'en élémentaire.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    @import "/css/green-yellow-design.css";
    #chemin-conteur-content {
        display: flex;
        flex-direction: column;
        text-align: left;

        .chemin-paper-piece-container {
            .paper-piece {
                background-image: url("/images/demarche-paper-piece.png");
                background-position: center;
                background-size: cover;
            }
        }
    }
</style>
