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
      break;
    case "Scant":
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
  console.log(scope);
  console.log(fxl);
  console.log(fxu);
  if (fxl * fxu < 0) {
    let currError = 100,
      result,
      resultList = [],
      err = document.getElementById("err").value;
    for (let i = 0; currError > err; i++) {
      console.log(method);
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
      console.log(result);
      if (fxl * fxr < 0) {
        scope.xu = scope.xr;
        fxu = fxr;
      } else {
        scope.xl = scope.xr;
        fxl = fxr;
      }
    }
    console.log(resultList);
  } else {
    console.log("Not Solvable");
  }
}

// Simple Fixed Point function
function FixedPoint() {}

// Newton Function
function Newton() {
  let scope = {
    xi: Number(document.getElementById("Newton-Xi").value),
  };

}

// Scant Function
function Scant() {}

// Test Cases
// Bisection
//
// False Position
// f(x) = -26 + 82.3x - 88x^2 + 45.4x^3 - 9x^4 + 0.65x^5, e = 0.2%, xl = 0.5, xu = 1 (Works)
// f(x) = -13 - 20x + 19x^2 - 3x^3, e = 1%, xl = -1, xu = 0 (Works)



//-2+7x-5x^2+6x^3

