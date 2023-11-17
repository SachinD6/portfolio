"use client";
import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react"; // Import the Laptop icon
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  const isDarkMode = theme === "dark";

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className=" hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
        >
          {isDarkMode ? (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem]  scale-100 transition-all" />
            </>
          ) : (
            <>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all" />
            </>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 transition-all"
        >
          <Sun className="h-4 w-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 transition-all"
        >

          <Moon className="h-4 w-4 mr-2 " />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => systemTheme == "dark" ? setTheme("dark") : setTheme("light")}
          className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 transition-all"
        >
          <Laptop className="h-4 w-4 mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
