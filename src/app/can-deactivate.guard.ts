import { CanDeactivateFn } from '@angular/router';
import { CakeCartComponent } from './cake-cart/cake-cart.component';


export const canDeactivateGuard: CanDeactivateFn<CakeCartComponent> = (component:CakeCartComponent, currentRoute, currentState, nextState) => {
  return component.canDeactivate();
};

