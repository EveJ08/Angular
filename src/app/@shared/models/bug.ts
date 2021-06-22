export interface Bug {
  _id: string;
  title: string;
  description: string;
  status: BugStatus;
}

export enum BugStatus {
  Open = "open",
  InProgress = "in-progress",
  Fixed = "fixed"
}