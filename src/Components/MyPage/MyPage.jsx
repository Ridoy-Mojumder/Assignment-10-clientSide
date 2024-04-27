
import { Fade } from 'react-awesome-reveal';

const MyPage = () => {
  return (
    <div className="container">
      <Fade>
        <h1>Welcome to My Page</h1>
      </Fade>
      <div className="content">
        <Fade delay={500}>
          <p>This is some content on my page.</p>
        </Fade>
        <Fade delay={1000}>
          <p>More content here...</p>
        </Fade>
      </div>
    </div>
  );
};

export default MyPage;
