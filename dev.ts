#!/usr/bin/env -S deno run -A --watch=static/,routes/
import "https://deno.land/std@0.201.0/dotenv/load.ts";

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

console.log(`SendGrid Email: ${Deno.env.get("SENDGRID_FROM_EMAIL")}`);

await dev(import.meta.url, "./main.ts", config);
