import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
         <h3>Users</h3>

         <ul className='mt-8'>
          <li> <Link href="/dashborad/users/1">User 1</Link></li> 
          <li> <Link href="/dashborad/users/2">User 2</Link></li> 
          <li> <Link href="/dashborad/users/3">User 3</Link></li> 
          <li> <Link href="/dashborad/users/4">User 4</Link></li> 
         </ul>
    </div>
  )
}
