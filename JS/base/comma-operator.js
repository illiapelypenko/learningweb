let x = 5;

x = (x++, (x = addFive(x)), (x *= 2), (x -= 5), (x += 10));

function addFive(num) {
	return num + 5;
}

// We can use the , or comma operator to evaluate multiple expressions in one line. It evaluates from left-to-right and
// returns the value of the last item on the right or the last operand.
