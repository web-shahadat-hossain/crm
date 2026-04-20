"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddNewArticle() {
  const [subject, setSubject] = useState("");
  const [group, setGroup] = useState("sales");
  const [isInternal, setIsInternal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [description, setDescription] = useState("");

  const handleSave = () => {
    console.log({ subject, group, isInternal, isDisabled, description });
  };

  return (
    <div className="min-h-screen bg-gray-50 md:p-8 ">
          
      <div className="max-w-4xl mx-auto ">
        {/* Title */}
      <h1 className="text-2xl font-semibold  text-[#2D2D2D] font-inter mb-6">
          Add New Article
        </h1>

        <div className="space-y-5 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          {/* Subject */}
          <div className="space-y-1.5 ">
            <Label htmlFor="subject" className="text-sm font-medium text-[#1F1F1F] font-inter">
              Subject{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-gray-100 border border-[#E6E6E6] focus-visible:ring-1  focus-visible:ring-gray-300 text-sm"
            />
          </div>

          {/* Group */}
          <div className="space-y-1.5 w-full">
            <Label htmlFor="group" className="text-sm font-medium text-[#1F1F1F] font-inter">
              Group
            </Label>
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger
                id="group"
                className="bg-gray-100  w-full text-center border border-[#E6E6E6] focus:ring-1 focus:ring-gray-300 text-sm text-gray-700"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales" >Sales</SelectItem>
                <SelectItem value="Info">Info</SelectItem>
                <SelectItem value="Abuse">Abuse</SelectItem>
                <SelectItem value="License">License</SelectItem>
                <SelectItem value="Company">Company</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="internal"
                checked={isInternal}
                onCheckedChange={(checked) =>
                  setIsInternal(checked as boolean)
                }
                className="rounded-sm border-gray-400"
              />
              <Label
                htmlFor="internal"
                className="text-sm font-medium text-[#1F1F1F] font-inter cursor-pointer"
              >
                Internal Article
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="disabled"
                checked={isDisabled}
                onCheckedChange={(checked) =>
                  setIsDisabled(checked as boolean)
                }
                className="rounded-sm border-gray-400"
              />
              <Label
                htmlFor="disabled"
                className="text-sm font-medium text-[#1F1F1F] font-inter cursor-pointer"
              >
                Disabled
              </Label>
            </div>
          </div>

          {/* Article Description */}
          <div className="space-y-1.5">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-[#1F1F1F] font-inter"
            >
              Article Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Processing"
              className="bg-gray-100 border border-[#E6E6E6]  focus-visible:ring-1 focus-visible:ring-gray-300 min-h-[140px] text-sm resize-none placeholder:text-gray-400"
            />
          </div>

          {/* Save Button */}
          <div className="pt-1">
            <Button
              onClick={handleSave}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 border border-[#E6E6E6] shadow-none text-sm font-medium px-5"
              variant="secondary"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}