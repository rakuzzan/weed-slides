import { Types } from "./Type";
import { Coordinates } from "./Coordinates";

export type Pic = {
    type: Types,
    pos: Coordinates,
    size: Coordinates,
    rotation: number
    }