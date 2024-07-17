import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function DevAvatar() {
  return (
    <Avatar className="h-36 w-36 mb-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"  />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}
