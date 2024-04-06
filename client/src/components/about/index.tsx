import Navbar from "../Navbar"

export default function About() {
  return (
    <main className={`bg-c1 px-16 text-white min-h-screen flex flex-col`}>
      <div
        className={`bg-c2 px-16 drop-shadow-2xl grow flex flex-col justify-between items-center gap-12`}
      >
        <Navbar />
        <section className={`my-32 grow`}>
          <div className={`flex flex-col gap-8 items-center`}>
            <p className={`text-3xl font-libre text-white/50`}>
              Just a web developer.
            </p>
          </div>
        </section>
      </div>
      <div
        className={`h-96 bg-c1 w-full flex flex-col items-center justify-center gap-4`}
      >
        <h1 className={`font-libre text-3xl `}>Want to connect?</h1>
        <p>Dive into my digital domain</p>
        <a
          href="https://www.devbugra.com/#about"
          target="_blank"
          className={`no-underline bg-[#fcba28] px-4 py-2 text-[#0f0d0e] w-fit rounded-lg font-black text-2xl`}
        >
          ./devbugra
        </a>
      </div>
    </main>
  )
}
