import StackIcon from "tech-stack-icons";
import Detail from "./components/Detail/Index";
import DetailItem from "./components/Detail/Item";
import Link from "./components/Link";
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
            <SideItem title="Personal details">
              Birthday: 2000-01-01<br />
              Address: <br />2250 Niizo, Toda, Saitama, Japan<br />
              Phone: <Link href="tel:090-3987-4943">090-3987-4943</Link><br />
              Mail: <Link href="mailto:raymatsuo7@gmail.com">raymatsuo7@gmail.com</Link>
            </SideItem>
          </Side>

          <section className="flex flex-col pl-4 flex-auto">
            <Detail title="Work experience">
              <DetailItem title="Griffin group" position="Fullstack engineer, PM" date="Apr, 2022 ~ Current"></DetailItem>
            </Detail>

            <Detail title="Projects">
              <DetailItem title="Attendance management system" position="Fullstack engineer" date="Feb, 2023 ~ March, 2023">
                <p className="mb-2 leading-5">
                  On 1st year at the office, I was tasked by HR to design and create an attendance management system from scratch.<br />
                  I have implemented many features that seamlessly integrates existing scheduling system, such as displaying paid leave information on scheduling system.<br />
                </p>
                <ul className="flex flex-row gap-2 flex-wrap mt-2">
                  <li className="w-5"><StackIcon name="php" /></li>
                  <li className="w-5"><StackIcon name="laravel" /></li>
                  <li className="w-5"><StackIcon name="mysql" /></li>
                  <li className="w-5"><StackIcon name="js" /></li>
                  <li className="w-5"><StackIcon name="babel" /></li>
                  <li className="w-5"><StackIcon name="html5" /></li>
                  <li className="w-5"><StackIcon name="css3" /></li>
                  <li className="w-5"><StackIcon name="sass" /></li>
                  <li className="w-5"><StackIcon name="ps" /></li>
                </ul>
              </DetailItem>

              <DetailItem title="Inventory stock management system" position="Fullstack engineer" date="Oct, 2025 ~ Current">
                <p className="mb-2 leading-5">
                  On 1st year at the office, I was tasked by HR to design and create an attendance management system from scratch.<br />
                  I have implemented many features that seamlessly integrates existing scheduling system, such as displaying paid leave information on scheduling system.<br />
                </p>
                <ul className="flex flex-row gap-2 flex-wrap mt-2">
                  <li className="w-5"><StackIcon name="typescript" /></li>
                  <li className="w-5"><StackIcon name="nextjs" /></li>
                  <li className="w-5"><StackIcon name="react" /></li>
                  <li className="w-5"><StackIcon name="mysql" /></li>
                  <li className="w-5"><StackIcon name="php" /></li>
                  <li className="w-5"><StackIcon name="tailwindcss" /></li>
                  <li className="w-5"><StackIcon name="bunjs" /></li>
                </ul>
              </DetailItem>
            </Detail>
          </section>

        </div>
      </main>
    </div>
  );
}
