const ArraysComponent = () => {
  let numbers = [0, 1, 2, 3];

  // WORKS
  // numbers.push(20);

  // Won't Work
  // numbers.push("hello");

  let mixed = [0, "hello", 2, 100];
  // WORKS
  // mixed.push(20);

  // WORKS
  // mixed.push("hello");

  // Won't Work
  // mixed.push(true);

  let mixedNew: (string | number)[] = [0, "hello", 2, 100];

  return (
    <div>
      <p>{JSON.stringify(numbers)}</p>
      <p>{JSON.stringify(mixed)}</p>
      <p>{JSON.stringify(mixedNew)}</p>
    </div>
  );
};

export default ArraysComponent;
