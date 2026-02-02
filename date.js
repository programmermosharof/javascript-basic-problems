
// now.getDate();     
// now.getMonth();    
// now.getFullYear();

// now.getHours();   // 0–23
// now.getMinutes();// 0–59

// now.getSeconds();// 0–59
// now.getTime();

// Example 1: Current date & time

const now = new Date();
console.log(now);

// Example 2: ISO date string from readable time

const isoTime = "2026-02-02T17:27:16.129Z";
const date = new Date(isoTime);

console.log(date.toLocaleString());

// 
//  Example 3: Extracting separate data

const d = new Date();

const year = d.getFullYear();
const month = d.getMonth() + 1; // +1 because JS month 0 based
const day = d.getDate();

console.log(year, month, day);
// Example 4: Greeting message using time

const nows = new Date();
const hour = nows.getHours();

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// Example 5: Two time difference (minutes ago)

const postTime = new Date("2026-02-02T17:20:00Z");
const nowa = new Date();

const diffMs = nowa - postTime; // milliseconds
const diffMinutes = Math.floor(diffMs / 1000 / 60);

console.log(diffMinutes, "minutes ago");
