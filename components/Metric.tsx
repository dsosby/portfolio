export type MetricProps = {
  title: string;
  value: string;
}

export default function Metric({ title, value }: MetricProps) {
  return (
    <div class="flex flex-col items-center justify-center m-5 p-5">
      <p class="text-4xl font-black">{value}</p>
      <p class="text-sm font-light">{title}</p>
    </div>
  );
}