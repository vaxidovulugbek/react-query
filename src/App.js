import { QueryClientProvider, useQuery , QueryClient } from 'react-query';
import './App.css';
import Character from './components/Character';

const queryClient  = new QueryClient()

function App () {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Character />
      </QueryClientProvider>
    </div>
  );
}

export default App;
