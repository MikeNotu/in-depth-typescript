const UnknownComponent = () => {
  function NewAlert(value: unknown) {
    if (typeof value == "number") {
      alert(value.toFixed(2));
    } else {
      alert(value);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          NewAlert(123.456);
          NewAlert("Hello World!");
        }}
      >
        Alert
      </button>
    </div>
  );
};

export default UnknownComponent;
