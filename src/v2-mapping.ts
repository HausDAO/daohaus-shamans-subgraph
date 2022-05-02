import { SetShaman } from "../generated/templates/MolochV22Template/V22Moloch";
import { Shaman } from "../generated/schema";

// event SetShaman(address indexed shaman, bool isEnabled);
export function handleSetShaman(event: SetShaman): void {
  let shaman = Shaman.load(event.params.shaman.toHex());

  if (shaman == null) {
    return;
  }
  shaman.enabled = event.params.isEnabled;

  shaman.save();
}
