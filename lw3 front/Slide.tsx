import {Colors} from "./Colors";
import {Pic} from "./Pic";

export type Slide = {
    id: number;
    backgroundColor: Colors;
    backgroundImg:  Pic;
    elements: [];
}