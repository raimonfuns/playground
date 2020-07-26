const match = (pattern, string) => {
  let state = start;
  const hits = [];
  for (const c of string) {
    const target = pattern[hits.length];
    const done = hits.join('') === pattern;
    state = done ? end : state(c, target, hits, pattern);
  }
  return state === end;
}

const start = (c, target, hits, pattern) => {
  if (c === target) {
    hits.push(c);
  } else {
    if (hits.length > 0) {
      hits.length = 0;
      const target = pattern[0];
      return start(c, target, hits);
    }
  }
  return start;
};

const end = () => {
  return end;
};

console.log(match('bc', 'abbcd'))
console.log(match('bc', 'abcd'))
console.log(match('bbc', 'abcd'))
console.log(match('abc', 'aabcd'))