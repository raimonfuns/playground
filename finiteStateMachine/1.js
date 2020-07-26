const match = (string) => {
  let state = start;
  for (const c of string) {
    state = state(c);
  }
  return state === end;
};

const start = (c) => {
  if (c === 'a') {
    return foundA;
  }
  return start;
};

const foundA = (c) => {
  if (c === 'b') {
    return foundB;
  }
  return start;
};

const foundB = (c) => {
  if (c === 'c') {
    return end;
  }
  return start;
};

const end = () => {
  return end;
};

console.log(match('xxabcxx'));
