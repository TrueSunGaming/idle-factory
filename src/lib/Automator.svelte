<script lang="ts">
    import type { AutomationData } from "./AutomationData";
    import Panel from "./Panel.svelte";
    import { automation, money } from "./data";
    import { formatNumber } from "./format";

    export let renderData: AutomationData;
    export let index: number;

    $: price = Math.floor(renderData.cost * 1.15 ** $automation[index]);
</script>

<Panel
    display={ renderData.display }
    desc={`You own ${$automation[index]}, for a total of ${$automation[index] * renderData.ops} operations/sec ($${$automation[index] * renderData.ops * renderData.machine.output}/sec)`}
    beforeButton={`Performs ${formatNumber(renderData.ops)} operations/sec ($${formatNumber(renderData.ops * renderData.machine.output)}/sec)`}
    buttons={[
        {
            onclick: () => {
                $money -= price;
                $automation[index]++;
            },
            text: `Buy for $${formatNumber(price)}`,
            disabled: $money < price
        }
    ]}
/>