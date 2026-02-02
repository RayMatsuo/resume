import Image from "next/image";
import Side from "./components/Side/Index";
import SideItem from "./components/Side/Item";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center w-full pt-4 ">
      <main className="aspect-210/297 w-full  max-w-187.5">
        <header className="w-full p-8 bg-black ">
          <h1 className="text-3xl text-white text-center">
            Ray Matsuo
          </h1>
        </header>
        <div className="flex flex-row">
          <Side>
            <SideItem title="aaa">
              Voluptas asperiores tempore consequatur consequatur dolor reiciendis et porro. Soluta sint ut qui quos est quidem. Soluta a possimus repellendus animi neque.
            </SideItem>
            
          </Side>
        </div>
      </main>
    </div>
  );
}
