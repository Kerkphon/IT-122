// 2 methods for reading json file
// 1 is to include or use require function to loead the file
// 2 the other way is the use the readFile method in the fs module
//const fs = require('fs');

//Method 1
//Use the require method to access the json file
//const custAddr = require('./customer.json');

//Method 2
//Using the readFile method from the 'fs' module

const fs = require("fs");

//To use the readFle method you need to include 3 arguments
// 1 is the file path
// 2 is the file encoding, this is usually utf-8
// 3 callback function, this takes 2 arguments
// 1 is any errors that may occur
// 2 is the data from file

fs.readFile("./customer.json", "utf-8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const custData = JSON.parse(jsonString);
      console.log(custData.address);
    } catch (err) {
      console.log("Error parsing JSON", err);
    }
  }
});

// the try/catch will prevent any errors from parsing bad JSON.

//This is an example of a syncronous version of readFile

/*
try {
    const jsonString = fs.readFileSync('./customer.json, 'utf-8')
     const custData = JSON.parse(jsonString)
    console.log(custData.address)
}catch(err){
console.log('Error parsing JSON', err)

        }
}
*/

// Now we can build a larger function to read the file and parse the data

function readJson(filePath, cb) {
  fs.readFile(filePath, "utf-8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const obj = JSON.parse(fileData);
      return cb && cb(null, obj);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

// with the helper function we can pask the file path to the json file
// and callback to handle the parsed json data

/*
        readJson('./customer.json', (err, data) => {
            if(err) {
                console.log(err)
            }else{
                console.log
            }

            })
    */

// Writing data to a JSON file is similar to what we did above
//Main difference is that you will need to string it by the
// data that you will write to the file

const newObj = {
  name: "Company 2",
  order_count: 0,
  address: "6789 Over There BLVD",
};

//use the Stringify method to convert to a JSON object

// const jsonString = JSON.stringify(newObj, null, 2)
//console.log(jsonString)

//So here, we have taken the new object and turned it into a JSON string
//using strinigfy. It is important to stringify an object because if you
// try to pass a normal JS object as a json object it would fail
// silenetly

// to write the object to the json file you use the fs writeFile method

fs.writeFile("./newCustomer.json", JSON.stringify(newObj, null, 2), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Written successfully");
  }
});

//The write file method takes 3 arguments
// 1 the path to the file to be written to. If the file exists it will be overwitten
// 2 the new data/object to be written
// 3 callback function to recieve an error if one occurs

// 2 optional arguments are added to the stringify method
// the second argument , could be a replacement function to change how stringify
// actually works.

//The third argument '2', represents the amount of whitespace to add into the string

readJson("./customer.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.order_count += 1;
    fs.writeFile("./customer.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
