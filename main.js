// To get a element from html dom
function call(name) {
  return document.querySelector(name);
}

// To get elements from html dom
function callAll(name) {
  return document.querySelectorAll(name);
}

const addInputBtn = call("#add");
const calculateBtn = call("#calculate");
const addNewSection = call("#addNewSection");

// Credit Points
// Grade point * Credit Unit

addInputBtn.addEventListener("click", addNewInput);
calculateBtn.addEventListener("click", () => {
  const creditUnits = callAll("#creditUnit");

  let arr = [];

  creditUnits.forEach(creditUnit => {
    console.log(arr.push(creditUnit.value));
    console.log(arr);
  });

  let sum = arr.reduce((a, b) => {
    return Number(a) + Number(b);
  });

  let totalUnit = call("#totalUnit");

  totalUnit.innerHTML = sum;
});

addNewSection.addEventListener("click", addResultSection);

function addNewInput() {
  const tbody = call("#tbody");
  const addInput = call("#numAdd").value;

  function addRow(num) {
    let str = `
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

let outputResult = `
<section class="first__section">
            <div class="first__section__heading">
              <h2>Semester</h2>
  
              <div>
                <label for="numAdd">Enter Number of courses to be added</label>
                <input type="num" name="numAdd" id="numAdd" value="6" />
              </div>
            </div>
  
            <form>
              <table class="table" id="table">
                <thead class="table__head">
                  <tr>
                    <th>Course Code</th>
                    <th>Credit Unit</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody class="table__body" id="tbody">
                  <tr>
                    <td>
                      <input type="text" name="courseCode" id="courseCode" />
                    </td>
                    <td>
                      <input type="text" name="creditUnit" id="creditUnit" />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="grade"
                        id="grade"
                        max-length="1"
                        pattern="[A]"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </section>
  
          <section class="second__section">
            <button id="add">Add</button>
            <button id="calculate">Calculate</button>
          </section>
  
          <section class="third__section">
            <div>
              <h3>Total Unit</h3>
              <p id="totalUnit">0</p>
            </div>
            <div>
              <h3>GPA</h3>
              <p>0</p>
            </div>
            <div>
              <h3>CGPA</h3>
              <p>0</p>
            </div>
          </section>
`;

function addResultSection() {
  let output = call(".overall-output");

  output.innerHTML += outputResult;
}
