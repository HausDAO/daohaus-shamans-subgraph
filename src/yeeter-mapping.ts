import { YeetReceived } from "../generated/templates/YeeterTemplate/YeeterShaman";
import { Yeet, Shaman } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";
// import { addTransaction } from "./helpers";

// event YeetReceived(
//   address indexed contributorAddress,
//   uint256 amount,
//   address moloch,
//   uint256 lootToGive,
//   uint256 lootToPlatform
// );
export function handleYeetReceived(event: YeetReceived): void {
  let shamanId = event.address.toHexString();
  let shaman = Shaman.load(shamanId);
  log.info("**** recieved - contributorAddress: {}", [
    event.params.contributorAddress.toHex(),
  ]);

  if (shaman == null) {
    log.info("**** shaman null - shamanId: {}", [shamanId]);
    return;
  }

  let yeet = new Yeet(
    shamanId
      .concat("-yeet-")
      .concat(event.block.timestamp.toString())
      .concat(event.params.contributorAddress.toHex())
  );
  yeet.createdAt = event.block.timestamp.toString();
  yeet.shaman = shamanId;
  yeet.shamanAddress = event.address;
  yeet.molochAddress = event.params.moloch;
  yeet.contributorAddress = event.params.contributorAddress;
  yeet.amount = event.params.amount;
  yeet.lootToGive = event.params.lootToGive;
  yeet.lootToPlatform = event.params.lootToPlatform;
  yeet.transactionHash = event.transaction.hash;

  yeet.save();
}
