"use client"

import React from 'react'
import { Calendar, Clock, Users, Video, Phone, MessageSquare, Plus, ChevronDown, Bell, Search, Settings, Zap } from 'lucide-react'

export const MockupDashboard = () => {
  return (
    <div className="px-5 flex justify-center">
      <div className="w-full bg-card rounded-2xl shadow-2xl overflow-hidden relative border border-border transform scale-90 origin-center">
        {/* Header with window controls and navigation */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <button className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-purple-600 transition-colors">
                <span>Bookr Calendar</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm">
                <Plus className="w-4 h-4 mr-2 inline" />
                New Meeting
              </button>
              <button className="px-3 py-2 text-sm bg-card border border-border rounded-lg hover:bg-accent transition-colors text-foreground font-medium">
                Today
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  className="pl-10 pr-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:border-purple-300 bg-card text-foreground placeholder-muted-foreground w-48"
                />
              </div>
              <button className="relative p-2 text-muted-foreground hover:text-foreground bg-accent rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-semibold shadow-lg">
                SE
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[280px_1fr] min-h-[400px]">
          {/* Sidebar */}
          <div className="border-r border-border p-6 bg-muted/50">
            {/* Quick Actions */}
            <div className="space-y-3 mb-6">
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold shadow-lg">
                <Zap className="w-4 h-4" />
                <span>Quick Schedule</span>
              </button>
              <button className="w-full bg-card border border-border text-foreground rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:bg-accent transition-all duration-300 font-medium">
                <Video className="w-4 h-4" />
                <span>Video Call</span>
              </button>
            </div>

            {/* Mini Calendar */}
            <div className="bg-card rounded-xl p-4 mb-6 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">January 2024</h3>
                <button className="text-purple-600 hover:text-purple-700">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                <div className="text-muted-foreground font-medium">S</div>
                <div className="text-muted-foreground font-medium">M</div>
                <div className="text-muted-foreground font-medium">T</div>
                <div className="text-muted-foreground font-medium">W</div>
                <div className="text-muted-foreground font-medium">T</div>
                <div className="text-muted-foreground font-medium">F</div>
                <div className="text-muted-foreground font-medium">S</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: 31 }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      i + 1 === 17
                        ? 'bg-purple-600 text-white shadow-md'
                        : i + 1 === 15 || i + 1 === 20
                        ? 'bg-purple-100 text-purple-600'
                        : 'hover:bg-accent text-muted-foreground'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Meeting Categories */}
            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-semibold text-foreground">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-muted-foreground font-medium">Team Meetings</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-muted-foreground font-medium">Client Calls</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-muted-foreground font-medium">Reviews</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-muted-foreground font-medium">One-on-ones</span>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Team Members</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">SE</div>
                  <span className="text-sm text-muted-foreground font-medium">Sarah Evans</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-semibold">MJ</div>
                  <span className="text-sm text-muted-foreground font-medium">Mike Johnson</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-xs font-semibold">AL</div>
                  <span className="text-sm text-muted-foreground font-medium">Alex Lee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Calendar Area */}
          <div className="bg-card">
            {/* Calendar Header */}
            <div className="grid grid-cols-[120px_1fr] border-b border-border bg-muted/30">
              <div className="p-4 border-r border-border">
                <div className="text-sm font-semibold text-muted-foreground">Time</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="p-4 border-r border-border">
                  <div className="text-sm font-semibold text-foreground">Tuesday, Jan 16</div>
                  <div className="text-xs text-muted-foreground">3 meetings</div>
                </div>
                <div className="p-4 border-r border-border bg-purple-50">
                  <div className="text-sm font-semibold text-foreground">Wednesday, Jan 17</div>
                  <div className="text-xs text-purple-600">2 meetings</div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-foreground">Thursday, Jan 18</div>
                  <div className="text-xs text-muted-foreground">1 meeting</div>
                </div>
              </div>
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-[120px_1fr_1fr_1fr]">
              {/* Time Column */}
              <div className="border-r border-border">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-16 border-b border-border p-2">
                    <div className="text-xs text-muted-foreground">
                      {i + 9}:00
                    </div>
                  </div>
                ))}
              </div>

              {/* Tuesday */}
              <div className="border-r border-border bg-muted/30">
                <div className="h-16 border-b border-border p-2 relative">
                  <div className="absolute inset-0 p-1">
                    <div className="bg-blue-100 rounded-lg p-2 text-xs h-full border-l-4 border-blue-500">
                      <div className="font-semibold text-blue-800">Performance Review</div>
                      <div className="text-blue-600">9:00 - 10:00</div>
                    </div>
                  </div>
                </div>
                <div className="h-16 border-b border-border p-2 relative">
                  <div className="absolute inset-0 p-1">
                    <div className="bg-red-100 rounded-lg p-2 text-xs h-full border-l-4 border-red-500">
                      <div className="font-semibold text-red-800">Dept Heads Update</div>
                      <div className="text-red-600">10:00 - 11:00</div>
                    </div>
                  </div>
                </div>
                <div className="h-16 border-b border-border p-2 relative">
                  <div className="absolute inset-0 p-1">
                    <div className="bg-purple-100 rounded-lg p-2 text-xs h-full border-l-4 border-purple-500">
                      <div className="font-semibold text-purple-800">Post-Launch Review</div>
                      <div className="text-purple-600">11:00 - 12:00</div>
                    </div>
                  </div>
                </div>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-16 border-b border-border"></div>
                ))}
              </div>

              {/* Wednesday */}
              <div className="border-r border-border bg-purple-50">
                <div className="h-16 border-b border-border p-2 relative">
                  <div className="absolute inset-0 p-1">
                    <div className="bg-green-100 rounded-lg p-2 text-xs h-full border-l-4 border-green-500">
                      <div className="font-semibold text-green-800">Client Meeting</div>
                      <div className="text-green-600">14:00 - 15:00</div>
                    </div>
                  </div>
                </div>
                <div className="h-16 border-b border-border p-2 relative">
                  <div className="absolute inset-0 p-1">
                    <div className="bg-orange-100 rounded-lg p-2 text-xs h-full border-l-4 border-orange-500">
                      <div className="font-semibold text-orange-800">One-on-One</div>
                      <div className="text-orange-600">15:30 - 16:00</div>
                    </div>
                  </div>
                </div>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-16 border-b border-border"></div>
                ))}
              </div>

              {/* Thursday */}
              <div className="bg-muted/30">
                <div className="h-16 border-b border-border p-2 relative">
                  <div className="absolute inset-0 p-1">
                    <div className="bg-indigo-100 rounded-lg p-2 text-xs h-full border-l-4 border-indigo-500">
                      <div className="font-semibold text-indigo-800">Team Standup</div>
                      <div className="text-indigo-600">10:00 - 10:30</div>
                    </div>
                  </div>
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-16 border-b border-border"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-6 right-6">
          <button className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
} 