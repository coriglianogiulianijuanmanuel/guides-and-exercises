"use strict";

// Note the memory requirements. Contexts take memory. In our case, raising to the power of n actually requires the memory for n contexts, for all lower values of n.

// A loop-based algorithm is more memory-saving:
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
// The iterative pow uses a single context changing i and result in the process. Its memory requirements are small, fixed and do not depend on n.
// Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.
// …But sometimes the rewrite is non-trivial, especially when function uses different recursive subcalls depending on conditions and merges their results or when the branching is more intricate. And the optimization may be unneeded and totally not worth the efforts.
// Recursion can give a shorter code, easier to understand and support. Optimizations are not required in every place, mostly we need a good code, that’s why it’s used.
