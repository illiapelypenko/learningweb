// tsc --noEmitOnError hello.ts -> TypeScript doesn’t get in your way

// The --strict flag toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are noImplicitAny and strictNullChecks.

// noImplicitAny -> TypeScript doesn’t try to infer any types for us and instead falls back to the most lenient type: any
// Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.

// strictNullChecks -> By default, values like null and undefined are assignable to any other type. The flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.