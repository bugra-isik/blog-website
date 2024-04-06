import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import Navbar from "../Navbar"

export default function Tags() {
  const [inputValue, setInputValue] = useState<string>()

  return (
    <main className={`bg-c1 px-16 text-white`}>
      <div
        className={`bg-c2 min-h-screen px-16 drop-shadow-2xl flex flex-col items-center gap-12`}
      >
        <Navbar />
        <section className={`grow w-full flex flex-col items-center gap-16`}>
          <div
            className={`relative flex items-center justify-center w-full mt-32`}
          >
            <input
              type="text"
              placeholder="Find the topics you care about..."
              className={`w-1/2 border rounded-3xl focus:outline-none h-16 px-8 text-black`}
              onChange={(e) =>
                setInputValue(e.target.value ? e.target.value : undefined)
              }
            />
            <CiSearch className={`text-3xl relative right-16 text-black`} />
          </div>
          {inputValue == undefined ? (
            <div
              className={`flex flex-wrap w-2/3 gap-x-4 gap-y-6 justify-center select-none *:cursor-pointer`}
            >
              <a className={`px-6 py-3 border rounded-3xl`}>#technology</a>
            </div>
          ) : (
            <div className={`flex flex-col w-2/3 mb-32 mt-16 gap-16`}>
              <div
                className={`h-[200px] flex justify-between cursor-pointer gap-10`}
              >
                <img
                  src="Rectangle2.png"
                  alt=""
                />
                <div
                  className={`left-16 flex flex-col bg-c2 gap-4 justify-between`}
                >
                  <div className={`text-xl text-white/50`}>
                    FEATURED ARTICLE
                  </div>
                  <div className={`font-bold font-libre text-4xl`}>
                    World’s Most Dangerous Technology Ever Made.
                  </div>
                  <div className={`flex text-white/50 gap-4`}>
                    <p>Ralph Hawkins</p>
                    <p> May 7, 2019 (10 mins read)</p>
                  </div>
                  <div className={`line-clamp-1`}>
                    Proident aliquip velit qui commodo officia qui consectetur
                    dolor ullamco aliquip elit incididunt. Ea minim ex
                    consectetur excepteur. Ex laborum nostrud mollit sint
                    consectetur Lorem amet aliqua do enim. Commodo duis dolor
                    anim excepteur. In aliquip mollit nulla consequat velit
                    magna.
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
