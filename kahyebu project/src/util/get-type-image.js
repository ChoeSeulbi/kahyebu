import drink from "./../assets/ic_drink.png";
import food from "./../assets/ic_food.png";

import shopping from "./../assets/ic_shopping.png";
import transport from "./../assets/ic_transport.png";
import pin from "./../assets/ic_pin.png";

export function getTypeImg(typeId) {
  switch (typeId) {
    case 1:
      return drink;
    case 2:
      return food;
    case 3:
      return shopping;
    case 4:
      return transport;
    case 5:
      return pin;
    default:
      return null;
  }
}
