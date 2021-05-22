const Headline = () => {
  return (
    <section className="bg-home-headline bg-cover bg-no-repeat h-full flex justify-between">
      <article className="
        p-4 text-white w-11/12
        md:w-3/5
        lg:m-12 lg:w-2/5">
        <h1 className="
          text-xl mb-4
          md:text-4xl
          lg:text-7xl lg:font-semibold lg:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p className="
          text-xs font-extralight leading-loose
          lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="
          bg-black mt-4 text-white py-3 w-40 rounded-3xl shadow-2xl focus:outline-none
          lg:mt-14 lg:w-60">
          Lorem
        </button>
      </article>
      <img
        src="images/headline.png" alt="headline"
        className="
        hidden md:block w-1/3 absolute right-10 top-30 rounded-xl shadow-2xl
        lg:w-2/5 lg:mr-20 lg:mt-36"
      />
    </section>
  )
}

export default Headline