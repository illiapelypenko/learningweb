import { put, takeEvery } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  // takeEvery allows multiple fetchData instances to be started concurrently

  // yield takeEvery('takeLatest', incrementAsync);
  // If we want to only get the response of the latest request fired (e.g. to always display the latest version of data) we can use the takeLatest
  // Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment. And it will be the latest started task. If a previous task is still running when another fetchData task is started, the previous task will be automatically cancelled.
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts);
}

function* fetchProducts() {
  const products = yield Api.fetch('/products');
  console.log(products);
}

// In the example above, we are invoking Api.fetch directly from inside the Generator (In Generator functions, any expression at the right of yield is evaluated then the result is yielded to the caller).

// Api.fetch('/products') triggers an AJAX request and returns a Promise that will resolve with the resolved response, the AJAX request will be executed immediately.

// Instead of invoking the asynchronous function directly from inside the Generator, we can yield only a description of the function invocation. i.e. We'll yield an object which looks like

// Effect -> call the function Api.fetch with `./products` as argument
{
  CALL: {
    fn: Api.fetch,
    args: ['./products']
  }
}
// Put another way, the Generator will yield plain Objects containing instructions, and the redux-saga middleware will take care of executing those instructions and giving back the result of their execution to the Generator. This way, when testing the Generator, all we need to do is to check that it yields the expected instruction by doing a simple deepEqual on the yielded Object.

// For this reason, the library provides a different way to perform asynchronous calls.

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // ...
}

// call and apply are well suited for functions that return Promise results.

// put creates the dispatch Effect

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // create and yield a dispatch Effect
  yield put({ type: 'PRODUCTS_RECEIVED', products })
}