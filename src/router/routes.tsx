import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import { UsersComponent } from '../components/users-components/UsersComponent.tsx'
import { PostsComponent } from '../components/PostsComponent.tsx'

export const routes = createBrowserRouter([
    {
        path:'/', element: <App/>, children: [
          {path: 'users', element: <UsersComponent/>},
          {path: 'posts', element: <PostsComponent/>},
          {path: 'comments', element: <div>comments</div>},
          {path: 'products', element: <div>products</div>},
        ]
    }
])
