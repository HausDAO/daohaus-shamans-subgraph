module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
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
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x378472D32Bc8c2D55CF9E8F962F867e94d752ADa",
        startBlock: 9901675,
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
