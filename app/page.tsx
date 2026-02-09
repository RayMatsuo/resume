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
              <b>Birthday</b>: 2000-01-27<br />
              <b>Address</b>: <br />2250 Niizo, Toda, Saitama, Japan<br />
              <b>Phone</b>: <Link href="tel:090-3987-4943">090-3987-4943</Link><br />
              <b>Mail</b>: <Link href="mailto:raymatsuo7@gmail.com">raymatsuo7@gmail.com</Link>
            </SideItem>

            <SideItem title="Tech stacks">
              <h3 className="border-b">Languages</h3>
              <ul className="flex flex-row gap-2 flex-wrap mt-2">
                <li className="w-5" title="PHP"><StackIcon variant="light" name="php" /></li>
                <li className="w-5" title="MySql"><StackIcon variant="light" name="mysql" /></li>
                <li className="w-5" title="JavaScript"><StackIcon variant="light" name="js" /></li>
                <li className="w-5" title="TypeScript"><StackIcon variant="light" name="typescript" /></li>
                <li className="w-5" title="HTML"><StackIcon variant="light" name="html5" /></li>
                <li className="w-5" title="CSS"><StackIcon variant="light" name="css3" /></li>
                <li className="w-5" title="shell"><StackIcon variant="light" name="bash" /></li>
              </ul>

              <h3 className="border-b">Frameworks</h3>
              <ul className="flex flex-row gap-2 flex-wrap mt-2">
                <li className="w-5" title="Laravel"><StackIcon variant="light" name="laravel" /></li>
                <li className="w-5" title="Next.js"><StackIcon variant="light" name="nextjs" /></li>
              </ul>

              <h3 className="border-b">Tools</h3>
              <ul className="flex flex-row gap-2 flex-wrap mt-2">
                <li className="w-5" title="npm"><StackIcon variant="light" name="npm" /></li>
                <li className="w-5" title="Bun"><StackIcon variant="light" name="bunjs" /></li>
                <li className="w-5" title="NeoVim"><StackIcon variant="light" name="neovim" /></li>
                <li className="w-5" title="git"><StackIcon variant="light" name="git" /></li>
              </ul>
            </SideItem>
          </Side>

          <section className="flex flex-col pl-4 flex-auto">
            <Detail title="Work experience">
              <DetailItem title="Griffin group" position="Fullstack engineer, PM" date="Apr, 2022 ~ Current"></DetailItem>
            </Detail>

            <Detail title="Projects">
              <DetailItem title="Attendance management system" position="Fullstack engineer" date="Feb, 2023 ~ March, 2023">
                <p className="mb-2 leading-5">
                  An attendance management still used by the organization consisting of 80+ employees <br />
                  I have implemented many features that seamlessly integrates existing scheduling system, such as displaying paid leave information on scheduling system.<br />
                </p>
                <ul className="flex flex-row gap-2 flex-wrap mt-2">
                  <li className="w-5" title="PHP"><StackIcon variant="light" name="php" /></li>
                  <li className="w-5" title="Laravel"><StackIcon variant="light" name="laravel" /></li>
                  <li className="w-5" title="MySql"><StackIcon variant="light" name="mysql" /></li>
                  <li className="w-5" title="JavaScript"><StackIcon variant="light" name="js" /></li>
                  <li className="w-5" title="Babel"><StackIcon variant="light" name="babel" /></li>
                  <li className="w-5" title="HTML"><StackIcon variant="light" name="html5" /></li>
                  <li className="w-5" title="CSS"><StackIcon variant="light" name="css3" /></li>
                  <li className="w-5" title="SASS"><StackIcon variant="light" name="sass" /></li>
                  <li className="w-5" title="PhotoShop"><StackIcon variant="light" name="ps" /></li>
                </ul>
              </DetailItem>

              <DetailItem title="Inventory stock management system" position="Fullstack engineer" date="Oct, 2025 ~ Current">
                <p className="mb-2 leading-5">
                  On 1st year at the office, I was tasked by HR to design and create an attendance management system from scratch.<br />
                  I have implemented many features that seamlessly integrates existing scheduling system, such as displaying paid leave information on scheduling system.<br />
                </p>
                <ul className="flex flex-row gap-2 flex-wrap mt-2">
                  <li className="w-5"><StackIcon variant="light" name="typescript" /></li>
                  <li className="w-5"><StackIcon variant="light" name="nextjs" /></li>
                  <li className="w-5"><StackIcon variant="light" name="react" /></li>
                  <li className="w-5"><StackIcon variant="light" name="mysql" /></li>
                  <li className="w-5"><StackIcon variant="light" name="php" /></li>
                  <li className="w-5"><StackIcon variant="light" name="tailwindcss" /></li>
                  <li className="w-5"><StackIcon variant="light" name="bunjs" /></li>
                </ul>
              </DetailItem>
            </Detail>
          </section>

        </div>
      </main>
    </div>
  );
}
