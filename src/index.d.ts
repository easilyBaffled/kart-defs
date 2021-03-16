/************************************
 *************** Enums **************
 ************************************/
export declare enum Currency {
  move = 0,
  item = 1
}
export declare enum AttributeType {
  speed = 0,
  handling = 1
}
/************************************
 ************* Primative ************
 ************************************/
export interface Requirement {
  speed?: number;
  handling?: number;
  meta: {
    track?: string;
  };
}
export interface Affect {
  targetAttribute?: AttributeType;
  affect: "noop" | "add" | "reduce";
  value: number;
  time?: number;
}
export interface Predicate {
  predicateOpperator: "<" | ">" | "===";
  value: number;
}
/************************************
 *************** Parts **************
 ************************************/
export interface Reward {
  affect: Affect;
  currency: Currency;
}
export interface Consiquence {
  predicate: Predicate;
  consiquence: Reward;
}
export interface Level {
  cost: number;
  attributeModifier: Affect;
  affectModifier: Affect;
}
export interface Attribute {
  type: AttributeType;
  affect: Affect;
  currentValue: number;
  maxValue: number;
  tempAffect: {
    time: number;
    affect: Affect;
  };
}
/************************************
 *************** Cards **************
 ************************************/
export interface Segment {
  requirements: Requirement;
  consiquences: Consiquence[];
}
export interface Kart {
  meta: string;
  attributes: {
    [key: string]: Attribute;
  };
  power: Attribute;
}
export interface Item {
  type: string;
  attributes: {
    [key: string]: Attribute;
  };
  affect: {
    trigger: "immediate.self" | "countdown" | "collision";
    affects: Affect[];
  };
  level: {
    currentLevel: number;
    levels: Level[];
  };
}
