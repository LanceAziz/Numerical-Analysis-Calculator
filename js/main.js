document.querySelector("#Bisection").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.remove("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  let checkedMethod = document.querySelector(
    'input[name="Method"]:checked'
  ).value;
  console.log(checkedMethod);
});

document.querySelector("#FalsePos").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.remove("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  let checkedMethod = document.querySelector(
    'input[name="Method"]:checked'
  ).value;
  console.log(checkedMethod);
});

document.querySelector("#FixedPoint").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.remove("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  let checkedMethod = document.querySelector(
    'input[name="Method"]:checked'
  ).value;
  console.log(checkedMethod);
});

document.querySelector("#Newton").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.remove("d-none");
  document.querySelector("#Scant-Div").classList.add("d-none");
  let checkedMethod = document.querySelector(
    'input[name="Method"]:checked'
  ).value;
  console.log(checkedMethod);
});

document.querySelector("#Scant").addEventListener("click", function () {
  document.querySelector("#Bis-Div").classList.add("d-none");
  document.querySelector("#False-Div").classList.add("d-none");
  document.querySelector("#Simple-Div").classList.add("d-none");
  document.querySelector("#Newton-Div").classList.add("d-none");
  document.querySelector("#Scant-Div").classList.remove("d-none");
  let checkedMethod = document.querySelector(
    'input[name="Method"]:checked'
  ).value;
  console.log(checkedMethod);
});

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
    default:
      break;
  }
}

function vc(x) {
  return document.getElementById("fx").value.toLowerCase().replaceAll("x", x);
}

function BisAndFalse(method) {
  let XL, XU;
  if (method == "Bisection") {
    XL = Number(document.getElementById("Bis-Xl").value);
    XU = Number(document.getElementById("Bis-Xu").value);
  } else {
    XL = Number(document.getElementById("False-Xl").value);
    XU = Number(document.getElementById("False-Xu").value);
  }
  let scope = {
    xl: XL,
    xu: XU,
    xr: 0,
  };
  console.log(scope);
  let fxl = math.evaluate(vc("xl"), scope);
  let fxu = math.evaluate(vc("xu"), scope);
  if (fxl * fxu < 0) {
    let err = document.getElementById("err").value;
    console.log(method);
    if (method == "Bisection") scope.xr = (scope.xl + scope.xu) / 2;
    else scope.xr = scope.xu - (fxu * (scope.xl - scope.xu)) / (fxl - fxu);
    let fxr = math.evaluate(vc("xr"), scope);
    let currError = 100;
    let resultList = [];
    for (let i = 0; currError > err; i++) {
      scope.xr = (scope.xl + scope.xu) / 2;
      fxr = math.evaluate(this.vc("xr"), scope);
      if (i != 0)
        currError =
          math.abs((scope.xr - resultList[i - 1].xr) / scope.xr) * 100;
      let result = {
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

//-2+7x-5x^2+6x^3
//-26+82.3x - 88x^2 + 45.4x^3 - 9x^4 + 0.65x^5
