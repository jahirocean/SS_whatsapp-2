import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="#" />
      </Head>
      <Sidebar />
    </div>
  );
}
