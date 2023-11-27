const MONTH = new Date().getMonth();

const SPRING_SEASON_ID = 1;
const FALL_SEASON_ID = 2;
const FALL_WINTER_ID = 3;
const WINTER_WINTER_ID = 4;
// const SUMMER_SEASON_ID = 3;

export const defaultWsList = [
  { value: FALL_SEASON_ID, label: 'entity.ws.select.option.fall' },
  { value: SPRING_SEASON_ID, label: 'entity.ws.select.option.spring' },
  { value: WINTER_WINTER_ID, label: 'entity.ws.select.option.winter_winter' },
  { value: FALL_WINTER_ID, label: 'entity.ws.select.option.fall_winter' },
  // { value: SUMMER_SEASON_ID, label: 'selector.SummerSemester' },
];

export const defaultWs = MONTH < 8 ? SPRING_SEASON_ID : FALL_SEASON_ID;
