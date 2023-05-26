<script lang="ts">
    import Machine from "../lib/Machine.svelte";
    import Panel from "../lib/Panel.svelte";
    import { researchLevel } from "../lib/data";
    import { machines } from "../lib/machines";
    import { AppState, openLink } from "../lib/state";
</script>

<div>
    {#each {length: $researchLevel} as _, i (i)}
        {#if machines.length > i} <Machine renderData={ machines[i] } /> {/if}
    {/each}
    <Panel
        display="Unlock more machines with research"
        buttons={[
            {
                onclick: () => openLink(AppState.Research),
                text: "Go to Research",
                disabled: false
            }
        ]}
    />
</div>

<style lang="scss">
    div {
        height: 100%;
        overflow: auto;
    }
</style>