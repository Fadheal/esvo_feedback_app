import { useEffect, useState } from 'react'
import Card from './dashboard-Card'
import { getFp } from '#/db/queries'
import type { FP } from '#/db/schema'
import { authClient } from '#/lib/auth-client'
import { Button } from './ui/button'

function timeAgo(isoString: Date): string {
  const past = new Date(isoString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [604800, "week"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) {
      return `${count} ${label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

function Heroes() {
  const { data: session } = authClient.useSession()

  const logout = async () => {
    await authClient.signOut()
  }

  const [fp, setFp] = useState<FP[]>([])

  useEffect(() => {
    getFp().then(setFp)
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex w-full justify-between items-center'>
        <h1 className='text-3xl'>Feedback Report</h1>
        {session && (
          <Button onClick={logout}>
            Sign Out
          </Button>
        )}
      </div>
      <div className='flex flex-wrap gap-2 pt-10'>
        {fp.map(feedbackPost => (
          <Card id={feedbackPost.id} text={feedbackPost.messages} time={timeAgo(feedbackPost.created_at)} expression={feedbackPost.reaction} />
        ))}
      </div>
    </div>
  )
}

export default Heroes