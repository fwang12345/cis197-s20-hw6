import * as React from 'react'
import { useState } from 'react'
import s from 'styled-components'

import { IPost } from './types'
import { NewPostForm } from './NewPostForm'
import { minWidth, PHONE, M1 } from './constants'
import { Post } from './Post'

const Wrapper = s.div`
  width: 100%;
  padding: 1rem;

  ${minWidth(PHONE)} {
    padding: calc(1rem + 2.5%) calc(1rem + 20%);
  }
`

export const App = (): React.ReactElement => {
  const [posts, setPosts] = useState<IPost[]>([])
  return (
    <Wrapper>
      <h1 style={{ textAlign: 'center' }}>{'🎉 CIS 197 Community 🎉'}</h1>
      <NewPostForm onSubmit={newPost => setPosts([...posts, newPost])} />
      {posts.map(
        (post: IPost): React.ReactElement => (
          <Post depth={1} key={post.id} {...post} style={{ marginTop: M1 }} />
        ),
      )}
    </Wrapper>
  )
}
