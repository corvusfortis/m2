type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]; //???
}

// Example usage:
type ExampleType = {
  name: string;
  details: {
      age: number;
      address: string;
  };
}

const example: DeepReadonly<ExampleType> = {
  name: "John Doe",
  details: {
      age: 30,
      address: "123 Main St",
  },
};

// The following lines will cause TypeScript errors
// example.name = "Jane Doe"; // Error
// example.details.age = 31; // Error
