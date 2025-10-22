import { useCounter } from "./ui/use-counter";

interface CounterNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CounterNumber({ 
  end, 
  duration = 2000, 
  suffix = "", 
  className = "",
  style 
}: CounterNumberProps) {
  const { count, ref } = useCounter(end, duration);

  return (
    <span ref={ref} className={className} style={style}>
      {count}{suffix}
    </span>
  );
}
