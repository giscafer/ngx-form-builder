/* promise handler ,async/await no need try catch */
export const promiseHandler = promise => promise.then(res => [null, res]).catch(err => [err, null]);