import CliTable from 'cli-table3';

class Table extends CliTable {
    constructor(options) {
        const { colWidths, spanConsole, ...cliTableOptions } = options;

        if (spanConsole) {
            const calculatedWidths = Table.calculateWidths(colWidths, process.stdout.columns);
            super({ ...cliTableOptions, colWidths: calculatedWidths });
        } else {
            super({ ...cliTableOptions, colWidths });
        }
    }

    static calculateWidths(colWidths, consoleWidth) {
        let remainingWidth = consoleWidth - 4; // Adjust for padding
        let totalColWidths = colWidths.reduce((a, b) => a + b, 0);

        if (totalColWidths > remainingWidth) {
            // Scale down column widths proportionally if the total exceeds console width
            return colWidths.map(width => Math.floor((width / totalColWidths) * remainingWidth));
        } else {
            // Distribute remaining width among columns without exceeding their maximum
            return colWidths.map(width => {
                let adjustedWidth = Math.min(width, remainingWidth);
                remainingWidth -= adjustedWidth;
                return Math.max(adjustedWidth, 1); // Ensure at least 1 character width
            });
        }
    }
}

export default Table;
