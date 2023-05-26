import { writable, type Writable } from "svelte/store";

export enum AppState {
    Machines,
    Automation,
    Research,
    Ascension,
    Stats,
    Settings,
    Info
}

export const appState: Writable<AppState> = writable(AppState.Machines);

export function openLink(link: string | AppState): void {
    if (typeof link == "string") return open(link), undefined;
    appState.set(link);
}