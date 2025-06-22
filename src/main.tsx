import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UsersPage } from './pages/UsersPage.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
            <Route path={'users'} element={<UsersPage/>}>
            <Route path={'posts'} element={<PostsComponent/>}>
            <Route path={'comments'} element={<CommentsComponent/>}>
            <Route path={'products'} element={<ProductsComponent/>}>

            </Route>
            </Route>
            </Route>
            </Route>
            </Route>
        </Routes>
 </BrowserRouter>)
