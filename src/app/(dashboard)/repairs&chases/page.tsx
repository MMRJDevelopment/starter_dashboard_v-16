import PropertyTable from "@/components/pages/repairs&chases/property-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="px-6 py-6">
      <Tabs defaultValue="allrepairs" className="w-full gap-6">
        <TabsList className="gap-4">
          <TabsTrigger value="allrepairs">All Repairs</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="urgent">Urgent</TabsTrigger>
          <TabsTrigger value="onhold">On Hold</TabsTrigger>
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

export default page;
