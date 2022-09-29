const UtilitytypesComponent = () => {
  // PARTIAL
  interface Starship {
    name: string;
    enableHyperjump: boolean;
  }

  let Starship2 = {};
  const updateStarship = (id: number, starship: Partial<Starship>) => {
    Starship2 = { id, starship };
  };

  updateStarship(1, { name: "Explorer" });

  // REQUIRED WORKS INVERSE TO PARTIAL

  // READONLY Makes it so the property can't be overwritten.

  const starships: Record<string, Starship> = {
    Explorer1: {
      name: "Explorer1",
      enableHyperjump: true,
    },
    Explorer2: {
      name: "Explorer2",
      enableHyperjump: false,
    },
  };

  type StarshipNameOnly = Pick<Starship, "name">;

  const NameOnly: StarshipNameOnly = {
    name: "My Ship",
  };

  // OMIT works the oposite way of PICK

  // EXCLUDE

  type ThreePosibilites = string | number | undefined;

  type TwoPosibilites = Exclude<ThreePosibilites, undefined>;

  let StringOrNumber: TwoPosibilites;

  StringOrNumber = 3;

  type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";

  let JohnsDrink: AvailableDrinks;
  JohnsDrink = "Coffee";

  type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
  let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
  JanesDrink = "Lemonade";

  return (
    <div>
      <p>PARTIAL</p>
      <p>{JSON.stringify(Starship2)}</p>
      <p>RECORD</p>
      <p>{JSON.stringify(starships)}</p>
      <button
        onClick={() => {
          for (const key in starships) {
            alert(JSON.stringify(starships[key]));
          }
        }}
      >
        Iterate
      </button>
      <p>PICK</p>
      <p>{JSON.stringify(NameOnly)}</p>
      <p>EXCLUDE</p>
      <p>{StringOrNumber}</p>
    </div>
  );
};

export default UtilitytypesComponent;
