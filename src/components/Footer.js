export default function Footer() {
  return (
    <footer className="bg-brightBackground dark:bg-darkBackground text-brightText dark:text-darkText text-center p-4">
      <p>
        &copy; {new Date().getFullYear()} Fantasy Premier League. All rights
        reserved.
      </p>
    </footer>
  );
}
