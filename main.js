// To get elements from html dom
function call(name) {
  return document.querySelector(name);
}

const addInput = call("#add");
const calculate = call("#calculate");

const creditUnit = call("[name=creditUnit]");

console.log(creditUnit);

// Credit Points
// Grade point * Credit Unit

addInput.addEventListener("click", addNewInput);

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
