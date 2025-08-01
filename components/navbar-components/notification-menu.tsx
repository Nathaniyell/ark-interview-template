"use client";

import { useState } from "react";
import { BellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const initialNotifications = [
  {
    id: 1,
    user: "Chris Tompson",
    action: "requested review on",
    target: "PR #42: Feature implementation",
    timestamp: "15 minutes ago",
    unread: true,
  },
  {
    id: 2,
    user: "Emma Davis",
    action: "shared",
    target: "New component library",
    timestamp: "45 minutes ago",
    unread: true,
  },
  {
    id: 3,
    user: "James Wilson",
    action: "assigned you to",
    target: "API integration task",
    timestamp: "4 hours ago",
    unread: false,
  },
  {
    id: 4,
    user: "Alex Morgan",
    action: "replied to your comment in",
    target: "Authentication flow",
    timestamp: "12 hours ago",
    unread: false,
  },
  {
    id: 5,
    user: "Sarah Chen",
    action: "commented on",
    target: "Dashboard redesign",
    timestamp: "2 days ago",
    unread: false,
  },
  {
    id: 6,
    user: "Miky Derya",
    action: "mentioned you in",
    target: "Origin UI open graph image",
    timestamp: "2 weeks ago",
    unread: false,
  },
];

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="6"
      height="6"
      fill="currentColor"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export default function NotificationMenu() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className="text-muted-foreground relative  rounded-full shadow-none"
          aria-label="Open notifications"
        >
          {/* <BellIcon size={16} aria-hidden="true" /> */}
          <svg
            className="w-6 h-6"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="44" height="44" fill="url(#pattern0_1_205)" />
            <defs>
              <pattern
                id="pattern0_1_205"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_1_205" transform="scale(0.0227273)" />
              </pattern>
              <image
                id="image0_1_205"
                width="44"
                height="44"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAAXNSR0IB2cksfwAAAqZQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PbBr8QAAAOJ0Uk5TAA9boLiwo4uNpLG3mlIIH4HQ5+HUu77W5sp3FTmz8d3O/P/4yOLuqC1hhSyQ03R943svle9QZtw3VCA8SOtRNRpAwAsc2PAoK+ojBTLyITa8AkU/n3ydOrT69SdYbwQew80TqS4JvRHBG9K1CiLtrrrexhfRATBZAz6cxzRgbSZKDpeRR16i6JmljPR/Flr9PeC/z9n59sXJwtu2m3UGslNWdqfkiMTpJI6UKXgSB196rNUUloKqDdqA95jfoYT7EP55VzHlpjjXzBhOT8vzkmOKGYZNngwqcHJlM1zsaTuvHRqMrSsAAAPoSURBVHicY2RAAYwo4BMDmiwqlx+m7g8rkHiKV7EMRCXciht4FGv+YORgZPzGDXIB0I73QoyncSo2eyPKeMLyxRPTYwxGn5hEj9owPpU5hEOx/ZMvmgccHyow7gVyXICm7/T4ysO4Dati79M8WlsYxcwYN4G5/pf1GNcHXXjyC6vi4PNGaxjsnhivhvLDzpiuZIhgPH8Dm2L24IdHGXh4nJdC+eHfHl1kiDlutRiL4ri1dmILGeMZGedBBaxuBrxbn7Lr6V8silMZ1xruSd/k/38mVCAT6MUpuYyMj9ZjMVmI8fyBOC6uDzCTixmffN5afO1KRDdCcRnjUZsOhsp/V/QZgcH8b1H04mTGRgYG3mLG5rqDAtfeZ9e2MHaCEonRbVfGtjmMIZ0+1rPTGO+qPNkCtPve9u8lxX1TzLXeTAm0niztINwkkFb5nyHY7lsf46QJDHyqdoylPX3FPayal0oZN+6dsOZGiPap/X9s/q+a0B+g0cHAUPlsu/9slhzG7O1Vp/Z8MNsxt5UhrWIeY/P/+oSFO04qaE2pWsHQEGd1iy+Ag1GD8djajjP6WUCTcxqn3a9h8I5mzPjIsILxaREDQ4wfYyiD1Tchzq0Mjt6fdWdm9D+rEGEsKwIq7gsA+TQwgfFgL1LUMmzeL34CHGpbrm/N60xN2dD7nFGMZ7I3WHLbHzTFnx+8B4fanI3fixlDvvRstAMqnu4ODsONHL07kRW7/1eZ/h/E2J3sPWM3o7O+lBFMcWAu4/UDWQ4ItQeOWf87+7Ibolhi3pO/SIqN3jvFJ776jFB8+IzYvn2LbcCKlQ4eYbQK/QJX7PBAVVln9UGE4uOX/xkwVu8BK14TyPbqq6EEXDGDvWEkkymym88wmle0gN0s3CsbzmiwdQpCMUP6FrScL70U4oUt1zccBVLsC04jFOMEW67bWCbZJF28Rozi3ZMUFvILXdw5wYgIxR373F0DvrzaMJMYxaBIEdyCHHR4QBOnpU3LkhuXrxDlwWXy7UCKveE1USYvP3elYotWLXGhIRN+3N4KKW3gU5y85fY9kUTiPIiZ6ggo/uDjTKTiSd+LHz9og+SUdx/wK+44+l3RVCBMIE4LYnLFTZCoSjdDIMN6DMVXN/kzehfmar5PBirepsEQCFNSytyBrrY06nF7ba6ZanQON+P07nUG+J1x62x55daQi7FJTxkzdlWeTCswZmB4KOi55I6QYkOKLbLKwzkNsbMYOK7l6HSpn2G8oyex5snkYgaGOyb5Qud1fXwm5iMrnhjeAvQPX9Oj35M7TBjXGjEas8xOZWCYzQAiUjFcsXGNKsMv09pmR7NFAOJAjDT4nu/EAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>

          {unreadCount > 0 && (
            <div
              aria-hidden="true"
              className="bg-[#4de303] text-black flex items-center justify-center text-sm absolute top-[-12px] right-[-12px] size-5 rounded-full"
            >
              {unreadCount}
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-1">
        <div className="flex items-baseline justify-between gap-4 px-3 py-2">
          <div className="text-sm font-semibold">Notifications</div>
          {unreadCount > 0 && (
            <button
              className="text-xs font-medium hover:underline"
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </button>
          )}
        </div>
        <div
          role="separator"
          aria-orientation="horizontal"
          className="bg-border -mx-1 my-1 h-px"
        ></div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors"
          >
            <div className="relative flex items-start pe-3">
              <div className="flex-1 space-y-1">
                <button
                  className="text-foreground/80 text-left after:absolute after:inset-0"
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <span className="text-foreground font-medium hover:underline">
                    {notification.user}
                  </span>{" "}
                  {notification.action}{" "}
                  <span className="text-foreground font-medium hover:underline">
                    {notification.target}
                  </span>
                  .
                </button>
                <div className="text-muted-foreground text-xs">
                  {notification.timestamp}
                </div>
              </div>
              {notification.unread && (
                <div className="absolute end-0 self-center">
                  <span className="sr-only">Unread</span>
                  <Dot />
                </div>
              )}
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
