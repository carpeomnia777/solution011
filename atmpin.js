//atm all 4 or 6 digit Pin codes and pin codes can only be 4 digits or six digits, no more or less.
// if valid length and all ints return true
//if not 4 or 6 digits and not ints
function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
      return false;
    }
    for (let i = 0; i < pin.length; i++) {
      if (pin[i] < '0' || pin[i] > '9') {
        return false;
      }
    }
    return true;
  }