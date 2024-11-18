import { RemoteControl } from "./remoteControl";
import { RoomLight } from "./devices";

const remote = new RemoteControl()
const roomLight =  new RoomLight()

remote.setCommand(0, {execute: roomLight.on, undo: roomLight.off}, {execute: roomLight.off, undo: roomLight.on})

// remote.offButtonPressed(0)
remote.onButtonPressed(0)
remote.undoPressed()