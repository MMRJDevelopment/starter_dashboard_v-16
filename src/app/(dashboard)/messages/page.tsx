import { BroadcastIcon, TargetedIcon } from "@/app/assets/icon/icon";
import PropertyTable from "@/components/pages/repairs&chases/property-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const MessagesPage = () => {
  return (
    <div className="px-6 py-6">
      <Tabs defaultValue="broadcasts" className="w-full gap-6">
        <TabsList className="gap-4">
          <TabsTrigger value="broadcasts" className="w-[274px]">
            <BroadcastIcon values={(value: string) => value === "broadcasts"} />{" "}
            Broadcasts
          </TabsTrigger>
          <TabsTrigger value="inprogress" className="w-[274px]">
            <TargetedIcon values={(value: string) => value === "inprogress"} />{" "}
            In Progress
          </TabsTrigger>
          <TabsTrigger value="completed" className="w-[274px]">
            Completed
          </TabsTrigger>
          <TabsTrigger value="urgent" className="w-[274px]">
            Urgent
          </TabsTrigger>
          <TabsTrigger value="onhold" className="w-[274px]">
            On Hold
          </TabsTrigger>
        </TabsList>
        <TabsContent value="allrepairs">
          <PropertyTable />
        </TabsContent>
        <TabsContent value="inprogress">
          <PropertyTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MessagesPage;
