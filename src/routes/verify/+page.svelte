<script>
    import { Turnstile } from 'svelte-turnstile';
    
    let cloudflareSiteKey = import.meta.env.VITE_CLOUDFLARE_SITEKEY;
</script>

<Turnstile siteKey={cloudflareSiteKey} />