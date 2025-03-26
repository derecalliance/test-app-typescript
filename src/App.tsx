// App.tsx
import React, { useEffect, useState } from 'react';
import { DeRecShare } from '@derecalliance/lib-typescript/dist/DeRecShare.js'; // Import DeRecShare

const App: React.FC = () => {
  // State to store the result from DeRecShare
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const testDeRecShare = async () => {
      try {
        // Initialize DeRecShare or call a method from it
        const deRecShareInstance = new DeRecShare();

        // Call a method from DeRecShare (adjust this according to actual methods available)
        // Example: const response = await deRecShareInstance.someMethod();
        const response = await deRecShareInstance.someMethod(); // Replace with actual method name

        // Log the result or set it in the state
        console.log('DeRecShare Response:', response);
        setResult(response); // Store the response in state
      } catch (error) {
        console.error("Error with DeRecShare:", error);
      }
    };

    // Call the function on component mount
    testDeRecShare();
  }, []); // Empty dependency array to run on component mount

  return (
    <div>
      <h1>Test DeRecShare</h1>
      <p>Result: {result ? JSON.stringify(result) : 'Loading...'}</p>
    </div>
  );
};

export default App;
