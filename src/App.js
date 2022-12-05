import PostCreated from './PostCreated';
import PostList from './PostList';

function App() {
  return (
    <div className='container'>
    <div className="app">
     <h1>
        Create Post
     </h1>
    <PostCreated/>
    <hr/>
    <h1>
      Posts
    </h1>
    <PostList/>
    </div>
    </div>
    
  );
}

export default App;
