/**
 * A specialized version of `reduce` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */

function arrayReduce(array, iteratee, accumulator, initAccum){
    let length = array == null ? 0 : array.length

    if(initAccum){
        accumulator = array[0]
    }

    let i = 0;
    while(i < length){
        accumulator = iteratee(accumulator, array[i])
        i++
    }

    return accumulator
}

// export default arrayReduce
