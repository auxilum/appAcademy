const keepLogging = (message: string) => {
  while (true) {
    console.log(message);
  }
};

// kad imamo funkciju koja nikad ne vraca (kao u ovom slucaju infinite petlje) koristimo never
// razlika je void kad funkcija vraca bez vrijednosti (kad koristimo console.log)

type Status = "Pending" | "Working" | "Complete" | "Canceled";

function neverReached(never: never) {}

function doSomeAction(status: Status) {
  switch (status) {
    case "Pending":
      // some code
      break;
    case "Working":
      // some code
      break;
    case "Complete":
      // some code
      break;
    case "Canceled":
      // some code
      break;
    default:
      neverReached(status);
  }
}

doSomeAction("Pending");
