import Tabs from "@/components/Tabs";
import Wares from "@/components/TabContents/Wares";
import Guides from "@/components/TabContents/Guides";

export default function Home() {

  const tabData = [
    { title: "Wares", content: <Wares /> },
    { title: "Guides", content: <Guides /> },
    { title: "About", content: <div>About content here</div> },
  ];

  return (
    <>
      <Tabs tabData={tabData} />
    </>
  );
}
