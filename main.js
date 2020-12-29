// To get a element from html dom
function call(name) {
  return document.querySelector(name);
}

// To get elements from html dom
function callAll(name) {
  return document.querySelectorAll(name);
}

const addInput = call("#add");
const calculate = call("#calculate");

// Credit Points
// Grade point * Credit Unit

addInput.addEventListener("click", addNewInput);
calculate.addEventListener("click", () => {
  const creditUnits = callAll("#creditUnit");

  let arr = [];

  creditUnits.forEach(creditUnit => {
    console.log(arr.push(creditUnit.value));
    console.log(arr);
  });

  let sum = arr.reduce((a, b) => {
    return Number(a) + Number(b);
  });

  let totallUnit = call("#totalUnit");

  totallUnit.innerHTML = sum;
});

function addNewInput() {
  const tbody = call("#tbody");
  tbody.innerHTML += `
    <tr>
      <td>
        <input type="text" name="courseCode" id="courseCode" />
      </td>
      <td>
        <input type="text" name="creditUnit" id="creditUnit" />
      </td>
      <td>
        <input type="text" name="grade" id="grade" />
      </td>
    </tr>
  `;
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
    case "F":
      return 0;
      break;
    default:
      return undefined;
  }
}
