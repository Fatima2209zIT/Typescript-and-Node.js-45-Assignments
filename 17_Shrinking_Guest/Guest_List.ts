let Guest_list: string[] = [
  "Ashna Ghazanfar Ali",
  "Celia Amin Merchant",
  "Hareem Fatima",
];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "Dear " +
//       Guest_list[i] +
//       "\n\n It is our pleasure to invite you in our party\n\nThank You!\n\n"
//   );
// }

let absent_guest: string = "Hareem Fatima";
let new_guest: string = "Filza Noor";

Guest_list[0] = new_guest;
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "Dear " +
//       Guest_list[i] +
//       "\n\n It is our pleasure to invite you in our party\n\nThank You!\n\n"
//   );
// }
console.log(`Mr. ${absent_guest} is not coming to our party`);

console.log("Good News! We find a big Table so we are inviting 3 more guests.");
Guest_list.unshift("Alina Javed");
Guest_list.splice(2, 0, "Ammara Mutiullah");
Guest_list.push("Khadija Tariq");
for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear " +
      Guest_list[i] +
      "\n\n It is our pleasure to invite you in our party\n\nThank You!\n\n"
  );
}
console.log(
  "\nSorry we can not arrange a big table,only two guest will be invited."
);

while (Guest_list.length > 2) {
  let remove_guest = Guest_list.pop();
  console.log(`Sorry Dear ${remove_guest}, You are not invited for Dinner.`);
}

for (let i=0; i<Guest_list.length; i++) {
  console.log(
    "Dear" + Guest_list[i] + ", \n\nYou are still invited.\n\nThank You!\n\n"
  );
}
Guest_list.splice(0, 2);
console.log(Guest_list);
