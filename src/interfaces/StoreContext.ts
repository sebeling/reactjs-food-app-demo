import { type MenuContext } from './MenuContext';
import { type CartContext } from './CartContext';
import { type UIContext } from './UIContext';

export interface StoreContext {
  menu: MenuContext;
  cart: CartContext;
  ui: UIContext;
}
