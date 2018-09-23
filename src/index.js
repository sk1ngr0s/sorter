class Sorter {
  constructor() {
    // your implementation
    this.sorterArr = [];
    this.compareFunc = (left, right) => left - right;
  }

  add(element) {
    // your implementation
    this.sorterArr.push(element);
  }

  at(index) {
    // your implementation
    return this.sorterArr[index];
  }

  get length() {
    // your implementation
    return this.sorterArr.length;
  }

  toArray() {
    // your implementation
    return this.sorterArr;
  }

  sort(indices) {
    // your implementation
    let indArr = [];
    for (let i = 0; i < indices.length; i++) {
      indArr.push(this.sorterArr[indices[i]]);
    }
    indices.sort();
    indArr.sort(this.compareFunc);
    for (let j = 0; j < indices.length; j++) {
      this.sorterArr[indices[j]] = indArr[j];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunc = compareFunction;
  }
}

module.exports = Sorter;