export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.map(el => {
    if (typeof el === "string") {
      el.split('').filter(i => i !== ' ');
      return el.split('').filter(i => i !== ' ').join('')[0];
    }
  }).reduce((result, current) => (typeof current === "string") ? result + current : result, '').toUpperCase().
    split('').sort().join('');
}