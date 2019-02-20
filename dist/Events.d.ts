import GameEvent from './GameEvent';
declare type EventCallback = (event: GameEvent) => void;
export default class Events {
    static addListener(onEvent: EventCallback): void;
    static emit(event: GameEvent): void;
    private static callbacks;
}
export {};
