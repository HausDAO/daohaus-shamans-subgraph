module.exports.config = {
  mainnet: {
    dataSources: [
      {
        name: "v22AndSafeMinion",
        template: "v22AndSafeMinion-ds.yaml",
        address: "0x96f9D443Bd71146fF15310a7748d61C8FF72D5C3",
        startBlock: 14062801,
      },
      {
        name: "v22AndSafeMinionv2",
        template: "v22AndSafeMinionv2-ds.yaml",
        address: "0xBc2696ff8a3c7bc2E5C0c6Ea5A0cA0c5D36cE39a",
        startBlock: 14141164,
      },
      {
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x3b603BF5DaFF47F174cA3Fd2d2f8d690A720b59F",
        startBlock: 14062860,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
    ],
  },
  "arbitrum-one": {
    dataSources: [],
    templates: [],
  },
  celo: {
    dataSources: [],
    templates: [],
  },
  kovan: {
    dataSources: [],
    templates: [],
  },
  xdai: {
    dataSources: [
      {
        name: "v22AndSafeMinion",
        template: "v22AndSafeMinion-ds.yaml",
        address: "0xb30c2F83c027667C66A2CdFE0D3ba4Ba6B834F04",
        startBlock: 19988137,
      },
      {
        name: "v22AndSafeMinionv2",
        template: "v22AndSafeMinionv2-ds.yaml",
        address: "0xd06b40B5030D8d46645FaceE1fA31C9F9A83F567",
        startBlock: 20468085,
      },
      {
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x398e3a9c53C30Cac5B1ce9cfAbbE011338703686",
        startBlock: 19988177,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
    ],
  },
  rinkeby: {
    dataSources: [
      {
        name: "v22AndSafeMinion",
        template: "v22AndSafeMinion-ds.yaml",
        address: "0xf734feCA5A2441103E6a8B4Ae9172Dfe92cA145a",
        startBlock: 9901609,
      },
      {
        name: "v22AndSafeMinionv2",
        template: "v22AndSafeMinionv2-ds.yaml",
        address: "0x61f71A402779108f25aD4B369Dd217d3F008B458",
        startBlock: 10101432,
      },
      {
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x378472D32Bc8c2D55CF9E8F962F867e94d752ADa",
        startBlock: 9901675,
      },
      {
        name: "YeeterERC20Factory",
        template: "yeeterERC20Factory-ds.yaml",
        address: "0x1F6Ee7bcdE638Fb758310cCDF542081B65BE6e78",
        startBlock: 10344176,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
    ],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
};
