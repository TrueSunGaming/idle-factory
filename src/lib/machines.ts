import type { AutomationData } from "./AutomationData";
import type { MachineData } from "./MachineData";
import { rockAuto } from "./automaters/rock";
import { rock } from "./machines/rock";

export const machines: MachineData[] = [
    rock
];

export const automators: AutomationData[] = [
    rockAuto
];