import { Rectangle } from "./Rectangle";
import { Types } from "./Type";
import { Colors } from "./Colors"
import {Props} from "./Props";

export type TextArea = {
    type: Types;
    rectangle: Rectangle;
    text: string;
    font: string;
    size: number;
    color: Colors;
    props: Props;
}