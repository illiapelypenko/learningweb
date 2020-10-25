interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// Instead

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// The extends keyword on an interface allows us to effectively copy members from other named types, and add whatever new members we want. This can be useful for cutting down the amount of type declaration boilerplate we have to write, and for signaling intent that several different declarations of the same property might be related.

// interfaces can also extend from multiple types

interface ColorfulCircle extends Colorful, Circle {}