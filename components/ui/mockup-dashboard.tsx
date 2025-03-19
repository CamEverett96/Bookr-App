"use client"

import React from 'react'
import { Calendar, Clock, Users, Video, Phone, MessageSquare, Plus, ChevronDown, Bell } from 'lucide-react'

export const MockupDashboard = () => {
  return (
    <div className="px-5">
      <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden relative">
        {/* Header with window controls and navigation */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              <span>My Calendar</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors">
                3 days
              </button>
              <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                Today
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-1 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-purple-300"
                />
                <svg className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white flex items-center justify-center text-sm font-medium">
                SE
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[250px_1fr]">
          {/* Sidebar */}
          <div className="border-r border-gray-200 p-4">
            {/* Create Meeting Button */}
            <button className="w-full bg-purple-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors mb-6">
              <Plus className="w-4 h-4" />
              <span>Create Meeting</span>
            </button>

            {/* Mini Calendar */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                <div className="text-gray-500">Su</div>
                <div className="text-gray-500">Mo</div>
                <div className="text-gray-500">Tu</div>
                <div className="text-gray-500">We</div>
                <div className="text-gray-500">Th</div>
                <div className="text-gray-500">Fr</div>
                <div className="text-gray-500">Sa</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: 31 }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${
                      i + 1 === 17
                        ? 'bg-purple-600 text-white'
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Meeting Categories */}
            <div className="space-y-2 mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Team Meetings</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Client Calls</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span>Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>One-on-ones</span>
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Team Members</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
                    JD
                  </div>
                  <span className="text-sm text-gray-600">John Doe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm font-medium text-green-600">
                    AS
                  </div>
                  <span className="text-sm text-gray-600">Alice Smith</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-sm font-medium text-purple-600">
                    RJ
                  </div>
                  <span className="text-sm text-gray-600">Robert Johnson</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calendar Area */}
          <div>
            {/* Calendar Header */}
            <div className="grid grid-cols-[100px_1fr] border-b">
              <div className="p-4 border-r">
                <div className="text-sm font-medium text-gray-500">January 2024</div>
              </div>
              <div className="grid grid-cols-3 border-l border-gray-100">
                <div className="p-4 border-r border-gray-100">
                  <div className="text-sm font-medium">Tue 16</div>
                </div>
                <div className="p-4 border-r border-gray-100 bg-red-50/30">
                  <div className="text-sm font-medium">Wed 17</div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium">Thu 18</div>
                </div>
              </div>
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-[100px_1fr] h-[600px] overflow-y-auto">
              {/* Time Column */}
              <div className="border-r">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-20 border-b p-2">
                    <div className="text-xs text-gray-500">{(i + 9).toString().padStart(2, '0')}:00</div>
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-3">
                {/* Tuesday */}
                <div className="border-r border-gray-100">
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-orange-100 rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-orange-800">Q4 results share</div>
                        <div className="text-orange-600">9:00 - 10:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-blue-100 rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-blue-800">Operations Research St</div>
                        <div className="text-blue-600">10:00 - 11:00</div>
                      </div>
                    </div>
                  </div>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="h-20 border-b"></div>
                  ))}
                </div>

                {/* Wednesday */}
                <div className="border-r border-gray-100 bg-red-50/30">
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-blue-100 rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-blue-800">Performance review</div>
                        <div className="text-blue-600">9:00 - 10:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-red-100 rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-red-800">Dept Heads Update</div>
                        <div className="text-red-600">10:00 - 11:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-purple-100 rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-purple-800">Post-Launch Review</div>
                        <div className="text-purple-600">11:00 - 12:00</div>
                      </div>
                    </div>
                  </div>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-20 border-b"></div>
                  ))}
                </div>

                {/* Thursday */}
                <div>
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-blue-100 border border-blue-200 border-dashed rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-blue-800">Liam / Stephanie weekly</div>
                        <div className="text-blue-600">9:00 - 10:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 border-b p-2 relative">
                    <div className="absolute inset-0 p-1">
                      <div className="bg-green-100 rounded-lg p-2 text-xs h-full">
                        <div className="font-medium text-green-800">Virtual onsite interview</div>
                        <div className="text-green-600">10:00 - 11:00</div>
                      </div>
                    </div>
                  </div>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="h-20 border-b"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduling Snippet */}
        <div className="absolute top-4 right-4 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <h3 className="text-sm font-medium mb-3">Scheduling snippet</h3>
          <div className="space-y-3">
            <button className="w-full text-left text-sm px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
              <span>Share availability</span>
              <span className="text-gray-400">S</span>
            </button>
            <button className="w-full text-left text-sm px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
              <span>Quick meeting</span>
              <span className="text-gray-400">⌘K</span>
            </button>
            <button className="w-full text-left text-sm px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
              <span>Command menu</span>
              <span className="text-gray-400">⌘K</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 