import { Address, Bytes, log } from "@graphprotocol/graph-ts";
import { ERC20 } from "../generated/YeeterFactory/ERC20";
import { Token } from "../generated/schema";
// import { MolochTransaction } from "../generated/schema";

// export function addTransaction(
//   block: ethereum.Block,
//   tx: ethereum.Transaction
// ): void {
//   let transaction = new MolochTransaction(tx.hash.toHex());
//   transaction.createdAt = block.timestamp.toString();
//   transaction.save();
// }

export function addToken(tokenAddress: Bytes): void {
  let token = Token.load(tokenAddress.toHex());
  if (!token) {
    token = new Token(tokenAddress.toHex());
    const tokenInstance = ERC20.bind(Address.fromString(tokenAddress.toHex()));
    log.debug("Looking for ERC20 -> {}", [tokenAddress.toHex()]);
    const nameRs = tokenInstance.try_name();
    if (nameRs.reverted) {
      token.name = tokenAddress.toHex();
    } else {
      token.name = nameRs.value;
    }
    const symbolRs = tokenInstance.try_symbol();
    if (symbolRs.reverted) {
      token.symbol = 'UNKNOWN';
    } else {
      token.symbol = symbolRs.value;
    }
    token.save();
  }
}