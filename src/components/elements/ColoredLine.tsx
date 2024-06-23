interface ColoredLineProps {
  color: string;
}

const ColoredLine = ({ color }: ColoredLineProps) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
);

export default ColoredLine;
