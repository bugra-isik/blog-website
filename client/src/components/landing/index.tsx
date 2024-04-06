import Navbar from "../Navbar"
import BottomSection from "./BottomSection"
import EditorsPick from "./EditorsPick"
import Header from "./Header"
import MidSection from "./MidSection"

export default function Landing() {
  return (
    <main
      className={`bg-c2 min-h-screen px-16 drop-shadow-2xl flex flex-col items-center gap-12`}
    >
      <Navbar />
      <Header />
      <EditorsPick />
      <MidSection />
      <BottomSection />
    </main>
  )
}
