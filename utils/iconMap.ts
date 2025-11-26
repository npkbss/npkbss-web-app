import * as Icons from "lucide-react";

export function getIcon(name: string) {
  return (Icons as any)[name] || Icons.Circle; 
}
