import {
  openTransportReplayer,
  RecordStore,
} from "@ledgerhq/hw-transport-mocker";
import Provenance from "../src/Provenance";

test("Provenance init", async () => {
  const transport = await openTransportReplayer(RecordStore.fromString(""));
  const pkt = new Provenance(transport);
  expect(pkt).not.toBe(undefined);
});
