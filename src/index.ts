import { BehaviorSubject } from 'rxjs';

export const ObservableSignal = <T>(initial: T) => {
	const state = new BehaviorSubject<T>(initial);

	const sink = new Proxy(state, {
		get(target, prop, receiver) {
			if([Symbol.toPrimitive, 'valueOf', 'toString', 'get'].includes(prop)) {
				return () => state.value
			} else {
				return <T>Reflect.get(target, prop, receiver)
			};
		}
	}) as T & BehaviorSubject<T> & { get: () => T };

	const emitter = <(value: T) => void>state.next.bind(state);
	return <const>[sink, emitter];
};

