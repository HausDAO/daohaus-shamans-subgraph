import {
  SummonYeetComplete,
  PlatformFeeUpdate,
} from "../generated/YeeterFactory/YeeterFactory";
import { Shaman, YeeterConfig, YeeterPlatform } from "../generated/schema";
import { YeeterTemplate } from "../generated/templates";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { addToken } from "./helpers";
// import { addTransaction } from "./helpers";

//  event SummonYeetComplete(
//   address indexed moloch,
//   address yeeter,
//   address wrapper,
//   uint256 maxTarget,
//   uint256 raiseEndTime,
//   uint256 raiseStartTime,
//   uint256 maxUnits,
//   uint256 pricePerUnit,
//   string details
// );

// TODO: track the platform fee and loot per unit
export function handleSummonYeeter(event: SummonYeetComplete): void {
  let yeeterPlatformId = "yeeter-platform-v1";
  let yeeterPlatform = YeeterPlatform.load(yeeterPlatformId);
  if (yeeterPlatform == null) {
    yeeterPlatform = new YeeterPlatform(yeeterPlatformId);
  }
  yeeterPlatform.platformFee = BigInt.fromI32(3);
  yeeterPlatform.lootPerUnit = BigInt.fromI32(100);
  yeeterPlatform.save();

  let shamanId = event.params.yeeter.toHex();
  YeeterTemplate.create(event.params.yeeter);

  let shaman = new Shaman(shamanId);

  shaman.createdAt = event.block.timestamp.toString();
  shaman.shamanAddress = event.params.yeeter;
  shaman.molochAddress = event.params.moloch;
  shaman.molochVersion = "2";
  shaman.enabled = false;
  shaman.details = event.params.details;
  shaman.shamanType = "yeeter";

  addToken(event.params.wrapper);

  let configId = shamanId.concat("-config");
  let config = new YeeterConfig(configId);
  config.createdAt = event.block.timestamp.toString();
  config.shamanAddress = event.params.yeeter;
  config.shaman = shamanId;
  config.molochAddress = event.params.moloch;
  config.raiseEndTime = event.params.raiseEndTime;
  config.raiseStartTime = event.params.raiseStartTime;
  config.maxUnits = event.params.maxUnits;
  config.maxTarget = event.params.maxTarget;
  config.pricePerUnit = event.params.pricePerUnit;
  config.token = event.params.wrapper.toHex();
  config.erc20Only = false;

  shaman.save();
  config.save();
}

// PlatformFeeUpdate(uint256 platformFee, uint256 lootPerUnit)
export function handlePlatformFeeUpdate(event: PlatformFeeUpdate): void {
  let yeeterPlatformId = "yeeter-platform-v1";
  let yeeterPlatform = YeeterPlatform.load(yeeterPlatformId);
  if (yeeterPlatform == null) {
    return;
  }
  yeeterPlatform.platformFee = event.params.platformFee;
  yeeterPlatform.lootPerUnit = event.params.lootPerUnit;
  yeeterPlatform.save();
}
