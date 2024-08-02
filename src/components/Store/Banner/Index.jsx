const Banner = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <img
          src="/banner-goodyear.png"
          alt="Banner Goodyear"
          className="w-full"
          style={{ maskImage: 'linear-gradient(transparent, black 50%, transparent)' }}
        />
      </div>
    </section>
  )
}

export default Banner
