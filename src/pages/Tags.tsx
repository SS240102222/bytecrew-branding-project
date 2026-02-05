import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Tags = () => {
  const [tags, setTags] = useState<string[]>([
    "web development",
    "react",
    "typescript",
    "tailwind css",
    "bytecrew",
    "website design",
    "frontend development",
    "ui/ux design",
    "responsive design",
    "modern websites",
  ]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim().toLowerCase())) {
      setTags([...tags, newTag.trim().toLowerCase()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Keywords / Tags</h1>
        <p className="text-muted-foreground mb-8">
          Manage SEO keywords for the site. This page is not linked anywhere.
        </p>

        <div className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Add a new keyword..."
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={addTag} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-3 py-1.5 text-sm flex items-center gap-2 group"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>

        {tags.length === 0 && (
          <p className="text-muted-foreground text-center py-8">
            No keywords added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tags;
