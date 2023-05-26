import type { MachineData } from "./MachineData";

export interface AutomationData {
    id: string,
    display: string,
    cost: number,
    ops: number,
    machine: MachineData
}