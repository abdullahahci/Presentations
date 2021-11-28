try {
    console.log('Checking in');  // (1) <--
    // undefinedVar;            // ReferenceError
    // eval('evaluate this');   // SyntaxError
    null.f()                    // TypeError
    console.log('This is not reached');  // (2)
    if(true)
        throw TypeError;
} catch (err) {
    console.log(`Error has occurred!`); // (3) <--
    // console.log(`Error name:` + err.name); // (3) <--
    // console.log(`Error message:` + err.message); // (3) <--
    // console.log(`Error stack:` + err.stack); // (3) <--
    console.log(err); // (3) <--

    if(err instanceof ReferenceError){
        console.log('This is a ReferenceError'); // (3) <--
    }
    else if(err instanceof SyntaxError){
        console.log('This is a SyntaxError'); // (3) <--
    }
    else {
        console.log('This is an Error'); // (3) <--
    }
} finally {
    console.log(`Reached the end!`); // (4) <--
}
