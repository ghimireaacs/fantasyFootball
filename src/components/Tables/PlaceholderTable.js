export default function PlaceholderTable({ title, content }) {
  return (
    <div className="bg-darkBackground text-whiteText p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
