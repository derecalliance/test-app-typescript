import React, { useEffect } from 'react';
import { DeRecShare, DeRecSharerStatus, SecretId, DeRecIdentity } from '@derecalliance/lib-typescript';

const TestComponent: React.FC = () => {
    useEffect(() => {
        const createIdentity = async () => {
            try {
                // Ensure DeRecSharerStatus receives a DeRecIdentity
                const mockIdentity = await DeRecIdentity.create(
                    "John Doe",               // name
                    "john.doe@example.com",    // contact
                    "someAddress",             // address (can be null if no address)
                    123,                       // publicEncryptionKeyId
                    "base64EncodedPublicKey",  // publicEncryptionKey (replace with actual base64 string)
                    "base64EncodedSigKey"     // publicSignatureKey (optional, can be null)
                ); // Ensure this is correctly instantiated
                const mockSharerStatus = new DeRecSharerStatus(mockIdentity);

                // Convert string to Uint8Array for SecretId
                const secretString = "dummy-secret-id";
                const secretBytes = new TextEncoder().encode(secretString);
                const mockSecretId = new SecretId(secretBytes);

                const versionNumbers = [1, 2, 3];

                // Instantiate DeRecShare correctly
                const deRecShareInstance = new DeRecShare(mockSharerStatus, mockSecretId, versionNumbers);

                // Log outputs
                console.log("Sharer Status:", deRecShareInstance.getSharer());
                console.log("Secret ID:", deRecShareInstance.getSecretId());
                console.log("Versions:", deRecShareInstance.getVersions());
                console.log("Remove status (before):", deRecShareInstance.remove());
                console.log("Remove status (after):", deRecShareInstance.remove()); // Should return false now

            } catch (error) {
                console.error("Error initializing DeRecShare:", error);
            }
        };

        createIdentity();
    }, []);

    return <div>Check the console for DeRecShare test results.</div>;
};

export default TestComponent;

