const Sui = require("hw-app-sui").default;
const SpeculosTransport = require("@ledgerhq/hw-transport-node-speculos").default;

async function main() {
  const apduPort = 8000;
  const transport = await SpeculosTransport.open({ apduPort });
  const sui = new Sui(transport);

  //console.log("menu");
  //sui.menu();

  // console.log("getPublicKey");
  // const pk = await sui.getPublicKey("0");
  // console.log(pk);

  console.log("signTransaction");
  const result = await sui.signTransaction("0", "0123456789abcdef");
  console.log(result);

  process.exit()
}

main().catch(e => console.error(e));
