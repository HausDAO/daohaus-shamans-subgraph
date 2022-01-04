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

export class SetupComplete extends ethereum.Event {
  get params(): SetupComplete__Params {
    return new SetupComplete__Params(this);
  }
}

export class SetupComplete__Params {
  _event: SetupComplete;

  constructor(event: SetupComplete) {
    this._event = event;
  }

  get moloch(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get shaman(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get extraShamans(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get summoners(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get summonerShares(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get summonerLoot(): Array<BigInt> {
    return this._event.parameters[5].value.toBigIntArray();
  }
}

export class SummonComplete extends ethereum.Event {
  get params(): SummonComplete__Params {
    return new SummonComplete__Params(this);
  }
}

export class SummonComplete__Params {
  _event: SummonComplete;

  constructor(event: SummonComplete) {
    this._event = event;
  }

  get summoner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get moloch(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get minion(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get avatar(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get details(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class V22AndSafeMinionFactory__daosResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: boolean;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }
}

export class V22AndSafeMinionFactory__summonDaoMinionAndSafeResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class V22AndSafeMinionFactory extends ethereum.SmartContract {
  static bind(address: Address): V22AndSafeMinionFactory {
    return new V22AndSafeMinionFactory("V22AndSafeMinionFactory", address);
  }

  daoIdx(): BigInt {
    let result = super.call("daoIdx", "daoIdx():(uint256)", []);

    return result[0].toBigInt();
  }

  try_daoIdx(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("daoIdx", "daoIdx():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  daoSummoner(): Address {
    let result = super.call("daoSummoner", "daoSummoner():(address)", []);

    return result[0].toAddress();
  }

  try_daoSummoner(): ethereum.CallResult<Address> {
    let result = super.tryCall("daoSummoner", "daoSummoner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  daos(param0: BigInt): V22AndSafeMinionFactory__daosResult {
    let result = super.call(
      "daos",
      "daos(uint256):(address,address,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new V22AndSafeMinionFactory__daosResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBoolean()
    );
  }

  try_daos(
    param0: BigInt
  ): ethereum.CallResult<V22AndSafeMinionFactory__daosResult> {
    let result = super.tryCall(
      "daos",
      "daos(uint256):(address,address,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new V22AndSafeMinionFactory__daosResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBoolean()
      )
    );
  }

  minionSummoner(): Address {
    let result = super.call("minionSummoner", "minionSummoner():(address)", []);

    return result[0].toAddress();
  }

  try_minionSummoner(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "minionSummoner",
      "minionSummoner():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  summonDaoMinionAndSafe(
    _saltNonce: BigInt,
    _periodDuration: BigInt,
    _votingPeriodLength: BigInt,
    _gracePeriodLength: BigInt,
    _approvedTokens: Array<Address>,
    details: string
  ): V22AndSafeMinionFactory__summonDaoMinionAndSafeResult {
    let result = super.call(
      "summonDaoMinionAndSafe",
      "summonDaoMinionAndSafe(uint256,uint256,uint256,uint256,address[],string):(address,address)",
      [
        ethereum.Value.fromUnsignedBigInt(_saltNonce),
        ethereum.Value.fromUnsignedBigInt(_periodDuration),
        ethereum.Value.fromUnsignedBigInt(_votingPeriodLength),
        ethereum.Value.fromUnsignedBigInt(_gracePeriodLength),
        ethereum.Value.fromAddressArray(_approvedTokens),
        ethereum.Value.fromString(details)
      ]
    );

    return new V22AndSafeMinionFactory__summonDaoMinionAndSafeResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_summonDaoMinionAndSafe(
    _saltNonce: BigInt,
    _periodDuration: BigInt,
    _votingPeriodLength: BigInt,
    _gracePeriodLength: BigInt,
    _approvedTokens: Array<Address>,
    details: string
  ): ethereum.CallResult<
    V22AndSafeMinionFactory__summonDaoMinionAndSafeResult
  > {
    let result = super.tryCall(
      "summonDaoMinionAndSafe",
      "summonDaoMinionAndSafe(uint256,uint256,uint256,uint256,address[],string):(address,address)",
      [
        ethereum.Value.fromUnsignedBigInt(_saltNonce),
        ethereum.Value.fromUnsignedBigInt(_periodDuration),
        ethereum.Value.fromUnsignedBigInt(_votingPeriodLength),
        ethereum.Value.fromUnsignedBigInt(_gracePeriodLength),
        ethereum.Value.fromAddressArray(_approvedTokens),
        ethereum.Value.fromString(details)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new V22AndSafeMinionFactory__summonDaoMinionAndSafeResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
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

  get _minionSummoner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _daoSummoner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetUpDaoMinionAndSafeCall extends ethereum.Call {
  get inputs(): SetUpDaoMinionAndSafeCall__Inputs {
    return new SetUpDaoMinionAndSafeCall__Inputs(this);
  }

  get outputs(): SetUpDaoMinionAndSafeCall__Outputs {
    return new SetUpDaoMinionAndSafeCall__Outputs(this);
  }
}

export class SetUpDaoMinionAndSafeCall__Inputs {
  _call: SetUpDaoMinionAndSafeCall;

  constructor(call: SetUpDaoMinionAndSafeCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _summoners(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _summonerShares(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _summonerLoot(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _shamans(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }
}

export class SetUpDaoMinionAndSafeCall__Outputs {
  _call: SetUpDaoMinionAndSafeCall;

  constructor(call: SetUpDaoMinionAndSafeCall) {
    this._call = call;
  }
}

export class SummonDaoMinionAndSafeCall extends ethereum.Call {
  get inputs(): SummonDaoMinionAndSafeCall__Inputs {
    return new SummonDaoMinionAndSafeCall__Inputs(this);
  }

  get outputs(): SummonDaoMinionAndSafeCall__Outputs {
    return new SummonDaoMinionAndSafeCall__Outputs(this);
  }
}

export class SummonDaoMinionAndSafeCall__Inputs {
  _call: SummonDaoMinionAndSafeCall;

  constructor(call: SummonDaoMinionAndSafeCall) {
    this._call = call;
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _periodDuration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _votingPeriodLength(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _gracePeriodLength(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _approvedTokens(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get details(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class SummonDaoMinionAndSafeCall__Outputs {
  _call: SummonDaoMinionAndSafeCall;

  constructor(call: SummonDaoMinionAndSafeCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get _minion(): Address {
    return this._call.outputValues[1].value.toAddress();
  }
}
