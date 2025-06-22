import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { JsonUsersPage } from './pages/JsonUsersPage.tsx'
import { DummyUsersPage } from './pages/DummyUsersPage.tsx'
import { JsonPostsPage } from './pages/JsonPostsPage.tsx'
import { DummyPostsPage } from './pages/DummyPostsPage.tsx'
import { JsonCommentsPage } from './pages/JsonCommentsPage.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}/>
            <Route path={'/users/jsonplaceholder'} element={<JsonUsersPage/>}/>
            <Route path={'/users/dummyjson'} element={<DummyUsersPage/>}/>
            <Route path={'/posts/jsonplaceholder'} element={<JsonPostsPage/>}/>
            <Route path={'/posts/dummyjson'} element={<DummyPostsPage/>}/>
            <Route path={'/comments/jsonplaceholder'} element={<JsonCommentsPage/>}/>
        </Routes>
 </BrowserRouter>)
