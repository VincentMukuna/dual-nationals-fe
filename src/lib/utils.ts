import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPosInitials(name: string) {
  const lcName = name.toLowerCase()
  
  if(lcName==="goalkeeper"){
    return "GK"
  }

  if(lcName==="midfielder"){
    return "MF"
  }

  if(lcName==="defender"){
    return "DF"
  }

  if (lcName === "striker") {
    return "ST"
  }
  if (lcName.includes(" ")) {
    return name.split(" ").map(x=>x[0]).join("").toUpperCase()
  }
return name.split("-").map(x=>x[0]).join("").toUpperCase()
  
}
