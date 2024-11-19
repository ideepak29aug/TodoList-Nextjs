'use client'; 
import Dashboard from './Dashboard/page'; // Corrected import for Dashboard
import { store } from './store/Store'; // Ensure the casing is correct for 'store'
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <div className='w-screen h-screen bg-slate-700 flex justify-center items-start'>
      <Dashboard />
      </div>
    </Provider>
  );
}
