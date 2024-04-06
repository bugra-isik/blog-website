export default function Header() {
  return (
    <section className={`w-full relative h-[32rem] overflow-hidden`}>
      <div
        className={`absolute h-2/3 w-1/3 px-10 left-16 flex flex-col  gap-4 justify-center`}
      >
        <div className={`text-xl text-white/50`}>FEATURED ARTICLE</div>
        <div className={`font-bold font-libre text-4xl`}>
          World’s Most Dangerous Technology Ever Made.
        </div>
        <div className={`flex text-white/50 gap-4`}>
          <p>Ralph Hawkins</p>
          <p> May 7, 2019 (10 mins read)</p>
        </div>
        <div className={`line-clamp-4`}>
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </div>
      </div>
      <img
        src="Article-Image.png"
        alt=""
        className={` object-cover w-full`}
      />
    </section>
  )
}
