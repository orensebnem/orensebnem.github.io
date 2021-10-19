import React from 'react'
import Link from 'next/link'

import { HomePageData } from '../data/pages/home'

type Props = {
  data: HomePageData
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
