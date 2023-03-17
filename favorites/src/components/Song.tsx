import { BsPlayCircleFill } from "react-icons/bs";

interface Props {
  top: number;
  title: string;
  author: string;
  image: string;
  link: string;
}

export const Song = ({ top, title, author, image, link }: Props) => {
  return (
    <section className="bg-stone-900 p-8 rounded-xl w-[400px] shadow-lg">
      <img
        src={`/songs/${image}`}
        alt="as it was"
        className="w-full h-[200px] object-cover rounded-lg"
      />

      <div className="mt-8 flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <h1 className="text-green-500 text-6xl font-extrabold">{top}</h1>
          <div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <h3 className="text-stone-500 font-medium text-sm">{author}</h3>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="peer text-5xl hover:text-green-400 hover:scale-110 transition-all inline-block cursor-pointer"
        >
          <BsPlayCircleFill />
        </a>
      </div>
    </section>
  );
};
