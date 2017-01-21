export const MEOW = 'MEOW';
export function meow(catId) {
  return { type: MEOW, payload: { catId } };
}

export const DELETE_CAT = 'DELETE_CAT';
export function deleteCat(catId) {
  return { type: DELETE_CAT, payload: { catId } };
}
