interface Props {
  children: string;
  href: string;
}

export default function Button({ children, href }: Props) {
  return (
    <a
      href={href}
      className="
      flex justify-center items-center py-2 px-5 bg-gradient-to-br
      from-sky-400 to-sky-700 rounded-md text-white
      inset-shadow-gray-700 dark:bg-gradient-to-br 
      dark:from-gray-900 dark:to-gray-600 shadow-md cursor-pointer hover:opacity-80 
      active:scale-96 transition-transform duration-100
    "
    >
      {children}
    </a>
  );
}
