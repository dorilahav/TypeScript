//// [blockScopedEnumVariablesUseBeforeDef_preserve.ts]
function foo1() {
    return E.A
    enum E { A }
}

function foo2() {
    return E.A
    const enum E { A }
}

//// [blockScopedEnumVariablesUseBeforeDef_preserve.js]
function foo1() {
    return E.A;
    var E;
    (function (E) {
        E[E["A"] = 0] = "A";
    })(E || (E = {}));
}
function foo2() {
    return 0 /* E.A */;
    var E;
    (function (E) {
        E["A"] = 0;
    })(E || (E = {}));
}
