import Button from '@dinui/react/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@dinui/react/card'
import { Input } from '@dinui/react/input'
import Label from '@dinui/react/label'
import Tabs from '@dinui/react/tabs'

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <Tabs.List className="grid w-full grid-cols-2">
        <Tabs.List.Trigger value="account">Account</Tabs.List.Trigger>
        <Tabs.List.Trigger value="password">Password</Tabs.List.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </Tabs.Content>

      <Tabs.Content value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </Tabs.Content>
    </Tabs>
  )
}