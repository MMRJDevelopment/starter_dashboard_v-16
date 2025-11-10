"use client"

import { X } from "lucide-react"

interface TimelineEvent {
  date: string
  description: string
}

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
  refNo: string
  events: TimelineEvent[]
}

export default function TimelineModal({ isOpen, onClose, refNo, events }: TimelineModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-xs bg-opacity-10 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Repair Timeline - {refNo}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Timeline */}
        <div className="p-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative flex items-start flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center ring-4 ring-white relative z-10">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Event content */}
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-semibold text-gray-900">{event.date}</p>
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
