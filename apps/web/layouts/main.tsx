import { Header } from '@web/components/header'
import { Outlet } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

export function MainLayout() {
  return (
    <>
      <Head>
        <title>DinUI</title>
        <meta
          name="description"
          content="Untitled UI react components build on top of TailwindCSS"
        />
        <meta
          name="keywords"
          content="React, React UI Components, Untitled UI, Untitled UI React, React UI Kits"
        />
        <meta name="author" content="Din" />
      </Head>
      <div className="container">
        <div className="py-4">
          <Header />
        </div>
        <Outlet />
      </div>
    </>
  )
}

export function MainErrorBoundary() {
  return 'TODO: Main Error Boundary'
}
