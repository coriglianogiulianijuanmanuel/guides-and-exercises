"use strict";

function printList1(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printList2(list) {
  console.log(list.value);

  if (list.next) printList2(list.next);
}

function printReverseList1(list) {
  let array = [];
  let tmp = list;

  while (tmp) {
    array.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

function printReverseList2(list) {
  if (list.next) printReverseList2(list.next);

  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList1(list);
printList2(list);

printReverseList1(list);
printReverseList2(list);
