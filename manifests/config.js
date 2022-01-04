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
    dataSources: [],
    templates: [],
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
