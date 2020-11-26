export default function removeDuplicates(array) {
  const ids = Array.from(new Set(array.map((e) => e.id)));
  return ids.map((id) => array.find((element) => element.id === id));
}
