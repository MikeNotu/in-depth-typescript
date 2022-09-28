const GenericsComponent = () => {
  const last = <T,>(arr: T[]): T => {
    return arr[arr.length - 1];
  };

  const l = last([1, 2, 3]);
  //   const l = last<number>([1, 2, 3]);

  const l2 = last(["a", "b", "c"]);
  //   const l2 = last<string>(["a", "b", "c"]);

  return (
    <div>
      <p>{l}</p>
      <p>{l2}</p>
    </div>
  );
};

export default GenericsComponent;
