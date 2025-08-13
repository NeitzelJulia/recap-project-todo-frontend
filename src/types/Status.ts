export type Status = "OPEN" | "IN_PROGRESS" | "DONE";

export const statusLabels: Record<Status, string> = {
    OPEN: "Open",
    IN_PROGRESS: "In Progress",
    DONE: "Done"
};