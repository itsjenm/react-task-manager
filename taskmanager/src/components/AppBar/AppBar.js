import { StatusFilter } from '../StatusFilter/StatusFilter';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import Styled from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={Styled.wrapper}>
        <section className={Styled.section}>
            <h2 className={Styled.title}>Tasks</h2>
            <TaskCounter />
        </section>
        <section className={Styled.section}>
            <h2 className={Styled.title}>Filter by status</h2>
            <StatusFilter />
        </section>
    </header>
  )
}
