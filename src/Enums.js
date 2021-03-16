import React from "react";
import { Prim } from "./Prim";
/************************************
 *************** Enums **************
 ************************************/
// export const Currency = (props) => <Prim {...props} />;
// Currency.move = () => <Currency>move</Currency>;
// Currency.item = () => <Currency>item</Currency>;
// export const AttributeType = (props) => <Prim {...props} />;
// AttributeType.speed = () => <AttributeType>speed</AttributeType>;
// AttributeType.handling = () => <AttributeType>handling</AttributeType>;

export const Currency = ({ type, ...props }) => (
  <Prim classname="currency" val={type} {...props} />
);

export const AttributeType = ({ type, ...props }) => (
  <Prim classname="attribute-type" val={type} {...props} />
);

export const AffectType = ({ type, ...props }) => (
  <Prim classname="affect-type" val={type} {...props} />
);

export const PredicateOpperator = ({ type, ...props }) => (
  <Prim classname="predicate-opperator" val={type} {...props} />
);

export const ItemTrigger = ({ type, ...props }) => (
  <Prim classname="item-trigger" val={type} {...props} />
);
