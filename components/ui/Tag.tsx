interface TagProps {
  tag: string;
  color?: string;
}

const colors: Record<string, string> = {
  gray: `px-2 py-1 rounded-md poppins-font text-xs font-medium bg-gray-50 dark:bg-gray-800 
    text-gray-600 dark:text-gray-300
    ring-2 ring-inset ring-gray-200 dark:ring-gray-600 `,

  sky: `px-2 py-1 rounded-md poppins-font text-xs font-medium bg-sky-50 dark:bg-sky-950 
    text-sky-600 dark:text-sky-400
    ring-2 ring-inset ring-sky-200 dark:ring-sky-800`,

  emerald: `px-2 py-1 rounded-md poppins-font text-xs font-medium bg-emerald-50 dark:bg-emerald-950 
    text-emerald-600 dark:text-emerald-400
    ring-2 ring-inset ring-emerald-200 dark:ring-emerald-800`,
};

const Tag = ({ tag, color = "gray" }: TagProps) => {
  return <span className={colors[color] || colors.gray}>{tag}</span>;
};

export default Tag;
