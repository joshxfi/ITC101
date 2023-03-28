import Image from "next/image";

interface Props {
  className?: string;
  imgSrc: string;
  name: string;
  position: string;
}

export const Card = ({ className, imgSrc, name, position }: Props) => {
  return (
    <div
      className={`bg-secondary-300 rounded-xl shadow-lg max-w-[550px] p-8 relative z-10 ${className}`}
    >
      <div className="flex items-center gap-x-8">
        <Image
          src={imgSrc}
          height={96}
          width={96}
          alt="profile"
          className="bg-secondary-100 rounded-full"
        />
        <div>
          <h4 className="text-lg">{name}</h4>
          <p className="text-green-500">{position}</p>
        </div>
      </div>

      <p className="mt-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        ullam rerum magnam temporibus molestias nostrum natus blanditiis
        delectus, dicta velit laboriosam ipsum itaque
      </p>
    </div>
  );
};
