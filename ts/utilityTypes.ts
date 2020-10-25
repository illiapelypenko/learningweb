// Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// Readonly<Type>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";

// Cannot assign to 'title' because it is a read-only property.

// Record<Keys,Type>
// Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

nav.about;
// ^ = const nav: Record

// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys from Type.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
// ^ = const todo: Pick

// Omit<Type, Keys>
// Constructs a type by picking all properties from Type and then removing Keys.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
// ^ = const todo: Pick

// Exclude<Type, ExcludedUnion>
// Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

type T0 = Exclude<"a" | "b" | "c", "a">;
//    ^ = type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
//    ^ = type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
//    ^ = type T2 = string | numberTry
// Extract<Type, Union>
// Constructs a type by extracting from Type all union members that are assignable to Union.

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^ = type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
//    ^ = type T1 = () => void