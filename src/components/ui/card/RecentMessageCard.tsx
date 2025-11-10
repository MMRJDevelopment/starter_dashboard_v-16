import { Button } from "@/components/ui/button";

interface RecentMessageCardProps {
  type: string;
  title: string;
  time: string;
}

export default function RecentMessageCard({
  type,
  title,
  time,
}: RecentMessageCardProps) {
  return (
    <>
      <div className="flex justify-between flex-col gap-2 py-3 rounded-lg bg-[#F9FAFB] px-3 md:px-4 lg:px-7 mt-2">
        <div className="flex w-full flex-row justify-between">
          <Button
            variant="outline"
            className="  px-2 py-1 text-[11px] inline-block text-[#593DFA] bg-[rgba(89,61,250,0.1)] hover:bg-[rgba(89,61,250,0.15)]"
          >
            {type}
          </Button>
          <h5 className="text-[#141414] font-inter text-[13px] font-normal leading-5">
            {title}
          </h5>
        </div>

        <p className="text-[#5E5E5E] font-inter text-[13px] font-normal leading-5">
          {time}
        </p>
      </div>
    </>
  );
}
