const InterfaceComponent = () => {
  interface User {
    name: string;
    id: number;
  }

  const Mike: User = {
    name: "Mike",
    id: 1,
  };

  return <div>{JSON.stringify(Mike)}</div>;
};

export default InterfaceComponent;
