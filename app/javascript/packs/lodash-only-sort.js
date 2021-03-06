import "../src/globals";
import "../styles/style.css";
import _ from "lodash";

const form = document.getElementById("form");
const results = document.getElementById("results");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

form.addEventListener("submit", e => {
  e.preventDefault();
  const values = [
    input1.valueAsNumber,
    input2.valueAsNumber,
    input3.valueAsNumber
  ];
  const sortedValues = _.reverse(_.sortBy(values));

  results.innerHTML = `
    <h2>
      ${sortedValues}
    </h2>
  `;
});
