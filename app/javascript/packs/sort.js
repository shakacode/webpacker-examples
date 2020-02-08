import "../styles/style.css";
import _ from "lodash";
import moment from "moment";

const sortApp = () => {
  const numberForm = document.getElementById("number-form");

  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const results = document.getElementById("results");

  numberForm.addEventListener("submit", e => {
    e.preventDefault();
    const values = [
      input1.valueAsNumber,
      input2.valueAsNumber,
      input3.valueAsNumber
    ];
    const sortedValues = _.sortBy(values);

    results.innerHTML = `
    <h2>
      ${sortedValues}
    </h2>
  `;
  });
};

const dateApp = () => {
  const inputDate = document.getElementById("inputDate");
  const resultsDate = document.getElementById("resultsDate");

  const dateForm = document.getElementById("date-form");
  dateForm.addEventListener("submit", e => {
    e.preventDefault();
    const dateString = inputDate.value;
    const dateObj = moment(dateString);
    const formatted = dateObj.format("LLL");
    resultsDate.innerHTML = `
      <h2>
        Formatted: ${formatted}
      </h2>
    `;
  });
};

const app = () => {
  sortApp();
  dateApp();
};

window.onload = app;
