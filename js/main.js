// Clicking on each Method to show its form and hide the other forms
document.querySelector("#Bisection").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.remove("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  // Showing the chosen function in console (test)**********
  console.log(document.querySelector('input[name="Method"]:checked').value);
});
document.querySelector("#FalsePos").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.remove("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  // Showing the chosen function in console (test)**********
  console.log(document.querySelector('input[name="Method"]:checked').value);
});
document.querySelector("#FixedPoint").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.remove("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  // Showing the chosen function in console (test)**********
  console.log(document.querySelector('input[name="Method"]:checked').value);
});
document.querySelector("#Newton").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.remove("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  // Showing the chosen function in console (test)**********
  console.log(document.querySelector('input[name="Method"]:checked').value);
});
document.querySelector("#Scant").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.remove("d-none");
  // Showing the chosen function in console (test)**********
  console.log(document.querySelector('input[name="Method"]:checked').value);
});

// Calls the method function based on the chosen method
function Calculate() {
  let checkedMethod = document.querySelector(
    'input[name="Method"]:checked'
  ).value;
  switch (checkedMethod) {
    case "Bisection":
      BisAndFalse(checkedMethod);
      break;
    case "FalsePos":
      BisAndFalse(checkedMethod);
      break;
    case "FixedPoint":
      break;
    case "Newton":
      Newton();
      break;
    case "Scant":
      Scant();
      break;
    default:
      break;
  }
}

// Equation solver
function f(x, scope) {
  return math.evaluate(
    document.getElementById("fx").value.toLowerCase().replaceAll("x", x),
    scope
  );
}
function fdash(x, scope) {
  fd = math
    .derivative(
      document.getElementById("fx").value.toLowerCase().replaceAll("x", x),
      x
    )
    .toString();
  console.log(fd);
  return math.evaluate(fd, scope);
}

// Bisection and False Position function based on the chosen method
function BisAndFalse(method) {
  let XL, XU;
  if (method == "Bisection") {
    XL = document.getElementById("Bis-Xl").value;
    XU = document.getElementById("Bis-Xu").value;
  } else {
    XL = document.getElementById("False-Xl").value;
    XU = document.getElementById("False-Xu").value;
  }
  let scope = {
    xl: Number(XL),
    xu: Number(XU),
    xr: 0,
  };
  let fxl = f("xl", scope);
  let fxu = f("xu", scope);
  // console.log(scope);
  // console.log(fxl);
  // console.log(fxu);
  if (fxl * fxu < 0) {
    let currError = 100,
      result,
      resultList = [],
      err = document.getElementById("err").value,
      fxr;
    for (let i = 0; currError > err; i++) {
      // console.log(method);
      if (method == "Bisection") scope.xr = (scope.xl + scope.xu) / 2;
      else scope.xr = scope.xu - (fxu * (scope.xl - scope.xu)) / (fxl - fxu);
      fxr = f("xr", scope);
      if (i != 0)
        currError =
          math.abs((scope.xr - resultList[i - 1].xr) / scope.xr) * 100;
      result = {
        i: i,
        xl: scope.xl,
        fxl: fxl,
        xu: scope.xu,
        fxu: fxu,
        xr: scope.xr,
        fxr: fxr,
        currError: currError,
      };
      resultList.push(result);
      // console.log(result);
      if (fxl * fxr < 0) {
        scope.xu = scope.xr;
        fxu = fxr;
      } else {
        scope.xl = scope.xr;
        fxl = fxr;
      }
    }
    showTable(result, resultList);
  } else {
    console.log("Not Solvable");
  }
}

// Simple Fixed Point function
function FixedPoint() { }

// Newton Function
function Newton() {
  let scope = {
    xi: Number(document.getElementById("Newton-Xi").value),
  };
  let currError = 100,
    result,
    resultList = [],
    fxi,
    fdashxi,
    err = document.getElementById("err").value;
  for (let i = 0; currError > err; i++) {
    fxi = f("xi", scope);
    fdashxi = fdash("xi", scope);
    if (i != 0)
      currError = math.abs((scope.xi - resultList[i - 1].xi) / scope.xi) * 100;
    result = {
      i: i,
      xi: scope.xi,
      fxi: fxi,
      fdahsxi: fdashxi,
      error: currError,
    };
    resultList.push(result);
    console.log(result);
    scope.xi = scope.xi - fxi / fdashxi;
  }
  console.log(resultList);
}

// Scant Function
function Scant() {
  let scope = {
    xi: Number(document.getElementById("Scant-Xi").value),
    xii: Number(document.getElementById("Scant-Xi-1").value),
  };
  let currError = 100,
    result,
    resultList = [],
    fxi,
    fxii,
    err = document.getElementById("err").value;
  for (let i = 0; currError > err; i++) {
    fxi = f("xi", scope);
    fxii = f("xii", scope);
    if (i != 0)
      currError = math.abs((scope.xi - resultList[i - 1].xi) / scope.xi) * 100;
    result = {
      i: i,
      xi: scope.xi,
      fxi: fxi,
      xii: scope.xii,
      fxii: fxii,
      error: currError,
    };
    resultList.push(result);
    console.log(result);
    scope.xi = scope.xi - ((fxi * (scope.xii - scope.xi)) / (fxii - fxi));
    scope.xii = resultList[i].xi;
  }
  console.log(resultList);
}

function showTable(tablehead, tablebody) {
  //Initials
  let td_Head_values = [];
  let td_Head = ``;
  let td_Body = ``;
  let tr_Body = ``;
  let cartonaBody = ``;
console.log(tablebody);
  //head loop
  for (let i = 0; i < Object.keys(tablehead).length; i++) {
    td_Head_values.push(Object.keys(tablehead)[i]);
    let temp = `<th>${Object.keys(tablehead)[i]}</th>`
    td_Head = td_Head.concat(temp);
  }

  //body loop
  for (let i = 0; i < tablebody.length; i++) {
    let temp;
    for (let j = 0; j < Object.keys(tablebody[i]).length; j++) {
      console.log(i);
      let attributeName = td_Head_values[j]
      temp = `<td>${tablebody[i][attributeName]}</td>`
      td_Body = td_Body.concat(temp);
      
    }
    tr_Body = `<tr>${td_Body}</tr>`
    cartonaBody = cartonaBody.concat(tr_Body);
    td_Body = ``;
  }
  
  console.log(tr_Body);

  //setting in HTML
  document.getElementById("table-head").innerHTML = td_Head;
  document.getElementById("table-body").innerHTML = cartonaBody;
}


// Test Cases

// Bisection

// False Position
// f(x) = -26 + 82.3x - 88x^2 + 45.4x^3 - 9x^4 + 0.65x^5, e = 0.2%, xl = 0.5, xu = 1 (Works)
// f(x) = -13 - 20x + 19x^2 - 3x^3, e = 1%, xl = -1, xu = 0 (Works)

// Simple Fixed Point

// Newton
// f(x) = -0.9x^2 + 1.7x + 2.5, e = 0.7%, x0 = 5

//Scant
// f(x) = 0.95x^3 - 5.9x^2 + 10.9x - 6, e = 0.5%, x0 = 3.5, x-1 = 2.5

//-2+7x-5x^2+6x^3
