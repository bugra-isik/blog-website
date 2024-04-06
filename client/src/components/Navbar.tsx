import { Stack } from "@mui/material"
import { CiSearch } from "react-icons/ci"

export default function Navbar() {
  return (
    <nav className={`flex w-full py-8 items-center justify-between text-xl`}>
      <div className={`flex items-center gap-16`}>
        <a
          href="http://www.devbugra.com"
          className={`no-underline bg-c1/50 px-4 py-2 rounded-lg font-black text-2xl`}
        >
          ./devbugra
        </a>
        <ul className={`items-center gap-8 flex`}>
          <a
            href="/"
            className={`cursor-pointer`}
          >
            Home
          </a>
          <a
            href="/tags"
            className={`cursor-pointer`}
          >
            Tags
          </a>
          <a
            href="/about"
            className={`cursor-pointer`}
          >
            About
          </a>
        </ul>
      </div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={4}
      >
        <CiSearch className={`text-3xl text-white`} />
        <button
          className={`bg-c1/50 px-4 py-2 border border-white rounded-lg hover:bg-white/10 transition-colors`}
        >
          Add post
        </button>
      </Stack>
    </nav>
  )
}
