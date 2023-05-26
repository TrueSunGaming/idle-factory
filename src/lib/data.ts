import { derived, get, writable, type Readable, type Writable } from "svelte/store";
import { automators, machines } from "./machines";

export interface SaveGame {
    money: number,
    researchLevel: number,
    automation: number[]
}

const defaultSave: SaveGame = {
    money: 0,
    researchLevel: 1,
    automation: new Array(automators.length).fill(0)
};

const ds: SaveGame = structuredClone(defaultSave);
export const money: Writable<number> = writable(ds.money);
export const researchLevel: Writable<number> = writable(ds.researchLevel);
export const automation: Writable<number[]> = writable(ds.automation);
export const lastUpdate: Writable<number> = writable(Date.now());
importSave(localStorage.IDLE_FACTORY_DATA)

function generateSave(): SaveGame {
    return {
        money: Math.floor(get(money)),
        researchLevel: get(researchLevel),
        automation: get(automation)
    };
}

export function generateExport(): string {
    return JSON.stringify(generateSave());
}

export function saveGame(): void {
    localStorage.IDLE_FACTORY_DATA = generateExport()
}

export function importSave(data: string): void {
    let parse: any = {};

    try {
        parse = JSON.parse(data ?? "{}");
    } catch(e) {
        localStorage.IDLE_FACTORY_DATA = "{}";
        return location.reload();
    }

    const game: SaveGame = Object.assign(defaultSave, parse);

    if (game.automation.length < defaultSave.automation.length) game.automation = new Array(defaultSave.automation.length).map((v, i) => game.automation[i] ?? 0);

    money.set(game.money);
    researchLevel.set(game.researchLevel);
    automation.set(game.automation);
}

export const rawMps: Readable<number> = derived(automation, (auto) => auto.reduce((t, v, i) => t + v * machines[i].output * automators[i].ops));
export const mps: Readable<number> = derived(rawMps, (v) => v);

setInterval(() => {
    const last: number = get(lastUpdate);
    lastUpdate.set(Date.now());

    const delta: number = (Date.now() - last) / 1000;

    money.set(get(money) + get(mps) * delta);
}, 50/3);

setInterval(() => {
    saveGame();
}, 60000);