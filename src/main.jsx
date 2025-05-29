import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HooksApp } from './HooksApp.jsx';
import { CounterApp } from './01-useState/CounterApp.jsx';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx';
import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx';
import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx';
import { FocusScreen } from './04-useRef/FocusScreen.jsx';
import { Layout } from './05-useLayoutEffect/Layout.jsx';
import { Memorize } from './06-memos/Memorize.jsx';
import { MemorizeHook } from './06-memos/MemorizeHook.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
    {/* <CounterApp></CounterApp>*/}
    {/* <CounterWithCustomHook></CounterWithCustomHook> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <FormWithCustomHook></FormWithCustomHook> */}
    {/* <MultipleCustomHook></MultipleCustomHook> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <Layout></Layout> */}
    {/* <Memorize></Memorize> */}
    <MemorizeHook></MemorizeHook>
  </StrictMode>,
)
