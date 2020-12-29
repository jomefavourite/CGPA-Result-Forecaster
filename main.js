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
  const creditUnits = callAll("[name=creditUnit]");

  const selects = [];

  creditUnits.forEach(creditUnit => {
    return selects.push(creditUnit);
  });

  console.log(selects);
  console.log(selects[0][0]);

  console.log(creditUnits);

  // let option1 = "";
  // let option2 = "";
  // let a = [];
  // for (let i = 0; i < creditUnit.length; ++i) {
  //   option1 = creditUnit[i].options[creditUnit[i].selectedIndex].text;
  //   let totalUnit = document.querySelector("[name = totalUnit]").value;
  //   totalUnit = Number(totalUnit) + Number(option1);
  //   a.push(totalUnit);
  // }
  // let asum = a.reduce((partial_sum, a) => partial_sum + a, 0);

  // let creditUnitValue = "";
  // let arrCU = [];
  // creditUnits.forEach((creditUnit, i) => {
  //   creditUnitValue = creditUnit.options.innerHTML;

  //   // console.log(creditUnitValue);
  //   let totalUnit = Number(creditUnitValue);

  //   // console.log(totalUnit);
  // });
});

function addNewInput() {
  const tbody = call("#tbody");
  tbody.innerHTML += `
    <tr>
      <td><input type="text" name="courseCode" id="courseCode" /></td>
      <td>
        <select name="creditUnit">
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0" selected>0</option>
        </select>
      </td>
      <td>
        <select name="grade">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
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
