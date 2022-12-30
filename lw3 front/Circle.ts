import { Types } from "./Type";
import { Coordinates } from "./Coordinates";
import { Props } from "./Props"

export type Circle = {
    type: Types;
    pos: Coordinates;
    radius: number;
    props: Props;
}
