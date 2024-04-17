import { BehaviorSubject } from 'rxjs';

export const ObservableSignal = <T>(initial: T) => {
	const state = new BehaviorSubject<T>(initial);

	const sink = <BehaviorSubject<T> & T>new Proxy(state, {
		get(target, prop, receiver) {
			return (
				[Symbol.toPrimitive, 'valueOf', 'toString'].includes(prop)
					? () => <T>state.value
					: <T>Reflect.get(target, prop, receiver)
			);
		}
	});


	const emitter = <(value: T) => void>state.next.bind(state);
	return <const>[sink, emitter];
};
