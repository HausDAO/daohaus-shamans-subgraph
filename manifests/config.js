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
        name: "v22AndSafeMinionv3",
        template: "v22AndSafeMinionv3-ds.yaml",
        address: "0x51498dDdd2A8cdeC82932E08A37eBaF346C38EFd",
        startBlock: 14932311,
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
      {
        name: "v22Template",
        template: "v22-template.yaml",
      },
    ],
  },
  "arbitrum-one": {
    dataSources: [
      {
        name: "v22AndSafeMinionv2",
        template: "v22AndSafeMinionv2-ds.yaml",
        address: "0x35453fBb522E53725c18FcB9901088d3D14009d5",
        startBlock: 14013468,
      },
      {
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x76095061f675F4CcD86094b8ac9018fD96a70Fa3",
        startBlock: 14015019,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
      {
        name: "v22Template",
        template: "v22-template.yaml",
      },
    ],
  },
  goerli: {
    dataSources: [
      {
        name: "v22AndSafeMinionv2",
        template: "v22AndSafeMinionv2-ds.yaml",
        address: "0x121931c0Bc458A5f13F3861444AeB036cc8a5363",
        startBlock: 7021833,
      },
      // {
      //   name: "YeeterFactory",
      //   template: "yeeterFactory-ds.yaml",
      //   address: "0x76095061f675F4CcD86094b8ac9018fD96a70Fa3",
      //   startBlock: 14015019,
      // },
      {
        name: "baalgroniFactory",
        template: "baalgroniFactory-ds.yaml",
        address: "0x073BD2CCA5B112A60cFA7C741ccD1307077c4d4D",
        startBlock: 7334468,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
      {
        name: "v22Template",
        template: "v22-template.yaml",
      },
      {
        name: "baalgroniTemplate",
        template: "baalgroni-template.yaml",
      },
    ],
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
        name: "v22AndSafeMinionv3",
        template: "v22AndSafeMinionv3-ds.yaml",
        address: "0x9D344863b7f13B1943FF0FE8D1D8323C0F6B6Bb8",
        startBlock: 22542957,
      },
      {
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0x398e3a9c53C30Cac5B1ce9cfAbbE011338703686",
        startBlock: 19988177,
      },
      {
        name: "YeeterERC20Factory",
        template: "yeeterERC20Factory-ds.yaml",
        address: "0x0F8E0f76Ad95C8135C1cEc77957C26e9532f321b",
        startBlock: 21247287,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
      {
        name: "v22Template",
        template: "v22-template.yaml",
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
        address: "0x388c4afd4a20762545A20a9C4F140B03F8D7a123",
        startBlock: 10371855,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
      {
        name: "v22Template",
        template: "v22-template.yaml",
      },
    ],
  },
  matic: {
    dataSources: [],
    templates: [],
  },
  optimism: {
    dataSources: [
      {
        name: "v22AndSafeMinionv2",
        template: "v22AndSafeMinionv2-ds.yaml",
        address: "0x8E7d5b1EB2d2d212574eF363168e5B2ba750b20e",
        startBlock: 10878859,
      },
      {
        name: "YeeterFactory",
        template: "yeeterFactory-ds.yaml",
        address: "0xbB907b1a769bD338c9d09Fb20C2997ECE5E715a3",
        startBlock: 10881342,
      },
    ],
    templates: [
      {
        name: "yeeterTemplate",
        template: "yeeter-template.yaml",
      },
      {
        name: "v22Template",
        template: "v22-template.yaml",
      },
    ],
  },
};
20468085;
