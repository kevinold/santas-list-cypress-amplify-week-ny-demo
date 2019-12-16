export const initialState = {
  kids: [],
  gifts: [],
  loading: true,
  error: false,
  selectedKidId: null
};

export function reducer(state, action) {
  switch (action.type) {
    case "setSelectedKid":
      return {
        ...state,
        selectedKidId: action.selectedKidId
      };
    case "fetchKidsSuccess":
      return {
        ...state,
        kids: action.kids,
        loading: false
      };
    case "fetchGiftsSuccess":
      return {
        ...state,
        gifts: action.gifts,
        loading: false
      };
    case "addGiftFromSubscription":
      return {
        ...state,
        gifts: [action.gift, ...state.gifts]
      };
    case "fetchGiftsError":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "fetchKidsError":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      throw new Error();
  }
}
