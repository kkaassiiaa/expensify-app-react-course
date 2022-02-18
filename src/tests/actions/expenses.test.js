import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
/* yarn jest -- --watch */

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE', 
    id: '123abc'
  });
});

test('should setup edit expanse action object', () => {
  const action = editExpense('123abc', {note: 'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: "New note value"
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  }
  const action = addExpense( expenseData );
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const defaltValue = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaltValue,
      id: expect.any(String)
    } 
  }); 
});