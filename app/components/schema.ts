import { object, string, array, size, enums, optional } from 'superstruct';

export const RsvpStruct = object({
  partyName: size(string(), 2, Infinity),      // Minimum 2 characters
  guests: array(
    object({
      name: size(string(), 2, Infinity),
      attendance: enums(['ATTENDING', 'DECLINED']),
    })
  ),
  songRequest: optional(string()),
  messageForCouple: optional(string()),
});