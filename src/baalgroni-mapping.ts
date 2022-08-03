import { log } from "@graphprotocol/graph-ts";
import {
  Bind,
  Unbind,
  Transfer,
} from "../generated/templates/BaalgroniTemplate/Baalgroni";
import { Shaman, OnboardNftToken } from "../generated/schema";

// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
export function handleTransfer(event: Transfer): void {
  let shamanId = event.address.toHexString();
  let shaman = Shaman.load(shamanId);
  if (shaman === null) {
    log.info("**** shaman null - shamanId: {}", [shamanId]);
    return;
  }

  let tokenId = shamanId
    .concat("-nftOnboarderToken-")
    .concat(event.params.tokenId.toString());

  let token = OnboardNftToken.load(tokenId);

  // might be better to check that the from is the zero address?
  if (token === null) {
    token = new OnboardNftToken(tokenId);
    token.shaman = shamanId;
    token.bound = false;
    token.tokenId = event.params.tokenId;
    token.owner = event.params.to;
  } else {
    token.owner = event.params.to;
  }

  token.save();
}

// event Bind(
//     address baalgroni,
//     uint256 tokedId
// );
export function handleBind(event: Bind): void {
  let shamanId = event.address.toHexString();
  let tokenId = shamanId
    .concat("-nftOnboarderToken-")
    .concat(event.params.tokedId.toString());

  let token = OnboardNftToken.load(tokenId);

  if (token === null) {
    log.info("**** token null - tokenId: {}", [tokenId]);
    return;
  }
  token.bound = true;

  token.save();
}

// event Unbind(
//     address baalgroni,
//     uint256 tokedId
// );
export function handleUnbind(event: Unbind): void {
  let shamanId = event.address.toHexString();
  let tokenId = shamanId
    .concat("-nftOnboarderToken-")
    .concat(event.params.tokedId.toString());

  let token = OnboardNftToken.load(tokenId);

  if (token === null) {
    log.info("**** token null - tokenId: {}", [tokenId]);
    return;
  }
  token.bound = false;

  token.save();
}
