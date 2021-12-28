import { Deployment } from "../generated/TransmutationFactory/TransmutationFactory";
import { SummonTransmutation } from "../generated/TransmutationV2Factory/TransmutationV2Factory";

import { TransmutationTemplate } from "../generated/templates";
import { Transmutation } from "../generated/schema";
import { addTransaction } from "./transactions";

// emit Deployment(
//   _moloch,
//   _distributionToken,
//   minion,
//   transmutation,
//   trust
export function handleTransmutationDeployment(event: Deployment): void {
  let transmutation = Transmutation.load(event.params.transmutation.toHex());

  if (transmutation == null) {
    transmutation = new Transmutation(event.params.transmutation.toHex());
  }

  transmutation.moloch = event.params.moloch;
  transmutation.distributionToken = event.params.distributionToken;
  transmutation.minion = event.params.minion;
  transmutation.transmutation = event.params.transmutation;
  transmutation.trust = event.params.trust;

  transmutation.save();

  TransmutationTemplate.create(event.params.transmutation);

  addTransaction(event.block, event.transaction);
}

export function handleSummonTransmutation(event: SummonTransmutation): void {
  let transmutation = Transmutation.load(event.params.transmutation.toHex());

  if (transmutation == null) {
    transmutation = new Transmutation(event.params.transmutation.toHex());
  }

  transmutation.moloch = event.params.moloch;
  transmutation.distributionToken = event.params.distributionToken;
  transmutation.minion = event.params.owner;
  transmutation.transmutation = event.params.transmutation;
  transmutation.capitalToken = event.params.capitalToken;
  transmutation.details = event.params.details;

  transmutation.save();

  addTransaction(event.block, event.transaction);
}
