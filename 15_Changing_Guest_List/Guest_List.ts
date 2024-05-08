let Guest_list: string[] = [
  "Ashna Ghazanfar Ali",
  "Celia Amin Merchant",
  "Hareem Fatima",
];
for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear " +
      Guest_list[i] +
      "\n\n It is our pleasure to invite you in our party\n\nThank You!\n\n"
  );
}

let absent_guest: string = "Hareem Fatima";
let new_guest: string = "Filza Noor";

Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear " +
      Guest_list[i] +
      "\n\n It is our pleasure to invite you in our party\n\nThank You!\n\n"
  );
}
console.log(`Mr. ${absent_guest} is not coming to our party`);
