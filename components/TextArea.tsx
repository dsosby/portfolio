import { JSX } from "preact";

export type TextAreaProps = JSX.HTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: TextAreaProps) {
  return (
    <div>
      <textarea class="appearance-none border-1 border-white rounded w-full p-2 bg-blue focus:outline-none focus:border-mint"
        rows={5}
        {...props}
      />
    </div>
  );
}
