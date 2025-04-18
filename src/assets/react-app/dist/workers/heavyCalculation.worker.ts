// hmmm
self.onmessage = function (event) {
  console.log("Worker: Message received from main script");
  const number = event.data;

  if (typeof number !== "number" || number < 0) {
    self.postMessage({
      error: "Invalid input: Please provide a non-negative number.",
    });
    return;
  }

  console.log(`Worker: Calculating factorial for ${number}`);
  // Simulate a heavy calculation (factorial)
  let result = 1;
  try {
    // Add a check to prevent excessively large numbers that might freeze the worker too
    if (number > 20) {
      // Factorial grows very rapidly
      throw new Error("Input number too large for demonstration (max 20).");
    }
    for (let i = 2; i <= number; i++) {
      result *= i;
      // Optional: Add a small delay to make it feel heavier
      // let start = Date.now(); while(Date.now() - start < 1);
    }
    console.log(`Worker: Calculation finished. Result: ${result}`);
    self.postMessage({ result: result });
  } catch (e) {
    console.error("Worker: Calculation error:", e.message);
    self.postMessage({
      error: e.message || "Calculation failed inside worker.",
    });
  }
};

console.log("Worker: Script loaded and ready.");

// Optional: Handle errors within the worker itself
self.onerror = function (event) {
  console.error("Worker: Uncaught error:", event);
  // Optionally post an error back to the main thread
  self.postMessage({ error: "An uncaught error occurred in the worker." });
};
