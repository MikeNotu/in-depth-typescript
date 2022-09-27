const FunctionsComponent = () => {
  let greet: Function;

  //   Won't Work
  //   greet = 123;

  greet = () => {
    alert("Hello!");
  };

  const greet2 = (name: string, age: number) => {
    alert(`Hello ${name}, your age is: ${age}`);
  };

  const sum = (a: number, b: number): number => {
    // return "This won't work";
    return a + b;
  };

  const VoidFunction = (): void => {
    alert("This function requires the return to be void");
  };

  return (
    <div>
      <button
        onClick={() => {
          greet();
        }}
      >
        Greet
      </button>
      <button
        onClick={() => {
          greet2("Mike", 24);
        }}
      >
        Greet to Mike, 24 year old, by using parameters that require a specific
        type.
      </button>

      <button
        onClick={() => {
          alert(sum(2, 3));
        }}
      >
        2 + 3 Sum, by using parameters that require a specific type and a
        specific return type.
      </button>
      <button
        onClick={() => {
          alert(VoidFunction());
        }}
      >
        This function requires the return to be void.
      </button>
    </div>
  );
};

export default FunctionsComponent;
