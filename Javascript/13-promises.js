let promise = new Promise(function(resolve, reject) {
    let rand = Math.round((Math.random() * 1000 / 100));
    if(rand%2==0)
        resolve(rand);
    else
        reject(rand);
  });

  promise.then(function(val) {
    console.log('resolved, value is even:' +val); // 1
    return val + 2;
  }).then(function(val) {
    console.log(val); // 3
    return val * val;
  }).then(function(val) {
    console.log(val); // 3
    return val / 2;
  }).then(function(val) {
    console.log(val); // 3
  }).catch(function(err) {
    // Instead, this happens:
    console.log("It failed! value is odd", err);
  })