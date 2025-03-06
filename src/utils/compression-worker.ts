import * as LZString from "lz-string";

self.addEventListener("message", (event) => {
  const { type, data, id } = event.data;

  try {
    let result;

    if (type === "compress") {
      result = LZString.compressToUTF16(data);
    } else if (type === "decompress") {
      result = LZString.decompressFromUTF16(data);
    } else {
      throw new Error(`Unknown operation type: ${type}`);
    }

    self.postMessage({ id, result, error: null });
  } catch (error) {
    self.postMessage({
      id,
      result: null,
      error: error instanceof Error ? error.message : String(error),
    });
  }
});

export {};
