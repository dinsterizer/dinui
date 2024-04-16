import { Input } from '@dinui/react/input'
import { Label } from '@dinui/react/label'

export default function InputWithText() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-wgray-500">Enter your email address.</p>
    </div>
  )
}
