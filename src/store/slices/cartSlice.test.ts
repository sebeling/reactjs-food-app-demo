import { cartSlice, cartActions } from './cartSlice';

describe('cart reducer', () => {
  const initialState = {
    items: [
      {
        item: {
          id: 'mi-1',
          slug: 'classic-mac-and-cheese',
          name: 'Classic Mac & Cheese',
          price: 8.99,
          description:
            'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
          image: 'images/menu-items/mac-and-cheese.jpg',
          type: 'appetizer',
        },
        quantity: 2,
        total: 17.98,
      },
    ],
  };

  it('should add 1 to quantity of existing item when addItemToCart is called', () => {
    const nextState = cartSlice.reducer(
      initialState,
      cartActions.addItemToCart(initialState.items[0].item)
    );

    expect(nextState.items[0].quantity).toEqual(3);
  });

  it('should add a new item with a quantity of 1 when addItemToCart is called', () => {
    const newItemId = 'mi-unit-test';

    const newItem = { ...initialState.items[0].item };
    newItem.id = newItemId;

    const nextState = cartSlice.reducer(
      initialState,
      cartActions.addItemToCart(newItem)
    );

    expect(
      nextState.items.find((cartItem) => cartItem.item.id === newItemId)
        ?.quantity
    ).toEqual(1);
  });

  it('should decrement the quantity of an existing item when removeItemFromCart is called', () => {
    const nextState = cartSlice.reducer(
      initialState,
      cartActions.removeItemFromCart(initialState.items[0].item.id)
    );

    expect(nextState.items[0].quantity).toEqual(1);
  });

  it('should not change the state when removeItemFromCart is called for a nonexisting item', () => {
    const nextState = cartSlice.reducer(
      initialState,
      cartActions.removeItemFromCart('dummy-item-id')
    );

    expect(nextState).toEqual(initialState);
  });

  it('should remove item with a quantity of less than 1 when removeItemFromCart is called', () => {
    const updatedInitialState = {
      items: [
        {
          item: {
            id: 'mi-1',
            slug: 'classic-mac-and-cheese',
            name: 'Classic Mac & Cheese',
            price: 8.99,
            description:
              'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
            image: 'images/menu-items/mac-and-cheese.jpg',
            type: 'appetizer',
          },
          quantity: 1,
          total: 8.99,
        },
      ],
    };

    const nextState = cartSlice.reducer(
      updatedInitialState,
      cartActions.removeItemFromCart(updatedInitialState.items[0].item.id)
    );

    expect(nextState.items.length).toEqual(0);
  });
});
