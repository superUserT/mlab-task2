const nums = [3, 7, 2, 5, 10, 6];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}

console.log(max);
