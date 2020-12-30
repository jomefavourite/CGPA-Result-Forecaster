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
const addNewSecBtn = call("#addNewSecBtn");
const addNewSecInp = call("#addNewSecInp");

// Credit Points
// Grade point * Credit Unit

addInputBtn.addEventListener("click", addNewInput);
calculateBtn.addEventListener("click", gpaResult);

addNewSecBtn.addEventListener("click", addResultSection);

function gpaResult() {
  const creditUnits = callAll("#creditUnit");
  const grades = callAll("#grade");
  let totalUnit = call("#totalUnit");
  let gpaValue = call("#gpaScore");

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
  gpaValue.innerHTML = (sumGPA / sumCredit).toFixed(2);
}

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

// let outputResult = `
// <section class="first__section">
//             <div class="first__section__heading">
//               <h2>Semester</h2>

//               <div>
//                 <label for="numAdd">Enter Number of courses to be added</label>
//                 <input type="num" name="numAdd" id="numAdd1" value="6" />
//               </div>
//             </div>

//             <form>
//               <table class="table" id="table1">
//                 <thead class="table__head">
//                   <tr>
//                     <th>Course Code</th>
//                     <th>Credit Unit</th>
//                     <th>Grade</th>
//                   </tr>
//                 </thead>
//                 <tbody class="table__body" id="tbody1">
//                   <tr>
//                     <td>
//                       <input type="text" name="courseCode" id="courseCode1" />
//                     </td>
//                     <td>
//                       <input type="text" name="creditUnit" id="creditUnit1" />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         name="grade"
//                         id="grade"
//                         max-length="1"
//                         pattern="[A]"
//                       />
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </form>
//           </section>

//           <section class="second__section">
//             <button id="add1">Add</button>
//             <button id="calculate1">Calculate</button>
//           </section>

//           <section class="third__section">
//             <div>
//               <h3>Total Unit</h3>
//               <p id="totalUnit1">0</p>
//             </div>
//             <div>
//               <h3>GPA</h3>
//               <p>0</p>
//             </div>
//             <div>
//               <h3>CGPA</h3>
//               <p>0</p>
//             </div>
//           </section>
// `;

let outputResult = `<h1>Hello</h1>`;

function addResultSection() {
  let addNewSecInp = call("#addNewSecInp").value;
  let output = call(".overall-output");

  function createSection(num) {
    return outputResult.repeat(num);
  }

  output.innerHTML += createSection(addNewSecInp);
}
