interface PropsHeaderTitle {
  title: string;
  text: string;
  backgroundClass?: string | null;
}

export default function HeaderTitle(props: PropsHeaderTitle) {
  const classBg = props.backgroundClass ? props.backgroundClass : "";
  const classText = props.text ? props.text : "";
  return (
    <div
      className={` ${classBg} bg-cover  flex items-center justify-center  `}
    >
      <div className="container mx-auto px-4 text-white text-center">
        <div
          className={` ${classText} text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-bold`}
        >
          {props.title}
        </div>
      </div>
    </div>
  );
}
