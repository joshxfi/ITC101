import { BsPlayCircleFill } from "react-icons/bs";

interface Props {
  top: number;
  title: string;
  artist: string;
  image: string;
  link: string;
}

export const Song = ({ top, title, artist, image, link }: Props) => {
  return (
    <section className="group bg-stone-900 p-8 rounded-xl w-[400px] shadow-lg">
      <div className="overflow-hidden transition-all">
        <img
          src={`/songs/${image}`}
          alt={title}
          className="w-full h-[200px] grayscale group-hover:grayscale-0 transition-all object-cover rounded-lg object-top group-hover:scale-110 duration-300"
        />
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <h1 className="text-green-500 text-6xl font-extrabold">{top}</h1>
          <div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <h3 className="text-stone-500 font-medium text-sm">{artist}</h3>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="peer text-5xl hover:text-green-500 transition-colors inline-block cursor-pointer"
        >
          <BsPlayCircleFill />
        </a>
      </div>
    </section>
  );
};
