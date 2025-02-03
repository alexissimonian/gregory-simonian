<script lang="ts">
   import Navbar from "$lib/Navbar.svelte";
</script>
<div id="page-content">
    <header>
        <div class="header-text">
            <Navbar --color="var(--yellow-color)"/>
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
                        Des récits venus des quatre coins du globe, pour découvrir
                        la richesse des cultures du monde.
                    </li>
                    <li>
                        Des contes pour tous les âges, des tout-petits aux adultes.
                    </li>
                    <li>
                        Vivez des histoires qui ont parcouru les siècles avant
                        d’arriver jusqu’à vos oreilles.
                    </li>
                </ul>
                <div id="approach-cta-container">
                    <a href="/spectacles">En savoir plus</a>
                </div>
            </div>
            <div class="approach" id="atelier-ecriture">
                <h4>Ateliers D'écriture</h4>
                <ul>
                    <li>
                        Ecrivez votre propre conte, en laissant libre cours à votre
                        imagination.
                    </li>
                    <li>Exprimez vos émotions à travers des récits personnels.</li>
                    <li>
                        Ateliers inclusifs, accessibles à tous les âges, aux
                        personnes en situation de handicap, à celles préférant
                        l'oral à l'écrit.
                    </li>
                    <li>
                        Initiez-vous aux bases de la narration. Chaque participant
                        repart avec un conte, écrit ou raconté.
                    </li>
                </ul>
                <div id="approach-cta-container">
                    <a href="ateliers_ecriture">En savoir plus</a>
                </div>
            </div>
        </div>
        <div class="cta-section">
            <button onclick={() => window.location.href = "/contact"}
            >Me Contacter</button
            >
        </div>
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
        <div class="cta-section">
            <button onclick={() => window.location.href = "/contact"}
            >Me Contacter</button
            >
        </div>
    </section>
</div>

<style>
    #page-content {
        background-image: url("/images/backgroundhome-seemless.png");
        background-position: center;
        background-size: contain;
    }

    header {
        /*background-image: url("/images/gregorysimonianhomeimage.JPG");*/
        height: 95dvh;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .header-text {
            height: 33%;
        }

        .header-text-description {
            p {
                margin: 0 0 40px 0;
                font-size: 2rem;
                color: var(--yellow-color);
                text-transform: uppercase;
            }
        }

        h1 {
            font-size: 4rem;
            font-weight: bold;
            color: var(--yellow-color);
            text-transform: uppercase;
            text-shadow: var(--red-color) 1.5px 1.5px 0px;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        text-align: center;

        h2 {
            font-size: 3rem;
            font-weight: bold;
            color: var(--yellow-color);
            text-transform: uppercase;
            text-shadow: var(--red-color) 1px 1px 0px;
            padding: var(--standard-padding);
        }

        h3 {
            font-size: 2rem;
            color: var(--gray-color);
            padding: 0 var(--standard-padding) var(--standard-padding)
                var(--standard-padding);
        }

        #deux-approches-eveiller-imaginaire {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: var(--standard-padding);
            height: 75dvh;

            .approach {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 50%;
                background-image: url("/images/cadre-bleu-vert.svg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                padding: var(--standard-padding);

                h4 {
                    height: 10%;
                    font-size: 2rem;
                    color: var(--orange-color);
                    text-transform: uppercase;
                    padding: var(--light-padding);
                }

                ul {
                    height: 80%;
                    padding: var(--light-padding) 120px;

                    li {
                        font-size: 1.5rem;
                        padding: var(--light-padding);
                    }
                }

                #approach-cta-container {
                    height: 10%;
                    a {
                        font-size: 1.8rem;
                        font-weight: bold;
                        color: var(--green-color);
                    }
                }
            }
        }

        #par-tous-les-lieux-content {
            display: flex;
            flex-direction: row;
            height: 80dvh;
            justify-content: center;

            #liste-lieux {
                display: flex;
                flex-direction: column;
                width: 70%;
                height: 100%;

                #liste-lieux-subtitle-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: var(--standard-padding);

                    #liste-lieux-subtitle {
                        background-color: var(--beige-color);
                        border: 1px solid black;
                        width: fit-content;
                    }

                    h3 {
                        padding: 5px 20px;
                    }
                }

                #liste-lieux-content {
                    height: 100%;
                    background-image: url("/images/cadre-vert.svg");
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

        .cta-section {
            padding: var(--standard-padding);
            button {
                font-size: 1.5rem;
                background-color: var(--blue-color);
                padding: 15px 30px;
                border: 1px solid black;
            }
        }
    }
</style>
