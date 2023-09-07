import { writable, type Writable } from "svelte/store";

export const isActivatedByFetch: Writable<boolean> = writable(false);
export const isActivatedByHover: Writable<boolean> = writable(false);
