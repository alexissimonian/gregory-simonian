<script lang="ts">
    let { children } = $props();
</script>

<div class="content">
    {@render children()}
</div>

<style>
    .content{
        background-image: url("images/contact-background.png");
    }
</style>
