import { command } from "./command";

export class RemoteControl {
  private onCommands: command[] = [];
  private offCommands: command[] = [];
  private undoCommand: any = null;
 

  public setCommand(slot:number, onCommand:any, offCommand:any): void {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  public onButtonPressed (slot:number): void {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  public offButtonPressed (slot:number): void {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  public undoPressed (): void {
    this.undoCommand.undo()
  }
}