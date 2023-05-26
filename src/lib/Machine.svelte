<script lang="ts">
    import type { MachineData } from "./MachineData";
    import Panel from "./Panel.svelte";
    import { money } from "./data";
    import { formatNumber } from "./format";

    export let renderData: MachineData;
</script>

<Panel
    display={ renderData.display }
    desc={ renderData.desc }
    beforeButton={`Earns $${formatNumber(renderData.output)}`}
    buttons={[
        {
            onclick: () => $money += renderData.output,
            text: "Use Machine",
            disabled: false
        }
    ]}
/>