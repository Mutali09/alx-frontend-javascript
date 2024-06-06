/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './js/interface';
import * as CRUD from './js/crud.js';

// Create an object row with RowElement type and set values
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Create a newRowID variable with RowID type and assign the result of insertRow command
const newRowID: RowID = CRUD.insertRow(row);

// Create an updatedRow variable with RowElement type and update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
