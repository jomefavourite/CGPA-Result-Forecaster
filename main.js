// To get a element from html dom
function call(name) {
  return document.querySelector(name);
}

// To get elements from html dom
function callAll(name) {
  return document.querySelectorAll(name);
}

const addInputBtn = call(".add");
const calculateBtn = call(".calculate");
const addNewSecBtn = call(".addNewSecBtn");
const addNewSecInp = call(".addNewSecInp");

addInputBtn.addEventListener("click", addNewInput);
calculateBtn.addEventListener("click", gpaResult);
addNewSecBtn.addEventListener("click", addResultSection);

function gpaResult() {
  const creditUnits = callAll(".creditUnit");
  const grades = callAll(".grade");
  let totalUnit = call(".totalUnit");
  let gpaValue = call(".gpaScore");
  let error = call(".error");

  let arrCredit = [];
  let arrGrade = [];

  creditUnits.forEach(creditUnit => {
    arrCredit.push(Number(creditUnit.value));
  });

  grades.forEach(grade => {
    arrGrade.push(gradeToPoints(grade.value));
  });

  let sumCredit = arrCredit.reduce((a, b) => {
    return a + b;
  });

  let sumGPA = arrGrade.reduce(function (r, a, i) {
    return r + a * arrCredit[i];
  }, 0);

  totalUnit.innerHTML = sumCredit;
  gpaValue.innerHTML =
    (sumGPA / sumCredit).toFixed(2) === "NaN"
      ? disErr()
      : (sumGPA / sumCredit).toFixed(2);

  function disErr() {
    setTimeout(() => {
      error.style.display = "block";
    }, 0);

    setTimeout(() => {
      error.style.display = "none";
    }, 5000);

    return 0;
  }
}

function addNewInput() {
  const tbody = call(".tbody");
  const addInput = call(".numAdd").value;

  function addRow(num) {
    let str = `
      <tr>
        <td>
          <input type="text" name="courseCode" class="courseCode" />
        </td>
        <td>
          <input type="text" name="creditUnit" class="creditUnit" />
        </td>
        <td>
          <input type="text" name="grade" class="grade" />
        </td>
      </tr>
    `;

    if (num === "") return str;
    return str.repeat(num);
  }

  tbody.innerHTML = addRow(addInput);
}

function gradeToPoints(grade) {
  switch (grade) {
    case "A":
      return 5;
      break;
    case "B":
      return 4;
      break;
    case "C":
      return 3;
      break;
    case "D":
      return 2;
      break;
    case "E":
      return 1;
      break;
    case "F":
      return 0;
      break;
    default:
      return undefined;
  }
}

let outputResult = document.createElement("h1");
outputResult.innerHTML = "hello";

function addResultSection() {
  let addNewSecInp = call(".addNewSecInp").value;
  let output = call(".overall-output");

  function createSection(num) {
    // return outputResult.repeat(num);
    return (outputResult.innerHTML = "hello");
  }

  output.innerHTML += createSection(addNewSecInp);
}
