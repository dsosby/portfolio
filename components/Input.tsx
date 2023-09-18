export type InputProps = {
  name: string;
  type: 'text' | 'email';
};

export default function Input({ name, type }: InputProps) {
  return (
    <div>
      <input class="appearance-none border-1 border-white rounded w-full p-2 bg-blue focus:outline-none focus:border-mint"
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
}
