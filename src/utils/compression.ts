import Worker from "./compression-worker.ts?worker&inline";

const createWorkerUtils = () => {
  // Create the worker
  const worker = new Worker();

  // Track pending operations
  const pendingOperations = new Map<
    string,
    {
      resolve: (value: string) => void;
      reject: (reason: unknown) => void;
    }
  >();

  // Listen for messages from the worker
  worker.addEventListener("message", (event) => {
    const { id, result, error } = event.data;
    const operation = pendingOperations.get(id);

    if (operation) {
      if (error) {
        operation.reject(new Error(error));
      } else {
        operation.resolve(result);
      }
      pendingOperations.delete(id);
    }
  });

  // Send a message to the worker and return a promise
  const sendToWorker = (type: "compress" | "decompress", data: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const id = crypto.randomUUID();
      pendingOperations.set(id, { resolve, reject });
      worker.postMessage({ type, data, id });
    });
  };

  // Clean up the worker
  const terminate = () => {
    worker.terminate();
    pendingOperations.clear();
  };

  return {
    compressString: (str: string) => sendToWorker("compress", str),
    decompressString: (str: string) => sendToWorker("decompress", str),
    terminate,
  };
};

// Export the utility functions
export const { compressString, decompressString, terminate: terminateCompressionWorker } = createWorkerUtils();
