
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));
   if (todo.state === "loading") {
      return <div>loading...</div>
   }

   if(todo.state === "hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
   }
   if(todo.state == "hasError"){
    return(
      <div>Backend fetch failed</div>
    )
   }
   
  
}

export default App