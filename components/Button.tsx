import { JSX } from "preact";

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const colors = props.type === "submit" ? "bg-mint hover:bg-shamrockGreen" : "bg-white text-prussianBlue";

  return (
    <button
      {...props}
      class={`px-5 py-2 border-white border-1 rounded ${colors}`}
    />
  );
}
