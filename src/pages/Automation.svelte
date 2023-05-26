<script lang="ts">
    import Automator from "../lib/Automator.svelte";
    import { researchLevel } from "../lib/data";
    import { automators } from "../lib/machines";
</script>

<div>
    {#each {length: $researchLevel} as _, i (i)}
        {#if automators.length > i && automators[i]} <Automator renderData={ automators[i] } index={ i } /> {/if}
    {/each}
</div>

<style lang="scss">
    div {
        height: 100%;
        overflow: auto;
    }
</style>