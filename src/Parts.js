import React from "react";
import { AttributeType, Currency } from "./Enums";
import { Prim } from "./Prim";
import { Affect, Predicate } from "./Primative";

/************************************
 *************** Parts **************
 ************************************/

export const Reward = ({ affect, currency }) => (
  <div className="reward">
    <Affect {...affect} />
    <Currency {...currency} />
  </div>
);

export const Consiquence = ({ predicate, consiquence }) => (
  <div className="consiquence">
    <Predicate {...predicate} />
    <Reward {...consiquence} />
  </div>
);

export const Level = ({ cost, attributeModifier, affectModifier }) => (
  <div className="level">
    <Prim val={{ cost }} />
    <Affect {...attributeModifier} />
    <Affect {...affectModifier} />
  </div>
);

export const Attribute = ({
  type,
  affect,
  currentValue,
  maxValue,
  tempAffect
}) => (
  <div className="attribute">
    <AttributeType type={type} />
    <Affect {...affect} />
    <Prim val={{ currentValue }} />
    <Prim val={{ maxValue }} />
    {tempAffect && (
      <div className="temp-affect">
        <Prim val={{ time: tempAffect.time }} />
        <Affect {...tempAffect.affect} />
      </div>
    )}
  </div>
);
