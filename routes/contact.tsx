import { Handlers } from "$fresh/server.ts";
import Header from "@/components/Header.tsx";
import Logo from "@/components/Logo.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();

    const name = form.get("name") ?? "";
    const email = form.get("email");
    const message = form.get("message") ?? "";

    if (email) {
      try {
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SENDGRID_API_KEY")}`,
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{
                  email: Deno.env.get("SENDGRID_TO_EMAIL"),
                }],
                dynamic_template_data: {
                  name,
                  email,
                  message,
                },
              },
            ],
            from: {
              email: Deno.env.get("SENDGRID_FROM_EMAIL"),
            },
            template_id: Deno.env.get("SENDGRID_CONTACT_TEMPLATE_ID") ??
              "d-bd99276a1f994be687fd00a1156304f0",
          }),
        });

        console.log(`SendGrid Contact: ${response.status}`);
      } catch (err: unknown) {
        console.error(err);
      }
    }

    const headers = new Headers();
    headers.set("location", "/contact");
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md h-screen mx-auto flex flex-col items-center justify-center">
          <Logo size="large" />
          <h1 class="text-4xl font-bold">Thank you!</h1>
          <p class="my-4">
            We'll be in touch soon.
          </p>
          <a href="/" class="underline mt-5">Back Home</a>
        </div>
      </div>
    </>
  );

}