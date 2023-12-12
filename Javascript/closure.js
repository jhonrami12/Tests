"use strict";
(() => {
    //? Closures
    //? It is like a class, you can create private funtions and variables, you just can see that you return inside closure
    const counter = (function () {
        //? variable _counter it can not accesible from outside
        let _counter = 0;
        const incrementar = () => {
            _counter++;
        };
        const decrementar = () => {
            _counter--;
        };
        const valor = () => {
            return _counter;
        };
        //? We just want to see this functions
        return {
            incrementar,
            decrementar,
            valor,
        };
    })();
    counter.incrementar();
    console.log("counter!!", counter.valor());
})();
