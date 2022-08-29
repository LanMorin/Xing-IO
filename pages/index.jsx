import Tabs from "../Components/TabsComponent/Tabs";
import Slides from "../Components/Slides";
import Style from "../styles/content/Home.module.css";
import Tab from "../models/Tab";
import dbConnect from "../lib/dbConnect";

export default function Home({ tabs }) {

  return (
    <>

      <Slides></Slides>
      <div className={Style.sectionText}>
        <h2>Gaming<br></br>Top</h2>
      </div>
      <Tabs tabs={tabs}></Tabs>

    </>

  );

}

export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Tab.find({});
    const tabs = res.map((doc) => {
      const tab = doc.toObject();
      tab._id = tab._id.toString();
      return tab;
    });
    return { props: { tabs } };
  } catch (error) {
    console.log(error);
    throw error
  }
}