import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header rays hero>
        <h1 class="text-5xl font-normal tracking-wide">Hi, I'm <span class="name">David!</span> 👋🏻</h1>
        <h2 class="text-2xl font-light tracking-wide">
          but friends just call me <span title="saws-bee" class="pronounce">sosby</span>
        </h2>
      </Header>
      <main class="container mx-auto">
        <div class="bg-blend-lighten bg-white bg-opacity-5 rounded-lg m-5 p-5">
          <h1 class="text-2xl font-normal tracking-wide">Thanks for Stopping By</h1>
        </div>
      </main>
    </>
  );
}
