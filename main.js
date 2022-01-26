const Provenance = require("hw-app-hash").default;
const SpeculosTransport = require("@ledgerhq/hw-transport-node-speculos").default;

async function main() {
  const apduPort = 8000;
  const transport = await SpeculosTransport.open({ apduPort });
  const provenance = new Provenance(transport);

  //console.log("menu");
  //provenance.menu();

  // console.log("getPublicKey");
  // const pk = await provenance.getPublicKey("0");
  // console.log(pk);

  console.log("signTransaction");
  const result = await provenance.signTransaction("0", "0123456789abcdef");
  console.log(result);

  process.exit()
}

main().catch(e => console.error(e));
