import { type MenuItemInfo } from './MenuItemInfo';

export interface CartItem {
  item: MenuItemInfo;
  quantity: number;
  total: number;
}
