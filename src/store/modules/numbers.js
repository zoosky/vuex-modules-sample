export const state = {
  safelyStoredNumber: 0
};

const getters = {
  safelyStoredNumber: state => state.safelyStoredNumber,
  storedNumberMatches(state) {
    return matchNumber => {
      return state.safelyStoredNumber === matchNumber;
    };
  }
  // Shorthand:
  // storedNumberMatches: state => matchNumber => state.safelyStoredNumbers === matchNumber
};

export default {
  state,
  getters
};
