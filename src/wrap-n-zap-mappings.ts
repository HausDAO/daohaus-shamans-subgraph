import { NewWrapNZap } from "../generated/WrapNZapFactory/WrapNZapFactory";
import { WrapNZap } from "../generated/schema";
import { addTransaction } from "./transactions";

// event NewWrapNZap(address zappee, address wrapper, address WrapNZap);
export function handleNewWrapNZap(event: NewWrapNZap): void {
  let wrapperId = event.params.WrapNZap.toHexString();
  let wrapper = new WrapNZap(wrapperId);

  wrapper.moloch = event.params.zappee;
  wrapper.wrapper = event.params.wrapper;

  wrapper.save();

  addTransaction(event.block, event.transaction);
}
