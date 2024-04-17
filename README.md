# Observable Signal

A hybrid state manager implementing the Signal and the Observable interfaces to support imperative-reactive and functional-reactive programming paradigms.

## Example

```ts
import { ObservableSignal } from 'observable-signal';
import { map } from 'rxjs/operators';
import { rml } from 'rimmel';

export const Button = () => {
  const [ state, setState ] = ObservableSignal(0);

  const derivedState = state.pipe(
    map(x => x*2)
  );

  return rml`
    <button onclick="${(e: Event) => setState(state +1)}">Increment</button> 
    <button onclick="${(e: Event) => state.next(0)}">Zero</button>

    <hr>

    Master state: <span>${state}</span><br>
    Derived state: <span>${derivedState}</span><br>
  `;
};

document.body.innerHTML = Button();
```

## Playground

https://stackblitz.com/edit/observable-signal
