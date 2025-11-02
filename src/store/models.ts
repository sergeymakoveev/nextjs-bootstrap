type DigitString = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type YearString = `${'19' | '20'}${DigitString}${DigitString}`;

// type MinutesString = `${'0' | '1' | '2' | '3' | '4' | '5'}${DigitString}`;
// type SecondsString = MinutesString;
// prettier-ignore
// type HourString = '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23';

// prettier-ignore
type DayString = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' |'14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31';
// prettier-ignore
type MonthString = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
type DateSting = `${YearString}-${MonthString}-${DayString}`;
type DateTimeString = `${DateSting}T${number}:${number}:${number}Z`;

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  date: DateSting;
  likeCount?: number;
};

export type Author = {
  id: number;
  name: string;
};

export type Comment = {
  id: number;
  postId: number;
  authorId: number;
  content: string;
  date: DateTimeString;
};
