// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(op = null) {return op ? op(0) : 0}
function one(op = null) {return op ? op(1) : 1}
function two(op = null) {return op ? op(2) : 2}
function three(op = null) {return op ? op(3) : 3}
function four(op = null) {return op ? op(4) : 4}
function five(op = null) {return op ? op(5) : 5}
function six(op = null) {return op ? op(6) : 6}
function seven(op = null) {return op ? op(7) : 7}
function eight(op = null) {return op ? op(8) : 8}
function nine(op = null) {return op ? op(9) : 9}

function plus(r) {return (l) => l + r}
function minus(r) {return (l) => l - r}
function times(r) {return (l) => l * r}
function dividedBy(r) {return (l) => Math.floor(l / r)}