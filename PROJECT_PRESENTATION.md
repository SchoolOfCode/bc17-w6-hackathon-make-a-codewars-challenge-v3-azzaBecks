### Setup:

- Install Vitest 
- Update package.json to include a test script: "test": "vitest"

### Plan the kata:

- Develop a riddle-based challenge: "I'm tall when I'm young, and I'm short when I'm old. What am I?"
- Define the function: solveRiddle(answer) that returns true for (correct answer) and false otherwise

### Write the kata description in main.js:

- Include the riddle, function signature, and expected behavior
- Provide examples of correct and incorrect answers

### Implement the solveRiddle function in main.js:

export function solveRiddle(answer) {
  return answer === ' ';
}

### Write tests in main.test.js:

- Import necessary Vitest functions and the solveRiddle function
- Create test cases for correct and incorrect answers
- Ensure tests cover case insensitivity and whitespace handling

Run tests using npm test to verify the implementation

Remove the solution code from main.js, leaving only the function skeleton
