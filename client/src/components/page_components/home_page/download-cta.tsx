
import { Button } from "../../ui/moving-border";

export function DownloadCTA() {
  return (
    <div>
      <Button
        borderRadius="1.5rem"
        className=" cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700  text-white  border-white " 
      >
        Download Extension
      </Button>
    </div>
  );
}
