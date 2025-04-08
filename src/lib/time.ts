"use client";
import {
  format,
  formatDistanceToNowStrict,
  differenceInMinutes,
  isSameYear,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";

function utcToLocal(utc: string): Date {
  const date = new Date(utc + "Z");
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return toZonedTime(date, localTimeZone);
}

export function utcToAbsolute(utc: string): string {
  const local = utcToLocal(utc);
  const sameYear = isSameYear(local, new Date());
  return format(
    local,
    sameYear ? "MMM dd 'at' HH:mm" : "MMM dd, yyyy 'at' HH:mm"
  );
}

export function utcToRelative(utc: string): string {
  const local = utcToLocal(utc);
  const diff = differenceInMinutes(new Date(), local);
  let relative = "Just now";
  if (diff) {
    relative = formatDistanceToNowStrict(local, { addSuffix: true });
  }
  if (diff >= 1440) {
    relative = utcToAbsolute(utc);
  }
  return relative;
}
