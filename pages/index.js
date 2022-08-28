import Head from "next/head";
import Banner from "../components/layouts/Banner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>thecodei.com</title>
      </Head>

      <div className="w-full flex flex-col justify-center items-center pt-8">
        <Banner
          subject="CS Fundamentals Mixed Recall"
          body="There is more to come, stay up to date by visit thecodei.com "
        />
        <h1 className="text-xl mt-4 font-bold tracking-widest">
          CS Fundamentals
        </h1>
        <h2 className="text-lg tracking-wide">Go Learn</h2>
      </div>
    </div>
  );
}
