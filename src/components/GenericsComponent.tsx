const GenericsComponent: React.FC = () => {
  const last = <T,>(arr: T[]): T => {
    return arr[arr.length - 1];
  };

  const l = last([1, 2, 3]);
  //   const l = last<number>([1, 2, 3]);

  const l2 = last(["a", "b", "c"]);
  //   const l2 = last<string>(["a", "b", "c"]);

  const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
  };

  const v = makeArr(5, 6);
  const v2 = makeArr("a", "b");
  const v3 = makeArr<string | null, number>(null, 5);

  const makeFullName = (obj: { firstName: string; lastName: string }) => {
    return {
      ...obj,
      fullName: obj.firstName + " " + obj.lastName,
    };
  };

  const v4 = makeFullName({ firstName: "bob", lastName: "junior" });
  // This won't work
  //   const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });

  const makeFullNameGenerics = <
    T extends { firstName: string; lastName: string }
  >(
    obj: T
  ) => {
    return {
      ...obj,
      fullName: obj.firstName + " " + obj.lastName,
    };
  };

  const v5 = makeFullNameGenerics({
    firstName: "bob",
    lastName: "junior",
    age: 15,
  });

  interface Tab<T> {
    id: number;
    position: string;
    data: T;
  }

  type NumberTab = Tab<number>;
  type StringTab = Tab<string>;

  const obj1: NumberTab = {
    id: 1,
    position: "Dev",
    data: 121,
  };

  const obj2: StringTab = {
    id: 2,
    position: "FrontEnd",
    data: "SSr",
  };

  function raiseError(message: string): never {
    throw new Error(message);
  }

  return (
    <div>
      <p>Basic Generics use case.</p>
      <p>{l}</p>
      <p>{l2}</p>
      <br />
      <p>Multiple Generics.</p>
      <p>{v}</p>
      <p>{v2}</p>
      <p>{v3}</p>
      <br />
      <p>Objects must contain specific properties.</p>
      <p>{JSON.stringify(v4)}</p>
      <p>
        Objects must contain specific properties, but can have more properties.
      </p>
      <p>{JSON.stringify(v5)}</p>
      <br />
      <p>Creating different Types by reusing interface.</p>
      <p>{JSON.stringify(obj1)}</p>
      <p>{JSON.stringify(obj2)}</p>
      <p>Never Type.</p>
      <button
        onClick={() => {
          raiseError("This is an Error Example");
        }}
      >
        On Click, Throw an Error.
      </button>
    </div>
  );
};

export default GenericsComponent;
