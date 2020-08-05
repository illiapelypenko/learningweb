// The word "immediately" will be used frequently in this chapter, generally to refer to some Promise resolution action. However, in essentially all cases, "immediately" means in terms of the Job queue behavior (see Chapter 1), not in the strictly synchronous now sense.

// once a Promise is resolved, it stays that way forever -- it becomes an immutable value at that point -- and can then be observed as many times as necessary

// promise is an object, that has state (pending, fulfilled, rejected)

new Promise(function (resolve, reject) {
  // Use `resolve` to resolve `p`.
  // Use `reject` to reject `p`.
});