export default function removeDuplicates(array, key = 'id') {
  const uniqueKeys = Array.from(new Set(array.map((e) => e[key])));
  return uniqueKeys.map((k) => array.find((element) => element[key] === k));
}
