const TypeAliasComponent = () => {
  //   let pet: "cat";

  //   //Doesn't Work
  //   //   pet = "dog";
  //   pet = "cat";

  let pet: "cat" | "dog";

  //   //Doesn't Work
  //   pet = "horse";
  pet = "cat";

  return <div>{pet}</div>;
};

export default TypeAliasComponent;
