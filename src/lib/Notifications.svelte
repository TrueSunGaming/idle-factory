<script lang="ts">
    import Notification from "./Notification.svelte";
    import { notifications } from "./data";
</script>

<div>
    {#each $notifications as i, idx (idx)}
        <section>
            <Notification msg={ i[0] } { idx } />
        </section>
    {/each}
</div>

<style lang="scss">
    div {
        position: fixed;
        top: 0;
        right: 0;
        padding: 10px;

        * {
            margin: 10px;
        }
    }
</style>