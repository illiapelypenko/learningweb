// When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.

null == 0; // false, null is not converted to 0
null == null; // true
undefined == undefined; // true
null == undefined; // true

// NaN does not equal to anything even itself:
if (value !== value) {
	console.log("we're dealing with NaN here");
}
