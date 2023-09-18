import ContactForm from "@/components/ContactForm.tsx";
import Header from "@/components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header rays hero>
        <h1 class="text-4xl sm:text-5xl font-normal tracking-wide">
          Hi, I'm <span class="name">David!</span> 👋🏻
        </h1>
        <h2 class="text-xl sm:text-2xl font-light tracking-wide">
          but friends just call me{" "}
          <span title="saws-bee" class="pronounce">sosby</span>
        </h2>
      </Header>
      <div class="container mx-auto mt-5 px-5 flex gap-5 flex-col md:flex-row">
        <main class="md:w-1/2 text-lg font-light tracking-wide center p-5">
          <p>I'm a full-stack engineer that loves to build apps that make users happy and productive.</p>
          <h3 class="text-lg font-light tracking-wide">Have a project in mind? Let's talk!</h3>
        </main>
        <aside class="md:w-1/2">
          <ContactForm />
        </aside>
      </div>
    </>
  );
}
