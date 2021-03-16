import React from "react";
import { AttributeType, AffectType, PredicateOpperator } from "./Enums";
import { Prim } from "./Prim";

/************************************
 ************* Primative ************
 ************************************/

export const Requirement = ({ speed, handling, meta }) => (
  <div className="requirement">
    <Prim val={{ speed }} />
    <Prim val={{ handling }} />
    <div data-gridid="meta-track">{meta?.track}</div>
  </div>
);

export const Affect = ({ targetAttribute, affect, value, time }) => (
  <div className="affect">
    <AttributeType type={targetAttribute} />
    <AffectType type={affect} />
    <Prim val={{ value }} />
    <Prim val={{ time }} />
  </div>
);

export const Predicate = ({ predicateOpperator, value }) => (
  <div className="predicate">
    <PredicateOpperator type={predicateOpperator} />
    <Prim val={{ value }} />
  </div>
);
