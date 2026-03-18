import Tabs from "@/components/Tabs";
import Wares from "@/components/TabContents/Wares";

export default function Home() {

  const tabData = [
    { title: "Wares", content: <Wares /> },
    { title: "Guides", content: <div>Guides content here</div> },
    { title: "About", content: <div>About content here</div> },
  ];

  return (
    <>
      <Tabs tabData={tabData} />
    </>
  );
}
