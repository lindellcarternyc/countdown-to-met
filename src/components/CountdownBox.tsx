const CountdownBox = ({ time, label }: { time: number; label: string }) => {
  return (
    <div>
      <p>{`${time}`.padStart(2, "0")}</p>
      <span>{label}</span>
    </div>
  );
};

export default CountdownBox;
