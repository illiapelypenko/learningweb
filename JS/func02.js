// A closure does not merely pass the value of a variable or even a reference to the variable.
// A closure captures the variable itself!

/*
  handleClick = () => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          const { slides, currentSlide } = this.state;
          console.log(this);
          if (currentSlide < slides.length - 1) {
            this.setState(state => ({
              currentSlide: state.currentSlide + 1
            }));
          } else {
            this.setState({ currentSlide: 0 });
          }
        }, 1000);
      }, 1000);
    }, 1000);
  };
*/

// The reason for this is because the setTimeout function creates a function (the closure)
// that has access to its outer scope

let name = "tom";
function foo() {
  console.log(name);
}
function bar() {
  let name = "jack";
  foo();
}

bar();
