import React, { useState } from "react";
import { DeRecHelperStatus } from '@derecalliance/lib-typescript/dist/DeRecHelperStatus.js';
import { DeRecIdentity } from '@derecalliance/lib-typescript/dist/DeRecIdentity.js';
import { DeRecVersion } from '@derecalliance/lib-typescript/dist/DeRecVersion.js';
import { PairingStatus } from '@derecalliance/lib-typescript/dist/PairingStatus.js';
import { SecretId } from '@derecalliance/lib-typescript/dist/SecretId.js';
import { DeRecSecret } from '@derecalliance/lib-typescript/dist/DeRecSecret.js';


function App() {
  const [secret, setSecret] = useState<DeRecSecret | null>(null);

  const createSecret = () => {
    // If SecretId is a string type, use type assertion:
    const secretId: SecretId = "test-id" as SecretId;  
    const newSecret = new DeRecSecret(secretId, "Test Secret", new Uint8Array([4, 5, 6]));

    console.log("Secret created:", newSecret);
    setSecret(newSecret);
  };

  return (
    <div>
      <h1>DeRec Secret Manager</h1>
      <button onClick={createSecret}>Create Secret</button>
      {secret && <p>Secret Created: {secret.getDescription()}</p>}
    </div>
  );
}

export default App;
