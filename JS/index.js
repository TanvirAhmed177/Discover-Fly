function handleTicketCount(typeOfFlight, isIncrease) {
  const ticketCount = getInputValue(typeOfFlight);
  console.log(ticketCount);

  let totalCount = ticketCount;
  if (isIncrease == true) {
    totalCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    totalCount = ticketCount - 1;
  }
  document.getElementById(typeOfFlight + "Count").value = totalCount;

  calculateTotalCost();
}

function calculateTotalCost() {
  const firstClassTotal = getInputValue("firstClass");

  const economyClassTotal = getInputValue("economyClass");

  const totalCost = firstClassTotal * 150 + economyClassTotal * 100;
  document.getElementById("sub-total").innerText = "$" + totalCost;

  const vat = Math.round(totalCost * 0.1);
  document.getElementById("vat-amount").innerText = "$" + vat;

  const grandTotal = totalCost + vat;
  document.getElementById("grand-total").innerText = "$" + grandTotal;

  document.getElementById("confirmed-sub-total").innerText = "$" + totalCost;
  document.getElementById("confirmed-vat-amount").innerText = "$" + vat;
  document.getElementById("confirmed-grand-total").innerText = "$" + grandTotal;
  document.getElementById("confirmed-firstClass-total").innerText =
    firstClassTotal;
  document.getElementById("confirmed-economyClass-total").innerText =
    economyClassTotal;
}

function getInputValue(typeOfFlight) {
  console.log(typeOfFlight);
  const typeOfFlightInput = document.getElementById(typeOfFlight + "Count");
  const typeOfFlightCount = parseInt(typeOfFlightInput.value);
  return typeOfFlightCount;
}
