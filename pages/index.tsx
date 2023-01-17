import Link from "next/link";

function Home() {
  return (
    <>
      <h1 className="title">Witamy na nasz stronie stronie !</h1>
      <div className="Appp">
        <h2 className="option">Wybierz kategorię, która Cię interesuję !</h2>
        <Link href="./Car">
          <h3 className="name">Samochody</h3>
        </Link>
        <Link href="./Computer">
          <h3 className="name">Komputery</h3>
        </Link>
        <Link href="./Flowers">
          <h3 className="name">Kwiaty</h3>
        </Link>
      </div>

      <article className="main">
        <h2>Oto krótka historia o nas</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </article>
    </>
  );
}

export default Home;
