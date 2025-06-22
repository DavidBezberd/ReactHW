import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UsersPage } from './pages/UsersPage.tsx'
import { PostsPage } from './pages/PostsPage.tsx'
import { CommentsPage } from './pages/CommentsPage.tsx'
import { ProductsPage } from './pages/ProductsPage.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
            <Route path={'products'} element={<ProductsPage/>}/>
        </Routes>
 </BrowserRouter>)
