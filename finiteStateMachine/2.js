const match = (string) => {
  let state = start;
  for (const c of string) {
    console.log({
      state
    });
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
  return start(c);
};

const foundB = (c) => {
  if (c === 'a') {
    return foundA2;
  }
  return start(c);
};

const foundA2 = (c) => {
  if (c === 'b') {
    return foundB2;
  }
  return start(c);
};

const foundB2 = (c) => {
  if (c === 'a') {
    return foundA3;
  }
  return start(c);
};

const foundA3 = (c) => {
  if (c === 'b') {
    return foundB4;
  }
  return start(c);
};

const foundB4 = (c) => {
  if (c === 'x') {
    return end;
  }
  return start(c);
};

const end = () => {
  return end;
};

console.log(match('abaczeabababx'));