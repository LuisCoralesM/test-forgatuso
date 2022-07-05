import "./App.css";
import Layout from "./Components/Layout";
import DataFetch from "./hooks/DataFetch";

function App() {

  return (
    <div>
      <Layout>
        <DataFetch/>
        
      </Layout>
    </div>
  );
}

export default App;
