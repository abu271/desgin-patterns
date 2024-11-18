export interface command {
  execute(): void
  undo(): void
}