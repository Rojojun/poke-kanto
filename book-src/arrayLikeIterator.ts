// lib.es5.ts
// interface ArrayLike<T> {
//   readonly length: number;
//   readonly [n: number]: T;
// }

interface IteratorYieldResult<T> {
    done?: false;
    value: T;
}

interface IteratorReturnResult {
    done: true;
    value: undefined;
}

type IteratorResult<T> = IteratorYieldResult<T> | IteratorReturnResult;

interface Iterator<T> {
    next(): IteratorResult<T>;
}

class ArrayLikeIterator<T> implements Iterator<T> {
    private index = 0;
    constructor(private arrayLike: ArrayLike<T>) {}

    next(): IteratorResult<T> {
        if (this.index < this.arrayLike.length) {
            return {
                value: this.arrayLike[this.index++],
                done: false
            };
        } else {
            return {
                value: undefined,
                done: true
            };
        }
    }
}

const arrayLike: ArrayLike<number> = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
};

const iterator: Iterator<number> = new ArrayLikeIterator(arrayLike);

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

console.log("----------------------------------------------------");

let array: Array<string> = ["a", "b", "c"];
const iterator2: Iterator<string> = new ArrayLikeIterator(array);

console.log(iterator2.next()); // { value: 'a', done: false }
console.log(iterator2.next()); // { value: 'b', done: false }
console.log(iterator2.next()); // { value: 'c', done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

console.log("----------------------------------------------------");
console.log("array.reverse()")

array = ['A', 'B'];
array.reverse(); // array의 순서를 반대로 미리 모두 변경해둠
console.log(array[0], array[1]); // 'B', 'A'

console.log("----------------------------------------------------");
function reverse<T>(arrayLike: ArrayLike<T>): Iterator<T> {
    let { length: idx } = arrayLike;
    return {
        next() {
            if (idx-- >= 0) {
                return { value: arrayLike[idx], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

array = ['A', 'B'];
const reversed = reverse(array);
console.log(array); // ['A', 'B']

console.log(reversed.next().value, reversed.next().value);
// 'B', 'A'