import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-darkBlack min-h-screen flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
