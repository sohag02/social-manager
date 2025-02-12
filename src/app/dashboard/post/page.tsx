"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, ImagePlus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CreatePost() {
  const [date, setDate] = useState<Date>();
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: false,
    facebook: false,
    twitter: false,
  });

  return (
    <div className="space-y-6 mx-auto max-w-5xl pb-4">
      <h2 className="mb-6 text-lg font-semibold mx-4 sm:mx-0">Create New Post</h2>
			<div className="grid grid-cols-1 sm:gap-6 md:grid-cols-4">
				<Card className="glass-morphism p-6 col-span-3 m-4 sm:m-0">
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
							<div className="rounded-lg border-2 border-dashed border-white/10 p-8 text-center transition-colors hover:border-white/20">
								<div className="flex flex-col items-center gap-2">
									<ImagePlus className="h-8 w-8 text-muted-foreground" />
									<p className="text-sm text-muted-foreground">
										Drag & drop your media here, or click to browse
									</p>
									<Input
										type="file"
										className="hidden"
										accept="image/*,video/*"
										id="media-upload"
									/>
									<Button variant="secondary" size="sm" className="mt-2">
										Choose File
									</Button>
								</div>
							</div>
						</div>

						{/* Schedule */}
						<div className="space-y-2">
							<Label>Schedule Post</Label>
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
													[platform]: !prev[platform as keyof typeof selectedPlatforms],
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
				<Card className="glass-morphism p-6 col-span-1 m-4 sm:m-0">
					<h2 className="mb-4 text-lg font-semibold">Preview</h2>
					<div className="mx-auto flex aspect-square max-w-sm items-center justify-center rounded-lg border border-white/10">
						<p className="text-muted-foreground mx-2">Post preview will appear here</p>
					</div>
				</Card>
			</div>
    </div>
  );
}
