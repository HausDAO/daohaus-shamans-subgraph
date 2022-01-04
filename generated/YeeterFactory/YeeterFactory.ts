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

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlatformFeeUpdate extends ethereum.Event {
  get params(): PlatformFeeUpdate__Params {
    return new PlatformFeeUpdate__Params(this);
  }
}

export class PlatformFeeUpdate__Params {
  _event: PlatformFeeUpdate;

  constructor(event: PlatformFeeUpdate) {
    this._event = event;
  }

  get platformFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lootPerUnit(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SummonYeetComplete extends ethereum.Event {
  get params(): SummonYeetComplete__Params {
    return new SummonYeetComplete__Params(this);
  }
}

export class SummonYeetComplete__Params {
  _event: SummonYeetComplete;

  constructor(event: SummonYeetComplete) {
    this._event = event;
  }

  get moloch(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get yeeter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wrapper(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get maxTarget(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get raiseEndTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get raiseStartTime(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get maxUnits(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get pricePerUnit(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get details(): string {
    return this._event.parameters[8].value.toString();
  }
}

export class YeeterFactory extends ethereum.SmartContract {
  static bind(address: Address): YeeterFactory {
    return new YeeterFactory("YeeterFactory", address);
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

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
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

  summonYeet(
    _moloch: Address,
    _wrapper: Address,
    _maxTarget: BigInt,
    _raiseEndTime: BigInt,
    _raiseStartTime: BigInt,
    _maxUnits: BigInt,
    _pricePerUnit: BigInt,
    _details: string
  ): Address {
    let result = super.call(
      "summonYeet",
      "summonYeet(address,address,uint256,uint256,uint256,uint256,uint256,string):(address)",
      [
        ethereum.Value.fromAddress(_moloch),
        ethereum.Value.fromAddress(_wrapper),
        ethereum.Value.fromUnsignedBigInt(_maxTarget),
        ethereum.Value.fromUnsignedBigInt(_raiseEndTime),
        ethereum.Value.fromUnsignedBigInt(_raiseStartTime),
        ethereum.Value.fromUnsignedBigInt(_maxUnits),
        ethereum.Value.fromUnsignedBigInt(_pricePerUnit),
        ethereum.Value.fromString(_details)
      ]
    );

    return result[0].toAddress();
  }

  try_summonYeet(
    _moloch: Address,
    _wrapper: Address,
    _maxTarget: BigInt,
    _raiseEndTime: BigInt,
    _raiseStartTime: BigInt,
    _maxUnits: BigInt,
    _pricePerUnit: BigInt,
    _details: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "summonYeet",
      "summonYeet(address,address,uint256,uint256,uint256,uint256,uint256,string):(address)",
      [
        ethereum.Value.fromAddress(_moloch),
        ethereum.Value.fromAddress(_wrapper),
        ethereum.Value.fromUnsignedBigInt(_maxTarget),
        ethereum.Value.fromUnsignedBigInt(_raiseEndTime),
        ethereum.Value.fromUnsignedBigInt(_raiseStartTime),
        ethereum.Value.fromUnsignedBigInt(_maxUnits),
        ethereum.Value.fromUnsignedBigInt(_pricePerUnit),
        ethereum.Value.fromString(_details)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  template(): Address {
    let result = super.call("template", "template():(address)", []);

    return result[0].toAddress();
  }

  try_template(): ethereum.CallResult<Address> {
    let result = super.tryCall("template", "template():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  yeetIdx(): BigInt {
    let result = super.call("yeetIdx", "yeetIdx():(uint256)", []);

    return result[0].toBigInt();
  }

  try_yeetIdx(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("yeetIdx", "yeetIdx():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  yeeters(param0: BigInt): Address {
    let result = super.call("yeeters", "yeeters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_yeeters(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("yeeters", "yeeters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetConfigCall extends ethereum.Call {
  get inputs(): SetConfigCall__Inputs {
    return new SetConfigCall__Inputs(this);
  }

  get outputs(): SetConfigCall__Outputs {
    return new SetConfigCall__Outputs(this);
  }
}

export class SetConfigCall__Inputs {
  _call: SetConfigCall;

  constructor(call: SetConfigCall) {
    this._call = call;
  }

  get _platformFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _lootPerUnit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetConfigCall__Outputs {
  _call: SetConfigCall;

  constructor(call: SetConfigCall) {
    this._call = call;
  }
}

export class SummonYeetCall extends ethereum.Call {
  get inputs(): SummonYeetCall__Inputs {
    return new SummonYeetCall__Inputs(this);
  }

  get outputs(): SummonYeetCall__Outputs {
    return new SummonYeetCall__Outputs(this);
  }
}

export class SummonYeetCall__Inputs {
  _call: SummonYeetCall;

  constructor(call: SummonYeetCall) {
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

  get _details(): string {
    return this._call.inputValues[7].value.toString();
  }
}

export class SummonYeetCall__Outputs {
  _call: SummonYeetCall;

  constructor(call: SummonYeetCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
