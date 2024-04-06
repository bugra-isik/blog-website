import { useSearchParams } from "react-router-dom"
import Navbar from "../Navbar"
import Article from "./Article"

export default function Post() {
  const [searchParams] = useSearchParams()
  const postId = searchParams.get("id")

  return (
    <main className={`bg-c1 px-16 text-white`}>
      <div
        className={`bg-c2 min-h-screen px-16 drop-shadow-2xl flex flex-col items-center gap-12`}
      >
        <Navbar />
        <Article />
      </div>
    </main>
  )
}
