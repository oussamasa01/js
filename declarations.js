const escapeStr = "\"`/ \\'";
const arr = [4, '2'];
Object.freeze(arr);

const obj = {
    str: "oussama",
    num: 2026,
    bool: false,
    undef: undefined,
}
Object.freeze(obj);

const nested = {
    arr =[4, undefined, "2"],
    obj = {
        str: "oussama",
        num: 2026,
        bool: false,
    },
};

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

