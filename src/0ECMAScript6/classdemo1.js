

class Example {
    @logMethod(1)
    @logMethod(2)
    sum(a, b) {
        return a + b;
    }
}

function logMethod(id) {
    console.log('evaluated logMethod' + id);
    return (target, name, desctiptor) => console.log('excuted   logMethod' + id);
}