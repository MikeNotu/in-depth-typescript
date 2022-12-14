const EnumsComponent = () => {
  enum FirstPrices {
    applePrice,
    bananaPrice,
    peachPrice,
  }

  enum SecondPrices {
    applePrice = 4,
    bananaPrice,
    peachPrice,
  }

  const triplePrice = (price: number) => price * 3;

  enum ThirdPrices {
    applePrice = 10,
    bananaPrice = triplePrice(11),
    peachPrice = 5 * applePrice,
  }

  const enum FourthPrices {
    applePrice = 10,
    // This won't work
    // bananaPrice = triplePrice(11)
    bananaPrice = 11 * 3,
    peachPrice = 5 * applePrice,
  }

  const FifthPrices = {
    applePrice: 4,
    bananaPrice: 100,
    peachPrice: 12,
  } as const;

  // This Won't work because it's a read only property, because "as const" was added.
  // FifthPrices.applePrice = 100;

  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  const enum constDirection {
    Up,
    Down,
    Left,
    Right,
  }

  return (
    <div>
      <p>TypeScript compiles regular enum to JavaScript objects.</p>
      <p>Displaying Prices Enum</p>
      <p>{`${JSON.stringify(FirstPrices)}`}</p>
      <br />
      <p>Prices[0] Prices[1] Prices[2]</p>
      <p>{`${FirstPrices[0]} ${FirstPrices[1]} ${FirstPrices[2]}`}</p>
      <br />
      <p>Prices.applePrice Prices.bananaPrice Prices.peachPrice</p>
      <p>{`${FirstPrices.applePrice} ${FirstPrices.bananaPrice} ${FirstPrices.peachPrice}`}</p>
      <br />
      <p>applePrice = 4</p>
      <p>Prices.applePrice Prices.bananaPrice Prices.peachPrice </p>
      <p>{`${SecondPrices.applePrice} ${SecondPrices.bananaPrice} ${SecondPrices.peachPrice}`}</p>
      <br />
      <p>
        applePrice = 10, bananaPrice = triplePrice(11), peachPrice = 5 *
        applePrice
      </p>
      <p>Prices.applePrice Prices.bananaPrice Prices.peachPrice </p>
      <p>{`${ThirdPrices.applePrice} ${ThirdPrices.bananaPrice} ${ThirdPrices.peachPrice}`}</p>
      <br />
      <p>Const Enum</p>
      <p>
        Because there is no JavaScript object that associates with const enum is
        generated at run time, it is not possible to loop over the const enum
        values.
      </p>
      <p>{`${FourthPrices.applePrice} ${FourthPrices.bananaPrice} ${FourthPrices.peachPrice}`}</p>
      <br />
      <p>Object working as an Enum by using "as const"</p>
      <p>{`${FifthPrices.applePrice} ${FifthPrices.bananaPrice} ${FifthPrices.peachPrice}`}</p>
      <p>{`${JSON.stringify(Direction)}`}</p>

      {/* This won't work */}
      {/* <p>{`${JSON.stringify(constDirection)}`}</p> */}
      <p>
        Direction.Up and constDirection.Up work the same, displaying Direction
        would work and it would show an object but constDirection won't work.
      </p>
      <p>{`${JSON.stringify(Direction.Up)}`}</p>
      <p>{`${JSON.stringify(constDirection.Up)}`}</p>
    </div>
  );
};

export default EnumsComponent;
