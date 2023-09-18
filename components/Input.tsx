import { JSX } from "preact";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <div>
      <input class="appearance-none border-1 border-white rounded w-full p-2 bg-blue focus:outline-none focus:border-mint"
        {...props}
      />
    </div>
  );
}
