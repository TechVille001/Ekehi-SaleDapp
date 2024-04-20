import Menu from "./homepageComponents/menu.js";
import HomeSection from "./homepageComponents/home.js";
import Section2 from "./homepageComponents/section2.js";
import Section3 from "./homepageComponents/whitepaper.js";
import Section4 from "./homepageComponents/sales.js";
import Section5 from "./homepageComponents/section5.js";
import Section6 from "./homepageComponents/section6.js";
import Section7 from "./homepageComponents/tokenomics.js";
import Section8 from "./homepageComponents/section8.js";
import Section9 from "./homepageComponents/roadmap.js";
import Footer from "./homepageComponents/footer.js";

/*

        
        

*/

export default function Home()
{
  return (
    <>
      <Menu />
      <main>
        <HomeSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />        
        <Section7 />
        <Section9 />
        <Footer />
      </main>
    </>
  )
}
