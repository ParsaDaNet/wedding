export type AttendanceStatus = 'ATTENDING' | 'DECLINED';

export interface Guest {
  name: string;
  attendance: AttendanceStatus;
}

export interface RsvpFormValues {
  partyName: string;
  guests: Guest[];
  songRequest?: string;
  messageForCouple?: string;
}