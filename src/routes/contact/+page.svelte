<script>
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="content">
    <header>
        <Navbar />
    </header>
    <section>
        <h2>Contact</h2>
        <div id="contact-page-desc">
            <p>Envie de réserver un atelier d’écriture, un spectacle ou d’échanger sur vos besoins particuliers ?</p>
            <p>Contactez-moi, je suis à votre écoute !</p>
        </div>
        <div id="contact-form">
            <form method="POST" action="?/create">
                <label>
                    Nom
                    <input name="nom" required/>
                </label>
                <label>
                    Email
                    <input name="email" required/>
                </label>                
                <label>
                    Message
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>
</div>

<style>
    .content {
        background-image: url("/images/contact-background.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    section {
        h2 {
            font-size: 80px;
            line-height: 80px;
            letter-spacing: 0.114em;
            color: var(--red-color-contact);
            font-weight: bold;
            text-transform: uppercase;
            text-shadow: rgba(43, 4, 1, 0.4) 3.53553px 3.53553px 0px;
            padding: var(--standard-padding);
        }

        div {
            text-align: left;
        }
    }
</style>
