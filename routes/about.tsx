import Header from "../components/Header.tsx";
import Metric from "../components/Metric.tsx";

export default function About() {
  return (
    <>
      <Header rays>
        <div class="container flex flex-row justify-between w-full">
          <Metric title="Years of Experience" value="15+" />
          <Metric title="Patents" value="2" />
          <Metric title="Languages" value="11" />
        </div>
      </Header>
      <main class="container mx-auto">
        <div class="bg-blend-lighten bg-white bg-opacity-5 rounded-lg m-5 p-5">
          <h1 class="text-2xl font-normal tracking-wide">About</h1>
          <p class="my-2">
            I'm an experienced software engineer specializing in user-facing
            applications and a love for building, learning and mentoring. In 2012,
            I took a position at Microsoft and moved my family to Seattle where I
            currently reside with my wonderful wife Becky and our two children.
          </p>
          <p class="my-2">
            Over 15 years of professional experience, I've been proud to deliver high-impact
            features in multiple languages, frameworks and environments
            including:
          </p>
          <ul class="list-disc mx-5 my-3">
            <li>Web, Mobile, Desktop</li>
            <li>
              TypeScript, JavaScript, F#, C#, Go, Java, C, Python, C++, PowerShell, Scheme
            </li>
            <li>React, Angular, Android, Qt, Windows</li>
          </ul>
          <p class="my-2">Let's build something together!</p>
        </div>
      </main>
    </>
  );
}

