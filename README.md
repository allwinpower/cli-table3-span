## Usage Example for cli-table3-span

The `cli-table3-span` module extends `cli-table3` by adding the `spanConsole` option. This option enables the table to span the full width of the console. The `colWidths` property sets the maximum size that a cell is allowed to span.

```javascript
import Table from 'cli-table3-span';

// Create a new table with specified options
const table = new Table({
    head: ['ID', 'Label', 'Created At'],
    colWidths: [5+2, 70, 19+2], // Maximum column widths
    wordWrap: true,
    wrapOnWordBoundary: false,
    spanConsole: true // Enable console spanning
});

// Add some rows to the table
table.push(
    ['12345', 'A label that might be too long will be wrapped', '2024-01-16 10:32'],
    ['67890', 'Another long label for testing', '2024-01-17 11:45']
);

// Render the table to the console
console.log(table.toString());
