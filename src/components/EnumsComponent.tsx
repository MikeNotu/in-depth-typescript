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

  return (
    <div>
      <p>{`${JSON.stringify(FirstPrices)}`}</p>
      <p>{`${FirstPrices[0]} ${FirstPrices[1]} ${FirstPrices[2]}`}</p>
      <p>{`${FirstPrices.applePrice} ${FirstPrices.bananaPrice} ${FirstPrices.peachPrice}`}</p>
      <p>{`${SecondPrices.applePrice} ${SecondPrices.bananaPrice} ${SecondPrices.peachPrice}`}</p>
      <p>{`${ThirdPrices.applePrice} ${ThirdPrices.bananaPrice} ${ThirdPrices.peachPrice}`}</p>
      <p>{`${FourthPrices.applePrice} ${FourthPrices.bananaPrice} ${FourthPrices.peachPrice}`}</p>
      <p>{`${FifthPrices.applePrice} ${FifthPrices.bananaPrice} ${FifthPrices.peachPrice}`}</p>
    </div>
  );
};

export default EnumsComponent;
