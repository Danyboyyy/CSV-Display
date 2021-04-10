const properties = ["Nombre", "Correo Electronico", "Telefono"];

const saveDuplicates = (id, arr) => {
  const seen = new Set();
  const ans = new Set();

  arr.map(i => {
    var item = i[id];

    if (seen.has(item)) {
      ans.add(item);
    }
    else {
      seen.add(item);
    }
  });

  return ans;
};

export const mark = (uniques, user) => {
  for (let i = 0; i < uniques.length; i++) {
    if (uniques[i].has(user[properties[i]])) {
      return true;
    }
  }

  return false;
}

export const myFilter = (users) => {
  const seen = new Set();

  users = users.filter(u => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(u["Correo Electronico"]));

  users = users.filter(u => {
    if (!seen.has(JSON.stringify(u))) {
      seen.add(JSON.stringify(u))
      return u;
    }
  });

  const uniques = properties.map(p => saveDuplicates(p, users)); 

  return [users, uniques];
 };