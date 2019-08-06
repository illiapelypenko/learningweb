const user = {
  bar() {
    return () => console.log(this); // this is the niarest function's this
  }
};
user.bar()();
