<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import ContactButton from "$lib/components/ContactButton.svelte";
</script>

<div class="content">
    <header>
        <div class="header-text">
            <Navbar --color="var(--yellow-color)" />
        </div>
        <div class="header-text header-text-title">
            <h1>Grégory<br />Simonian</h1>
        </div>
        <div class="header-text header-text-description">
            <p>Conteur</p>
            <p>Animateur en<br /> atelier d'écriture</p>
        </div>
    </header>
    <section id="plongez-dans-univers-conte">
        <h2>Plongez dans l'univers du conte</h2>
        <h3>Deux approches pour eveiller votre imaginaire</h3>
        <div id="deux-approches-eveiller-imaginaire">
            <div class="approach" id="spectacles">
                <h4>Spectacles</h4>
                <ul>
                    <li>
                        Un voyage entre rêve et réalité pour émerveiller et
                        rassembler.
                    </li>
                    <li>
                        Des récits venus des quatre coins du globe, pour
                        découvrir la richesse des cultures du monde.
                    </li>
                    <li>
                        Des contes pour tous les âges, des tout-petits aux
                        adultes.
                    </li>
                    <li>
                        Vivez des histoires qui ont parcouru les siècles avant
                        d’arriver jusqu’à vos oreilles.
                    </li>
                </ul>
                <div id="approach-cta-container">
                    <a href="spectacles">En savoir plus</a>
                </div>
            </div>
            <div class="approach" id="atelier-ecriture">
                <h4>Ateliers D'écriture</h4>
                <ul>
                    <li>
                        Ecrivez votre propre conte, en laissant libre cours à
                        votre imagination.
                    </li>
                    <li>
                        Exprimez vos émotions à travers des récits personnels.
                    </li>
                    <li>
                        Ateliers inclusifs, accessibles à tous les âges, aux
                        personnes en situation de handicap, à celles préférant
                        l'oral à l'écrit.
                    </li>
                    <li>
                        Initiez-vous aux bases de la narration. Chaque
                        participant repart avec un conte, écrit ou raconté.
                    </li>
                </ul>
                <div id="approach-cta-container">
                    <a href="ateliers_ecriture">En savoir plus</a>
                </div>
            </div>
        </div>
        <ContactButton />
    </section>
    <section>
        <h2>Par tous les lieux</h2>
        <div id="par-tous-les-lieux-content">
            <div id="liste-lieux">
                <div id="liste-lieux-subtitle-container">
                    <div id="liste-lieux-subtitle">
                        <h3>
                            Pour en savoir plus, cliquez sur le lieu en question
                        </h3>
                    </div>
                </div>
                <div id="liste-lieux-content"></div>
            </div>
            <div id="cadres"></div>
            <!-- <img src=""/>
<img src=""/>
<img src=""/> -->
        </div>
        <ContactButton />
    </section>
</div>

<style>
    @import "/css/green-yellow-design.css";

    header {
        /*background-image: url("/images/gregorysimonianhomeimage.JPG");*/
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .header-text {
            height: 33%;
        }

        .header-text-description {
            p {
                color: var(--yellow-color);
                text-transform: uppercase;
            }
        }
    }

    section {
        #deux-approches-eveiller-imaginaire {
            display: flex;
            flex-direction: row;
            justify-content: center;

            .approach {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 50%;
                background-image: url("/images/home-aproaches-frame.svg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                h4 {
                    height: 10%;
                }

                #approach-cta-container {
                    height: 10%;
                    a {
                        font-weight: bold;
                        color: var(--green-color);
                    }
                }
            }
        }

        #par-tous-les-lieux-content {
            display: flex;
            flex-direction: row;
            justify-content: center;

            #liste-lieux {
                display: flex;
                flex-direction: column;
                width: 70%;
                height: 100%;

                #liste-lieux-subtitle-container {
                    display: flex;
                    justify-content: center;

                    #liste-lieux-subtitle {
                        background-color: var(--beige-color);
                        border: 1px solid black;
                        width: fit-content;
                    }
                }

                #liste-lieux-content {
                    height: 100%;
                    background-image: url("/images/home-green-yellow-frame.svg");
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }

            #cadres {
                display: flex;
                flex-direction: column;
                width: 30%;
                height: 100%;
            }
        }
    }
</style>
