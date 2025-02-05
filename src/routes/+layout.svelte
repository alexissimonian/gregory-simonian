<script lang="ts">
    import "../app.css";
    let { children } = $props();
</script>
<div class="content">
    {@render children()}
</div>
