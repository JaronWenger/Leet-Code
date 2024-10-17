
var RandomizedSet = function() {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */











var RandomizedSet = function() {
    this.set = new Map();
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) {
        return false;
    }
    this.arr.push(val);
    this.set.set(val, this.arr.length-1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) {
        return false;
    }
    const idx = this.set.get(val);
    const lastVal = this.arr[this.arr.length - 1];
    //replace val with last number:
    this.arr[idx] = lastVal
    this.set.set(lastVal, idx)
    //remove last position in array and value from hash map:
    this.arr.pop()
    this.set.delete(val)
    return true;
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx = (Math.floor(Math.random()*(this.arr.length)));
    return this.arr[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */