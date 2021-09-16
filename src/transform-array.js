export default function transform(arr) {
   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
   let list = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
   let copyArr = arr.slice();
   let result = [];
   for (let i = 0; i < copyArr.length; i++) {
      if (!(list.includes(copyArr[i]))) {
         result.push(copyArr[i]);
         continue;
      }
      switch (copyArr[i]) {
         case "--discard-next":
            if (typeof copyArr[i + 1] == "number") {
               copyArr.splice(i + 1, 1);
            }
            continue;
         case "--discard-prev":
            if (typeof copyArr[i - 1] == "number") {
               result.pop();
            }
            continue;
         case "--double-next":
            if (typeof copyArr[i + 1] == "number") {
               result.push(copyArr[i + 1]);
            }
            continue;
         case "--double-prev":
            if (typeof copyArr[i - 1] == "number") {
               result.push(copyArr[i - 1]);
            }
            continue;
      }
   }
   return result;
}
