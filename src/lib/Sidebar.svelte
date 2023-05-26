<script lang="ts">
    import { mps, money } from "../lib/data";
    import { formatNumber } from "../lib/format";
    import { AppState, openLink } from "../lib/state";

    const buttons: [string, string | AppState][] = [
        ["Machines", AppState.Machines],
        ["Automation", AppState.Automation],
        ["Research", AppState.Research],
        ["Ascension", AppState.Ascension],
        ["Stats", AppState.Stats],
        ["Settings", AppState.Settings],
        ["Info", AppState.Info],
    ];

    export let current: number;
</script>

<div>
    <span class="money">${ formatNumber($money) }</span>
    <span class="mps">${ formatNumber($mps) }/sec</span>
    {#each buttons as i, idx (idx)}
        <button class={current == idx ? "current" : ""} on:click={ () => openLink(i[1]) }>{ i[0] }</button>
    {/each}
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;

        button {
            flex: 1;
        }

        .money {
            flex: .5;
        }

        .mps {
            flex: .5;
            font-size: 20px;
            color: #bbbbbb;
        }

        .money {
            font-size: 30px;
        }

        .money, .mps {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            text-align: center;
        }

        button {
            background-color: #202020;
            border: none;
            cursor: pointer;
            transition-duration: 250ms;
            font-size: 40px;
            color: #aaaaaa;

            &:not(:last-of-type) {
                border-bottom: 1px solid #808080;
            }

            &:hover {
                background-color: #404040;
            }

            &.current {
                color: white;
            }
        }
    }
</style>