"use client"

import { Eye, MessageCircle } from "lucide-react"
import { useState, useMemo } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import TimelineModal from "@/components/ui/modal/TimelineModal"

interface PropertyRecord {
  id: string
  refNo: string
  tenant: string
  status: "In Progress" | "Completed" | "Urgent" | "On Hold"
  assignedTo: string
  lastUpdated: string
  chaseCount: number
}

const properties: PropertyRecord[] = [
  {
    id: "1",
    refNo: "RP-1003",
    tenant: "A. Rahman",
    status: "In Progress",
    assignedTo: "Sarah (In-house)",
    lastUpdated: "10 Oct",
    chaseCount: 2,
  },
  {
    id: "2",
    refNo: "RP-1003",
    tenant: "A. Rahman",
    status: "Completed",
    assignedTo: "Sarah (In-house)",
    lastUpdated: "9 Oct",
    chaseCount: 0,
  },
  {
    id: "3",
    refNo: "RP-1003",
    tenant: "A. Rahman",
    status: "Urgent",
    assignedTo: "Sarah (In-house)",
    lastUpdated: "11 Oct",
    chaseCount: 3,
  },
  {
    id: "4",
    refNo: "RP-1003",
    tenant: "A. Rahman",
    status: "On Hold",
    assignedTo: "Sarah (In-house)",
    lastUpdated: "7 Oct",
    chaseCount: 1,
  },
  {
    id: "5",
    refNo: "RP-1004",
    tenant: "B. Smith",
    status: "In Progress",
    assignedTo: "John (Contractor)",
    lastUpdated: "12 Oct",
    chaseCount: 1,
  },
  {
    id: "6",
    refNo: "RP-1005",
    tenant: "C. Johnson",
    status: "Completed",
    assignedTo: "Sarah (In-house)",
    lastUpdated: "8 Oct",
    chaseCount: 0,
  },
  {
    id: "7",
    refNo: "RP-1006",
    tenant: "D. Williams",
    status: "Urgent",
    assignedTo: "Mike (Contractor)",
    lastUpdated: "13 Oct",
    chaseCount: 2,
  },
  {
    id: "8",
    refNo: "RP-1007",
    tenant: "E. Brown",
    status: "On Hold",
    assignedTo: "Sarah (In-house)",
    lastUpdated: "6 Oct",
    chaseCount: 0,
  },
]

const getStatusStyles = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-yellow-100 text-amber-700"
    case "Completed":
      return "bg-green-100 text-green-700"
    case "Urgent":
      return "bg-red-100 text-red-600"
    case "On Hold":
      return "bg-gray-100 text-gray-600"
    default:
      return "bg-gray-100 text-gray-600"
  }
}

const ITEMS_PER_PAGE = 4

export default function PropertyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRefNo, setSelectedRefNo] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return properties.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage])

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE)

  const getPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  const handleViewClick = (refNo: string) => {
    setSelectedRefNo(refNo)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
          <div className="grid grid-cols-7 gap-4 text-white font-semibold text-sm">
            <div>Ref No</div>
            <div>Tenant</div>
            <div>Status</div>
            <div>Assigned To</div>
            <div>Last Updated</div>
            <div>Chase Count</div>
            <div className="text-right">Actions</div>
          </div>
        </div>

        {/* Body */}
        <div className="divide-y divide-gray-200">
          {paginatedData.map((property) => (
            <div
              key={property.id}
              className="grid grid-cols-7 gap-4 px-6 py-5 items-center hover:bg-gray-50 transition-colors"
            >
              {/* Ref No */}
              <div className="text-sm text-gray-900 font-medium">{property.refNo}</div>

              {/* Tenant */}
              <div className="text-sm text-gray-700">{property.tenant}</div>

              {/* Status */}
              <div className="flex items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(property.status)}`}>
                  {property.status}
                </span>
              </div>

              {/* Assigned To */}
              <div className="text-sm text-gray-700">{property.assignedTo}</div>

              {/* Last Updated */}
              <div className="text-sm text-gray-700">{property.lastUpdated}</div>

              {/* Chase Count */}
              <div className="flex items-center">
                {property.chaseCount > 0 && (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-100 text-amber-700 text-xs font-semibold">
                    {property.chaseCount}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => handleViewClick(property.refNo)}
                  className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  title="View timeline"
                >
                  <Eye size={18} />
                </button>
                <button
                  className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  title="Message"
                >
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination controls */}
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {getPageNumbers().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <TimelineModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refNo={selectedRefNo}
        events={timelineData[selectedRefNo as keyof typeof timelineData] || []}
      />
    </>
  )
}

const timelineData = {
  "RP-1003": [
    { date: "2 Oct 2025", description: "Repair request submitted" },
    { date: "3 Oct 2025", description: "Assigned to John (Contractor)" },
    { date: "4 Oct 2025", description: "Chase sent to contractor" },
    { date: "10 Oct 2025", description: "Chase sent to tenant" },
  ],
}
