import { ComponentChildren } from "preact";

import Input from "@/components/Input.tsx";
import TextArea from "@/components/TextArea.tsx";
import Button from "@/components/Button.tsx";

function FieldBlock({ children }: { children: ComponentChildren }) {
  return (
    <div class="flex flex-col gap-1">
      {children}
    </div>
  );
}

export default function ContactForm() {
  return (
    <form class="w-full max-w-sm">
      <div class="flex flex-col gap-3">
        <FieldBlock>
          <label class="block" for="name">Name</label>
          <Input id="name" name="name" type="text" />
        </FieldBlock>
        <FieldBlock>
          <label class="block" for="email">Email</label>
          <Input id="email" name="email" type="email" aria-required="true" required={true} />
        </FieldBlock>
        <FieldBlock>
          <label class="block" for="message">Message</label>
          <TextArea id="message" name="message" />
        </FieldBlock>
        <div class="flex flex-row justify-end">
          <Button type="submit">Let's Go!</Button>
        </div>
      </div>
    </form>
  );
}
