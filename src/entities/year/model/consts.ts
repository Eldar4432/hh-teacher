const NOW = new Date().getFullYear();
const MONTH = new Date().getMonth();

const FIRST_ID = (NOW % 100) - 4;
const SECOND_ID = (NOW % 100) - 3;
const THIRD_ID = (NOW % 100) - 2;
const FOURTH_ID = (NOW % 100) - 1;
const FIFTH_ID = NOW % 100;
const SIXTH_ID = (NOW % 100) + 1;

const FIRST_NAME = `${NOW - 4}-${NOW - 3}`;
const SECOND_NAME = `${NOW - 3}-${NOW - 2}`;
const THIRD_NAME = `${NOW - 2}-${NOW - 1}`;
const FOURTH_NAME = `${NOW - 1}-${NOW}`;
const FIFTH_NAME = `${NOW}-${NOW + 1}`;
const SIXTH_NAME = `${NOW + 1}-${NOW + 2}`;

export const defaultYearList = [
  { value: FIRST_ID, label: FIRST_NAME },
  { value: SECOND_ID, label: SECOND_NAME },
  { value: THIRD_ID, label: THIRD_NAME },
  { value: FOURTH_ID, label: FOURTH_NAME },
  { value: FIFTH_ID, label: FIFTH_NAME },
  { value: SIXTH_ID, label: SIXTH_NAME },
];

export const defaultYear = MONTH < 8 ? defaultYearList[3].value : defaultYearList[4].value;
export const defaultYearLabel = MONTH < 8 ? defaultYearList[3].label : defaultYearList[4].label;
