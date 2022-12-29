import { Types } from "./Type";
import { Coordinates } from "./Coordinates";
import { Props } from "./Props"

export type Rectangle = {
    type: Types;
    pos: Coordinates;
    size: Coordinates;
    props: Props;
    rotation: number;
}