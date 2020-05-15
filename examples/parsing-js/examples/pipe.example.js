const fs = require('fs');
const path = require('path');
const csv = require('@fast-csv/parse');

fs.createReadStream(path.resolve(__dirname, '..', 'assets', 'snake_case_users.csv'))
    .pipe(csv.parse())
    .on('error', (error) => console.error(error))
    .on('data', (row) => console.log(row))
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

// Output:
// [ 'id', 'first_name', 'last_name', 'address' ]
// [ '1', 'Bob', 'Yukon', '1111 State St. Yukon AK' ]
// [ '2', 'Sally', 'Yukon', '1111 State St. Yukon AK' ]
// [ '3', 'Bobby', 'Yukon', '1111 State St. Yukon AK' ]
// [ '4', 'Jane', 'Yukon', '1111 State St. Yukon AK' ]
// [ '5', 'Dick', 'Yukon', '1111 State St. Yukon AK' ]
// [ '6', 'John', 'Doe', '1112 State St. Yukon AK' ]
// [ '7', 'Jane', 'Doe', '1113 State St. Yukon AK' ]
// [ '8', 'Billy', 'Doe', '1112 State St. Yukon AK' ]
// [ '9', 'Edith', 'Doe', '1112 State St. Yukon AK' ]
// Parsed 10 rows
