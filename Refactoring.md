# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. I removed the second if block and instead used a logical OR (||) to define candidate. This makes the code more concise and easier to read.
2. I moved the type check for candidate outside of the first if block, which simplifies the code and eliminates the need for a nested if block.
3. I replaced the second crypto.createHash() call with a return statement, which eliminates the need for an else block and simplifies the code.
4. I added a check to ensure that the function returns a string, which is required by the function signature.
5. I changed the order of the if statements to match the order of the conditions in which they will be evaluated, which can make the code easier to follow.
