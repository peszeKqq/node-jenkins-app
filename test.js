const { add } = require("./app");

function runTests() {
  if (add(2, 3) !== 5) {
    throw new Error("Test failed: 2 + 3 should equal 5");
  }

  if (add(-1, 1) !== 0) {
    throw new Error("Test failed: -1 + 1 should equal 0");
  }

  console.log("All tests passed!");
}

runTests();
