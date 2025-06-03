"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  className?: string;
  showOutsideDays?: boolean;
};

export function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("w-full max-w-xs sm:max-w-md mx-auto", className)}>
      <DayPicker
        locale={ptBR}
        showOutsideDays={showOutsideDays}
        className={cn(
          "w-full text-base sm:text-sm",
          "[&_.rdp-months]:flex [&_.rdp-months]:flex-col sm:[&_.rdp-months]:flex-row",
          "[&_.rdp-month]:mx-auto [&_.rdp-month]:space-y-2 sm:[&_.rdp-month]:space-y-0 sm:[&_.rdp-month]:space-x-4",
          "[&_.rdp-month]:ml-2",
          "[&_.rdp-caption]:flex [&_.rdp-caption]:justify-between [&_.rdp-caption]:items-center [&_.rdp-caption]:mb-2",
          "[&_.rdp-nav]:flex [&_.rdp-nav]:gap-2 [&_.rdp-nav]:items-center",
          "[&_.rdp-nav_button]:rounded-full [&_.rdp-nav_button]:p-2 [&_.rdp-nav_button]:hover:bg-muted [&_.rdp-nav_button]:transition [&_.rdp-nav_button]:w-8 [&_.rdp-nav_button]:h-8",
          "[&_.rdp-table]:w-full [&_.rdp-table]:border-collapse [&_.rdp-table]:text-center",
          "[&_.rdp-head_row]:text-xs [&_.rdp-head_row]:font-bold [&_.rdp-head_row]:text-gray-700",
          "[&_.rdp-cell]:p-0 [&_.rdp-cell]:h-10 sm:[&_.rdp-cell]:h-8",
          "[&_.rdp-day]:w-10 [&_.rdp-day]:h-10 sm:[&_.rdp-day]:w-8 sm:[&_.rdp-day]:h-8 [&_.rdp-day]:rounded-full [&_.rdp-day]:transition [&_.rdp-day]:text-base sm:[&_.rdp-day]:text-sm",
          "[&_.rdp-day_selected]:bg-letsplay-red [&_.rdp-day_selected]:text-white [&_.rdp-day_selected]:font-bold",
          "[&_.rdp-day_today]:border-2 [&_.rdp-day_today]:border-letsplay-red",
          "[&_.rdp-day_outside]:text-gray-300",
          "[&_.rdp-caption_label]:font-semibold [&_.rdp-caption_label]:text-base sm:[&_.rdp-caption_label]:text-sm",
          "[&_.rdp-head_cell]:px-1 sm:[&_.rdp-head_cell]:px-2",
          "[&_.rdp-row]:gap-0"
        )}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";
