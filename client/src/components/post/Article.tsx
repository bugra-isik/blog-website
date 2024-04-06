export default function Article() {
  return (
    <section className={`w-full flex flex-col items-center gap-16`}>
      <img
        src="Article-Image.png"
        alt=""
        className={` object-cover w-full h-[32rem]`}
      />
      <div className={`w-[1024px] flex items-center flex-col gap-8 mb-32`}>
        <h1 className={`font-bold text-[42px] w-2/3 font-libre text-center`}>
          The World’s Most Dangerous Technology Ever Made.
        </h1>
        <div className={`flex text-white/50 gap-4`}>
          <p>Ralph Hawkins</p>
          <p> May 7, 2019 (10 mins read)</p>
        </div>
        <ul className={`text-white/50 flex flex-wrap gap-4`}>
          <li>#technology</li> <li>#tech</li> <li>#career</li>
        </ul>
        <div className={`flex flex-col gap-4`}>
          <p>
            Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
            Aliquip consectetur labore consectetur dolor exercitation est minim
            quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim
            Lorem dolore cupidatat pariatur ex tempor.
          </p>{" "}
          <p>
            Duis ea excepteur proident ex commodo irure est. Nisi commodo qui
            pariatur enim sint laborum consequat enim in officia. Officia fugiat
            incididunt commodo et mollit aliqua non aute.
          </p>{" "}
          <p>
            Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis
            exercitation sit velit duis. Est Lorem labore consectetur minim sit
            eu eiusmod mollit velit. Consectetur voluptate ex amet id eiusmod
            laborum irure. Aliquip ad qui id exercitation irure amet commodo
            nisi quis.
          </p>{" "}
          <p>
            Occaecat minim incididunt eiusmod nostrud veniam quis culpa. Nisi
            ipsum et consequat id deserunt excepteur. Cillum non pariatur culpa
            ut occaecat laboris eu. Ullamco ad Lorem et elit laboris eu qui
            irure nulla qui culpa et. Cupidatat sunt ipsum proident aute
            exercitation do tempor aliqua cupidatat quis non exercitation.
            Adipisicing do minim dolore nulla mollit.
          </p>{" "}
          <p>
            Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.
            Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor
            qui ea ad quis. Enim fugiat cillum enim ad occaecat sint qui elit
            labore mollit sunt laborum fugiat consequat. Voluptate labore sunt
            duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad
            enim enim id. Aliquip do veniam ad excepteur ad cillum qui deserunt
            nostrud sunt aliqua duis sunt occaecat. Laborum incididunt commodo
            ullamco proident quis.
          </p>
        </div>
      </div>
    </section>
  )
}
