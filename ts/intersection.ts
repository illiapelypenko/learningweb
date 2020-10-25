// interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

// An intersection type is defined using the & operator.

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;