import flattenPosts from "../src/utils/flattenPosts";

const obj = {life:[{title:'test title'}, {title:'test title2'}], tech:[{title:'test title3'}, {title:'test titl4'}]}

const arr = flattenPosts(obj);

console.log("arr", arr);
