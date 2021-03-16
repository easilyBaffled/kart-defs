import "./styles.scss";
import { Segment } from "./Cards";

// export interface Segment {
//   requirements: Requirement;
//   consiquences: Consiquence[];
// }
//
// export interface Requirement {
//   speed?: number;
//   handling?: number;
//   meta: {
//     track?: string;
//   };
// }
//
// export interface Consiquence {
//   predicate: Predicate;
//   consiquence: Reward;
// }
//
// export interface Predicate {
//   predicateOpperator: "<" | ">" | "===";
//   value: number;
// }
//
// export interface Reward {
//   affect: Affect;
//   currency: Currency;
// }
//
// export interface Affect {
//   targetAttribute?: AttributeType;
//   affect: "noop" | "add" | "reduce";
//   value: number;
//   time?: number;
// }
//
// export declare enum Currency {
//   move = 0,
//   item = 1
// }
//
// export declare enum AttributeType {
//   speed = 0,
//   handling = 1
// }
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
