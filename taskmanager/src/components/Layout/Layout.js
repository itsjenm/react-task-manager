import Styled from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <main className={Styled.container}>
        {children}
    </main>
  )
}

