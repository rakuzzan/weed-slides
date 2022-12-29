import { Types } from "./Type";
import { Coordinates } from "./Coordinates";
import { Props } from "./Props";

export type Triangle = {
    type: Types;
    firstTop: Coordinates;
    secondTop: Coordinates;
    thirdTop: Coordinates;
    props: Props;
}