import { Deploy } from "../generated/templates/TransmutationTemplate/Transmutation";
import { Transmutation } from "../generated/schema";
import { addTransaction } from "./transactions";

// event Deploy(
//   address moloch,
//   address giveToken,
//   address getToken,
//   address owner
// );
export function handleDeploy(event: Deploy): void {
  let transmutation = Transmutation.load(event.address.toHex());
  transmutation.capitalToken = event.params.getToken;
  transmutation.save();

  addTransaction(event.block, event.transaction);
}
