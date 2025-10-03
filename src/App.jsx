import { useState } from 'react';
import CreateList from './components/CreateList';
import ListForm from './components/ListForm';

export default function App() {
  const [isToggled, setIsToggled] = useState(false)

  function handleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <>
      { isToggled ? <ListForm onClick={handleClick} /> : <CreateList onClick={handleClick} /> }
    </>
  );
}
