const ObjectsComponent = () => {
  let Michael: object;

  Michael = {
    name: "Mike",
    age: 24,
  };

  interface Ifriends {
    name: string;
    age: number;
  }

  // const Friends: object[] = [
  const Friends: Ifriends[] = [
    { name: "Mike", age: 24 },
    { name: "Jeff", age: 23 },
    { name: "Samuel", age: 25 },
  ];

  return (
    <div>
      <p>{JSON.stringify(Michael)}</p>
      <p>{`Array of Objects Using this Interface: interface Ifriends {name: string; age: number;}`}</p>
      <p>{JSON.stringify(Friends)}</p>
    </div>
  );
};

export default ObjectsComponent;
