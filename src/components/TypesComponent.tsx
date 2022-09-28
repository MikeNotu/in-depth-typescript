const TypesComponent = () => {
  type StringOrNum = string | number;

  const logDetails = (uid: StringOrNum) => {
    alert(`The user: ${uid} says hello.`);
  };

  return (
    <div>
      <button
        onClick={() => {
          logDetails(123);
        }}
      >
        Type string or number as number
      </button>
      <button
        onClick={() => {
          logDetails("321");
        }}
      >
        Type string or number as string
      </button>
    </div>
  );
};

export default TypesComponent;
