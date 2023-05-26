<script lang="ts">
    export let display: string;
    export let desc: string = "";
    export let beforeButton: string = "";
    export let buttons: {
        onclick: svelte.JSX.MouseEventHandler<HTMLButtonElement>,
        text: string,
        disabled: boolean
    }[] = [];
</script>

<div>
    <h1>{ display }</h1>
    <br>
    {#if desc}<i>"{ desc }"</i>{/if}
    <br>
    <br>
    {#if beforeButton}<h2>{ beforeButton }</h2>{/if}
    <br>
    {#each buttons as i, idx (idx)}
        <button on:click={ i.onclick } disabled={ i.disabled }>{ i.text }</button>
    {/each}
</div>

<style lang="scss">
    div {
        background-color: #202020;
        width: calc(100% - 50px);
        margin: 25px auto 25px auto;
        padding: 30px;
        box-sizing: border-box;
        border-radius: 25px;

        button {
            border: none;
            border-radius: 10px;
            padding: 10px;
            font-size: 20px;
            transition-duration: 250ms;
            margin-right: 10px;

            &:not(:disabled) {
                cursor: pointer;
                background-color: green;

                &:hover {
                    background-color: limegreen;
                }
            }

            &:disabled {
                cursor: not-allowed;
                background-color: darkred;
                color: #aaaaaa;
            }
        }

        h1, h2 {
            display: inline;
        }

        h2, i {
            color: #aaaaaa;
        }
    }
</style>