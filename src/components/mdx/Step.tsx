export default function Step({
  number,
  title,
}: {
  number: number;
  title: string;
}): JSX.Element {
  return (
    <div className="step flex items-center mt-8">
      <div className="flex items-center justify-center font-bold rounded-full h-8 w-8 text-primary-40 border border-gray-200 dark:border-gray-700/50">
        {number}
      </div>
      <h3 className="ml-3 tracking-tight font-bold">{title}</h3>
    </div>
  );
}
