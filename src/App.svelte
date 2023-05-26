<script lang="ts">
    import type { SvelteComponent } from "svelte";
    import Machines from "./pages/Machines.svelte";
    import State from "./lib/State.svelte";
    import { appState } from "./lib/state";
    import Automation from "./pages/Automation.svelte";
    import Settings from "./pages/Settings.svelte";

    const content: (typeof SvelteComponent | null)[] = [
        Machines,
        Automation,
        null,
        null,
        null,
        Settings,
        null
    ];
</script>

<State current={ $appState }>
    {#if content.length > $appState && content[$appState]}
        <svelte:component this={ content[$appState] } />
    {:else}
        Invalid Page
    {/if}
</State>