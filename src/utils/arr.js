const arr = {
  data: {
    docs: [{ a: 'a' }],
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9
  }
};

const arr2 = [];
const { b, c, d, e, f, g, h, i } = arr.data;
console.log(arr.shift());
