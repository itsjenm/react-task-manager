import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import { Layout } from './components/Layout/Layout';
import { TaskList } from './components/TaskList/TaskList';
import { TaskForm } from './components/TaskForm/TaskForm';

function App() {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
}

export default App;
