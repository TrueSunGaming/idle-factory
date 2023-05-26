<script lang="ts">
    import Panel from "../lib/Panel.svelte";
    import { generateExport, saveGame } from "../lib/data";
</script>

<div>
    <Panel
        display="Save"
        buttons={[
            {
                onclick: () => saveGame(),
                text: "Save Game",
                disabled: false
            },
            {
                onclick: async () => {
                    await navigator.clipboard.writeText(generateExport());
                    alert("Save copied to clipboard.");
                },
                text: "Export Save",
                disabled: false
            },
            {
                onclick: () => {
                    const data = prompt("Enter your save JSON:\n\nWarning: Importing invalid JSON will wipe your save.");
                    if (!data) return;
                    localStorage.IDLE_FACTORY_DATA = data;
                    location.reload();
                },
                text: "Import Save",
                disabled: false
            }
        ]}
    />

    <Panel
        display="Danger Zone"
        buttons={[
            {
                onclick: () => {
                    if (!confirm("Are you SURE you want to wipe your save? This will reset EVERYTHING!!!")) return;
                    localStorage.IDLE_FACTORY_DATA = "{}";
                    location.reload();
                },
                text: "Wipe Save",
                disabled: false
            },
        ]}
    />
</div>

<style lang="scss">
    div {
        height: 100%;
        overflow: auto;
    }
</style>