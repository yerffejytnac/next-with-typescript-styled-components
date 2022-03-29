import common from "./colors/common";
import blue from "./colors/blue";
import blueGray from "./colors/blueGray";
import blueLight from "./colors/blueLight";
import brown from "./colors/brown";
import cyan from "./colors/cyan";
import gray from "./colors/gray";
import green from "./colors/green";
import greenLight from "./colors/greenLight";
import indigo from "./colors/indigo";
import lime from "./colors/lime";
import orange from "./colors/orange";
import orangeDeep from "./colors/orangeDeep";
import pink from "./colors/pink";
import purple from "./colors/purple";
import purpleDeep from "./colors/purpleDeep";
import red from "./colors/red";
import teal from "./colors/teal";
import yellow from "./colors/yellow";

const colors = {
  ...common,
  blue: Object.assign(blue[500], blue),
  blueGray: Object.assign(blueGray[500], blueGray),
  blueLight: Object.assign(blueLight[500], blueLight),
  brown: Object.assign(brown[500], brown),
  cyan: Object.assign(cyan[500], cyan),
  gray: Object.assign(gray[500], gray),
  green: Object.assign(green[500], green),
  greenLight: Object.assign(greenLight[500], greenLight),
  indigo: Object.assign(indigo[500], indigo),
  lime: Object.assign(lime[500], lime),
  orange: Object.assign(orange[500], orange),
  orangeDeep: Object.assign(orangeDeep[500], orangeDeep),
  pink: Object.assign(pink[500], pink),
  purple: Object.assign(purple[500], purple),
  purpleDeep: Object.assign(purpleDeep[500], purpleDeep),
  red: Object.assign(red[500], red),
  teal: Object.assign(teal[500], teal),
  yellow: Object.assign(yellow[500], yellow),
};

export default colors;
