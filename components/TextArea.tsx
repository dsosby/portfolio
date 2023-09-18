export type InputProps = {
  name: string;
};

export default function TextArea({ name }: InputProps) {
  return (
    <div>
      <textarea class="appearance-none border-1 border-white rounded w-full p-2 bg-blue focus:outline-none focus:border-mint"
        name={name}
        id={name}
        rows={5}
      />
    </div>
  );
}
