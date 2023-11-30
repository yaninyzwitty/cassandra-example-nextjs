"use client";

import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {Comment, addComment, getComments} from "@/lib/fetcher";
import {SmileIcon} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import useSWR from "swr";

type Props = {};

function InputComponent({}: Props) {
  const [input, setInput] = useState("");
  const {data, error, isLoading, mutate} = useSWR("/api/comments", getComments);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (input === "") return;

    const inputToSend = input;
    setInput("");

    await addCommentMutation(inputToSend);
  };

  const addCommentMutation = async (inputToSend: string) => {
    await addComment({
      comment: inputToSend,
      userId: crypto.randomUUID(),
      commentId: crypto.randomUUID(),
    });
    mutate();
  };

  if (isLoading) {
    return <InputComponent.Skeleton />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="flex gap-x-3 items-center">
          <div className="w-14 h-14 relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1700345461381-b3d35b7142b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
              }
              className="absolute rounded-full border m-2 object-cover "
              fill
              alt=""
            />
          </div>

          <input
            placeholder="Add a comment..."
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-full border-b flex-1 bg-transparent border-gray-700 border-t-0 border-x-0 focus:outline-none focus:border-gray-400 placeholder-gray-400 text-sm m-1 focus:placeholder-white"
          />
        </div>
        <div role="button" className="flex items-center gap-x-3 mt-2">
          <SmileIcon className="h-6 w-6 mx-3 mt-2 text-zinc-600" />

          <div className="ml-auto space-x-4">
            {/* <Button
              variant={"outline"}
              type="button"
              className="text-white bg-black border-none hover:bg-black/25 hover:text-white"
            >
              Cancel
            </Button> */}
            <Button type="submit">Comment</Button>
          </div>
        </div>
      </form>

      <div className="mt-4">
        {/* data */}

        <div className="flex items-center gap-x-3">
          <div className="flex flex-col gap-y-4">
            {data.map((comment: Comment, idx: number) => {
              return (
                <div key={idx} className="flex items-center gap-x-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1700345461381-b3d35b7142b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                      }
                      className="absolute rounded-full border m-2 object-cover "
                      fill
                      alt=""
                    />
                  </div>

                  <h2>{comment.comment}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputComponent;

InputComponent.Skeleton = function InputComponentSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
    </div>
  );
};
