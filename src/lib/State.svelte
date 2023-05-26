<script lang="ts">
    import Sidebar from "../lib/Sidebar.svelte";

    export let current: number;
</script>

<div>
    <nav>
        <Sidebar { current } />
    </nav>
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        height: 100vh;

        nav, main {
            height: 100%;
        }

        nav {
            flex: 1;
            border-right: 5px solid #804000;
        }

        main {
            flex: 4;
        }
    }
</style>