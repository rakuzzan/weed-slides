import { Types } from "./Type";
import { Coordinates } from "./Coordinates";
import { Props } from "./Props"

export type Rectangle = {
    type: Types;
    pos: Coordinates;
    radius: number;
    props: Props;
}