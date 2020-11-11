const ASCII_LOWER_A_CODE = 97;
const ASCII_LOWER_Z_CODE = 122;

// The first thing I thought and a not-elegant solution :/
for (let i = ASCII_LOWER_A_CODE; i <= ASCII_LOWER_Z_CODE; i++) {
  for (let j = ASCII_LOWER_A_CODE; j <= ASCII_LOWER_Z_CODE; j++) {
    for (let k = ASCII_LOWER_A_CODE; k <= ASCII_LOWER_Z_CODE; k++) {
      const combination =
        String.fromCharCode(i) +
        String.fromCharCode(j) +
        String.fromCharCode(k);

      console.log('combination', combination);
    }
  }
}
