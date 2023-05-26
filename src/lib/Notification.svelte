<script lang="ts">
    import { notifications } from "./data";

    export let msg: string;
    export let idx: number;

    function remove(): void { 
        $notifications.splice(idx, 1);
        $notifications = $notifications;
    }
</script>

<div on:mouseup={ remove }>
    { msg }
    <br>
    <span>Click to dismiss</span>
</div>

<style lang="scss">
    div {
        background-color: #202020;
        outline: 1px solid white;
        border-radius: 10px;
        padding: 10px;
        font-size: 25px;
        cursor: pointer;
        transition-duration: 250ms;

        span {
            font-size: 15px;
            color: #aaaaaa;
        }
        
        &:hover {
            background-color: #404040;
        }
    }
</style>