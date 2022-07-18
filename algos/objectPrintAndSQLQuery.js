// Printing keys and values
// Given an object, return an array of arrays containing the key and value of each entry
// Ex: given object
const obj1 = {
    name: "Pizza",
    calories: 9001
}
// return
// const result = [
//    ["name": "Pizza"],
//      ["calories", 9001]
// ]

// Once you have that worked out, you can work on the next algorithm
// Insert SQL Statement
// Given a table name string and an object whose key value pairs represent column names and values for the columns return a SQL insert statement string
// Ex: 
const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// function printEach(obj){
//     let temp = [];
//     for(let i in obj){
//         temp.push([i, obj[i]])
//     }
//     console.log(temp);
//     return temp;
// }

// printEach(obj1);

function queries(table, obj){
    keys = [];
    values = [];
    for(let i in obj){
        keys.push(i);
        values.push(obj[i]);
    }
    keyData = keys.join(", ").toString()
    valueData = values.join('", "').toString()
    return `"INSERT INTO ${table} (${keyData}) VALUES ("${valueData}");"`
}

console.log(queries(table, insertData1))