/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
 */

function appReducer(state = [], action) {
  // if (typeof state === 'undefined') {
  //   return [];
  // }
  if (action.type === 'DELETE_FLAVOR') {
    return Object.assign(
      [],
      state,
      state.map(iceCream => {
        if (iceCream.flavor === action.flavor) {
          return Object.assign({}, iceCream, {
            count: iceCream.count - 1
          });
        }
        return iceCream;
      })
    );
  }
  return state;
}

const state = [
  { flavor: 'Chocolate', count: 36 },
  { flavor: 'Vanilla', count: 210 }
];
const action1 = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' };
const action2 = { type: 'DELETE_FLAVOR', flavor: 'Vanilla' };

const result = appReducer(state, action1);
console.log(result);

const b = appReducer(result, action2);
console.log(b);
