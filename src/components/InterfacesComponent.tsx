const InterfacesComponent = () => {
  interface User {
    name: string;
    id: number;
  }

  const Mike: User = {
    name: "Mike",
    id: 1,
  };

  return (
    <div>
      <p>Interface used to create object.</p>
      <p>{JSON.stringify(Mike)}</p>
    </div>
  );
};

export default InterfacesComponent;
