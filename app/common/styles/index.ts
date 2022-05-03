
const pallette: string[] = [
  '#fff', // 0
  '#000', // 1
  'rgb(246, 244, 252)', // 2
  '#1883FC', // 3
  '#ff0000', // 4
  '#92989E', // 5
  '#e9eaec', // 6
  '#92989E', // 7
  '#F2F2F2', // 8
];

const colors = {
  basic: {
    white: pallette[0],
    black: pallette[1]
  },
  text: {
    white: pallette[0],
    black: pallette[1],
    red: pallette[4],
    paleGrey: pallette[7]
  },
  icon: {
    white: pallette[0],
    black: pallette[1]
  },
  background: {
    primary: pallette[2],
    paleGrey: pallette[8],
  },
  button: {
    primary: pallette[3],
    disabled: pallette[6],
  }
};

export { colors };