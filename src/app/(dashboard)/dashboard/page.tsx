// import { DataTable } from "@/components/data-table";
import DashbordOverviwe from "@/components/pages/DashbordOverviwe/DashbordOverviwe";
import RecentMessages from "@/components/pages/DashbordOverviwe/RecentMessages";
import SurveyResponsesOverview from "@/components/pages/DashbordOverviwe/SurveyResponsesOverview";
import VisitsByOutcome from "@/components/pages/DashbordOverviwe/VisitsByOutcome";
import { SectionCards } from "@/components/section-cards";
// import data from "@/data/data.json";

export default function Page() {
  return (
    <div>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className=" @xl/main:grid-cols-1 px-6 gap-5 @5xl/main:grid-cols-5 lg:grid">
              <div className="col-span-3 ">
                <DashbordOverviwe />
              </div>
              <div className="col-span-2 ">
                <SurveyResponsesOverview />
              </div>
            </div>
            <div className=" @xl/main:grid-cols-1 px-6 gap-5 @5xl/main:grid-cols-5 lg:grid">
              <div className="col-span-3 ">
                <VisitsByOutcome />
              </div>
              <div className="col-span-2 ">
                <RecentMessages />
              </div>
            </div>
            {/* <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
