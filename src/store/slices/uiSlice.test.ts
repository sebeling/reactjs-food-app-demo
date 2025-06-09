import { uiSlice, uiActions } from './uiSlice';

describe('ui reducer', () => {
  it('should handle toggleCartModal', () => {
    const initialState = { isCartModalVisible: false };
    const nextState = uiSlice.reducer(
      initialState,
      uiActions.toggleCartModal()
    );
    expect(nextState.isCartModalVisible).toEqual(true);
  });
});
