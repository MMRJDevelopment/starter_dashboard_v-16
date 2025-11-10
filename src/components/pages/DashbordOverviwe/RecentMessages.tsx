import { Card } from "@/components/ui/card";
import RecentMessageCard from "@/components/ui/card/RecentMessageCard";

function RecentMessages() {
  return (
    <Card className="p-6 w-full h-[382px] overflow-auto ">
      <h2 className="text-[#141414] font-Inter text-[14.919px] not-italic font-normal leading-6">
        Recent Messages
      </h2>
      <RecentMessageCard
        type="Broadcast"
        title="Water Supply Interruption"
        time="2 hours ago"
      />
      <RecentMessageCard
        type="Broadcast"
        title="Water Supply Interruption"
        time="2 hours ago"
      />
      <RecentMessageCard
        type="Broadcast"
        title="Water Supply Interruption"
        time="2 hours ago"
      />
      <RecentMessageCard
        type="Broadcast"
        title="Water Supply Interruption"
        time="2 hours ago"
      />
    </Card>
  );
}

export default RecentMessages;
