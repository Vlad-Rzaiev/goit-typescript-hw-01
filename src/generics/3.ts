function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

console.log(
  merge({ name: "Alice", age: 21 }, { position: "student", isOnline: true })
);
