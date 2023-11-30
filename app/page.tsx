import {AlignLeft} from "lucide-react";
import InputComponent from "./input-component";
export default async function Home() {
  return (
    <main className="flex flex-col mt-4 mx-4">
      <div className=" flex items-start gap-x-3">
        <h3 className="font-semibold text-xl text-white">254 Comments</h3>
        <div className="flex items-center gap-x-3">
          <AlignLeft className="h-6 w-6 cursor-pointer text-white" />
          <h3 className="text-xs">Sort By</h3>
        </div>
      </div>
      <div className="pt-3">
        <InputComponent />
      </div>
    </main>
  );
}
