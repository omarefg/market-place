export function capitalize(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function nameFunction(name, body) {
  const validBody = typeof body === "function";
  const validName = typeof name === "string";

  if (validBody && validName) {
    return {
      [name](...args) {
        return body(...args);
      },
    }[name];
  }

  if (!validBody) {
    throw new Error("Body must be a function");
  }

  throw new Error("Name must be a string");
}
