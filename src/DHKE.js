import { ethers } from "ethers";

async function run() {
  // Generate keys for Alice
  const alice = new ethers.utils.solidityKeccak256(
    ["uint"],
    [Math.floor(Math.random() * 100000)]
  );
  const alicePubKey = ethers.utils.hexlify(alice);
  console.log("Alice public key:", alicePubKey);

  // Generate keys for Bob
  const bob = new ethers.utils.solidityKeccak256(
    ["uint"],
    [Math.floor(Math.random() * 100000)]
  );
  const bobPubKey = ethers.utils.hexlify(bob);
  console.log("Bob public key:", bobPubKey);

  // Now exchange the public keys (e.g. through Internet)

  // Alice calculates shared key
  const aliceSharedKey = ethers.utils.solidityKeccak256(
    ["uint", "uint"],
    [alice, bobPubKey]
  );
  console.log("Alice shared key:", aliceSharedKey);

  // Bob calculates shared key
  const bobSharedKey = ethers.utils.solidityKeccak256(
    ["uint", "uint"],
    [bob, alicePubKey]
  );
  console.log("Bob shared key:", bobSharedKey);

  // Check if shared keys are equal
  console.log("Equal shared keys:", aliceSharedKey === bobSharedKey);
}

run();
