function vc(x) {
    return document.getElementById("fx").value.toLowerCase().replaceAll("x", x);
}
function Calculate() {
    var scope = {
        xl: Number(document.getElementById("xl").value),
        xu: Number(document.getElementById("xu").value),
        xr: 0
    }
    var fxl = math.evaluate(vc("xl"), scope);
    var fxu = math.evaluate(vc("xu"), scope);
    if ((fxl * fxu) < 0) {
        var err = document.getElementById("err").value;
        scope.xr = ((scope.xl) + (scope.xu)) / 2;
        var fxr = math.evaluate(vc("xr"), scope);
        var currError = 100;
        var resultList = [];
        for (let i = 0; currError > err; i++) {
            scope.xr = (scope.xl + scope.xu) / 2;
            fxr = math.evaluate(this.vc("xr"), scope);
            if (i != 0) currError = math.abs((scope.xr - resultList[i - 1].xr) / scope.xr) * 100;
            var result = {
                i: i,
                xl: scope.xl,
                fxl: fxl,
                xu: scope.xu,
                fxu: fxu,
                xr: scope.xr,
                fxr: fxr,
                currError: currError
            };
            resultList.push(result);
            console.log(result);
            if (fxl * fxr < 0) {
                scope.xu = scope.xr;
                fxu = fxr;
            }
            else {
                scope.xl = scope.xr;
                fxl = fxr
            }

        }
        console.log(resultList);
    }
    else {
        console.log("Not Solvable");
    }
}

//-2+7x-5x^2+6x^3