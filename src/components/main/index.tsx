import React from "react";
import { Tw } from "styles";

import Header from "../header";
import Overview from "./overview";
import Texts from "./texts";
import Description from "./description";
import { State, SetState } from "state";

const layout = Tw()
  .px72().pb72()
  .lt960FlexNone().lt960WFull()
  .fr960To1280Flex1().fr960To1280MaxW800()
  .gt1280Flex1().gt1280MaxW800().$();

const color = Tw()
  .bgFff().shadow8()
  .border1().borderSolid().borderE2E()
  .$();

interface Props { state: State; setState: SetState; }

const links = [
  { href: "/", text: "otf.show" },
  { href: "/about", text: "about" },
  { href: "https://github.com/dvkndn/otf.show", text: "github" },
];

const Main: React.FC<Props> = ({ state, setState }) => (
  <main className={`${layout} ${color}`}>
    <div><Header links={links} /></div>
    <div className={Tw().mt36().$()}>
      <Overview state={state} />
    </div>
    <div className={Tw().mt24().$()}>
      <Texts state={state} setState={setState} />
    </div>
    <div className={Tw().mt36().$()}>
      <Description state={state} />
    </div>
  </main>
);

export default Main;