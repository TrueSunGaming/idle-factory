import type { AutomationData } from "../AutomationData";
import { rock } from "../machines/rock";

export const rockAuto: AutomationData = {
    id: "rock",
    display: "Rock Manager",
    cost: 15,
    ops: 1,
    machine: rock
}