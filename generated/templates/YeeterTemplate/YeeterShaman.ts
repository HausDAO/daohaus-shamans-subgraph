// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class YeetReceived extends ethereum.Event {
  get params(): YeetReceived__Params {
    return new YeetReceived__Params(this);
  }
}

export class YeetReceived__Params {
  _event: YeetReceived;

  constructor(event: YeetReceived) {
    this._event = event;
  }

  get contributorAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get moloch(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get lootToGive(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lootToPlatform(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class YeeterShaman extends ethereum.SmartContract {
  static bind(address: Address): YeeterShaman {
    return new YeeterShaman("YeeterShaman", address);
  }

  balance(): BigInt {
    let result = super.call("balance", "balance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_balance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balance", "balance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deposits(param0: Address): BigInt {
    let result = super.call("deposits", "deposits(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_deposits(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("deposits", "deposits(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  goalReached(): boolean {
    let result = super.call("goalReached", "goalReached():(bool)", []);

    return result[0].toBoolean();
  }

  try_goalReached(): ethereum.CallResult<boolean> {
    let result = super.tryCall("goalReached", "goalReached():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lootPerUnit(): BigInt {
    let result = super.call("lootPerUnit", "lootPerUnit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lootPerUnit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lootPerUnit", "lootPerUnit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxTarget(): BigInt {
    let result = super.call("maxTarget", "maxTarget():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxTarget(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxTarget", "maxTarget():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxUnitsPerAddr(): BigInt {
    let result = super.call(
      "maxUnitsPerAddr",
      "maxUnitsPerAddr():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxUnitsPerAddr(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxUnitsPerAddr",
      "maxUnitsPerAddr():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  moloch(): Address {
    let result = super.call("moloch", "moloch():(address)", []);

    return result[0].toAddress();
  }

  try_moloch(): ethereum.CallResult<Address> {
    let result = super.tryCall("moloch", "moloch():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  platformFee(): BigInt {
    let result = super.call("platformFee", "platformFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_platformFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("platformFee", "platformFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pricePerUnit(): BigInt {
    let result = super.call("pricePerUnit", "pricePerUnit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_pricePerUnit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pricePerUnit", "pricePerUnit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  raiseEndTime(): BigInt {
    let result = super.call("raiseEndTime", "raiseEndTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_raiseEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("raiseEndTime", "raiseEndTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  raiseStartTime(): BigInt {
    let result = super.call("raiseStartTime", "raiseStartTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_raiseStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "raiseStartTime",
      "raiseStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wrapper(): Address {
    let result = super.call("wrapper", "wrapper():(address)", []);

    return result[0].toAddress();
  }

  try_wrapper(): ethereum.CallResult<Address> {
    let result = super.tryCall("wrapper", "wrapper():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wrapper(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _maxTarget(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _raiseEndTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _raiseStartTime(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _maxUnits(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _pricePerUnit(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class InitTemplateCall extends ethereum.Call {
  get inputs(): InitTemplateCall__Inputs {
    return new InitTemplateCall__Inputs(this);
  }

  get outputs(): InitTemplateCall__Outputs {
    return new InitTemplateCall__Outputs(this);
  }
}

export class InitTemplateCall__Inputs {
  _call: InitTemplateCall;

  constructor(call: InitTemplateCall) {
    this._call = call;
  }
}

export class InitTemplateCall__Outputs {
  _call: InitTemplateCall;

  constructor(call: InitTemplateCall) {
    this._call = call;
  }
}

export class YeetyeetCall extends ethereum.Call {
  get inputs(): YeetyeetCall__Inputs {
    return new YeetyeetCall__Inputs(this);
  }

  get outputs(): YeetyeetCall__Outputs {
    return new YeetyeetCall__Outputs(this);
  }
}

export class YeetyeetCall__Inputs {
  _call: YeetyeetCall;

  constructor(call: YeetyeetCall) {
    this._call = call;
  }
}

export class YeetyeetCall__Outputs {
  _call: YeetyeetCall;

  constructor(call: YeetyeetCall) {
    this._call = call;
  }
}
