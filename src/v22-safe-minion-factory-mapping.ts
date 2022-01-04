import { SummonComplete } from "../generated/V22AndSafeMinionFactory/V22AndSafeMinionFactory";
import { Shaman, MinionSafeConfig } from "../generated/schema";
// import { addTransaction } from "./helpers";

// event SummonComplete(
//     address summoner,
//     address indexed moloch,
//     address minion,
//     address avatar,
//     string details
// );
export function handleSummonComplete(event: SummonComplete): void {
  // let molochId = event.params.moloch.toHexString();
  // let shamanId = molochId
  //   .concat("-shaman-")
  //   .concat(event.params.minion.toHex());
  let shamanId = event.params.minion.toHex();
  let shaman = new Shaman(shamanId);

  shaman.createdAt = event.block.timestamp.toString();
  shaman.shamanAddress = event.params.minion;
  shaman.molochAddress = event.params.moloch;
  shaman.details = event.params.details;
  shaman.shamanType = "safe minion";
  shaman.details = event.params.details;

  let configId = shamanId.concat("-config");
  let config = new MinionSafeConfig(configId);
  config.createdAt = event.block.timestamp.toString();
  config.shamanAddress = event.params.minion;
  config.shaman = shamanId;
  config.molochAddress = event.params.moloch;
  config.safeAddress = event.params.avatar;

  shaman.save();
  config.save();

  //   addTransaction(event.block, event.transaction);
}
