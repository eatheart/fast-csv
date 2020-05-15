import { parse } from '@fast-csv/parse';

const stream = parse({ headers: true })
    .on('error', (error) => console.error(error))
    .on('data', (row) => console.log(row))
    .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

stream.write('header1,header2\n');
stream.write('col1,col2');
stream.end();

// Output:
// { header1: 'col1', header2: 'col2' }
// Parsed 1 rows
