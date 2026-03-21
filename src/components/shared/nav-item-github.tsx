import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export async function NavItemGitHub() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild>
          <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
            <Icons.github />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>Open GitHub profile</p>
      </TooltipContent>
    </Tooltip>
  );
}
