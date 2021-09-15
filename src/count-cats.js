export default function countCats(backyard) {
  let result = 0;
  backyard.map(i => { i.forEach(i => { if (i == "^^") return result++; }) })
}