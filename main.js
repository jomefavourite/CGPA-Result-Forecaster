// To get a element from html dom
function call(name) {
  return document.querySelector(name);
}

// To get elements from html dom
function callAll(name) {
  return document.querySelectorAll(name);
}

// let name = prompt("Enter your name");
// let years = prompt("How long is your program?");

// Selecting various elements from the DOM
const addInputBtn = call(".add");
const calculateBtn = call(".calculate");
const addNewSecBtn = call(".addNewSecBtn");
const addNewSecInp = call(".addNewSecInp");
const yesBtn = call(".yesBtn");
const noBtn = call(".noBtn");

// Making Elements have an event listener - click
addInputBtn.addEventListener("click", addNewInput);
calculateBtn.addEventListener("click", gpaResult);
document.addEventListener("keydown", e => {
  if (e.key === "Enter") addNewInput();
});
yesBtn.addEventListener("click", () => {
  const creditUnits = callAll(".creditUnit"); // Selecting all elements having the class name .creditUnit
  const grades = callAll(".grade");
  const courseCodeInputs = callAll(".courseCode");
  let totalUnit = call(".totalUnit");
  let gpaValue = call(".gpaScore");
  const semester = call(".semester");

  grades.forEach(grade => {
    grade.value = "";
  });
  creditUnits.forEach(creditUnit => {
    creditUnit.value = "";
  });
  courseCodeInputs.forEach(courseCodeInput => {
    courseCodeInput.value = "";
  });
  totalUnit.innerHTML = 0;
  gpaValue.innerHTML = 0;

  semester.innerHTML = count++;
});

var count = 2;

noBtn.addEventListener("click", () => {
  let displayResult = call(".displayResult");
  let content = `<h3>${name} you're on a ${years} years program</h3>
     <p>${cgpaCal()} is your current CGPA score</p>
     <p>You'll need **** as an average for each semester to come, good luck</p>`;

  displayResult.style.display = "block";
  displayResult.innerHTML = content;
});

// Function to calculate the gpa score
function gpaResult() {
  const creditUnits = callAll(".creditUnit"); // Selecting all elements having the class name .creditUnit
  const grades = callAll(".grade");
  let totalUnit = call(".totalUnit");
  let gpaValue = call(".gpaScore");
  let error = call(".error");
  let cgpaScore = call(".cgpaScore");
  let resultContinue = call(".resultContinue");

  let arrCredit = [];
  let arrGrade = [];

  // Looping through the various credit unit input
  // and then get each values in each input pushing
  // those values to an array - arrCredit
  creditUnits.forEach(creditUnit => {
    arrCredit.push(Number(creditUnit.value));
  });

  // Looping through the various grade input
  // and then invoking a function ( gradeToPoints() )
  // with the value in the input such as A,B,C (argument passed)
  // which returns 5,4,3  and then get the returned numbers
  // which is then pushed to an array - arrGrade
  grades.forEach(grade => {
    arrGrade.push(gradeToPoints(grade.value));
  });

  // From the array - arrCredit, adding all values in the array
  let sumCredit = arrCredit.reduce((a, b) => {
    return a + b;
  });

  // From array Grade (arrGrade) and array Credit (arrCredit)
  // For example arrGrade [5,4,3,2,1] and arrCredit [3,2,1,3,3]
  // Each index from both arrays are multiplied together and
  // the added to the next index.
  // Such as 5 * 3 + 4 * 2 + 3 * 1 + 2 * 3 + 1 * 3
  // Output is stored as sumGPA
  let sumGPA = arrGrade.reduce((r, a, i) => {
    return r + a * arrCredit[i];
  }, 0);

  // totalUnit has the total summed credit
  totalUnit.innerHTML = sumCredit;

  // gpaValue has the value (sumGPA / sumCredit).toFixed(2)
  // ( sumGPA / sumCredit ) does the calculation
  // toFixed(2) rounds it to two decimal point
  //
  // A condition to detect if value is NaN, if true disErr() is invoked else return the value without NaN
  // (sumGPA / sumCredit).toFixed(2) === "NaN" ? disErr() : (sumGPA / sumCredit).toFixed(2);
  gpaValue.innerHTML =
    (sumGPA / sumCredit).toFixed(2) === "NaN"
      ? disErr()
      : (sumGPA / sumCredit).toFixed(2);

  let scoreValue = (sumGPA / sumCredit).toFixed(2);

  cgpaArray.push(scoreValue);

  cgpaScore.innerHTML = cgpaCal();

  // display Error Function is to tell the user
  // that he/she hasn't filled all inputs
  // whereby display an error
  function disErr() {
    // Error displays immediately
    setTimeout(() => {
      error.style.display = "block";
    }, 0);

    // at 5s error message disappears
    setTimeout(() => {
      error.style.display = "none";
    }, 5000);

    // When the function is called it should
    // return 0 if there's an error
    return 0;
  }

  if ((sumGPA / sumCredit).toFixed(2) !== "NaN") {
    resultContinue.style.display = "block";
  }
  console.log(cgpaArray);
}

function cgpaCal() {
  let sum = cgpaArray.reduce((a, b) => Number(a) + Number(b));
  return (sum / cgpaArray.length).toFixed(2);
}

let cgpaArray = [];

// Function to add new inputs to the pa
function addNewInput() {
  const tbody = call(".tbody"); // selecting the table body
  const addInput = call(".numAdd").value; // indicating the number of rows to be added

  // A function to add rows which takes a parameter
  function addRow(num) {
    let str = `
      <tr>
        <td>
          <input type="text" name="courseCode" class="courseCode" />
        </td>
        <td>
          <input
            type="num"
            name="creditUnit"
            list="creditUnit"
            class="creditUnit"
          />
          <datalist id="creditUnit">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
            <option value="8"></option>
            <option value="9"></option>
            <option value="10"></option>
          </datalist>
        </td>
        <td>
          <input type="text" name="grade" list="grades" class="grade" />
            <datalist id="grades">
              <option value="A"></option>
              <option value="B"></option>
              <option value="C"></option>
              <option value="D"></option>
              <option value="E"></option>
              <option value="F"></option>
            /datalist>
        </td>
      </tr>
    `;

    // If the parameter is null or there's nothing ""
    // the process should just return the str variable
    if (num === "") return str;

    // This is to make the str (string) variable repeat
    // at a certain amount of time based on the argument passed
    return str.repeat(num);
  }

  // Function invoked
  tbody.innerHTML = addRow(addInput);
}

// Grade value to points
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
