import { outputMessage } from "../../global/globalFunctions";

export type BaseMessage = {
  SPAWN: string;
};

export class BaseModel {
  public readonly name: string;
  protected spawned: boolean;
  protected messages: BaseMessage;

  constructor(name: string) {
    this.name = name;
    this.spawned = false;
    this.messages = this.setMessages();
  }
  protected setMessages(): BaseMessage {
    return {
      SPAWN: `${this.name} spawns in the world.`,
    };
  }

  public showStats(): void {}

  public spawn(): void {
    this.spawned = true;
    outputMessage(this.messages.SPAWN);
  }

  public hasSpawned(): boolean {
      return this.spawned;
  }
}
