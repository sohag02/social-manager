"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

interface Media {
  url: string;
  type: string;
}

export default function CreatePost() {
  const [date, setDate] = useState<Date>();
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: false,
    facebook: false,
    twitter: false,
  });
  const [MediaURLs, setMediaURLs] = useState<Media[]>([]);
  const [schedule, setSchedule] = useState<boolean>(false);

  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-4">
      <h2 className="mx-4 mb-6 text-lg font-semibold sm:mx-0">
        Create New Post
      </h2>
      <div className="grid grid-cols-1 sm:gap-6 md:grid-cols-4">
        <Card className="glass-morphism col-span-3 m-4 p-6 sm:m-0">
          <div className="space-y-6">
            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Post Content</Label>
              <Textarea
                id="content"
                placeholder="What's on your mind?"
                className="min-h-[120px] bg-white/5"
              />
            </div>

            {/* Media Upload */}
            <div className="space-y-2">
              <Label>Media</Label>
              {MediaURLs.length > 0 ? (
                <div className="flex flex-col items-center gap-2">
                  {MediaURLs.map((media) => (
                    <div className="relative" key={media.url}>
                      <Button
                        variant="outline"
                        className="absolute right-0 top-0 z-10 rounded-full p-2"
                        onClick={() =>
                          setMediaURLs(MediaURLs.filter((url) => url !== url))
                        }
                      >
                        <X className="h-4 w-4" />
                      </Button>
											{media.type === "image" ? (
												<Image
													key={media.url}
													src={media.url}
													alt="Media"
													width={200}
													height={200}
													className="rounded-lg border-2 border-dashed border-white/10 text-center transition-colors hover:border-white/20"
												/>
											) : (
												<video
													key={media.url}
													src={media.url}
													// alt="Media"
													width={200}
													height={200}
													className="rounded-lg border-2 border-dashed border-white/10 text-center transition-colors hover:border-white/20"
												/>
											)}
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint={"imageUploader"}
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    // alert("Upload Completed");
                    res.forEach((file) => {
                      setMediaURLs((prev) => [...prev, { url: file.ufsUrl, type: file.type }]);
                    });
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              )}
            </div>

            {/* Schedule */}
            <div className="space-y-2">
              <div className="flex items-center justify-start space-x-2">
                <Label>Schedule Post</Label>
                <Switch
                  checked={schedule}
                  onCheckedChange={(checked) => {
                    setSchedule(checked);
                  }}
                />
              </div>
              {schedule && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start bg-white/5 text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-card p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              )}
            </div>

            {/* Platform Selection */}
            <div className="space-y-2">
              <Label>Platforms</Label>
              <div className="flex gap-2">
                {Object.entries(selectedPlatforms).map(
                  ([platform, isSelected]) => (
                    <Button
                      key={platform}
                      variant={isSelected ? "default" : "outline"}
                      className="bg-white/5 capitalize"
                      onClick={() =>
                        setSelectedPlatforms((prev) => ({
                          ...prev,
                          [platform]:
                            !prev[platform as keyof typeof selectedPlatforms],
                        }))
                      }
                    >
                      {platform}
                    </Button>
                  ),
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline">Save Draft</Button>
              <Button>Schedule Post</Button>
            </div>
          </div>
        </Card>

        {/* Preview Card */}
        <Card className="glass-morphism col-span-1 m-4 p-6 sm:m-0">
          <h2 className="mb-4 text-lg font-semibold">Preview</h2>
          <div className="mx-auto flex aspect-square max-w-sm items-center justify-center rounded-lg border border-white/10">
            <p className="mx-2 text-muted-foreground">
              Post preview will appear here
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
