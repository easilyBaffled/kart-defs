import React from "react";
import { ItemTrigger } from "./Enums";
import { Prim } from "./Prim";
import { Affect, Requirement } from "./Primative";
import { Consiquence, Attribute, Level } from "./Parts";

/************************************
 *************** Cards **************
 ************************************/
export const Segment = ({ requirements, consiquences }) => (
  <div className="segment">
    <Requirement {...requirements} />
    {consiquences.map((c) => (
      <Consiquence {...c} />
    ))}
  </div>
);

export const Kart = ({ meta, attributes, power }) => (
  <div className="kart">
    <Prim val={{ meta }} />
    {Object.values(attributes).map((attr) => (
      <Attribute {...attr} />
    ))}
    <Attribute {...power} />
  </div>
);

export const Item = ({ type, attributes, affect, level }) => (
  <div className="item">
    <Prim val={{ type }} />
    {Object.values(attributes).map((attr) => (
      <Attribute {...attr} />
    ))}
    <ItemTrigger type={affect.trigger} />
    {affect.affects.map((a) => (
      <Affect {...a} />
    ))}
    <Prim val={{ currentLevel: level.currentLevel }} />
    {level.levels.map((l) => (
      <Level {...l} />
    ))}
  </div>
);
