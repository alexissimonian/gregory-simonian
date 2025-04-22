<script lang='ts'>
    import Navbar from "$lib/components/Navbar.svelte";
    import { onMount } from "svelte";
    
    const SITE_KEY = import.meta.env.VITE_CLOUDFLARE_SITEKEY;
    let canSendForm = false;
    onMount(() => {
        window.turnstile.render('#turnstile-container', {
            sitekey: SITE_KEY,
            theme: 'light',
            callback: async function(token) {
                let data = new FormData();
                data.append('token', token);
                let response = await fetch('?/token', {
                    method: 'POST',
                    body: data
                })

                if(response.ok){
                    canSendForm = true;
                }
            }
        });
    })
</script>


<svelte:head>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
</svelte:head>

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
                <div id="turnstile-container"></div>
                <button type="submit" disabled={!canSendForm}>Envoyer</button>
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