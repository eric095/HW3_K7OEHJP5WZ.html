import Head from "next/head";

import Navbar from "./navbar";
import Header from "./header";

function Layout(props) {
  
  return (
    <div className="layout">
      <GlobalHeader />
      <Navbar />
      <Header/>
          

      {props.children}
      </div>
      
    );
    
}
export default Layout;
function GlobalHeader() {
  return (
    <Head>
      <title>Trial</title>
      <link rel="stylesheet" href="/css/global.css" />
    </Head>
  );
}
