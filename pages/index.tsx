import Navbar from "./Navbar";
import Banner from "./Banner";
import Content from "./Content";

export default function Home() {
  return (
    <>
      <div className="bg-slate-900 w-full h-auto">
        <Navbar />
        <Banner />
      </div>
      <Content />
    </>
  );
}
