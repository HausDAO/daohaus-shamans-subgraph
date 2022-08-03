import { SummonBaalgroniComplete } from "../generated/BaalgroniFactory/BaalgroniFactory";
import { Shaman, NftOnboarderConfig } from "../generated/schema";
import { BaalgroniTemplate } from "../generated/templates";

// event SummonBaalgroniComplete(
//   address baalgroni,
//   address moloch,
//   address wrapper,
//   uint256 price,
//   uint256 cap,
//   uint256 lootPerUnit,
//   uint256 daoCut,
//   bytes initializationParams
// );

export function handleSummonBaalgroni(event: SummonBaalgroniComplete): void {
  BaalgroniTemplate.create(event.params.baalgroni);

  let shamanId = event.params.baalgroni.toHexString();
  let shaman = new Shaman(shamanId);

  shaman.createdAt = event.block.timestamp.toString();
  shaman.shamanAddress = event.params.baalgroni;
  shaman.molochAddress = event.params.moloch;
  shaman.molochVersion = "3";
  shaman.shamanType = "nftOnboarder";
  shaman.details = "NFT Onboarder";
  // how do we really know this? we'd need to listen to the baal to update later
  // and we might be able to predict this shaman address and summon a baal with it approved
  shaman.enabled = false;

  let configId = shamanId.concat("-config");
  let config = new NftOnboarderConfig(configId);

  config.createdAt = event.block.timestamp.toString();
  config.molochAddress = event.params.moloch;
  config.shamanAddress = event.params.baalgroni;
  config.shaman = shamanId;
  config.wrapperAddress = event.params.wrapper;
  config.cap = event.params.cap;
  config.price = event.params.price;
  config.lootPerUnit = event.params.lootPerUnit;
  config.daoCut = event.params.daoCut;
  config.initializationParams = event.params.initializationParams;

  shaman.save();
  config.save();
}
