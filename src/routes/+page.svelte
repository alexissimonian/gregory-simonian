<header>
    <div class="header-text equalizer"></div>
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
                <li>Un voyage entre rêve et réalité pour émerveiller et rassembler.</li>
                <li>Des récits venus des quatre coins du globe , pour découvrir la richesse des cultures du monde.</li>
                <li>Vivez des histoires qui ont parcouru les siècles avant d’arriver jusqu’à vos oreilles.</li>
            </ul>
            <button>En savoir plus</button>
        </div>
        <div class="approach" id="atelier-ecriture">
            <h4>Ateliers D'écriture</h4>
            <ul>
                <li>Un voyage entre rêve et réalité pour émerveiller et rassembler.</li>
                <li>Des récits venus des quatre coins du globe , pour découvrir la richesse des cultures du monde.</li>
                <li>Vivez des histoires qui ont parcouru les siècles avant d’arriver jusqu’à vos oreilles.</li>
            </ul>
            <button>En savoir plus</button>
        </div>
    </div>
</section>

<style>
    header {
        /*background-image: url("/images/gregorysimonianhomeimage.JPG");*/
        height: 95dvh;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30px;

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
        padding: 30px;

        h2 {
            font-size: 3rem;
            font-weight: bold;
            color: var(--yellow-color);
            text-transform: uppercase;
            text-shadow: var(--red-color) 1px 1px 0px;
            padding: 30px;
        }

        h3 {
            font-size: 2rem;
            color: var(--gray-color)
        }
    }
</style>
